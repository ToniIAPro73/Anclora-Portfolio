import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/sections/section-heading"
import type { ResidenceUnit } from "@/types"

type ResidencesText = {
  badge: string
  title: string
  titleAccent: string
  subtitle: string
  units: Record<string, { name: string; desc: string }>
  sqm: string
  bedrooms: string
  bathrooms: string
  terrace: string
  floor: string
  from: string
  requestInfo: string
  [key: string]: unknown
}

type ResidencesSectionProps = {
  t: ResidencesText
  units: ResidenceUnit[]
  selectedUnit: ResidenceUnit
  onSelectUnit: (unit: ResidenceUnit) => void
  formatPrice: (price: number) => string
  onRequestInfo: () => void
}

export function ResidencesSection({
  t,
  units,
  selectedUnit,
  onSelectUnit,
  formatPrice,
  onRequestInfo,
}: ResidencesSectionProps) {
  return (
    <section id="residences" className="ap-section ap-surface-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={t.badge}
          title={t.title}
          titleAccent={t.titleAccent}
          subtitle={t.subtitle}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            {units.map((unit) => (
              <motion.button
                key={unit.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                onClick={() => onSelectUnit(unit)}
                className={`w-full text-left p-6 rounded-xl border transition-all ${
                  selectedUnit.id === unit.id
                    ? "bg-[#0F172A] text-[#F8F5F2] border-[#C5A059]"
                    : "bg-[#FAF9F6] border-[rgba(15,23,42,0.05)] hover:border-[#C5A059]"
                }`}
              >
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3
                      className={`font-serif text-xl font-semibold ${
                        selectedUnit.id === unit.id ? "text-[#F8F5F2]" : "text-[#0F172A]"
                      }`}
                    >
                      {t.units[unit.id]?.name ?? unit.id}
                    </h3>
                    <p
                      className={`text-sm ${
                        selectedUnit.id === unit.id ? "text-[#94A3B8]" : "text-[#64748B]"
                      }`}
                    >
                      {t.units[unit.id]?.desc ?? ""}
                    </p>
                  </div>
                  <span className="text-xl font-serif font-semibold text-[#C5A059]">
                    {formatPrice(unit.price)}
                  </span>
                </div>
                <div className="flex flex-wrap gap-4 text-sm">
                  <span className={selectedUnit.id === unit.id ? "text-[#94A3B8]" : "text-[#64748B]"}>
                    {unit.sqm} {t.sqm}
                  </span>
                  <span className={selectedUnit.id === unit.id ? "text-[#94A3B8]" : "text-[#64748B]"}>
                    {unit.bedrooms} {t.bedrooms}
                  </span>
                  <span className={selectedUnit.id === unit.id ? "text-[#94A3B8]" : "text-[#64748B]"}>
                    {unit.bathrooms} {t.bathrooms}
                  </span>
                </div>
              </motion.button>
            ))}
          </div>

          <motion.div
            key={selectedUnit.id}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-[#FAF9F6] rounded-2xl border border-[rgba(15,23,42,0.05)] overflow-hidden"
          >
            <div className="relative h-64 lg:h-80">
              <Image
                src={selectedUnit.image}
                alt={t.units[selectedUnit.id]?.name ?? selectedUnit.id}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="inline-block px-3 py-1 rounded-full bg-[#C5A059] text-[#0F172A] text-sm font-medium">
                  {t.floor} {selectedUnit.floor}
                </span>
              </div>
            </div>

            <div className="p-6">
              <div className="flex justify-between items-end mb-6">
                <div>
                  <h3 className="font-serif text-2xl font-semibold">
                    {t.units[selectedUnit.id]?.name ?? selectedUnit.id}
                  </h3>
                  <p className="text-[#64748B] mt-1">{t.units[selectedUnit.id]?.desc ?? ""}</p>
                </div>
                <div className="text-right">
                  <span className="text-sm text-[#64748B]">{t.from}</span>
                  <p className="text-2xl font-serif font-semibold text-[#C5A059]">
                    {formatPrice(selectedUnit.price)}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-4 bg-[#F8F5F2] rounded-lg">
                  <span className="text-sm text-[#64748B]">{t.sqm}</span>
                  <p className="text-xl font-semibold">{selectedUnit.sqm}</p>
                </div>
                <div className="p-4 bg-[#F8F5F2] rounded-lg">
                  <span className="text-sm text-[#64748B]">{t.terrace}</span>
                  <p className="text-xl font-semibold">
                    {selectedUnit.terrace} {t.sqm}
                  </p>
                </div>
                <div className="p-4 bg-[#F8F5F2] rounded-lg">
                  <span className="text-sm text-[#64748B]">{t.bedrooms}</span>
                  <p className="text-xl font-semibold">{selectedUnit.bedrooms}</p>
                </div>
                <div className="p-4 bg-[#F8F5F2] rounded-lg">
                  <span className="text-sm text-[#64748B]">{t.bathrooms}</span>
                  <p className="text-xl font-semibold">{selectedUnit.bathrooms}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {selectedUnit.features.map((feature) => {
                  const featureLabel = t[feature]
                  return (
                    <span
                      key={feature}
                      className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[rgba(197,160,89,0.1)] text-[#C5A059] text-sm"
                    >
                      <CheckCircle2 className="w-3 h-3" />
                      {typeof featureLabel === "string" ? featureLabel : feature}
                    </span>
                  )
                })}
              </div>

              <Button
                onClick={onRequestInfo}
                className="w-full bg-[#C5A059] hover:bg-[#A8893D] text-[#0F172A] font-medium"
              >
                {t.requestInfo}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
