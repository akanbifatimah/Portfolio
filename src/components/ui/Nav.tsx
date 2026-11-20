"use client";

import Link from "next/link";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/site";
import { ArrowUpRight, Close, Menu } from "./icons";
import { ease } from "./Reveal";

export function Nav() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setHidden(y > prev && y > 400 && !open);
    setScrolled(y > 24);
  });

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <motion.header
        animate={{ y: hidden ? "-110%" : "0%" }}
        transition={{ duration: 0.5, ease }}
        className="fixed inset-x-0 top-0 z-50"
      >
        <div
          className={`mx-auto flex max-w-7xl items-center justify-between px-5 py-4 transition-[padding] duration-500 sm:px-8 ${scrolled ? "lg:py-3" : "lg:py-6"}`}
        >
          <Link href="/" className="group flex items-center gap-3" aria-label={`${site.name}, home`}>
            <span className="grid size-11 place-items-center rounded-full border border-white/15 bg-ink/60 text-sm font-semibold tracking-wider backdrop-blur-md transition-colors group-hover:border-coral group-hover:text-coral">
              FA
            </span>
          </Link>

          <nav
            aria-label="Primary"
            className={`hidden items-center gap-1 rounded-full border px-2 py-1.5 backdrop-blur-xl transition-colors duration-500 md:flex ${scrolled ? "border-white/10 bg-ink/70" : "border-transparent bg-transparent"}`}
          >
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm text-paper/70 transition-colors hover:bg-white/6 hover:text-paper"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={site.cv}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-1.5 rounded-full bg-paper px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-coral sm:inline-flex"
            >
              Résumé <ArrowUpRight width={16} height={16} />
            </a>
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="grid size-11 place-items-center rounded-full border border-white/15 bg-ink/60 backdrop-blur-md md:hidden"
            >
              {open ? <Close /> : <Menu />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ clipPath: "circle(0% at calc(100% - 44px) 40px)" }}
            animate={{ clipPath: "circle(150% at calc(100% - 44px) 40px)" }}
            exit={{ clipPath: "circle(0% at calc(100% - 44px) 40px)" }}
            transition={{ duration: 0.7, ease }}
            className="fixed inset-0 z-40 flex flex-col justify-between bg-ink-2 px-6 pt-28 pb-10 md:hidden"
          >
            <nav aria-label="Mobile">
              <ul className="space-y-2">
                {nav.map((item, i) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 + i * 0.06, duration: 0.6, ease }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="flex items-baseline gap-4 py-1 font-serif text-5xl"
                    >
                      <span className="font-mono text-xs text-coral">0{i + 1}</span>
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>
            <div className="space-y-6">
              <a
                href={site.cv}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-paper px-6 py-3.5 text-sm font-medium text-ink"
              >
                Download résumé <ArrowUpRight width={16} height={16} />
              </a>
              <p className="font-mono text-xs text-mute">{site.email}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
