"use client";

import { useState, useEffect } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";
import Link from "next/link";

export default function CookieBanner() {
  const [consent, setConsent] = useState<boolean | null>(null);

  useEffect(() => {
    const initializeConsent = () => {
      const storedConsent = localStorage.getItem("cookie_consent");
      if (storedConsent === "granted") {
        setConsent(true);
      } else if (storedConsent === "denied") {
        setConsent(false);
      }
    };

    initializeConsent();
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie_consent", "granted");
    setConsent(true);
  };

  const declineCookies = () => {
    localStorage.setItem("cookie_consent", "denied");
    setConsent(false);
  };

  return (
    <>
      {consent === true &&
        process.env.NODE_ENV === "production" &&
        process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}

      {consent === null && (
        <div className="fixed bottom-0 left-0 right-0 bg-zinc-950/95 backdrop-blur-md border-t border-zinc-800 p-4 md:p-6 z-50 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-300 shadow-2xl">
          <p className="text-center md:text-left">
            Pour comprendre comment vous naviguez sur le portfolio d&apos;Amélie
            et l&apos;améliorer, nous utilisons Google Analytics. Acceptez-vous
            le dépôt de cookies d&apos;analyse de trafic ?
            <Link
              href="/confidentialite"
              className="underline ml-1 hover:text-white transition-colors"
            >
              En savoir plus.
            </Link>
          </p>
          <div className="flex gap-3 shrink-0">
            <button
              onClick={declineCookies}
              className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-white rounded-md transition-colors"
            >
              Refuser
            </button>
            <button
              onClick={acceptCookies}
              className="px-4 py-2 bg-white text-zinc-950 hover:bg-zinc-200 font-medium rounded-md transition-colors"
            >
              Accepter
            </button>
          </div>
        </div>
      )}
    </>
  );
}
