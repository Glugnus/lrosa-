import Link from "next/link";
import MobileNavigation from "../navigation/MobileNavigation";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-md">
      <div className="container mx-auto flex h-20 items-center justify-between px-6 lg:px-12">
        <Link
          href="/"
          className="font-heading text-2xl font-bold text-white tracking-wider uppercase"
        >
          LROSA²
        </Link>
        <nav className="hidden md:flex gap-8">
          <Link
            href="/"
            className="text-sm font-medium hover:text-white transition-colors"
          >
            Acceuil
          </Link>
          <Link
            href="/galerie"
            className="text-sm font-medium hover:text-white transition-colors"
          >
            Galerie
          </Link>
          <Link
            href="/a-propos"
            className="text-sm font-medium hover:text-white transition-colors"
          >
            A propos
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium hover:text-white transition-colors"
          >
            Contact
          </Link>
        </nav>
        <MobileNavigation />
      </div>
    </header>
  );
}
