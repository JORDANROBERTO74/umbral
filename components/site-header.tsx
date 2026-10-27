import Link from "next/link";
import { Brand } from "@/components/brand-mark";
import { LocaleSwitcher } from "@/components/locale-switcher";
import { LinkButton } from "@/components/ui/link-button";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/en";

export function SiteHeader({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const links = [
    { href: `/${locale}#product`, label: dict.nav.product },
    { href: `/${locale}#how`, label: dict.nav.how },
    { href: `/${locale}#pricing`, label: dict.nav.pricing },
    { href: `/${locale}#faq`, label: dict.nav.faq },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-hairline-invert bg-ink/80 backdrop-blur-md">
      <div className="shell flex h-[72px] items-center justify-between gap-4">
        <Brand locale={locale} />

        <nav
          aria-label={dict.nav.label}
          className="hidden items-center gap-7 lg:flex"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-bone/70 transition hover:text-bone"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <LocaleSwitcher locale={locale} label={dict.nav.language} />
          <Link
            href={`/${locale}#pricing`}
            className="hidden text-sm font-medium text-bone/70 transition hover:text-bone sm:block"
          >
            {dict.nav.login}
          </Link>
          <LinkButton
            href={`/${locale}#pricing`}
            className="px-4 py-2 text-[13px]"
          >
            {dict.nav.cta}
          </LinkButton>
        </div>
      </div>
    </header>
  );
}
