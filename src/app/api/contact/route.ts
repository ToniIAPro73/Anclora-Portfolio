import { NextResponse } from "next/server"
import { consumeRateLimit } from "@/lib/rate-limit"
import { contactSchema } from "@/lib/schemas/contact"
import { listInquiries, saveInquiry } from "@/lib/inquiry-store"

const RATE_LIMIT_WINDOW_MS = 60_000
const RATE_LIMIT_MAX_REQUESTS = 8

const resolveClientIp = (request: Request) => {
  const forwardedFor = request.headers.get("x-forwarded-for")
  if (forwardedFor) {
    const [firstIp] = forwardedFor.split(",")
    return firstIp?.trim() || "unknown"
  }

  return request.headers.get("x-real-ip") || "unknown"
}

export async function POST(request: Request) {
  const ipAddress = resolveClientIp(request)
  const limiter = consumeRateLimit({
    key: `contact:${ipAddress}`,
    limit: RATE_LIMIT_MAX_REQUESTS,
    windowMs: RATE_LIMIT_WINDOW_MS,
  })

  if (!limiter.allowed) {
    return NextResponse.json(
      {
        ok: false,
        error: "Too many requests. Please retry in a minute.",
      },
      {
        status: 429,
        headers: {
          "Retry-After": String(Math.ceil((limiter.resetAt - Date.now()) / 1000)),
        },
      }
    )
  }

  try {
    const payload = await request.json()
    const parsed = contactSchema.safeParse(payload)

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

    const inquiry = await saveInquiry(parsed.data, ipAddress)

    return NextResponse.json(
      {
        ok: true,
        inquiry: {
          id: inquiry.id,
          createdAt: inquiry.createdAt,
        },
      },
      { status: 201 }
    )
  } catch (error) {
    console.error("POST /api/contact failed", error)
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
  const inquiries = await listInquiries()
  return NextResponse.json({
    ok: true,
    total: inquiries.length,
  })
}
