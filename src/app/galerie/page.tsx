import GalleryGrid from "@/components/gallery/GalleryGrid";
import { ArtworkSummary } from "@/interfaces/artwork";
import { client } from "@/sanity/lib/client";
import { ALL_ARTWORKS_QUERY } from "@/sanity/lib/queries";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Galerie",
  description:
    "Explorez la collection complète des œuvres originales d'Amélie Pernet : tableaux pop art, toiles contemporaines et objets d'art.",
};
export default async function Galerie() {
  const artworks = await client.fetch<ArtworkSummary[]>(ALL_ARTWORKS_QUERY);

  return (
    <main className="min-h-screen bg-zinc-950 py-24">
      <div className="container mx-auto px-6 lg:px-12">
        <header className="mb-16 border-b border-zinc-800 pb-8">
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-white uppercase mb-4">
            Collection
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl">
            Découvrez l&apos;ensemble des œuvres originales d&apos;Amélie
            Pernet. Une exploration vibrante entre pop art, influences urbaines
            et objets détournés.
          </p>
        </header>
        <GalleryGrid artworks={artworks} />
      </div>
    </main>
  );
}
