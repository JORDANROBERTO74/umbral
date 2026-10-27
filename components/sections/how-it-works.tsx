import type { Dictionary } from "@/i18n/dictionaries/en";

export function HowItWorks({ dict }: { dict: Dictionary }) {
  const section = dict.how;

  return (
    <section
      id="how"
      className="border-y border-hairline-invert bg-ink text-bone"
    >
      <div className="shell py-24 sm:py-32">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <header className="max-w-xl">
            <p className="eyebrow text-ember-2">{section.eyebrow}</p>
            <h2 className="display mt-4 text-[clamp(2rem,4.4vw,3.4rem)] leading-[1.02]">
              {section.title.lead}{" "}
              <em className="italic text-ember-2">
                {section.title.emphasis}
              </em>
            </h2>
          </header>
          <p className="max-w-sm text-sm leading-relaxed text-bone/60">
            {section.subtitle}
          </p>
        </div>

        <ol className="mt-14 grid gap-10 border-t border-hairline-invert pt-10 md:grid-cols-3 md:gap-8">
          {section.steps.map((step) => (
            <li key={step.label} className="relative">
              <span className="display block text-4xl text-ember/70">
                {step.label}
              </span>
              <h3 className="mt-4 font-display text-2xl leading-tight">
                {step.title}
              </h3>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-bone/60">
                {step.body}
              </p>
            </li>
          ))}
        </ol>

        <p className="mt-12 max-w-md border-l-2 border-ember/40 pl-4 text-xs leading-relaxed text-bone/55">
          {section.note}
        </p>
      </div>
    </section>
  );
}
