import Image from "next/image"
import Link from "next/link"
import type { Language } from "@/types"
import type { Translations } from "@/data/translations"

type FooterText = Translations["es"]["footer"]

export function FooterSection({ t, lang }: { t: FooterText; lang: Language }) {
  const currentYear = new Date().getFullYear()
  const rightsText = t.rights.replace(/\b\d{4}\b/, String(currentYear))

  return (
    <footer className="bg-[#0F172A] text-[#F8F5F2] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/anclora-private-estates-exp.png"
                alt="Anclora Private Estates"
                width={2048}
                height={483}
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="text-[#94A3B8] max-w-md">{t.tagline}</p>
            <p className="mt-3 text-xs leading-relaxed text-[#94A3B8] max-w-xl">
              {t.portfolioDisclaimer}
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{lang === "es" ? "Contacto" : "Contact"}</h3>
            <div className="space-y-2 text-sm text-[#94A3B8]">
              <p>{t.address}</p>
              <p>
                {t.city}, {t.postcode}
              </p>
              <p>{t.phone}</p>
              <p>hola@anclora.com</p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <div className="space-y-2 text-sm">
              <Link href="/terms" className="block text-[#94A3B8] hover:text-[#C5A059] transition-colors">
                {t.terms}
              </Link>
              <Link href="/legal" className="block text-[#94A3B8] hover:text-[#C5A059] transition-colors">
                {t.legal}
              </Link>
              <Link href="/privacy" className="block text-[#94A3B8] hover:text-[#C5A059] transition-colors">
                {t.privacy}
              </Link>
              <Link href="/cookies" className="block text-[#94A3B8] hover:text-[#C5A059] transition-colors">
                {t.cookies}
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[rgba(248,245,242,0.1)] text-center text-sm text-[#94A3B8]">
          <p>{rightsText}</p>
          <p className="mt-2 text-xs">{t.brandStatement}</p>
        </div>
      </div>
    </footer>
  )
}
