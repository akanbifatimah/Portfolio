import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "solid" | "ghost";
  external?: boolean;
  className?: string;
};

const styles = {
  solid: "bg-paper text-ink hover:bg-coral",
  ghost: "border border-white/15 text-paper hover:border-white/40 hover:bg-white/5",
};

export function Button({ href, children, variant = "solid", external, className = "" }: Props) {
  const cls = `group inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium transition-colors duration-300 ${styles[variant]} ${className}`;
  if (external) {
    return (
      <a href={href} className={cls} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
