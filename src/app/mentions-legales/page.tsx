import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions Légales | Amélie Pernet",
  description: "Mentions légales du portfolio de l'artiste Amélie Pernet.",
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
            Le présent site est édité par <strong>Amélie Pernet</strong>,
            artiste peintre (ou statut auto-entrepreneur/Maison des Artistes si
            applicable).
            <br />
            Siège social : [Adresse d&apos;Amélie, Code Postal, Ville]
            <br />
            Email : [Email de contact officiel, ex: contact@ameliepernet.fr]
            <br />
            Téléphone : [Numéro de téléphone - optionnel mais recommandé]
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-4">
            2. Directeur de la publication
          </h2>
          <p>Le directeur de la publication est Amélie Pernet.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-4">
            3. Création et développement
          </h2>
          <p>
            Conception, design et développement web : [Ton Prénom et Nom]
            <br />
            Contact : [Ton email de développeur ou lien vers ton
            profil/portfolio]
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-4">4. Hébergement</h2>
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
            5. Propriété intellectuelle
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
            préalable de l&apos;artiste Amélie Pernet.
          </p>
        </section>
      </div>
    </div>
  );
}
