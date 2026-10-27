"use client";

import { usePathname, useRouter } from "next/navigation";
import { locales, type Locale } from "@/i18n/config";
import { persistLocale } from "@/lib/locale-cookie";
import { cn } from "@/lib/utils";

const short: Record<Locale, string> = { en: "EN", es: "ES" };

export function LocaleSwitcher({
  locale,
  label,
}: {
  locale: Locale;
  label: string;
}) {
  const pathname = usePathname();
  const router = useRouter();

  function switchTo(next: Locale) {
    if (next === locale) {
      return;
    }

    persistLocale(next);

    const segments = pathname.split("/");
    segments[1] = next;
    router.push(segments.join("/") || `/${next}`);
  }

  return (
    <div
      role="group"
      aria-label={label}
      className="flex items-center gap-0.5 rounded-full border border-hairline-invert p-0.5"
    >
      {locales.map((value) => (
        <button
          key={value}
          type="button"
          lang={value}
          onClick={() => switchTo(value)}
          aria-pressed={value === locale}
          className={cn(
            "rounded-full px-2.5 py-1 text-[11px] font-semibold tracking-wide transition",
            value === locale
              ? "bg-bone text-ink"
              : "text-bone/60 hover:text-bone",
          )}
        >
          {short[value]}
        </button>
      ))}
    </div>
  );
}
