"use server";

import { Resend } from "resend";
import { contactSchema, type ContactFormData } from "@/schemas/contact";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(formData: ContactFormData) {
  try {
    const validatedData = contactSchema.parse(formData);

    const { error } = await resend.emails.send({
      from: "Contact Portfolio <contact@lrosa.fr>",
      to: [process.env.CONTACT_EMAIL as string],
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
