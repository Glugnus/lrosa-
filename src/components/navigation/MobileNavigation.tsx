"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import MobileMenu from "./MobileMenu";

export default function MobileNavigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const openMenu = () => setIsMobileMenuOpen(true);
  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <button
        onClick={openMenu}
        className="md:hidden text-zinc-300 hover:text-white transition-colors"
        aria-label="Ouvrir le menu"
      >
        <Menu />
      </button>
      <MobileMenu isOpen={isMobileMenuOpen} closeMenu={closeMenu} />
    </>
  );
}
