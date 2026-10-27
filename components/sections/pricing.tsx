import { Check } from "lucide-react";
import { LinkButton } from "@/components/ui/link-button";
import { formatPrice } from "@/lib/format";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/en";

export function Pricing({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const section = dict.pricing;

  return (
    <section
      id="pricing"
      className="border-y border-hairline-invert bg-ink text-bone"
    >
      <div className="shell py-24 sm:py-32">
        <header className="max-w-2xl">
          <p className="eyebrow text-ember-2">{section.eyebrow}</p>
          <h2 className="display mt-4 text-[clamp(2rem,4.4vw,3.4rem)] leading-[1.02]">
            {section.title.lead}{" "}
            <em className="italic text-ember-2">
              {section.title.emphasis}
            </em>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-bone/60">
            {section.subtitle}
          </p>
        </header>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {section.plans.map((plan) => (
            <div
              key={plan.name}
              className={
                plan.featured
                  ? "flex flex-col rounded-card bg-bone p-7 text-ink shadow-[0_40px_80px_-60px_rgba(0,0,0,0.9)]"
                  : "flex flex-col rounded-card border border-hairline-invert bg-ink-2 p-7 text-bone"
              }
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-display text-2xl leading-none">
                  {plan.name}
                </h3>
                {plan.featured ? (
                  <span className="rounded-full bg-ember px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-bone">
                    {section.badge}
                  </span>
                ) : null}
              </div>

              <p
                className={
                  plan.featured
                    ? "mt-3 text-[13px] leading-relaxed text-ink/60"
                    : "mt-3 text-[13px] leading-relaxed text-bone/55"
                }
              >
                {plan.blurb}
              </p>

              <p className="mt-6 flex flex-wrap items-baseline gap-1.5">
                <span className="display text-[2.5rem] leading-none">
                  {plan.price === null
                    ? section.custom
                    : formatPrice(locale, plan.price)}
                </span>
                {plan.price !== null ? (
                  <span
                    className={
                      plan.featured
                        ? "text-xs text-ink/60"
                        : "text-xs text-bone/60"
                    }
                  >
                    {section.period}
                  </span>
                ) : null}
              </p>

              <ul
                className={
                  plan.featured
                    ? "mt-7 flex-1 space-y-3 border-t border-ink/15 pt-6"
                    : "mt-7 flex-1 space-y-3 border-t border-hairline-invert pt-6"
                }
              >
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className={
                      plan.featured
                        ? "flex gap-2.5 text-[13px] leading-snug text-ink/75"
                        : "flex gap-2.5 text-[13px] leading-snug text-bone/65"
                    }
                  >
                    <Check
                      size={15}
                      aria-hidden="true"
                      className={
                        plan.featured
                          ? "mt-0.5 shrink-0 text-ember"
                          : "mt-0.5 shrink-0 text-ember-2"
                      }
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <LinkButton
                  href={
                    plan.price === null
                      ? `mailto:${dict.footer.contact}`
                      : "#cta"
                  }
                  variant={plan.featured ? "light" : "ghost"}
                  className="w-full"
                >
                  {plan.cta}
                </LinkButton>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-10 max-w-xl text-xs leading-relaxed text-bone/55">
          {section.footnote}
        </p>
      </div>
    </section>
  );
}
