"use server";

import { Resend } from "resend";
import * as z from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const contactSchema = z.object({
  nom: z.string().min(2),
  email: z.string().email(),
  sujet: z.string().min(5),
  message: z.string().min(10),
});

export async function sendContactEmail(
  formData: z.infer<typeof contactSchema>,
) {
  try {
    const validatedData = contactSchema.parse(formData);

    const { data, error } = await resend.emails.send({
      from: "Contact Portfolio <contact@lrosa.fr>",
      to: ["larosa.amelie@gmail.com"],
      replyTo: validatedData.email,
      subject: `Nouveau message de ${validatedData.nom} : ${validatedData.sujet}`,
      text: `Nom: ${validatedData.nom}\nEmail: ${validatedData.email}\nSujet: ${validatedData.sujet}\nMessage:\n${validatedData.message}`,
    });

    if (error) {
      console.error("Erreur Resend:", error);
      return { success: false, error: "Erreur lors de l'envoi de l'email." };
    }

    return { success: true };
  } catch (error) {
    console.error("Erreur Serveur:", error);
    return { success: false, error: "Une erreur inattendue s'est produite." };
  }
}
