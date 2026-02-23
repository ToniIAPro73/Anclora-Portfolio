import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
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
}

export function TopNav({ lang, tNav, onToggleLanguage, onScrollToSection }: TopNavProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleGoTo = (id: string) => {
    onScrollToSection(id)
    setMobileMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-[rgba(15,23,42,0.05)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <motion.div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => handleGoTo("hero")}
            whileHover={{ scale: 1.02 }}
          >
            <Image src="/logo.png" alt="Anclora Private Estates" width={40} height={40} className="w-10 h-10 object-contain" />
            <div>
              <span className="font-serif text-xl font-semibold tracking-tight">Anclora</span>
              <span className="font-script text-[#C5A059] text-base ml-1">Private Estates</span>
            </div>
          </motion.div>

          <div className="flex items-center gap-3">
            <button
              onClick={onToggleLanguage}
              aria-label={lang === "es" ? "Cambiar idioma" : "Change language"}
              className="flex items-center gap-1.5 text-sm font-medium text-[#64748B] hover:text-[#0F172A] transition-colors"
            >
              <Globe className="w-4 h-4" />
              <span className="hidden sm:inline">{lang.toUpperCase()}</span>
            </button>

            <Button
              onClick={() => handleGoTo("contact")}
              className="bg-[#C5A059] hover:bg-[#A8893D] text-[#0F172A] font-medium"
            >
              {tNav.contact}
            </Button>

            <div className="relative">
              <button
                onClick={() => setMobileMenuOpen((value) => !value)}
                aria-expanded={mobileMenuOpen}
                aria-controls="main-navigation-menu"
                aria-label={lang === "es" ? "Abrir menú principal" : "Open main navigation"}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0F172A] text-[#F8F5F2] hover:bg-[#1E293B] transition-colors"
              >
                <span className="text-sm font-medium">{lang === "es" ? "Menú" : "Menu"}</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileMenuOpen ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {mobileMenuOpen && (
                  <motion.div
                    id="main-navigation-menu"
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-56 py-2 bg-[#FAF9F6] rounded-xl shadow-xl border border-[rgba(15,23,42,0.08)] overflow-hidden"
                  >
                    {Object.entries(tNav)
                      .filter(([key]) => key !== "contact")
                      .map(([key, label], index) => (
                        <motion.button
                          key={key}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          onClick={() => handleGoTo(key)}
                          className="w-full text-left px-5 py-3 text-sm font-medium text-[#64748B] hover:text-[#0F172A] hover:bg-[rgba(197,160,89,0.08)] transition-colors flex items-center justify-between group"
                        >
                          <span>{label}</span>
                          <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all text-[#C5A059]" />
                        </motion.button>
                      ))}
                    <div className="mt-2 pt-2 border-t border-[rgba(15,23,42,0.05)]">
                      <button
                        onClick={() => handleGoTo("contact")}
                        className="w-full text-left px-5 py-3 text-sm font-semibold text-[#C5A059] hover:bg-[rgba(197,160,89,0.1)] transition-colors"
                      >
                        {tNav.contact}
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
