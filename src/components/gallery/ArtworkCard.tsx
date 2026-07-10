import { ArtworkSummary } from "@/types/artwork";
import Image from "next/image";
import Link from "next/link";

export default function AtworkCard({
  artworks,
}: {
  artworks: ArtworkSummary[];
}) {
  return (
    <>
      {artworks.map((artwork) => (
        <Link
          key={artwork._id}
          href={`/galerie/${artwork.slug}`}
          className="group block relative border border-zinc-800 bg-zinc-900 overflow-hidden"
        >
          <div className="relative aspect-4/5 w-full overflow-hidden">
            <Image
              src={artwork.imageUrl}
              alt={artwork.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>
          <div className="p-6 border-t border-zinc-800 bg-zinc-950 flex justify-between items-center transition-colors group-hover:bg-zinc-900">
            <h3 className="font-heading text-xl text-white uppercase font-bold">
              {artwork.title}
            </h3>
            <span
              className={`text-zinc-500 text-sm font-medium group-hover:text-rose-500 transition-colors`}
            >
              Découvrir
            </span>
          </div>
        </Link>
      ))}
    </>
  );
}
