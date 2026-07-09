import Image from "next/image";

interface SingleImageProps {
  src: string;
  title: string;
}

export default function SingleImage({ src, title }: SingleImageProps) {
  return (
    <div className="relative w-full aspect-4/5 border border-zinc-800 bg-zinc-900 lg:sticky lg:top-32">
      <Image
        src={src}
        alt={`Tableau ${title} par LROSA²`}
        fill
        sizes="(max-width: 1024px) 100vw, 50vw"
        className="object-cover"
        priority
      />
    </div>
  );
}
