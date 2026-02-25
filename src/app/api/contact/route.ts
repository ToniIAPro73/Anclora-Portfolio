import { NextResponse } from "next/server"
import { consumeRateLimit } from "@/lib/rate-limit"
import { contactSubmissionSchema } from "@/lib/schemas/contact"
import { listInquiries, saveInquiry } from "@/lib/inquiry-store"

const RATE_LIMIT_WINDOW_MS = 60_000
const RATE_LIMIT_MAX_REQUESTS = 8
const DEDUPE_WINDOW_MS = 15_000

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
    const parsed = contactSubmissionSchema.safeParse(payload)

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

    if (parsed.data.website.length > 0) {
      // Honeypot filled by bots: acknowledge without persisting.
      return NextResponse.json(
        {
          ok: true,
          accepted: false,
        },
        { status: 202 }
      )
    }

    const dedupe = consumeRateLimit({
      key: `contact:dedupe:${parsed.data.email}:${parsed.data.phone}:${parsed.data.interest}`,
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

    const inquiry = await saveInquiry(
      {
        name: parsed.data.name,
        email: parsed.data.email,
        phone: parsed.data.phone,
        budget: parsed.data.budget,
        interest: parsed.data.interest,
        message: parsed.data.message,
      },
      ipAddress
    )

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
