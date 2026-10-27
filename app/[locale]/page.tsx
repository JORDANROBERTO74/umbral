import { notFound } from "next/navigation";
import { Channels } from "@/components/sections/channels";
import { CtaBand } from "@/components/sections/cta-band";
import { Faq } from "@/components/sections/faq";
import { Features } from "@/components/sections/features";
import { Hero } from "@/components/sections/hero";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Pricing } from "@/components/sections/pricing";
import { Resources } from "@/components/sections/resources";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const dict = getDictionary(locale);

  return (
    <>
      <Hero dict={dict} />
      <Features dict={dict} />
      <HowItWorks dict={dict} />
      <Channels dict={dict} />
      <Pricing locale={locale} dict={dict} />
      <Faq dict={dict} />
      <Resources dict={dict} />
      <CtaBand dict={dict} />
    </>
  );
}
