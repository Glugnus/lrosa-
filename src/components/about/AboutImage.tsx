import Image from "next/image";

export function AboutImage() {
  return (
    <div className="relative w-full aspect-3/4 border border-zinc-800 bg-zinc-900 overflow-hidden">
      <Image
        src="/profil.jpg"
        alt="Amélie Pernet dans son atelier"
        fill
        sizes="(max-width: 1024px) 100vw, 50vw"
        className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
        priority
      />
      <div className="absolute bottom-0 left-0 bg-white text-zinc-950 px-6 py-4 font-heading font-bold uppercase tracking-widest text-sm">
        L&apos;Artiste
      </div>
    </div>
  );
}
