import { LinkButton } from "@/components/ui/LinkButton";

export function AboutContact() {
  return (
    <div className="mt-16 pt-8 border-t border-zinc-800">
      <p className="text-sm uppercase tracking-widest text-zinc-500 mb-6 font-bold">
        Une idée de collaboration ?
      </p>
      <LinkButton href="/contact" variant="outline">
        Me Contacter
      </LinkButton>
    </div>
  );
}
