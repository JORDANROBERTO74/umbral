import { region } from "@/config/region";
import type { Locale } from "@/i18n/config";

const intlLocale: Record<Locale, string> = {
  en: "en-US",
  es: "es-ES",
};

export function formatPrice(locale: Locale, value: number): string {
  return new Intl.NumberFormat(intlLocale[locale], {
    style: "currency",
    currency: region.currency,
    maximumFractionDigits: 0,
  }).format(value);
}
