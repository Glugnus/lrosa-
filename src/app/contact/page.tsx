import ContactForm from "@/components/forms/ContactForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez Amélie Pernet pour toute question, commande sur-mesure ou demande de collaboration.",
};
export default function ContactPage({
  searchParams,
}: {
  searchParams: { sujet?: string };
}) {
  return (
    <div className="min-h-screen bg-zinc-950 py-24">
      <div className="container mx-auto px-6 lg:px-12 max-w-2xl">
        <h1 className="font-heading text-4xl md:text-6xl text-white font-bold uppercase mb-8">
          Contact
        </h1>
        <p className="text-zinc-400 mb-12">
          Vous avez une question sur une œuvre, une commande sur-mesure ou une
          demande de collaboration ? Écrivez-nous, Amélie vous répondra
          rapidement.
        </p>

        <ContactForm />
      </div>
    </div>
  );
}
