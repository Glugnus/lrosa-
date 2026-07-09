import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative h-[80vh] w-full flex items-center justify-center overflow-hidden border-b border-zinc-800">
      <div className="absolute inset-0 z-0 opacity-40">
        <Image
          src="/wall.jpg"
          alt="Amélie Pernet peignant dans son atelier"
          fill
          sizes="100vw"
          className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
          priority
        />
      </div>
      <div className="relative z-10 text-center px-4 flex flex-col items-center">
        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-white uppercase tracking-tighter mb-4">
          LROSA²
        </h1>
        <p className="text-zinc-300 text-lg md:text-2xl font-light tracking-widest uppercase border-t border-zinc-500 pt-4">
          Pop Art & Street Art
        </p>
        <p className="mt-6 text-zinc-400 text-sm md:text-lg italic font-light max-w-2xl px-4">
          &quot;Je crois que les regards racontent ce que les mots
          taisent.&quot;
        </p>
      </div>
    </section>
  );
}
