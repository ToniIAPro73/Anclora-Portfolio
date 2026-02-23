import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat, Allura, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const allura = Allura({
  variable: "--font-allura",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Anclora Private Estates | The Zenith of Mediterranean Living",
  description: "Ultra-luxury residences in Port d'Andratx, Mallorca. A limited collection of sophisticated homes offering unparalleled Mediterranean living and exceptional investment potential.",
  keywords: ["luxury real estate", "Mallorca", "Port d'Andratx", "Mediterranean", "investment property", "ultra-luxury"],
  authors: [{ name: "Anclora Private Estates" }],
  creator: "Anclora Group",
  metadataBase: new URL("https://anclora-estates.com"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Anclora Private Estates | The Zenith of Mediterranean Living",
    description: "Blueprint portfolio project for premium real estate digital experience by Anclora Group.",
    type: "website",
    url: "https://anclora-estates.com",
    siteName: "Anclora Private Estates",
    images: [
      {
        url: "/images/hero/hero-daylight.jpg",
        width: 1920,
        height: 1080,
        alt: "Anclora Private Estates",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anclora Private Estates",
    description: "Blueprint project showcasing premium digital execution for luxury real estate.",
    images: ["/images/hero/hero-daylight.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Anclora Private Estates",
    url: "https://anclora-estates.com",
    logo: "https://anclora-estates.com/logo.png",
    parentOrganization: {
      "@type": "Organization",
      name: "Anclora Group",
    },
    areaServed: "Mallorca, Spain",
  };

  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: "Anclora Private Estates Blueprint Project",
    creator: "Anclora Group",
    inLanguage: ["es", "en"],
    description:
      "Portfolio blueprint project demonstrating premium digital design and engineering for luxury real estate.",
  };

  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${cormorantGaramond.variable} ${montserrat.variable} ${allura.variable} ${inter.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
        />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
