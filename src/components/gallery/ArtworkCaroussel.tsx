"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";

interface ArtworkCarouselProps {
  images: string[];
  title: string;
}

export default function ArtworkCarousel({
  images,
  title,
}: ArtworkCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextImage = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToImage = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const variants: Variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.3, 0.8, 0.4, 1] },
    },
    exit: (dir: number) => ({
      x: dir < 0 ? "100%" : "-100%",
      opacity: 0,
      transition: { duration: 0.6, ease: [0.3, 0.8, 0.4, 1] },
    }),
  };
  return (
    <div className="relative w-full aspect-4/5 border border-zinc-800 bg-zinc-900 lg:sticky lg:top-32 group overflow-hidden">
      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0 overflow-hidden"
        >
          <div className="absolute inset-0 select-none pointer-events-none scale-110 blur-3xl opacity-35">
            <Image
              src={images[currentIndex]}
              alt=""
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority={currentIndex === 0}
            />
          </div>
          <Image
            src={images[currentIndex]}
            alt={`${title} - Vue ${currentIndex + 1}`}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-contain relative z-10 scale-105"
            priority={currentIndex === 0}
          />
        </motion.div>
      </AnimatePresence>
      <button
        onClick={prevImage}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-zinc-950/50 hover:bg-zinc-900 text-white p-2 rounded-full opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-500 lg:delay-100 z-10"
        aria-label="Image précédente"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextImage}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-zinc-950/50 hover:bg-zinc-900 text-white p-2 rounded-full opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-500 lg:delay-100 z-10"
        aria-label="Image suivante"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToImage(index)}
            className={`w-2 h-2 rounded-full transition-colors duration-300 ${
              index === currentIndex
                ? "bg-white"
                : "bg-white/30 hover:bg-white/50"
            }`}
            aria-label={`Aller à l'image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
