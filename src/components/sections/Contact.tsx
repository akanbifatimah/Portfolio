"use client";

import { useState } from "react";
import { site } from "@/lib/site";
import { Magnetic } from "@/components/ui/Magnetic";
import { Reveal, SplitText } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ArrowUpRight, Check, Copy, socialIcons } from "@/components/ui/icons";

export function Contact() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = `mailto:${site.email}`;
    }
  }

  return (
    <section id="contact" className="relative scroll-mt-20 overflow-hidden border-t border-white/8 pt-28 sm:pt-40">
      <div aria-hidden className="pointer-events-none absolute -bottom-60 left-1/2 h-150 w-[90vw] -translate-x-1/2 rounded-full bg-linear-to-r from-coral/25 via-violet/25 to-mint/20 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionLabel>Contact</SectionLabel>
        <h2 className="mt-8 text-[clamp(3rem,10vw,9rem)] leading-[0.9] font-medium tracking-[-0.045em]">
          <SplitText text="Let's build" className="block" />
          <SplitText text="something good." delay={0.15} className="text-gradient block pr-4 font-serif font-normal italic" />
        </h2>

        <Reveal className="mt-12 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <p className="max-w-md text-lg text-paper/65">
            Have a product that needs a careful hand on web and mobile, or a team that needs a frontend lead? I&apos;d
            love to hear about it.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <Magnetic>
              <a
                href={`mailto:${site.email}`}
                className="group inline-flex items-center gap-3 rounded-full bg-paper py-4 pr-4 pl-7 text-base font-medium text-ink transition-colors hover:bg-coral sm:text-lg"
              >
                {site.email}
                <span className="grid size-9 place-items-center rounded-full bg-ink text-paper transition-transform group-hover:rotate-45">
                  <ArrowUpRight width={16} height={16} />
                </span>
              </a>
            </Magnetic>
            <button
              type="button"
              onClick={copyEmail}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-4 text-sm transition-colors hover:border-white/40 hover:bg-white/5"
            >
              {copied ? <Check width={16} height={16} className="text-mint" /> : <Copy width={16} height={16} />}
              <span aria-live="polite">{copied ? "Copied" : "Copy email"}</span>
            </button>
          </div>
        </Reveal>

        <footer className="mt-28 flex flex-col gap-8 border-t border-white/10 py-10 sm:mt-40 md:flex-row md:items-center md:justify-between">
          <ul className="flex gap-2" aria-label="Social profiles">
            {site.socials.map((s) => {
              const Icon = socialIcons[s.icon];
              return (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${s.label} (opens in a new tab)`}
                    className="grid size-11 place-items-center rounded-full border border-white/10 text-paper/70 transition-colors hover:border-coral hover:bg-coral hover:text-ink"
                  >
                    <Icon width={18} height={18} />
                  </a>
                </li>
              );
            })}
          </ul>
          <p className="font-mono text-[11px] tracking-[0.15em] text-mute uppercase">
            © {new Date().getFullYear()} Fatimah Akanbi
          </p>
        </footer>
      </div>
    </section>
  );
}
