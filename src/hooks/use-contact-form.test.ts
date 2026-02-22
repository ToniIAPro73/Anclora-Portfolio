import { act, renderHook } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { useContactForm } from "@/hooks/use-contact-form"

describe("useContactForm", () => {
  it("validates required fields", () => {
    const { result } = renderHook(() => useContactForm())

    expect(result.current.validateForm()).toBe(false)

    act(() => {
      result.current.updateField("name", "Anclora")
      result.current.updateField("email", "brand@anclora.com")
      result.current.updateField("phone", "+34 600 000 000")
    })

    expect(result.current.validateForm()).toBe(true)
  })

  it("resets success state", () => {
    const { result } = renderHook(() => useContactForm())

    act(() => {
      result.current.resetForm()
    })

    expect(result.current.isSuccess).toBe(false)
    expect(result.current.formData.name).toBe("")
  })
})
