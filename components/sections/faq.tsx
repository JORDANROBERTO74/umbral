import { ArrowUpRight, Plus } from "lucide-react";
import type { Dictionary } from "@/i18n/dictionaries/en";

export function Faq({ dict }: { dict: Dictionary }) {
  const section = dict.faq;

  return (
    <section id="faq" className="bg-bone text-ink">
      <div className="shell py-24 sm:py-32">
        <header className="max-w-2xl">
          <p className="eyebrow text-ember-deep">{section.eyebrow}</p>
          <h2 className="display mt-4 text-[clamp(2rem,4.4vw,3.4rem)] leading-[1.02]">
            {section.title.lead}{" "}
            <em className="italic text-ember-deep">{section.title.emphasis}</em>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink/65">
            {section.subtitle}
          </p>
        </header>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:gap-14">
          <div className="border-t border-hairline">
            {section.items.map((item) => (
              <details key={item.q} className="group border-b border-hairline">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-[15px] font-medium leading-snug">
                  {item.q}
                  <Plus
                    size={16}
                    aria-hidden="true"
                    className="shrink-0 text-ember-deep transition-transform duration-200 group-open:rotate-45"
                  />
                </summary>
                <p className="max-w-xl pb-5 pr-8 text-sm leading-relaxed text-ink/65">
                  {item.a}
                </p>
              </details>
            ))}
          </div>

          <aside className="h-fit rounded-card bg-ink p-7 text-bone">
            <h3 className="font-display text-2xl leading-tight">
              {section.more.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-bone/60">
              {section.more.body}
            </p>
            <a
              href={`mailto:${section.more.cta}`}
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-ember-2 underline decoration-ember/40 underline-offset-4 transition hover:decoration-ember-2"
            >
              {section.more.cta}
              <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
}
