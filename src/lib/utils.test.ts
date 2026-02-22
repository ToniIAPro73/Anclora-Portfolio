import { describe, expect, it } from "vitest"
import { cn, cnFlags, cnResponsive, cnTheme } from "@/lib/utils"

describe("utils class helpers", () => {
  it("merges and deduplicates tailwind classes", () => {
    expect(cn("px-2 py-1", "px-4")).toBe("py-1 px-4")
  })

  it("builds dark mode classes with cnTheme", () => {
    expect(
      cnTheme({
        base: "rounded-md",
        light: "bg-white text-black",
        dark: "bg-zinc-950 text-white",
      })
    ).toContain("dark:bg-zinc-950")
  })

  it("builds responsive classes", () => {
    expect(cnResponsive("md", "grid-cols-2", "gap-4")).toContain("md:grid-cols-2")
  })

  it("builds class list from boolean flags", () => {
    expect(cnFlags({ hidden: false, block: true, "text-sm": true })).toBe("block text-sm")
  })
})
