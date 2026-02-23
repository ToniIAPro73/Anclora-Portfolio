import { useCallback, useMemo, useState } from "react"
import { galleryImages } from "@/data/gallery-images"
import type { GalleryCategory, GalleryImage } from "@/types"

export const useGallery = (images: GalleryImage[] = galleryImages) => {
  const [selectedGalleryImage, setSelectedGalleryImage] = useState<number | null>(null)
  const [galleryCategory, setGalleryCategory] = useState<GalleryCategory>("all")

  const filteredImages = useMemo(
    () =>
      galleryCategory === "all"
        ? images
        : images.filter((image) => image.category === galleryCategory),
    [galleryCategory, images]
  )

  const openImage = useCallback((index: number) => {
    setSelectedGalleryImage(index)
  }, [])

  const closeImage = useCallback(() => {
    setSelectedGalleryImage(null)
  }, [])

  return {
    selectedGalleryImage,
    setSelectedGalleryImage,
    galleryCategory,
    setGalleryCategory,
    filteredImages,
    openImage,
    closeImage,
  }
}
