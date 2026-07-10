import Link from "next/link";

export default function AboutTeaser() {
  return (
    <section className="py-24 px-6 lg:px-12 bg-zinc-950">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-heading text-2xl md:text-4xl text-white font-bold mb-8 uppercase">
          L&apos;énergie des mots dissimulés
        </h2>
        <p className="text-zinc-400 text-lg md:text-xl leading-relaxed mb-6">
          Après avoir longtemps peint à l’abri des regards, je partage
          aujourd&apos;hui un univers vibrant, inspiré du street art et du pop
          art. Mes œuvres uniques, chargées d’énergie, mêlent acrylique, aérosol
          et objets détournés.
        </p>
        <Link
          href="/a-propos"
          className="inline-block mt-4 text-white uppercase text-sm font-bold tracking-widest border-b border-rose-500 pb-1 hover:text-rose-500 transition-colors"
        >
          Découvrir mon histoire
        </Link>
      </div>
    </section>
  );
}
