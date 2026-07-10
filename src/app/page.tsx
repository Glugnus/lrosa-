import { sanityFetch } from "@/sanity/lib/live";
import HeroSection from "@/components/home/HeroSection";
import AboutTeaser from "@/components/home/AboutTeaser";
import { FAVORITES_QUERY } from "@/sanity/lib/queries";
import { Metadata } from "next";
import { ArtworkSummary } from "@/types/artwork";
import ArtworkTeaser from "@/components/home/ArtworkTeaser";

export const metadata: Metadata = {
  title: "Accueil | LROSA²",
  description:
    "Découvrez l'univers de LROSA², artiste peintre. Art moderne, pop art, street art et objets détournés.",
};
export default async function Home() {
  const { data: favoritesArtworks } = (await sanityFetch({
    query: FAVORITES_QUERY,
  })) as { data: ArtworkSummary[] };

  return (
    <div className="flex flex-col">
      <HeroSection />
      <AboutTeaser />
      <ArtworkTeaser artworks={favoritesArtworks} />
    </div>
  );
}
