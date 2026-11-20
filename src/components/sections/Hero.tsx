"use client";

import dynamic from "next/dynamic";
import { motion, useInView, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { site } from "@/lib/site";
import { Button } from "@/components/ui/Button";
import { Magnetic } from "@/components/ui/Magnetic";
import { SplitText, ease } from "@/components/ui/Reveal";
import { ArrowDown, ArrowRight, Download } from "@/components/ui/icons";

const Constellation = dynamic(() => import("@/components/three/Constellation"), { ssr: false });

export function Hero() {
  const section = useRef<HTMLElement>(null);
  const reduce = useReducedMotion() ?? false;
  const active = useInView(section, { margin: "0px 0px 0px 0px" });

  const { scrollYProgress } = useScroll({ target: section, offset: ["start start", "end end"] });
  const morph = useTransform(scrollYProgress, [0.12, 0.62], [0, 1], { clamp: true });

  const introOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
  const introY = useTransform(scrollYProgress, [0, 0.25], [0, -80]);
  const introEvents = useTransform(introOpacity, (v) => (v < 0.2 ? "none" : "auto"));
  const outroOpacity = useTransform(scrollYProgress, [0.55, 0.75], [0, 1]);
  const outroY = useTransform(scrollYProgress, [0.55, 0.75], [40, 0]);
  const hintOpacity = useTransform(scrollYProgress, [0, 0.06], [1, 0]);

  return (
    <section ref={section} aria-label="Introduction" className="relative h-[260vh]">
      <div className="sticky top-0 h-svh overflow-hidden">
        {/* Soft colour fields behind the particles; also the fallback if WebGL is unavailable. */}
        <div aria-hidden className="absolute inset-0">
          <div className="absolute top-1/2 right-[8%] size-140 -translate-y-1/2 rounded-full bg-violet/20 blur-[140px] max-md:top-1/4 max-md:right-1/2 max-md:size-90 max-md:translate-x-1/2" />
          <div className="absolute right-[22%] bottom-[12%] size-80 rounded-full bg-coral/15 blur-[120px]" />
        </div>

        <Constellation morph={morph} active={active} reducedMotion={reduce} />

        {/* Intro */}
        <motion.div
          style={{ opacity: introOpacity, y: introY, pointerEvents: introEvents }}
          className="relative mx-auto flex h-full max-w-7xl flex-col justify-end px-5 pt-28 pb-24 sm:px-8 md:justify-center md:pt-32 md:pb-28"
        >
          <h1 className="text-[20vw] leading-[0.82] font-medium tracking-[-0.04em] md:text-[clamp(3.5rem,min(10vw,16vh),9.5rem)]">
            <SplitText text="Fatimah" onMount delay={0.35} className="block" />
            <SplitText text="Akanbi" onMount delay={0.5} className="text-gradient mt-[-0.06em] block pr-4 font-serif font-normal tracking-[-0.02em] italic" />
          </h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.9 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-paper/70 sm:text-lg md:mt-[min(2rem,3.5vh)]"
          >
            I lead frontend and mobile builds end to end, from Figma to the App Store. My work spans
            telehealth, logistics, fintech and education products that real people rely on every day.
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 1.05 }}
            className="mt-8 flex flex-wrap items-center gap-3 md:mt-[min(2.5rem,4.5vh)]"
          >
            <Magnetic>
              <Button href="/#work">
                View selected work
                <ArrowRight width={16} height={16} className="transition-transform group-hover:translate-x-1" />
              </Button>
            </Magnetic>
            <Magnetic>
              <Button href={site.cv} variant="ghost" external>
                <Download width={16} height={16} />
                Download résumé
              </Button>
            </Magnetic>
          </motion.div>
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          style={{ opacity: hintOpacity }}
          className="pointer-events-none absolute inset-x-0 bottom-0 mx-auto flex max-w-7xl items-center justify-between px-5 pb-7 font-mono text-[11px] tracking-[0.18em] text-mute uppercase sm:px-8"
        >
          <span>
            Lagos, Nigeria<span className="max-sm:hidden"> · Working remotely</span>
          </span>
          <span className="flex items-center gap-2">
            Scroll <ArrowDown width={14} height={14} className="animate-bounce" />
          </span>
        </motion.div>

        {/* Outro: once the sphere has split into the three products */}
        <motion.div
          style={{ opacity: outroOpacity, y: outroY }}
          className="pointer-events-none absolute inset-x-0 top-20 px-5 text-center sm:top-[min(7rem,12vh)]"
        >
          <p className="font-mono text-[11px] tracking-[0.25em] text-coral uppercase">In 2026 alone</p>
          <h2 className="mx-auto mt-3 max-w-4xl text-[clamp(1.9rem,min(5vw,7.5vh),4.25rem)] leading-[1.02] font-medium tracking-[-0.03em]">
            Three products. Nine codebases.{" "}
            <span className="font-serif font-normal italic text-paper/90">One engineer.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-paper/60 sm:text-base">
            A website, a web app and mobile apps for each one, all designed, built and shipped.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
