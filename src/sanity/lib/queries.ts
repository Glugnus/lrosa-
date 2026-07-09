export const FAVORITES_QUERY = `
  *[_type == "artwork" && isFavorite == true][0...3] {
    _id,
    title,
    "slug": slug.current,
    "imageUrl": mainImage.asset->url
  }
`;

export const ALL_ARTWORKS_QUERY = `
  *[_type == "artwork"] | order(year desc) {
    _id,
    title,
    year,
    dimensions,
    "slug": slug.current,
    "imageUrl": mainImage.asset->url,
    "width": mainImage.asset->metadata.dimensions.width,
    "height": mainImage.asset->metadata.dimensions.height
  }
`;

export const ARTWORK_DETAIL_QUERY = `
  *[_type == "artwork" && slug.current == $slug][0] {
    _id,
    title,
    year,
    price,
    material,
    dimensions,
    description,
    isSold,
    "slug": slug.current,
    "imageUrl": mainImage.asset->url,
    "imageWidth": mainImage.asset->metadata.dimensions.width,
    "imageHeight": mainImage.asset->metadata.dimensions.height,
    "detailsUrls": details[].asset->url,
    "inContextUrl": inContextImage.asset->url
  }
`;
