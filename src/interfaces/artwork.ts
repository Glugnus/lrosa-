export interface ArtworkDetail {
  _id: string;
  title: string;
  slug: string;
  imageUrl: string;
  detailsUrls?: string[];
  inContextUrl?: string;
  material?: string;
  dimensions?: string;
  year?: number;
  description?: string;
  price?: number;
  isSold: boolean;
}
export interface ArtworkSummary {
  _id: string;
  title: string;
  material?: string;
  width: number;
  height: number;
  slug: string;
  imageUrl: string;
}
