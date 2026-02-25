import { NextResponse } from "next/server"
import { listConversionEvents, saveConversionEvent } from "@/lib/conversion-event-store"
import { consumeRateLimit } from "@/lib/rate-limit"
import { conversionEventSchema } from "@/lib/schemas/conversion-event"

const RATE_LIMIT_WINDOW_MS = 60_000
const RATE_LIMIT_MAX_REQUESTS = 60
const DEDUPE_WINDOW_MS = 2_000

const resolveClientIp = (request: Request) => {
  const forwardedFor = request.headers.get("x-forwarded-for")
  if (forwardedFor) {
    const [firstIp] = forwardedFor.split(",")
    return firstIp?.trim() || "unknown"
  }

  return request.headers.get("x-real-ip") || "unknown"
}

const classifyDevice = (userAgent: string) => {
  const normalized = userAgent.toLowerCase()
  if (!normalized) return "unknown"
  if (normalized.includes("ipad") || normalized.includes("tablet")) return "tablet"
  if (normalized.includes("mobi") || normalized.includes("android")) return "mobile"
  return "desktop"
}

export async function POST(request: Request) {
  const ipAddress = resolveClientIp(request)
  const userAgent = request.headers.get("user-agent") || ""

  const limiter = consumeRateLimit({
    key: `events:${ipAddress}`,
    limit: RATE_LIMIT_MAX_REQUESTS,
    windowMs: RATE_LIMIT_WINDOW_MS,
  })

  if (!limiter.allowed) {
    return NextResponse.json(
      {
        ok: false,
        error: "Too many tracking requests. Please retry in a minute.",
      },
      { status: 429 }
    )
  }

  try {
    const payload = await request.json()
    const parsed = conversionEventSchema.safeParse(payload)

    if (!parsed.success) {
      return NextResponse.json(
        {
          ok: false,
          error: "Invalid payload",
          issues: parsed.error.flatten(),
        },
        { status: 400 }
      )
    }

    const dedupe = consumeRateLimit({
      key: `events:dedupe:${ipAddress}:${parsed.data.sessionId}:${parsed.data.eventName}:${parsed.data.path}`,
      limit: 1,
      windowMs: DEDUPE_WINDOW_MS,
    })

    if (!dedupe.allowed) {
      return NextResponse.json(
        {
          ok: true,
          deduped: true,
        },
        { status: 202 }
      )
    }

    const event = await saveConversionEvent(
      {
        ...parsed.data,
        device: parsed.data.device === "unknown" ? classifyDevice(userAgent) : parsed.data.device,
      },
      ipAddress,
      userAgent
    )

    return NextResponse.json(
      {
        ok: true,
        event: {
          id: event.id,
          eventName: event.eventName,
          createdAt: event.createdAt,
        },
      },
      { status: 201 }
    )
  } catch (error) {
    console.error("POST /api/analytics/events failed", error)
    return NextResponse.json(
      {
        ok: false,
        error: "Unexpected server error",
      },
      { status: 500 }
    )
  }
}

export async function GET() {
  const events = await listConversionEvents()
  const totalsByEvent = events.reduce<Record<string, number>>((accumulator, event) => {
    accumulator[event.eventName] = (accumulator[event.eventName] || 0) + 1
    return accumulator
  }, {})

  const totalAttempts = totalsByEvent.contact_form_submit_attempt || 0
  const totalSuccess = totalsByEvent.contact_form_submit_success || 0
  const submitSuccessRate = totalAttempts === 0 ? 0 : Number(((totalSuccess / totalAttempts) * 100).toFixed(1))

  const totalsByChannel = events.reduce<Record<string, number>>((accumulator, event) => {
    const key = event.utmSource || "direct"
    accumulator[key] = (accumulator[key] || 0) + 1
    return accumulator
  }, {})

  const topChannels = Object.entries(totalsByChannel)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([channel, total]) => ({ channel, total }))

  return NextResponse.json({
    ok: true,
    total: events.length,
    totalsByEvent,
    submitSuccessRate,
    topChannels,
  })
}
