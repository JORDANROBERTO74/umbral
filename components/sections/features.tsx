import type { Dictionary } from "@/i18n/dictionaries/en";

const toneStyles: Record<string, string> = {
  draft: "bg-ember/15 text-ember-2",
  review: "bg-bone/10 text-bone/75",
  resolved: "bg-bone/5 text-bone/60",
};

export function Features({ dict }: { dict: Dictionary }) {
  const section = dict.features;

  return (
    <section id="product" className="bg-bone text-ink">
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

        <div className="mt-14 grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-14">
          <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2">
            {section.items.map((item, index) => (
              <article key={item.title}>
                <p className="text-[11px] font-semibold tracking-[0.18em] text-ink/60">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 font-display text-2xl leading-tight">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/65">
                  {item.body}
                </p>
                <ul className="mt-4 space-y-2">
                  {item.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-2.5 text-[13px] leading-snug text-ink/55"
                    >
                      <span className="mt-[7px] h-px w-3 shrink-0 bg-ember" />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <aside className="h-fit rounded-card border border-hairline bg-ink p-5 text-bone shadow-[0_40px_70px_-50px_rgba(14,17,19,0.75)] sm:p-6">
            <div className="flex items-baseline justify-between gap-3 border-b border-hairline-invert pb-4">
              <p className="font-display text-xl">{section.panel.title}</p>
              <p className="text-[11px] text-bone/55">{section.panel.meta}</p>
            </div>

            <ul className="divide-y divide-hairline-invert">
              {section.panel.rows.map((row) => (
                <li key={row.name} className="flex items-start gap-3 py-4">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-bone/10 text-[11px] font-semibold text-bone/70">
                    {row.initials}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-[13px] font-medium text-bone/90">
                      {row.name}
                    </p>
                    <p className="mt-1 text-[12.5px] leading-snug text-bone/55">
                      {row.question}
                    </p>
                  </div>
                  <span
                    className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold ${
                      toneStyles[row.tone] ?? toneStyles.resolved
                    }`}
                  >
                    {row.tag}
                  </span>
                </li>
              ))}
            </ul>

            <p className="border-t border-hairline-invert pt-4 text-[11px] text-bone/55">
              {section.panel.footnote}
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
