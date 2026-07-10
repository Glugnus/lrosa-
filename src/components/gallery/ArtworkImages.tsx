import { ArtworkDetail } from "@/types/artwork";
import SingleImage from "./SingleImage";
import ArtworkCaroussel from "./ArtworkCaroussel";

interface ArtworkImagesProps {
  artwork: ArtworkDetail;
}

export default function ArtworkImages({ artwork }: ArtworkImagesProps) {
  const allImages = [
    artwork.imageUrl,
    ...(artwork.detailsUrls || []),
    artwork.inContextUrl,
  ].filter(Boolean) as string[];

  if (allImages.length === 1) {
    return <SingleImage src={allImages[0]} title={artwork.title} />;
  }

  return <ArtworkCaroussel images={allImages} title={artwork.title} />;
}
