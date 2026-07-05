import { client } from "@/sanity/lib/client";
import HeroSection from "@/components/ui/HeroSection";
import AboutTeaser from "@/components/ui/AboutTeaser";
import AtworkTeaser from "@/components/ui/artwork-teaser/ArtworkTeaser";
import { ArtworkSummary } from "@/interfaces/artwork";
import { FAVORITES_QUERY } from "@/sanity/lib/queries";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accueil | Amélie Pernet",
  description:
    "Découvrez l'univers d'Amélie Pernet, artiste peintre. Art moderne, pop art, street art et objets détournés.",
};
export default async function Home() {
  const favoritesArtworks =
    await client.fetch<ArtworkSummary[]>(FAVORITES_QUERY);

  return (
    <div className="flex flex-col">
      <HeroSection />
      <AboutTeaser />
      <AtworkTeaser artworks={favoritesArtworks} />
    </div>
  );
}
