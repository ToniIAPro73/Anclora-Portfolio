import { useCallback } from "react"

export const useSectionNavigation = () => {
  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const stickyHeaderOffset = 96
      const elementPosition = element.getBoundingClientRect().top + window.scrollY
      const targetPosition = Math.max(0, elementPosition - stickyHeaderOffset)

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      })
    }
  }, [])

  return {
    scrollToSection,
  }
}
