import Link from "next/link";
import { cn } from "@/lib/utils";
import type { Locale } from "@/i18n/config";

export function BrandMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      aria-hidden="true"
      className={cn("h-6 w-6", className)}
    >
      <path
        d="M17 47V24a4 4 0 0 1 4-4h22a4 4 0 0 1 4 4v23h-6V26H23v21z"
        fill="currentColor"
      />
      <circle cx="32" cy="39" r="4" className="fill-ember" />
    </svg>
  );
}

export function Brand({
  locale,
  className,
}: {
  locale: Locale;
  className?: string;
}) {
  return (
    <Link
      href={`/${locale}`}
      className={cn(
        "group flex items-center gap-2.5 text-bone transition hover:text-bone/80",
        className,
      )}
    >
      <BrandMark className="h-6 w-6 transition group-hover:scale-105" />
      <span className="font-display text-[22px] leading-none tracking-[-0.01em]">
        Umbral
      </span>
    </Link>
  );
}
