import Link from "next/link";

export default function GlobalNotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6">
      <h2 className="text-4xl lg:text-6xl font-bold font-syne mb-6 text-white">
        404
      </h2>
      <p className="text-zinc-400 max-w-md mb-8 text-lg">
        Il semblerait que cette page n&apos;existe pas ou a été déplacée.
      </p>
      <Link
        href="/"
        className="px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-colors text-sm uppercase tracking-widest"
      >
        Retour à l&apos;accueil
      </Link>
    </div>
  );
}
