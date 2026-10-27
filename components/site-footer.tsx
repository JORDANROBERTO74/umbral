import Link from "next/link";
import { Brand } from "@/components/brand-mark";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/en";

export function SiteFooter({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const links = [
    { href: `/${locale}#product`, label: dict.nav.product },
    { href: `/${locale}#how`, label: dict.nav.how },
    { href: `/${locale}#channels`, label: dict.nav.channels },
    { href: `/${locale}#pricing`, label: dict.nav.pricing },
    { href: `/${locale}#faq`, label: dict.nav.faq },
    { href: `/${locale}#resources`, label: dict.nav.notes },
  ];

  return (
    <footer className="border-t border-hairline-invert bg-ink">
      <div className="shell grid gap-12 py-16 md:grid-cols-[1.6fr_1fr_1fr] md:py-20">
        <div className="max-w-sm">
          <Brand locale={locale} />
          <p className="mt-5 text-sm leading-relaxed text-bone/55">
            {dict.footer.blurb}
          </p>
        </div>

        <nav aria-label={dict.footer.navTitle}>
          <h2 className="eyebrow text-bone/55">{dict.footer.navTitle}</h2>
          <ul className="mt-5 space-y-3">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-bone/70 transition hover:text-bone"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="eyebrow text-bone/55">{dict.footer.contactTitle}</h2>
          <a
            href={`mailto:${dict.footer.contact}`}
            className="mt-5 block text-sm text-bone/70 underline decoration-bone/20 underline-offset-4 transition hover:text-bone hover:decoration-bone/60"
          >
            {dict.footer.contact}
          </a>
          <p className="mt-6 max-w-[16rem] text-xs leading-relaxed text-bone/55">
            {dict.footer.legal}
          </p>
        </div>
      </div>

      <div className="border-t border-hairline-invert">
        <div className="shell flex flex-col gap-2 py-6 text-xs text-bone/55 sm:flex-row sm:items-center sm:justify-between">
          <span>Â© {new Date().getFullYear()} Umbral</span>
          <span className="font-display text-[13px] text-bone/60">
            {dict.hero.eyebrow}
          </span>
        </div>
      </div>
    </footer>
  );
}
