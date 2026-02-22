import { useState, useCallback } from "react";
import { GalleryImage, GalleryCategory } from "@/types";
import { galleryImages } from "@/data/gallery";

export const useGallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [category, setCategory] = useState<GalleryCategory>("all");

  const filteredImages =
    category === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === category);

  const openImage = useCallback((index: number) => {
    setSelectedImage(index);
  }, []);

  const closeImage = useCallback(() => {
    setSelectedImage(null);
  }, []);

  const nextImage = useCallback(() => {
    if (selectedImage === null) return;
    const newIndex =
      selectedImage < filteredImages.length - 1 ? selectedImage + 1 : 0;
    setSelectedImage(newIndex);
  }, [selectedImage, filteredImages.length]);

  const prevImage = useCallback(() => {
    if (selectedImage === null) return;
    const newIndex =
      selectedImage > 0 ? selectedImage - 1 : filteredImages.length - 1;
    setSelectedImage(newIndex);
  }, [selectedImage, filteredImages.length]);

  const getCategoryLabel = (category: GalleryCategory) => {
    const labels = {
      all: "Todas",
      interiors: "Interiores",
      exteriors: "Exteriores",
      lifestyle: "Lifestyle",
      details: "Detalles",
    };
    return labels[category];
  };

  return {
    selectedImage,
    category,
    filteredImages,
    openImage,
    closeImage,
    nextImage,
    prevImage,
    setCategory,
    getCategoryLabel,
  };
};
