import { LinkButton } from "@/components/ui/link-button";
import type { Dictionary } from "@/i18n/dictionaries/en";

export function CtaBand({ dict }: { dict: Dictionary }) {
  const section = dict.cta;

  return (
    <section
      id="cta"
      className="relative isolate overflow-hidden border-t border-hairline-invert bg-ink"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(60%_120%_at_50%_0%,rgba(194,96,58,0.22),transparent_70%)]"
      />
      <div className="shell flex flex-col items-start gap-8 py-24 sm:items-center sm:py-32 sm:text-center">
        <h2 className="display max-w-2xl text-[clamp(2.2rem,5vw,3.8rem)] leading-[1.02]">
          {section.title.lead}{" "}
          <em className="italic text-ember-2">{section.title.emphasis}</em>
        </h2>
        <p className="max-w-lg text-base leading-relaxed text-bone/65">
          {section.body}
        </p>
        <div className="flex flex-col items-start gap-3 sm:items-center">
          <LinkButton href="#pricing">{section.primary}</LinkButton>
          <p className="text-xs text-bone/55">{section.note}</p>
        </div>
      </div>
    </section>
  );
}
