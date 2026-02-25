import path from "node:path"
import { afterEach, beforeEach, describe, expect, it } from "vitest"
import { GET, POST } from "@/app/api/analytics/events/route"
import { resetConversionEventStore } from "@/lib/conversion-event-store"
import { resetRateLimitStore } from "@/lib/rate-limit"

const TEST_EVENTS_FILE = path.join(process.cwd(), "db", "conversion-events.test.json")

const validPayload = {
  eventName: "hero_cta_primary_click" as const,
  sessionId: "session-123",
  lang: "es" as const,
  path: "/",
  device: "mobile" as const,
  utmSource: "linkedin",
  utmMedium: "social",
  utmCampaign: "spring-launch",
  referrer: "https://www.linkedin.com",
}

const createRequest = (payload: unknown, ip = "10.10.10.1") =>
  new Request("http://localhost/api/analytics/events", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-forwarded-for": ip,
      "user-agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X)",
    },
    body: JSON.stringify(payload),
  })

describe("api/analytics/events route", () => {
  beforeEach(async () => {
    process.env.ANCLORA_EVENTS_FILE_PATH = TEST_EVENTS_FILE
    resetRateLimitStore()
    await resetConversionEventStore()
  })

  afterEach(async () => {
    resetRateLimitStore()
    await resetConversionEventStore()
    delete process.env.ANCLORA_EVENTS_FILE_PATH
  })

  it("returns 201 on valid POST", async () => {
    const response = await POST(createRequest(validPayload))
    const body = (await response.json()) as { ok: boolean; event?: { id: string; eventName: string } }

    expect(response.status).toBe(201)
    expect(body.ok).toBe(true)
    expect(body.event?.id).toBeTruthy()
    expect(body.event?.eventName).toBe("hero_cta_primary_click")
  })

  it("returns 400 on invalid payload", async () => {
    const response = await POST(
      createRequest({
        ...validPayload,
        eventName: "unknown_event",
      })
    )
    const body = (await response.json()) as { ok: boolean; error: string }

    expect(response.status).toBe(400)
    expect(body.ok).toBe(false)
    expect(body.error).toBe("Invalid payload")
  })

  it("returns 202 for duplicate event window", async () => {
    const first = await POST(createRequest(validPayload, "20.20.20.1"))
    const duplicate = await POST(createRequest(validPayload, "20.20.20.1"))
    const duplicateBody = (await duplicate.json()) as { ok: boolean; deduped: boolean }

    expect(first.status).toBe(201)
    expect(duplicate.status).toBe(202)
    expect(duplicateBody.ok).toBe(true)
    expect(duplicateBody.deduped).toBe(true)
  })

  it("returns aggregate metrics on GET", async () => {
    await POST(
      createRequest({
        ...validPayload,
        eventName: "contact_form_submit_attempt",
      })
    )
    await POST(
      createRequest({
        ...validPayload,
        eventName: "contact_form_submit_success",
        sessionId: "session-234",
      })
    )
    await POST(
      createRequest({
        ...validPayload,
        eventName: "nav_contact_click",
        sessionId: "session-345",
        utmSource: "",
      })
    )

    const response = await GET()
    const body = (await response.json()) as {
      ok: boolean
      total: number
      totalsByEvent: Record<string, number>
      submitSuccessRate: number
      topChannels: Array<{ channel: string; total: number }>
    }

    expect(response.status).toBe(200)
    expect(body.ok).toBe(true)
    expect(body.total).toBe(3)
    expect(body.totalsByEvent.contact_form_submit_attempt).toBe(1)
    expect(body.totalsByEvent.contact_form_submit_success).toBe(1)
    expect(body.submitSuccessRate).toBe(100)
    expect(body.topChannels[0]?.channel).toBe("linkedin")
  })
})
