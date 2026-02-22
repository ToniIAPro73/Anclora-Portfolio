export type Language = "es" | "en";
export type GalleryCategory =
  | "all"
  | "interiors"
  | "exteriors"
  | "lifestyle"
  | "details";

export interface LeadData {
  name: string;
  email: string;
  phone: string;
  budget: number;
  interest: string;
  message: string;
  timestamp: string;
}

export interface GalleryImage {
  src: string;
  category: GalleryCategory;
  alt: string;
}

export interface ResidenceUnit {
  id: string;
  floor: number;
  sqm: number;
  price: number;
  bedrooms: number;
  bathrooms: number;
  terrace: number;
  features: string[];
  image: string;
}

export interface InvestmentData {
  capitalAppreciation: number[];
  rentalYield: { label: string; value: number }[];
  marketBenchmark: { label: string; value: number }[];
}

export interface LocationHighlight {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  budget: number;
  interest: string;
  message: string;
}
