import { motion } from "framer-motion"
import Image from "next/image"
import { Anchor, Compass, MapPinned, Wine } from "lucide-react"
import { SectionHeading } from "@/components/sections/section-heading"
import type { Translations } from "@/data/translations"

type LocationText = Translations["es"]["location"]

export function LocationSection({ t }: { t: LocationText }) {
  return (
    <section id="location" className="ap-section ap-surface-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={t.badge}
          title={t.title}
          titleAccent={t.titleAccent}
          subtitle={t.subtitle}
          subtitleClassName="mt-4 text-[#94A3B8] max-w-2xl mx-auto"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-96 lg:h-full min-h-[400px] rounded-2xl overflow-hidden"
          >
            <Image
              src="/images/location/aerial.png"
              alt="Port d'Andratx"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-transparent to-transparent" />

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="relative"
              >
                <div className="w-8 h-8 rounded-full bg-[#C5A059] flex items-center justify-center animate-pulse" />
                <div className="absolute inset-0 w-8 h-8 rounded-full bg-[#C5A059] animate-ping opacity-30" />
              </motion.div>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Anchor, title: t.highlights.marina, desc: t.highlights.marinaDesc },
              { icon: Wine, title: t.highlights.restaurants, desc: t.highlights.restaurantsDesc },
              { icon: Compass, title: t.highlights.beach, desc: t.highlights.beachDesc },
              { icon: MapPinned, title: t.highlights.airport, desc: t.highlights.airportDesc },
            ].map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-[#1E293B] rounded-xl border border-[rgba(197,160,89,0.1)]"
              >
                <highlight.icon className="w-8 h-8 text-[#C5A059] mb-4" />
                <h3 className="font-semibold mb-2">{highlight.title}</h3>
                <p className="text-sm text-[#94A3B8]">{highlight.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
