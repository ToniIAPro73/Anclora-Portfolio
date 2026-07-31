import { useState } from "react"
import Image from "next/image"
import { ArrowRight, ChevronDown, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Translations } from "@/data/translations"
import type { Language } from "@/types"

type NavText = Translations["es"]["nav"]

type TopNavProps = {
  lang: Language
  tNav: NavText
  onToggleLanguage: () => void
  onScrollToSection: (id: string) => void
  onTrackContactClick: () => void
}

export function TopNav({ lang, tNav, onToggleLanguage, onScrollToSection, onTrackContactClick }: TopNavProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleGoTo = (id: string) => {
    onScrollToSection(id)
    setMobileMenuOpen(false)
  }

  return (
    <nav
      aria-label={lang === "es" ? "Navegación principal" : "Main navigation"}
      className="fixed top-0 left-0 right-0 z-50 glass-dark border-b border-[rgba(248,245,242,0.12)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <button
            type="button"
            className="flex items-center gap-2 sm:gap-3 cursor-pointer min-w-0"
            onClick={() => handleGoTo("hero")}
          >
            <Image
              src="/logo-anclora-private-estates-exp.png"
              alt="Anclora Private Estates"
              width={2048}
              height={483}
              priority
              className="h-9 sm:h-10 w-auto object-contain"
            />
          </button>

          <div className="flex items-center gap-2 sm:gap-3">
            <div className="hidden xl:flex items-center gap-1 mr-2">
              {Object.entries(tNav)
                .filter(([key]) => key !== "contact")
                .map(([key, label]) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => handleGoTo(key)}
                    className="px-3 py-2 text-sm font-medium text-[#CBD5E1] hover:text-[#F8F5F2] transition-colors rounded-md hover:bg-[rgba(248,245,242,0.08)]"
                  >
                    {label}
                  </button>
                ))}
            </div>

            <button
              type="button"
              onClick={onToggleLanguage}
              aria-label={lang === "es" ? "Cambiar idioma (ES)" : "Change language (EN)"}
              className="hidden md:flex items-center gap-1.5 text-sm font-medium text-[#CBD5E1] hover:text-[#F8F5F2] transition-colors"
            >
              <Globe className="w-4 h-4" />
              <span className="hidden sm:inline">{lang.toUpperCase()}</span>
            </button>

            <Button
              onClick={() => {
                onTrackContactClick()
                handleGoTo("contact")
              }}
              className="hidden md:inline-flex bg-[#C5A059] hover:bg-[#A8893D] text-[#0F172A] font-medium"
            >
              {tNav.contact}
            </Button>

            <div className="relative xl:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen((value) => !value)}
                aria-expanded={mobileMenuOpen}
                aria-controls="main-navigation-menu"
                aria-label={lang === "es" ? "Abrir menú principal" : "Open main navigation"}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1E293B] text-[#F8F5F2] border border-[rgba(248,245,242,0.12)] hover:bg-[#334155] transition-colors"
              >
                <span className="text-sm font-medium">{lang === "es" ? "Menú" : "Menu"}</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileMenuOpen ? "rotate-180" : ""}`} />
              </button>

              {mobileMenuOpen && (
                <div
                  id="main-navigation-menu"
                  className="absolute right-0 mt-2 w-56 py-2 bg-[#0F172A] rounded-xl shadow-xl border border-[rgba(248,245,242,0.12)] overflow-hidden"
                >
                  {Object.entries(tNav)
                    .filter(([key]) => key !== "contact")
                    .map(([key, label]) => (
                      <button
                        key={key}
                        type="button"
                        onClick={() => handleGoTo(key)}
                        className="w-full text-left px-5 py-3 text-sm font-medium text-[#CBD5E1] hover:text-[#F8F5F2] hover:bg-[rgba(197,160,89,0.14)] transition-colors flex items-center justify-between group"
                      >
                        <span>{label}</span>
                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all text-[#C5A059]" />
                      </button>
                    ))}
                  <div className="mt-2 pt-2 border-t border-[rgba(248,245,242,0.12)]">
                    <button
                      type="button"
                      onClick={onToggleLanguage}
                      className="w-full text-left px-5 py-3 text-sm font-medium text-[#CBD5E1] hover:text-[#F8F5F2] hover:bg-[rgba(197,160,89,0.14)] transition-colors flex items-center gap-2"
                    >
                      <Globe className="w-4 h-4" />
                      <span>{lang === "es" ? "Idioma" : "Language"}: {lang.toUpperCase()}</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        onTrackContactClick()
                        handleGoTo("contact")
                      }}
                      className="w-full text-left px-5 py-3 text-sm font-semibold text-[#C5A059] hover:bg-[rgba(197,160,89,0.1)] transition-colors"
                    >
                      {tNav.contact}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
