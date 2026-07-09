import Image from "next/image";

interface SingleImageProps {
  src: string;
  title: string;
}

export default function SingleImage({ src, title }: SingleImageProps) {
  return (
    <div className="relative w-full aspect-4/5 border border-zinc-800 bg-zinc-900 lg:sticky lg:top-32 overflow-hidden">
      <div className="absolute inset-0 select-none pointer-events-none scale-110 blur-3xl opacity-35">
        <Image
          src={src}
          alt=""
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
          priority
        />
      </div>
      <Image
        src={src}
        alt={`Tableau ${title} par LROSA²`}
        fill
        sizes="(max-width: 1024px) 100vw, 50vw"
        className="object-contain relative z-10 scale-105"
        priority
      />
    </div>
  );
}
