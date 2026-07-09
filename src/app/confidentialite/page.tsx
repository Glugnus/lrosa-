import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de Confidentialité | LROSA²",
  description: "Politique de gestion des données personnelles.",
};

export default function Confidentialite() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20 text-zinc-300">
      <h1 className="text-4xl font-heading font-bold text-white uppercase mb-12">
        Politique de Confidentialité
      </h1>

      <div className="space-y-8">
        <section>
          <h2 className="text-xl font-bold text-white mb-4">
            1. Collecte des données personnelles
          </h2>
          <p>
            En utilisant notre formulaire de contact, vous êtes amené à nous
            transmettre des informations, dont certaines sont de nature à vous
            identifier (&quot;Données Personnelles&quot;). C&apos;est le cas
            lorsque vous remplissez le formulaire pour une demande de création
            sur-mesure ou pour acquérir une œuvre.
          </p>
          <p className="mt-2">
            Les données collectées sont : votre nom et votre adresse e-mail.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-4">
            2. Utilisation des données
          </h2>
          <p>
            Les informations recueillies via le formulaire de contact sont
            utilisées exclusivement pour :
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Vous recontacter suite à votre demande.</li>
            <li>Échanger concernant une œuvre ou une commande sur-mesure.</li>
          </ul>
          <p className="mt-2">
            Ces données ne sont en aucun cas vendues, cédées ou louées à des
            tiers.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-4">
            3. Conservation des données
          </h2>
          <p>
            Vos données personnelles sont conservées pendant la durée nécessaire
            au traitement de votre demande, et au maximum pendant 3 ans après
            notre dernier contact.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-4">
            4. Vos droits (RGPD)
          </h2>
          <p>
            Conformément au Règlement Général sur la Protection des Données
            (RGPD), vous disposez d&apos;un droit d&apos;accès, de
            rectification, d&apos;effacement et d&apos;opposition au traitement
            de vos données personnelles.
          </p>
          <p className="mt-2">
            Pour exercer ces droits, vous pouvez contacter LROSA² à
            l&apos;adresse suivante : [Email de contact].
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-4">
            5. Cookies et traceurs
          </h2>
          <p>
            Ce site utilise <strong>Google Analytics</strong> (GA4), un outil
            d&apos;analyse d&apos;audience, pour mesurer le trafic et comprendre
            comment les visiteurs interagissent avec le portfolio.
          </p>
          <p className="mt-2">
            Conformément à la réglementation européenne, ces cookies ne sont
            déposés sur votre appareil{" "}
            <strong>que si vous avez donné votre consentement explicite</strong>{" "}
            via le bandeau d&apos;information affiché lors de votre première
            visite.
          </p>
          <p className="mt-2">
            Les données collectées (comme les pages visitées ou le temps passé
            sur le site) sont anonymisées. Vous pouvez à tout moment retirer
            votre consentement en supprimant les données de site (ou &quot;Local
            Storage&quot;) dans les paramètres de votre navigateur.
          </p>
        </section>
      </div>
    </div>
  );
}
