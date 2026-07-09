import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions Légales | Amélie",
  description: "Mentions légales du portfolio de l'artiste Amélie.",
};

export default function MentionsLegales() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20 text-zinc-300">
      <h1 className="text-4xl font-heading font-bold text-white uppercase mb-12">
        Mentions Légales
      </h1>

      <div className="space-y-8">
        <section>
          <h2 className="text-xl font-bold text-white mb-4">
            1. Éditeur du site
          </h2>
          <p>
            Ce site est un portfolio artistique personnel, non professionnel,
            édité à des fins de présentation des créations de l&apos;artiste
            sous le pseudonyme de <strong>LROSA²</strong>.
          </p>
          <p className="mt-2">
            Conformément à l&apos;article 6-III-2 de la Loi n° 2004-575 du 21
            juin 2004 pour la confiance dans l&apos;économie numérique (LCEN),
            l&apos;éditeur a choisi de préserver son anonymat. Les informations
            d&apos;identification personnelle ont été transmises en toute
            confidentialité à l&apos;hébergeur du site.
          </p>
          <p className="mt-2">Contact : contact@lrosa2.com</p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-white mb-4">2. Hébergement</h2>
          <p>
            Ce site est hébergé par <strong>Vercel Inc.</strong>
            <br />
            340 S Lemon Ave #4133
            <br />
            Walnut, CA 91789, États-Unis
            <br />
            Site web : https://vercel.com
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-4">
            3. Propriété intellectuelle
          </h2>
          <p>
            L&apos;ensemble de ce site relève de la législation française et
            internationale sur le droit d&apos;auteur et la propriété
            intellectuelle. Tous les droits de reproduction sont réservés, y
            compris pour les documents téléchargeables et les représentations
            iconographiques et photographiques.
          </p>
          <p className="mt-2">
            Toute reproduction, représentation, modification, publication,
            adaptation de tout ou partie des éléments du site, quel que soit le
            moyen ou le procédé utilisé, est interdite, sauf autorisation écrite
            préalable de l&apos;artiste <strong>LROSA²</strong>.
          </p>
        </section>
      </div>
    </div>
  );
}
