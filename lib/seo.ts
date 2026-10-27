import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { locales, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/en";

const openGraphLocale: Record<Locale, string> = {
  en: "en_US",
  es: "es_ES",
};

export function buildMetadata(locale: Locale, dict: Dictionary): Metadata {
  const path = `/${locale}`;
  const languages = Object.fromEntries(
    locales.map((value) => [value, `/${value}`]),
  );

  return {
    metadataBase: new URL(siteConfig.url),
    title: dict.meta.title,
    description: dict.meta.description,
    alternates: {
      canonical: path,
      languages: { ...languages, "x-default": "/en" },
    },
    openGraph: {
      type: "website",
      url: path,
      siteName: siteConfig.name,
      title: dict.meta.title,
      description: dict.meta.description,
      locale: openGraphLocale[locale],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.title,
      description: dict.meta.description,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export function buildStructuredData(locale: Locale, dict: Dictionary) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        name: siteConfig.name,
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        description: dict.meta.description,
        url: `${siteConfig.url}/${locale}`,
        inLanguage: locale,
        offers: {
          "@type": "AggregateOffer",
          priceCurrency: "USD",
          lowPrice: 39,
          highPrice: 99,
          offerCount: 3,
        },
      },
      {
        "@type": "FAQPage",
        inLanguage: locale,
        mainEntity: dict.faq.items.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.a,
          },
        })),
      },
    ],
  };
}
