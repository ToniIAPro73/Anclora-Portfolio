import path from "node:path"
import { afterEach, beforeEach, describe, expect, it } from "vitest"
import { GET, POST } from "@/app/api/contact/route"
import { resetInquiryStore } from "@/lib/inquiry-store"
import { resetRateLimitStore } from "@/lib/rate-limit"

const TEST_INQUIRIES_FILE = path.join(process.cwd(), "db", "inquiries.test.json")

const validPayload = {
  name: "Marina Costa",
  email: "marina@example.com",
  phone: "+34 600 123 456",
  budget: 5500000,
  interest: "investment" as const,
  message: "Interested in a private consultation.",
}

const createRequest = (payload: unknown, ip = "10.0.0.1") =>
  new Request("http://localhost/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-forwarded-for": ip,
    },
    body: JSON.stringify(payload),
  })

describe("api/contact route", () => {
  beforeEach(async () => {
    process.env.ANCLORA_INQUIRIES_FILE_PATH = TEST_INQUIRIES_FILE
    resetRateLimitStore()
    await resetInquiryStore()
  })

  afterEach(async () => {
    resetRateLimitStore()
    await resetInquiryStore()
    delete process.env.ANCLORA_INQUIRIES_FILE_PATH
  })

  it("returns 201 on valid POST", async () => {
    const response = await POST(createRequest(validPayload))
    const body = (await response.json()) as { ok: boolean; inquiry?: { id: string; createdAt: string } }

    expect(response.status).toBe(201)
    expect(body.ok).toBe(true)
    expect(body.inquiry?.id).toBeTruthy()
    expect(body.inquiry?.createdAt).toBeTruthy()
  })

  it("returns 400 on invalid payload", async () => {
    const response = await POST(
      createRequest({
        ...validPayload,
        email: "invalid-email",
      })
    )
    const body = (await response.json()) as { ok: boolean; error: string }

    expect(response.status).toBe(400)
    expect(body.ok).toBe(false)
    expect(body.error).toBe("Invalid payload")
  })

  it("returns 429 after rate limit is exceeded", async () => {
    for (let index = 0; index < 8; index += 1) {
      const response = await POST(createRequest(validPayload, "20.0.0.1"))
      expect(response.status).toBe(201)
    }

    const blockedResponse = await POST(createRequest(validPayload, "20.0.0.1"))
    const body = (await blockedResponse.json()) as { ok: boolean; error: string }

    expect(blockedResponse.status).toBe(429)
    expect(body.ok).toBe(false)
    expect(body.error).toContain("Too many requests")
  })

  it("returns total inquiries on GET", async () => {
    await POST(createRequest(validPayload, "30.0.0.1"))
    await POST(
      createRequest(
        {
          ...validPayload,
          email: "another@example.com",
        },
        "31.0.0.1"
      )
    )

    const response = await GET()
    const body = (await response.json()) as { ok: boolean; total: number }

    expect(response.status).toBe(200)
    expect(body.ok).toBe(true)
    expect(body.total).toBe(2)
  })
})
