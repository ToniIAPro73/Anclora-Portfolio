import { useMemo } from "react"
import type { Translations } from "@/data/translations"

type FaqText = Translations["es"]["faqs"]

export const useFaqItems = (faqs: FaqText) => {
  const items = useMemo(
    () =>
      [1, 2, 3, 4, 5].map((num) => ({
        question: faqs[`q${num}` as keyof FaqText] as string,
        answer: faqs[`a${num}` as keyof FaqText] as string,
      })),
    [faqs]
  )

  return {
    items,
  }
}
