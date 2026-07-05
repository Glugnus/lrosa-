import Link from "next/link";
import { ArtworkDetail } from "@/interfaces/artwork";

interface ArtworkInfoProps {
  artwork: ArtworkDetail;
}

export default function ArtworkInfo({ artwork }: ArtworkInfoProps) {
  return (
    <div className="flex flex-col pt-4 lg:pt-12 ">
      <h1 className="font-heading text-5xl md:text-7xl font-bold text-white uppercase mb-4">
        {artwork.title}
      </h1>

      <p className="text-rose-500 font-medium tracking-widest uppercase text-sm mb-12">
        {artwork.material || "Technique non précisée"} — {artwork.year || ""}
      </p>

      <div className="space-y-6 text-lg leading-relaxed text-zinc-400 border-l border-zinc-800 pl-6 mb-12">
        {artwork.description && <p>{artwork.description}</p>}
        {artwork.dimensions && (
          <p className="text-sm text-zinc-500 font-mono">
            Dimensions : {artwork.dimensions}
          </p>
        )}
      </div>

      <div className="bg-zinc-900 border border-zinc-800 p-8 flex flex-col gap-4">
        {artwork.isSold ? (
          <>
            <h3 className="font-heading text-xl text-zinc-400 uppercase font-bold">
              Œuvre acquise
            </h3>
            <p className="text-sm text-zinc-600">
              Cette pièce fait désormais partie d&apos;une collection privée.
              Amélie réalise également des toiles sur-mesure.
            </p>
            <Link
              href={`/contact?sujet=Demande de création sur-mesure (Style ${artwork.title})`}
              className="inline-block mt-4 border border-zinc-700 text-zinc-300 hover:text-white hover:border-white px-8 py-4 uppercase text-sm font-bold tracking-widest text-center transition-colors"
            >
              Demander une création similaire
            </Link>
          </>
        ) : (
          <>
            <h3 className="font-heading text-xl text-white uppercase font-bold">
              Acquérir cette œuvre
            </h3>
            {artwork.price && (
              <p className="text-2xl text-white font-mono">{artwork.price} €</p>
            )}
            <p className="text-sm text-zinc-500">
              Chaque modèle est unique et peint à la main. Contactez
              l&apos;artiste pour réserver cette pièce.
            </p>
            <Link
              href={`/contact?sujet=Intérêt pour : ${artwork.title}`}
              className="inline-block mt-4 bg-white text-zinc-950 hover:bg-zinc-200 px-8 py-4 uppercase text-sm font-bold tracking-widest text-center transition-colors"
            >
              Contacter l&apos;artiste
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
