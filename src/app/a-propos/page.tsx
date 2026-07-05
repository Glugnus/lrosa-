import { AboutImage } from "@/components/about/AboutImage";
import { AboutContent } from "@/components/about/AboutContent";
import { AboutContact } from "@/components/about/AboutContact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Découvrez l'histoire, les inspirations et le parcours d'Amélie Pernet, artiste peintre contemporaine.",
};
export default function APropos() {
  return (
    <div className="min-h-screen bg-zinc-950 py-24">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <AboutImage />

          <div className="flex flex-col justify-center">
            <AboutContent />
            <AboutContact />
          </div>
        </div>
      </div>
    </div>
  );
}
