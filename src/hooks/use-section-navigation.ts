import { useCallback } from "react"

const HEADER_OFFSET = 96
const MIN_SECTION_GAP = 24

export const useSectionNavigation = () => {
  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id)
    if (!element) return

    // Account for the section's own top padding so its content lands
    // just below the fixed header instead of a full padding-block away.
    const paddingTop = parseFloat(window.getComputedStyle(element).paddingTop) || 0
    const elementPosition = element.getBoundingClientRect().top + window.scrollY
    const targetPosition = Math.max(0, elementPosition + Math.max(0, paddingTop - MIN_SECTION_GAP) - HEADER_OFFSET)

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    })
  }, [])

  return {
    scrollToSection,
  }
}
