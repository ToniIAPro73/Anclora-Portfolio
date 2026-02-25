import Image from "next/image"
import { ArrowRight, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Translations } from "@/data/translations"

type HeroText = Translations["es"]["hero"]

type HeroSectionProps = {
  t: HeroText
  onScrollToSection: (id: string) => void
}

export function HeroSection({ t, onScrollToSection }: HeroSectionProps) {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/hero-daylight.jpg"
          alt="Anclora Private Estates"
          fill
          priority
          sizes="100vw"
          quality={45}
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[rgba(15,23,42,0.5)] via-[rgba(15,23,42,0.4)] to-[rgba(15,23,42,0.7)]" />

      <div
        className="absolute inset-0 z-10"
        style={{ background: "radial-gradient(ellipse at center, transparent 0%, rgba(15,23,42,0.3) 100%)" }}
      />

      <div className="relative z-20 max-w-5xl mx-auto px-4 text-center pt-20">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-semibold leading-tight tracking-tight text-white drop-shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
          {t.title}
          <br />
          <span className="text-[#C5A059] drop-shadow-[0_2px_10px_rgba(197,160,89,0.3)]">{t.titleAccent}</span>
        </h1>

        <p className="mt-8 text-lg sm:text-xl text-[rgba(248,245,242,0.9)] max-w-2xl mx-auto leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
          {t.subtitle}
        </p>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            onClick={() => onScrollToSection("residences")}
            className="bg-[#C5A059] hover:bg-[#D4B77A] text-[#0F172A] px-8 py-6 text-lg font-semibold shadow-[0_4px_30px_rgba(197,160,89,0.4)] transition-all hover:shadow-[0_6px_40px_rgba(197,160,89,0.5)]"
          >
            {t.cta}
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => onScrollToSection("contact")}
            className="border-2 border-[rgba(248,245,242,0.6)] text-[#F8F5F2] hover:bg-[rgba(248,245,242,0.1)] hover:border-[#F8F5F2] px-8 py-6 text-lg font-medium backdrop-blur-sm bg-[rgba(15,23,42,0.3)] transition-all"
          >
            {t.ctaSecondary}
          </Button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
        <button
          type="button"
          onClick={() => onScrollToSection("investment")}
          aria-label={t.scrollText}
          className="flex flex-col items-center gap-2 text-[rgba(248,245,242,0.7)] hover:text-[#F8F5F2] transition-colors"
        >
          <span className="text-sm font-medium text-[rgba(248,245,242,0.7)]">{t.scrollText}</span>
          <ChevronDown className="w-5 h-5 animate-bounce text-[#C5A059]" />
        </button>
      </div>
    </section>
  )
}
