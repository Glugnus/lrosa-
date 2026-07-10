"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { sendContactEmail } from "@/actions/contact";

const contactSchema = z.object({
  nom: z.string().min(2, "Le nom est trop court"),
  email: z.string().email("Adresse email invalide"),
  sujet: z.string().min(5, "Le sujet est trop court"),
  message: z.string().min(10, "Le message doit faire au moins 10 caractères"),
});

export default function ContactForm() {
  const [isSuccess, setIsSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: z.infer<typeof contactSchema>) => {
    const result = await sendContactEmail(data);
    if (result.success) {
      setIsSuccess(true);
      reset(); // Vide le formulaire
    } else {
      alert("Erreur lors de l'envoi : " + result.error);
    }
  };

  if (isSuccess) {
    return (
      <div className="p-8 border border-zinc-800 bg-zinc-900 text-center">
        <h3 className="text-2xl font-heading text-white mb-4">
          Message envoyé !
        </h3>
        <p className="text-zinc-400">
          Merci pour votre message. Je vous recontacterai très prochainement.
        </p>
        <button
          onClick={() => setIsSuccess(false)}
          className="mt-6 text-rose-500 hover:text-rose-400 text-sm font-bold tracking-widest uppercase transition-colors"
        >
          Envoyer un autre message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <input
          {...register("nom")}
          placeholder="Votre nom et prénom"
          className="w-full bg-zinc-900 border border-zinc-700 p-4 text-white focus:border-white outline-none transition-all"
        />
        {errors.nom && (
          <p className="text-rose-500 text-xs mt-1">
            {errors.nom.message?.toString()}
          </p>
        )}
      </div>

      <div>
        <input
          {...register("email")}
          placeholder="Votre email"
          className="w-full bg-zinc-900 border border-zinc-700 p-4 text-white focus:border-white outline-none transition-all"
        />
        {errors.email && (
          <p className="text-rose-500 text-xs mt-1">
            {errors.email.message?.toString()}
          </p>
        )}
      </div>

      <div>
        <input
          {...register("sujet")}
          placeholder="Sujet de votre demande"
          className="w-full bg-zinc-900 border border-zinc-700 p-4 text-white focus:border-white outline-none transition-all"
        />
        {errors.sujet && (
          <p className="text-rose-500 text-xs mt-1">
            {errors.sujet.message?.toString()}
          </p>
        )}
      </div>

      <div>
        <textarea
          {...register("message")}
          placeholder="Votre message"
          rows={6}
          className="w-full bg-zinc-900 border border-zinc-700 p-4 text-white focus:border-white outline-none transition-all"
        />
        {errors.message && (
          <p className="text-rose-500 text-xs mt-1">
            {errors.message.message?.toString()}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-white text-zinc-950 font-bold py-4 uppercase tracking-widest hover:bg-zinc-200 transition-colors disabled:opacity-50"
      >
        {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
      </button>
    </form>
  );
}
