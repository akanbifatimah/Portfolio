import type { ReactNode } from "react";

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="flex items-center gap-3 font-mono text-xs tracking-[0.2em] text-mute uppercase">
      <span className="h-px w-8 bg-coral" aria-hidden />
      {children}
    </p>
  );
}
