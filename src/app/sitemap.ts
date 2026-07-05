import { MetadataRoute } from 'next';
import { client } from "@/sanity/lib/client";
import { ALL_ARTWORKS_QUERY } from "@/sanity/lib/queries";
import { ArtworkSummary } from "@/interfaces/artwork";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

  // Fetch all artworks to generate dynamic routes
  const artworks = await client.fetch<ArtworkSummary[]>(ALL_ARTWORKS_QUERY);

  const artworkUrls: MetadataRoute.Sitemap = artworks.map((artwork) => ({
    url: `${baseUrl}/galerie/${artwork.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/a-propos`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/galerie`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ];

  return [...staticRoutes, ...artworkUrls];
}
