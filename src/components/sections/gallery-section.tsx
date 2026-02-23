import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { SectionHeading } from "@/components/sections/section-heading"
import type { Translations } from "@/data/translations"
import type { GalleryCategory, GalleryImage } from "@/types"

type GalleryText = Translations["es"]["gallery"]

type GallerySectionProps = {
  t: GalleryText
  galleryCategory: GalleryCategory
  setGalleryCategory: (value: GalleryCategory) => void
  filteredImages: GalleryImage[]
  selectedGalleryImage: number | null
  setSelectedGalleryImage: (value: number | null) => void
}

export function GallerySection({
  t,
  galleryCategory,
  setGalleryCategory,
  filteredImages,
  selectedGalleryImage,
  setSelectedGalleryImage,
}: GallerySectionProps) {
  return (
    <>
      <section id="gallery" className="ap-section ap-surface-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge={t.badge}
            title={t.title}
            titleAccent={t.titleAccent}
            subtitle={t.subtitle}
            subtitleClassName="mt-4 text-[#94A3B8] max-w-2xl mx-auto"
          />

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {(Object.entries(t.categories) as [GalleryCategory, string][]).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setGalleryCategory(key)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  galleryCategory === key
                    ? "bg-[#C5A059] text-[#0F172A]"
                    : "bg-[rgba(248,245,242,0.1)] text-[#94A3B8] hover:text-[#F8F5F2]"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <AnimatePresence>
              {filteredImages.map((image, index) => {
                const isFeatured = index === 0 || index === 5
                return (
                <motion.div
                  key={image.src}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className={`relative overflow-hidden rounded-xl cursor-pointer group ${
                    isFeatured
                      ? "col-span-2 row-span-2 min-h-[320px] sm:min-h-[380px]"
                      : "min-h-[200px] sm:min-h-[220px]"
                  }`}
                  onClick={() => setSelectedGalleryImage(index)}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-4 left-4">
                      <ExternalLink className="w-5 h-5 text-[#C5A059]" />
                    </div>
                  </div>
                </motion.div>
                )
              })}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <Dialog open={selectedGalleryImage !== null} onOpenChange={() => setSelectedGalleryImage(null)}>
        <DialogContent className="max-w-5xl w-full bg-[#0F172A] border-[rgba(197,160,89,0.2)]">
          <DialogHeader>
            <DialogTitle className="text-[#C5A059] font-serif">
              {selectedGalleryImage !== null && filteredImages[selectedGalleryImage]?.alt}
            </DialogTitle>
          </DialogHeader>
          {selectedGalleryImage !== null && (
            <div className="relative h-[70vh]">
              <Image
                src={filteredImages[selectedGalleryImage]?.src}
                alt={filteredImages[selectedGalleryImage]?.alt}
                fill
                sizes="90vw"
                className="w-full max-h-[70vh] object-contain rounded-lg"
              />
              <button
                onClick={() =>
                  setSelectedGalleryImage(
                    selectedGalleryImage > 0 ? selectedGalleryImage - 1 : filteredImages.length - 1
                  )
                }
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[rgba(15,23,42,0.8)] flex items-center justify-center text-[#C5A059] hover:bg-[#C5A059] hover:text-[#0F172A] transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={() =>
                  setSelectedGalleryImage(
                    selectedGalleryImage < filteredImages.length - 1 ? selectedGalleryImage + 1 : 0
                  )
                }
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[rgba(15,23,42,0.8)] flex items-center justify-center text-[#C5A059] hover:bg-[#C5A059] hover:text-[#0F172A] transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
