import * as z from "zod";

export const contactSchema = z.object({
  nom: z.string().min(2, "Le nom est trop court"),
  email: z.string().email("Adresse email invalide"),
  sujet: z.string().min(5, "Le sujet est trop court"),
  message: z.string().min(10, "Le message doit faire au moins 10 caractères"),
});

export type ContactFormData = z.infer<typeof contactSchema>;
