import Link from "next/link";
import { en } from "@/i18n/dictionaries/en";

export default function NotFound() {
  const dict = en.notFound;

  return (
    <section className="shell flex min-h-[70vh] flex-col items-start justify-center gap-6 py-24">
      <p className="eyebrow text-ember-2">404</p>
      <h1 className="display max-w-2xl text-4xl leading-[1.05] sm:text-6xl">
        {dict.title}
      </h1>
      <p className="max-w-md text-base leading-relaxed text-bone/70">
        {dict.body}
      </p>
      <div className="flex flex-wrap items-center gap-3">
        <Link
          href="/en"
          className="rounded-full bg-ember px-6 py-3 text-sm font-semibold text-bone transition hover:bg-ember-2"
        >
          {dict.back}
        </Link>
        <Link
          href="/es"
          lang="es"
          className="rounded-full border border-hairline-invert px-6 py-3 text-sm font-semibold text-bone transition hover:border-bone/40 hover:bg-bone/5"
        >
          Ir al inicio
        </Link>
      </div>
    </section>
  );
}
