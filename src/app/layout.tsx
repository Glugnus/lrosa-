import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CookieBanner from "@/components/layout/CookieBanner";

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
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  ),
  title: {
    default: "Amélie Pernet | Artiste Peintre",
    template: "%s | Amélie Pernet",
  },
  description:
    "Portfolio officiel des œuvres d'Amélie Pernet. Art moderne, pop art et street art.",
  keywords: ["Artiste peintre", "Art moderne", "Pop art", "Street art"],
  authors: [{ name: "Amélie Pernet" }],
  creator: "Amélie Pernet",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Amélie Pernet",
    title: "Amélie Pernet | Artiste Peintre",
    description:
      "Portfolio officiel des œuvres d'Amélie Pernet. Art moderne, pop art et street art.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amélie Pernet | Artiste Peintre",
    description:
      "Portfolio officiel des œuvres d'Amélie Pernet. Art moderne, pop art et street art.",
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
        <CookieBanner />
      </body>
    </html>
  );
}
