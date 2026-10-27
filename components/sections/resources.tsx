import Image from "next/image";
import type { Dictionary } from "@/i18n/dictionaries/en";

const covers = [
  "/images/resource-1.jpg",
  "/images/resource-2.jpg",
  "/images/resource-3.jpg",
];

export function Resources({ dict }: { dict: Dictionary }) {
  const section = dict.resources;

  return (
    <section id="resources" className="bg-bone pb-24 text-ink sm:pb-32">
      <div className="shell">
        <header className="flex flex-col gap-5 border-t border-hairline pt-16 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <p className="eyebrow text-ember-deep">{section.eyebrow}</p>
            <h2 className="display mt-4 text-[clamp(2rem,4.4vw,3.4rem)] leading-[1.02]">
              {section.title.lead}{" "}
              <em className="italic text-ember-deep">{section.title.emphasis}</em>
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-ink/60">
            {section.subtitle}
          </p>
        </header>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {section.items.map((item, index) => (
            <article key={item.title} className="group">
              <div className="relative aspect-[16/10] overflow-hidden rounded-card bg-bone-2">
                <Image
                  src={covers[index] ?? covers[0]}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.16em] text-ember-deep">
                {item.tag}
              </p>
              <h3 className="mt-2 font-display text-[22px] leading-tight">
                {item.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-ink/60">
                {item.excerpt}
              </p>
              <p className="mt-4 text-[11px] uppercase tracking-[0.12em] text-ink/60">
                {item.readTime} Â· {item.date}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
