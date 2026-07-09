import { sanityFetch } from "@/sanity/lib/live";
import HeroSection from "@/components/ui/HeroSection";
import AboutTeaser from "@/components/ui/AboutTeaser";
import AtworkTeaser from "@/components/ui/artwork-teaser/ArtworkTeaser";
import { FAVORITES_QUERY } from "@/sanity/lib/queries";
import { Metadata } from "next";
import { ArtworkSummary } from "@/interfaces/artwork";

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
      <AtworkTeaser artworks={favoritesArtworks} />
    </div>
  );
}
