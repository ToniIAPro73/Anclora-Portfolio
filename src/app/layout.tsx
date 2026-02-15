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
  authors: [{ name: "Andratx Azure Residencies" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Andratx Azure Residencies",
    description: "The Zenith of Mediterranean Living",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${cormorantGaramond.variable} ${montserrat.variable} ${allura.variable} ${inter.variable} antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
