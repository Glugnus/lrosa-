import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CookieBanner from "@/components/layout/CookieBanner";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { SanityLive } from "@/sanity/lib/live";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://lrosa.fr",
  ),
  title: {
    default: "LROSA² | Artiste Peintre",
    template: "%s | LROSA²",
  },
  description:
    "Portfolio officiel des œuvres de LROSA². Art moderne, pop art et street art.",
  keywords: ["Artiste peintre", "Art moderne", "Pop art", "Street art"],
  authors: [{ name: "LROSA²" }],
  creator: "LROSA²",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "LROSA²",
    title: "LROSA² | Artiste Peintre",
    description:
      "Portfolio officiel des œuvres de LROSA². Art moderne, pop art et street art.",
    images: [
      {
        url: "/wall.jpg",
        width: 1200,
        height: 630,
        alt: "Aperçu du portfolio de LROSA²",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LROSA² | Artiste Peintre",
    description:
      "Portfolio officiel des œuvres de LROSA². Art moderne, pop art et street art.",
    images: ["/wall.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${syne.variable}`}>
      <body className="bg-zinc-950 text-zinc-300 font-sans antialiased min-h-screen flex flex-col">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <SanityLive />
        <CookieBanner />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
