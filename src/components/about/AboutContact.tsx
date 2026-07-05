import Link from "next/link";

export function AboutContact() {
  return (
    <div className="mt-16 pt-8 border-t border-zinc-800">
      <p className="text-sm uppercase tracking-widest text-zinc-500 mb-6 font-bold">
        Un projet sur-mesure ?
      </p>
      <Link
        href="/contact"
        className="inline-block border border-zinc-700 hover:border-white text-zinc-300 hover:text-white px-8 py-4 uppercase text-xs font-bold tracking-widest transition-all"
      >
        Contacter Amélie
      </Link>
    </div>
  );
}
