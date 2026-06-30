import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";

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
  title: "Amélie Pernet | Artiste Peintre",
  description:
    "Portfolio officiel des œuvres d'Amélie Pernet. Art moderne, pop art et street art.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${syne.variable}`}>
      <body className="bg-zinc-950 text-zinc-300 font-sans antialiased min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
