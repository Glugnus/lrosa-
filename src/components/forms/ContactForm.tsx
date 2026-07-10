"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { sendContactEmail } from "@/actions/contact";
import { contactSchema, type ContactFormData } from "@/schemas/contact";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";
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

  const onSubmit = async (data: ContactFormData) => {
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
        <Input
          {...register("nom")}
          placeholder="Votre nom et prénom"
        />
        {errors.nom && (
          <p className="text-rose-500 text-xs mt-1">
            {errors.nom.message?.toString()}
          </p>
        )}
      </div>

      <div>
        <Input
          {...register("email")}
          placeholder="Votre email"
        />
        {errors.email && (
          <p className="text-rose-500 text-xs mt-1">
            {errors.email.message?.toString()}
          </p>
        )}
      </div>

      <div>
        <Input
          {...register("sujet")}
          placeholder="Sujet de votre demande"
        />
        {errors.sujet && (
          <p className="text-rose-500 text-xs mt-1">
            {errors.sujet.message?.toString()}
          </p>
        )}
      </div>

      <div>
        <Textarea
          {...register("message")}
          placeholder="Votre message"
          rows={6}
        />
        {errors.message && (
          <p className="text-rose-500 text-xs mt-1">
            {errors.message.message?.toString()}
          </p>
        )}
      </div>

      <Button type="submit" isLoading={isSubmitting}>
        Envoyer le message
      </Button>
    </form>
  );
}
