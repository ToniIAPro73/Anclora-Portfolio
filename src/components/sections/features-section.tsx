import { motion } from "framer-motion"
import {
  CheckCircle2,
  Dumbbell,
  Film,
  Home,
  Lock,
  Shield,
  Sparkles,
  Thermometer,
  TreePine,
  Volume2,
  Waves,
  Wind,
  Wine,
} from "lucide-react"
import { SectionHeading } from "@/components/sections/section-heading"
import type { Translations } from "@/data/translations"
import type { Language } from "@/types"

type FeaturesText = Translations["es"]["features"]

export function FeaturesSection({ t, lang }: { t: FeaturesText; lang: Language }) {
  return (
    <section id="features" className="ap-section ap-surface-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading badge={t.badge} title={t.title} titleAccent={t.titleAccent} subtitle={t.subtitle} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <h3 className="font-serif text-xl font-semibold mb-6 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#C5A059]" />
              {t.categories.smart}
            </h3>
            <div className="space-y-4">
              {[
                { icon: Home, title: t.smartHome.title, desc: t.smartHome.desc },
                { icon: Thermometer, title: t.smartClimate.title, desc: t.smartClimate.desc },
                { icon: Lock, title: t.smartLock.title, desc: t.smartLock.desc },
                { icon: Volume2, title: t.audioSystem.title, desc: t.audioSystem.desc },
                { icon: Wind, title: t.airPurification.title, desc: t.airPurification.desc },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4 p-4 bg-[#F8F5F2] rounded-xl border border-[rgba(15,23,42,0.05)] hover:border-[#C5A059] transition-colors group"
                >
                  <div className="w-12 h-12 rounded-lg bg-[rgba(197,160,89,0.1)] flex items-center justify-center flex-shrink-0 group-hover:bg-[#C5A059] transition-colors">
                    <feature.icon className="w-5 h-5 text-[#C5A059] group-hover:text-[#0F172A] transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-semibold">{feature.title}</h4>
                    <p className="text-sm text-[#64748B] mt-1">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-1">
            <h3 className="font-serif text-xl font-semibold mb-6 flex items-center gap-2">
              <Dumbbell className="w-5 h-5 text-[#C5A059]" />
              {t.categories.wellness}
            </h3>
            <div className="space-y-4">
              {[
                { icon: Waves, title: t.infinityPool.title, desc: t.infinityPool.desc },
                { icon: TreePine, title: t.spa.title, desc: t.spa.desc },
                { icon: Wine, title: t.wineCellar.title, desc: t.wineCellar.desc },
                { icon: Dumbbell, title: t.gym.title, desc: t.gym.desc },
                { icon: Film, title: t.cinema.title, desc: t.cinema.desc },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                  className="flex gap-4 p-4 bg-[#F8F5F2] rounded-xl border border-[rgba(15,23,42,0.05)] hover:border-[#C5A059] transition-colors group"
                >
                  <div className="w-12 h-12 rounded-lg bg-[rgba(197,160,89,0.1)] flex items-center justify-center flex-shrink-0 group-hover:bg-[#C5A059] transition-colors">
                    <feature.icon className="w-5 h-5 text-[#C5A059] group-hover:text-[#0F172A] transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-semibold">{feature.title}</h4>
                    <p className="text-sm text-[#64748B] mt-1">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-1">
            <h3 className="font-serif text-xl font-semibold mb-6 flex items-center gap-2">
              <Shield className="w-5 h-5 text-[#C5A059]" />
              {t.categories.security}
            </h3>
            <div className="space-y-4">
              {[t.security24].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.4 }}
                  className="flex gap-4 p-4 bg-[#F8F5F2] rounded-xl border border-[rgba(15,23,42,0.05)] hover:border-[#C5A059] transition-colors group"
                >
                  <div className="w-12 h-12 rounded-lg bg-[rgba(197,160,89,0.1)] flex items-center justify-center flex-shrink-0 group-hover:bg-[#C5A059] transition-colors">
                    <Shield className="w-5 h-5 text-[#C5A059] group-hover:text-[#0F172A] transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-semibold">{feature.title}</h4>
                    <p className="text-sm text-[#64748B] mt-1">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative h-64 rounded-xl overflow-hidden"
              >
                <img src="/images/amenities/security.png" alt="Security" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-2 text-white">
                    <CheckCircle2 className="w-5 h-5 text-[#C5A059]" />
                    <span className="text-sm font-medium">
                      {lang === "es" ? "Protegido 24/7" : "Protected 24/7"}
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
