import { useState, useCallback, useEffect } from "react";
import { Language } from "@/types";

export const useLanguage = () => {
  // Load saved language on mount
  const getInitialLanguage = (): Language => {
    if (typeof window === "undefined") return "es";
    const savedLang = localStorage.getItem("anclora_language");
    if (savedLang && (savedLang === "es" || savedLang === "en")) {
      return savedLang as Language;
    } else {
      // Detect browser language
      const browserLang = navigator.language;
      return browserLang.startsWith("en") ? "en" : "es";
    }
  };

  const [language, setLanguage] = useState<Language>(getInitialLanguage);

  useEffect(() => {
    // Save language preference
    localStorage.setItem("anclora_language", language);
  }, [language]);

  // Save language preference
  const changeLanguage = useCallback((lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("anclora_language", lang);
  }, []);

  return {
    language,
    changeLanguage,
  };
};
