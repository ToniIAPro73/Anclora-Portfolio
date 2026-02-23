import { useCallback, useEffect, useState } from "react"
import type { Language } from "@/types"

const resolveInitialLanguage = (): Language => {
  if (typeof window === "undefined") return "es"

  const saved = localStorage.getItem("anclora_language")
  if (saved === "es" || saved === "en") return saved

  return navigator.language.startsWith("en") ? "en" : "es"
}

export const useLanguage = () => {
  const [lang, setLang] = useState<Language>(resolveInitialLanguage)

  useEffect(() => {
    localStorage.setItem("anclora_language", lang)
  }, [lang])

  const toggleLanguage = useCallback(() => {
    setLang((previous) => (previous === "es" ? "en" : "es"))
  }, [])

  return {
    lang,
    setLang,
    toggleLanguage,
  }
}
