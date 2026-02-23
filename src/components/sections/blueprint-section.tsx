import { motion } from "framer-motion"
import { BadgeCheck, Gauge, Layers3, Palette } from "lucide-react"
import { SectionHeading } from "@/components/sections/section-heading"
import type { Translations } from "@/data/translations"

type BlueprintText = Translations["es"]["blueprint"]

const pillarIcons = [Layers3, Gauge, BadgeCheck, Palette]

export function BlueprintSection({ t }: { t: BlueprintText }) {
  const pillars = Object.values(t.pillars)

  return (
    <section id="blueprint" className="ap-section ap-surface-gold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={t.badge}
          title={t.title}
          titleAccent={t.titleAccent}
          subtitle={t.subtitle}
          subtitleClassName="mt-4 text-[#475569] max-w-3xl mx-auto"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {pillars.map((pillar, index) => {
            const Icon = pillarIcons[index]
            return (
              <motion.article
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="rounded-2xl border border-[rgba(15,23,42,0.08)] bg-[rgba(248,245,242,0.65)] p-6 backdrop-blur-sm"
              >
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-[rgba(197,160,89,0.15)] text-[#8A6A2F]">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-[#0F172A]">{pillar.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#334155]">{pillar.desc}</p>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
