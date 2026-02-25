import { motion } from "framer-motion"
import { Mail, MessageSquareText, Newspaper } from "lucide-react"
import { SectionHeading } from "@/components/sections/section-heading"
import type { Translations } from "@/data/translations"

type StorytellingText = Translations["es"]["storytelling"]

export function StorytellingSection({ t }: { t: StorytellingText }) {
  const pillars = Object.values(t.pillars)

  return (
    <section id="storytelling" className="ap-section ap-surface-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={t.badge}
          title={t.title}
          titleAccent={t.titleAccent}
          subtitle={t.subtitle}
          subtitleClassName="mt-4 text-[#475569] max-w-3xl mx-auto"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {pillars.map((pillar, index) => (
            <motion.article
              key={pillar.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="rounded-2xl border border-[rgba(15,23,42,0.08)] bg-[#FAF9F6] p-6"
            >
              <h3 className="text-xl font-serif font-semibold text-[#0F172A]">{pillar.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#334155]">{pillar.desc}</p>
            </motion.article>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {[
            { icon: Newspaper, label: "LinkedIn", text: t.channels.linkedin },
            { icon: Mail, label: "Cold Email", text: t.channels.coldEmail },
            { icon: MessageSquareText, label: "Social", text: t.channels.social },
          ].map((channel, index) => (
            <motion.article
              key={channel.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.12 + index * 0.08 }}
              className="rounded-2xl border border-[rgba(197,160,89,0.35)] bg-[rgba(197,160,89,0.08)] p-5"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[rgba(197,160,89,0.2)] text-[#8A6A2F]">
                <channel.icon className="h-5 w-5" />
              </div>
              <p className="mt-3 text-sm font-semibold text-[#0F172A]">{channel.label}</p>
              <p className="mt-2 text-sm leading-relaxed text-[#334155]">{channel.text}</p>
            </motion.article>
          ))}
        </div>

        <p className="mt-6 text-sm text-[#475569] text-center">{t.note}</p>
      </div>
    </section>
  )
}
