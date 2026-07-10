import Link from "next/link";
import { X } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  closeMenu: () => void;
}

export default function MobileMenu({ isOpen, closeMenu }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-zinc-950/95 backdrop-blur-md md:hidden">
      <div className="flex justify-end p-6">
        <button
          onClick={closeMenu}
          className="text-zinc-300 hover:text-white transition-colors"
          aria-label="Fermer le menu"
        >
          <X size={32} />
        </button>
      </div>
      <nav className="flex flex-col items-center bg-zinc-950 justify-center flex-1 gap-10 pb-10">
        <Link
          href="/"
          onClick={closeMenu}
          className="text-2xl text-zinc-300 hover:text-white uppercase font-bold tracking-widest transition-colors"
        >
          Accueil
        </Link>
        <Link
          href="/galerie"
          onClick={closeMenu}
          className="text-2xl text-zinc-300 hover:text-white uppercase font-bold tracking-widest transition-colors"
        >
          Galerie
        </Link>
        <Link
          href="/a-propos"
          onClick={closeMenu}
          className="text-2xl text-zinc-300 hover:text-white uppercase font-bold tracking-widest transition-colors"
        >
          À Propos
        </Link>
        <Link
          href="/contact"
          onClick={closeMenu}
          className="text-2xl text-zinc-300 hover:text-white uppercase font-bold tracking-widest transition-colors"
        >
          Contact
        </Link>
      </nav>
    </div>
  );
}
