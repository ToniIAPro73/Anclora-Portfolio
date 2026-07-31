export const SECTION_ORDER = [
  "hero",
  "blueprint",
  "storytelling",
  "investment",
  "features",
  "gallery",
  "residences",
  "location",
  "faqs",
  "contact",
] as const

export type SectionId = (typeof SECTION_ORDER)[number]
