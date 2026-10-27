import Image from "next/image";
import { LinkButton } from "@/components/ui/link-button";
import type { Dictionary } from "@/i18n/dictionaries/en";

export function Hero({ dict }: { dict: Dictionary }) {
  return (
    <section className="relative isolate overflow-hidden border-b border-hairline-invert">
      <Image
        src="/images/hero.jpg"
        alt={dict.hero.imageAlt}
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink/92 via-ink/78 to-ink" />

      <div className="shell pb-14 pt-16 sm:pb-20 sm:pt-24 lg:pt-28">
        <p className="eyebrow flex animate-rise items-center gap-2.5 text-ember-2">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-ember" />
          {dict.hero.eyebrow}
        </p>

        <h1 className="display mt-6 max-w-4xl animate-rise text-[clamp(2.7rem,7vw,4.9rem)] leading-[0.98]">
          {dict.hero.title.lead}{" "}
          <em className="italic text-ember-2">
            {dict.hero.title.emphasis}
          </em>
        </h1>

        <p
          className="mt-7 max-w-xl animate-rise text-base leading-relaxed text-bone/70 sm:text-lg"
          style={{ animationDelay: "100ms" }}
        >
          {dict.hero.subtitle}
        </p>

        <div
          className="mt-9 flex animate-rise flex-wrap items-center gap-3"
          style={{ animationDelay: "180ms" }}
        >
          <LinkButton href="#pricing">{dict.hero.primary}</LinkButton>
          <LinkButton href="#how" variant="ghost">
            {dict.hero.secondary}
          </LinkButton>
        </div>

        <p className="mt-4 text-xs text-bone/60">{dict.hero.note}</p>

        <div className="mt-14 grid max-w-2xl grid-cols-3 gap-5 border-t border-hairline-invert pt-7 sm:mt-20 sm:gap-8">
          {dict.hero.stats.map((stat) => (
            <div key={stat.label}>
              <p className="display text-[clamp(1.75rem,3.4vw,2.6rem)] leading-none">
                {stat.value}
              </p>
              <p className="mt-2.5 text-[11px] leading-snug text-bone/60 sm:text-xs">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-hairline-invert bg-ink/60">
        <div className="shell flex flex-wrap items-center gap-x-10 gap-y-3 py-6">
          <p className="eyebrow text-bone/55">{dict.hero.proofLabel}</p>
          {dict.hero.proof.map((name) => (
            <span
              key={name}
              className="font-display text-lg leading-none text-bone/55"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
