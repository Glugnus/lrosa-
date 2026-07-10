import Image from "next/image";
import Link from "next/link";
import { ArtworkSummary } from "@/types/artwork";

export default function GalleryGrid({
  artworks,
}: {
  artworks: ArtworkSummary[];
}) {
  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
      {artworks.map((artwork) => (
        <div key={artwork._id} className="break-inside-avoid">
          <Link
            href={`/galerie/${artwork.slug}`}
            className="group relative block overflow-hidden bg-zinc-900 border border-zinc-800"
          >
            <Image
              src={artwork.imageUrl}
              alt={`Peinture : ${artwork.title}`}
              width={artwork.width}
              height={artwork.height}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
            />

            <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
              <h2 className="font-heading text-2xl text-white font-bold uppercase translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                {artwork.title}
              </h2>
              <p className="text-rose-500 text-sm font-medium tracking-widest uppercase mt-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                {artwork.dimensions}
              </p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
