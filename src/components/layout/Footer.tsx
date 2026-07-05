import Link from "next/link";
import { FaFacebook, FaInstagram } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-900 bg-zinc-950 py-12 mt-auto">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex gap-6 uppercase text-sm font-bold tracking-widest">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-white transition-colors"
          ></a>{" "}
          <FaInstagram className="w-6 h-6 text-zinc-300 hover:text-rose-500 transition-colors" />
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-white transition-colors"
          >
            <FaFacebook className="w-6 h-6 text-zinc-300 hover:text-blue-500 transition-colors" />
          </a>
        </div>
        <div className="flex gap-6 text-sm text-zinc-500">
          <Link
            href="/mentions-legales"
            className="hover:text-zinc-300 transition-colors"
          >
            Mentions Légales
          </Link>
          <Link
            href="/confidentialite"
            className="hover:text-zinc-300 transition-colors"
          >
            Confidentialité
          </Link>
        </div>
        <p className="text-xs text-zinc-600">
          © {new Date().getFullYear()} Amélie Pernet. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
