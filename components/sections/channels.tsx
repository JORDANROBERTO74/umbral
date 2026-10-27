import type { Dictionary } from "@/i18n/dictionaries/en";

export function Channels({ dict }: { dict: Dictionary }) {
  const section = dict.channels;

  return (
    <section id="channels" className="bg-bone text-ink">
      <div className="shell py-24 sm:py-32">
        <header className="max-w-2xl">
          <p className="eyebrow text-ember-deep">{section.eyebrow}</p>
          <h2 className="display mt-4 text-[clamp(2rem,4.4vw,3.4rem)] leading-[1.02]">
            {section.title.lead}{" "}
            <em className="italic text-ember-deep">{section.title.emphasis}</em>
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-ink/65">
            {section.subtitle}
          </p>
        </header>

        <div className="mt-14 grid gap-x-8 gap-y-10 border-t border-hairline pt-10 sm:grid-cols-2 lg:grid-cols-4">
          {section.groups.map((group) => (
            <div key={group.title}>
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink/55">
                {group.title}
              </h3>
              <ul className="mt-5 space-y-2.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 text-sm text-ink/75"
                  >
                    <span className="h-1 w-1 shrink-0 rounded-full bg-ember" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-12 max-w-md text-xs leading-relaxed text-ink/55">
          {section.note}
        </p>
      </div>
    </section>
  );
}
