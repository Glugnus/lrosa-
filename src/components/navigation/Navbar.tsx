import { NAV_LINKS } from "@/config/navigation";
import Link from "next/link";
import MobileNavigation from "./MobileNavigation";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-md">
      <div className="container mx-auto flex h-20 items-center justify-between px-6 lg:px-12">
        <Link
          href="/"
          className="font-heading text-2xl font-bold text-rose-500 tracking-wider uppercase"
        >
          LROSA²
        </Link>
        <nav className="hidden md:flex gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <MobileNavigation />
      </div>
    </header>
  );
}
