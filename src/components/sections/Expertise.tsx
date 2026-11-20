"use client";

import type { PointerEvent } from "react";
import { expertise } from "@/lib/site";
import { Reveal, SplitText } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

const icons = [
  // Browser window
  <svg key="web" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-6" aria-hidden>
    <rect x="3" y="4" width="18" height="16" rx="2" />
    <path d="M3 9h18M7 6.5h.01M10 6.5h.01" strokeLinecap="round" />
  </svg>,
  // Phone
  <svg key="mobile" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-6" aria-hidden>
    <rect x="6" y="2.5" width="12" height="19" rx="2.5" />
    <path d="M10.5 18.5h3" strokeLinecap="round" />
  </svg>,
  // Signal
  <svg key="rt" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-6" aria-hidden>
    <circle cx="12" cy="12" r="2" />
    <path d="M7.8 7.8a6 6 0 0 0 0 8.4M16.2 7.8a6 6 0 0 1 0 8.4M5 5a10 10 0 0 0 0 14M19 5a10 10 0 0 1 0 14" strokeLinecap="round" />
  </svg>,
];

function spotlight(e: PointerEvent<HTMLElement>) {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--x", `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty("--y", `${e.clientY - r.top}px`);
}

export function Expertise() {
  return (
    <section id="expertise" className="relative scroll-mt-20 py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionLabel>Expertise</SectionLabel>
        <h2 className="mt-6 max-w-4xl text-[clamp(2.4rem,6vw,5rem)] leading-[0.98] font-medium tracking-[-0.035em]">
          <SplitText text="One engineer across" />{" "}
          <SplitText text="every screen." delay={0.15} className="font-serif font-normal text-paper/80 italic" />
        </h2>

        <div className="mt-16 grid gap-5 lg:grid-cols-3">
          {expertise.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.1} className="h-full">
              <article
                onPointerMove={spotlight}
                className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-ink-2 p-8 transition-colors hover:border-white/20"
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(420px circle at var(--x, 50%) var(--y, 50%), rgb(255 122 89 / 0.12), transparent 60%)",
                  }}
                />
                <div className="relative">
                  <div className="grid size-12 place-items-center rounded-2xl border border-white/10 bg-white/4 text-coral">
                    {icons[i]}
                  </div>
                  <h3 className="mt-8 text-2xl font-medium tracking-tight">{item.title}</h3>
                  <p className="mt-2 font-mono text-[11px] tracking-[0.15em] text-mute uppercase">{item.kicker}</p>
                  <p className="mt-5 leading-relaxed text-paper/65">{item.body}</p>
                  <ul className="mt-8 space-y-3 border-t border-white/8 pt-6">
                    {item.points.map((p) => (
                      <li key={p} className="flex items-center gap-3 text-sm text-paper/80">
                        <span className="size-1 rounded-full bg-coral" aria-hidden />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
