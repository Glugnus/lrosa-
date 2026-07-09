"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6">
      <h2 className="text-4xl lg:text-6xl font-bold font-syne mb-6 text-white">
        Oups ! Une erreur est survenue
      </h2>
      <p className="text-zinc-400 max-w-md mb-8 text-lg">
        Nous sommes désolés, une erreur inattendue s&apos;est produite.
      </p>
      <button
        onClick={() => reset()}
        className="px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-colors text-sm uppercase tracking-widest"
      >
        Réessayer
      </button>
    </div>
  );
}
