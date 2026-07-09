import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ArtworkNotFound() {
  return (
    <div className="min-h-[70vh] bg-zinc-950 text-zinc-300 flex items-center justify-center">
      <div className="container mx-auto px-6 lg:px-12 py-12 text-center flex flex-col items-center">
        <h2 className="text-4xl lg:text-5xl font-bold font-syne text-white mb-6">
          Œuvre introuvable
        </h2>
        <p className="text-zinc-400 max-w-lg mb-10 text-lg">
          Désolé, l&apos;œuvre que vous recherchez n&apos;existe pas ou a été
          retirée de la galerie.
        </p>
        <Link
          href="/galerie"
          className="inline-flex items-center gap-2 text-white border border-zinc-800 hover:bg-zinc-800 transition-colors px-6 py-3 rounded-full uppercase text-xs font-bold tracking-widest"
        >
          <ArrowLeft className="w-4 h-4" />
          Retour à la galerie
        </Link>
      </div>
    </div>
  );
}
