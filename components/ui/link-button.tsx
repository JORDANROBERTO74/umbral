import Link from "next/link";
import { cn } from "@/lib/utils";

const styles = {
  solid: "bg-ember text-bone hover:bg-ember-2",
  ghost: "border border-hairline-invert text-bone hover:border-bone/40 hover:bg-bone/5",
  light: "bg-ink text-bone hover:bg-ink-3",
} as const;

export function LinkButton({
  href,
  variant = "solid",
  className,
  children,
}: {
  href: string;
  variant?: keyof typeof styles;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition duration-200",
        styles[variant],
        className,
      )}
    >
      {children}
    </Link>
  );
}
