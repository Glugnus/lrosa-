import { LinkButton } from "@/components/ui/LinkButton";
import { ArtworkSummary } from "@/types/artwork";
import ArtworkCard from "../gallery/ArtworkCard";

export default function ArtworkTeaser({
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
          <LinkButton
            href="/galerie"
            variant="outline"
            className="hidden md:inline-block"
          >
            Voir la galerie complète
          </LinkButton>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ArtworkCard artworks={artworks} />
        </div>
        <div className="mt-12 text-center md:hidden">
          <LinkButton
            href="/galerie"
            variant="outline"
            className="w-full"
          >
            Voir la galerie complète
          </LinkButton>
        </div>
      </div>
    </section>
  );
}
