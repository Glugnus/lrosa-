import { LinkButton } from "@/components/ui/LinkButton";
import { ArtworkDetail } from "@/types/artwork";

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
              Cette pièce fait désormais partie d&apos;une collection privée. Je
              réalise également des créations personnalisées.
            </p>
            <LinkButton
              href={`/contact?sujet=Demande de collaboration artistique (Style ${artwork.title})`}
              variant="outline"
              className="mt-4"
            >
              Demander une création similaire
            </LinkButton>
          </>
        ) : (
          <>
            <h3 className="font-heading text-xl text-white uppercase font-bold">
              Intéressé par cette œuvre ?
            </h3>
            <p className="text-sm text-zinc-500">
              Chaque œuvre est unique et peinte à la main. N&apos;hésitez pas à
              me contacter pour en savoir plus.
            </p>
            <LinkButton
              href={`/contact?sujet=Intérêt pour : ${artwork.title}`}
              variant="primary"
              className="mt-4"
            >
              Me contacter
            </LinkButton>
          </>
        )}
      </div>
    </div>
  );
}
