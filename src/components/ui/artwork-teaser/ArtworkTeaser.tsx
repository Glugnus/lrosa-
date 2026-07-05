import Link from "next/link";
import AtworkCard from "./ArtworkCard";
import { ArtworkSummary } from "@/interfaces/artwork";

export default function AtworkTeaser({
  artworks,
}: {
  artworks: ArtworkSummary[];
}) {
  return (
    <section className="py-24 px-6 lg:px-12 border-t border-zinc-900">
      <div className="container mx-auto">
        <div className="flex justify-between items-end mb-12">
          <h2 className="font-heading text-3xl md:text-5xl text-white font-bold uppercase">
            Œuvres phares
          </h2>
          <Link
            href="/galerie"
            className="hidden md:block border border-zinc-700 hover:border-white text-zinc-300 hover:text-white px-6 py-3 uppercase text-xs font-bold tracking-widest transition-all"
          >
            Voir la galerie complète
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AtworkCard artworks={artworks} />
        </div>
        <div className="mt-12 text-center md:hidden">
          <Link
            href="/galerie"
            className="inline-block border border-zinc-700 text-zinc-300 px-8 py-4 uppercase text-sm font-bold tracking-widest w-full"
          >
            Voir la galerie complète
          </Link>
        </div>
      </div>
    </section>
  );
}
