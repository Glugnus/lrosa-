import type { Metadata } from "next";

export const siteMetadata: Metadata = {
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

export const siteConfig = {
  links: {
    instagram: "https://www.instagram.com/lrosa2_artiste?igsh=d3hrNjdsemR1dWF5",
  },
};
