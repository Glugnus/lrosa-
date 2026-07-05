import { defineField, defineType } from "sanity";

export const artwork = defineType({
  name: "artwork",
  title: "Œuvres",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Titre de l'œuvre",
      type: "string",
      validation: (rule) => rule.required().error("Le titre est obligatoire"),
    }),
    defineField({
      name: "slug",
      title: "Lien de la page (URL)",
      type: "slug",
      options: {
        source: "title", // Génère l'URL automatiquement d'après le titre
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "mainImage",
      title: "Image principale (Main Image)",
      description:
        "La photo principale qui sera affichée sur la galerie et en premier sur la page produit.",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (rule) =>
        rule.required().error("Une image principale est requise."),
    }),
    defineField({
      name: "details",
      title: "Photos de détails (Close-up)",
      description:
        "Ajoutez jusqu'à 4 photos zoomées pour montrer la texture, les détails ou la signature.",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
      validation: (rule) =>
        rule
          .max(4)
          .error("Vous ne pouvez pas mettre plus de 4 photos de détails."),
    }),
    defineField({
      name: "inContextImage",
      title: "Image en situation (In Context Image)",
      description:
        "Photo du tableau mis en situation dans une pièce (salon, bureau...) pour donner une idée de l'échelle.",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "material",
      title: "Matériel utilisé / Technique",
      description: "Ex: Huile sur toile, Acrylique, Gouache...",
      type: "string",
    }),
    defineField({
      name: "dimensions",
      title: "Dimensions (ex: 100x80 cm)",
      type: "string",
    }),
    defineField({
      name: "year",
      title: "Année de création",
      type: "number",
    }),
    defineField({
      name: "description",
      title: "Description / Histoire de l'œuvre",
      type: "text",
    }),
    defineField({
      name: "price",
      title: "Prix (€)",
      type: "number",
      description: "Laissez vide si le prix n'est pas public",
    }),
    defineField({
      name: "isSold",
      title: "Tableau vendu ?",
      type: "boolean",
      initialValue: false, // Par défaut, la case ne sera pas cochée
    }),
    defineField({
      name: "isFavorite",
      title: "Tableau favoris ?",
      description:
        "Les tableaux favoris seront affichés sur la page d'acceuil !",
      type: "boolean",
      initialValue: false, // Par défaut, la case ne sera pas cochée
    }),
  ],
});
