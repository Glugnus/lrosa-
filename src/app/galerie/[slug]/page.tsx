import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { client } from "@/sanity/lib/client";
import { ArtworkDetail } from "@/interfaces/artwork";
import { notFound } from "next/navigation";
import { ARTWORK_DETAIL_QUERY } from "@/sanity/lib/queries";
import ArtworkImages from "@/components/gallery/ArtworkImages";
import ArtworkInfo from "@/components/gallery/ArtworkInfo";
import { Metadata, ResolvingMetadata } from "next";

export async function generateMetadata(
  { params }: { params: { slug: string } },
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const resolvedParams = await params;
  const artwork = await client.fetch<ArtworkDetail>(ARTWORK_DETAIL_QUERY, {
    slug: resolvedParams.slug,
  });

  if (!artwork) {
    return {
      title: "Œuvre introuvable",
    };
  }

  const previousImages = (await parent).openGraph?.images || [];

  const ogImage = artwork.imageUrl || "";

  return {
    title: artwork.title,
    description:
      artwork.description || `Découvrez l'œuvre ${artwork.title} de LROSA².`,
    openGraph: {
      title: artwork.title,
      description:
        artwork.description || `Découvrez l'œuvre ${artwork.title} de LROSA².`,
      images: ogImage ? [ogImage, ...previousImages] : previousImages,
    },
    twitter: {
      card: "summary_large_image",
      title: artwork.title,
      description:
        artwork.description || `Découvrez l'œuvre ${artwork.title} de LROSA².`,
      images: ogImage ? [ogImage] : [],
    },
  };
}
export default async function DetailOeuvre({
  params,
}: {
  params: { slug: string };
}) {
  const resolvedParams = await params;
  const artwork = await client.fetch<ArtworkDetail>(ARTWORK_DETAIL_QUERY, {
    slug: resolvedParams.slug,
  });

  if (!artwork) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-300">
      <div className="container mx-auto px-6 lg:px-12 py-12">
        <Link
          href="/galerie"
          className="inline-flex items-center gap-2 text-zinc-500 hover:text-white transition-colors mb-12 uppercase text-xs font-bold tracking-widest"
        >
          <ArrowLeft className="w-4 h-4" />
          Retour à la collection
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          <ArtworkImages artwork={artwork} />
          <ArtworkInfo artwork={artwork} />
        </div>
      </div>
    </div>
  );
}
