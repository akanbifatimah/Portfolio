"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "motion/react";
import { useRef } from "react";
import { experience } from "@/lib/site";
import { Reveal, SplitText } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function Experience() {
  const list = useRef<HTMLOListElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: list, offset: ["start 75%", "end 60%"] });
  const line = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <section id="experience" className="relative scroll-mt-20 border-t border-white/8 py-28 sm:py-36">
      <div className="mx-auto grid max-w-7xl gap-16 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionLabel>Experience</SectionLabel>
          <h2 className="mt-6 text-[clamp(2.4rem,5vw,4.25rem)] leading-[0.98] font-medium tracking-[-0.035em]">
            <SplitText text="Five years," />{" "}
            <SplitText text="seven teams," delay={0.1} className="font-serif font-normal text-paper/80 italic" />{" "}
            <SplitText text="one habit: ship." delay={0.2} />
          </h2>
          <Reveal className="mt-8 max-w-sm text-paper/60">
            From my first frontend role in Lagos to leading frontend and mobile at Harris Consult, I&apos;ve grown by
            owning more of the product with each role.
          </Reveal>
        </div>

        <div className="relative pl-8 sm:pl-12">
          <div aria-hidden className="absolute top-2 bottom-2 left-0 w-px bg-white/10" />
          <motion.div
            aria-hidden
            className="absolute top-2 bottom-2 left-0 w-px origin-top bg-linear-to-b from-coral via-violet to-mint"
            style={{ scaleY: reduce ? 1 : line }}
          />
          <ol ref={list} className="space-y-14">
          {experience.map((job, i) => (
            <li key={job.company} className="relative">
              <span
                aria-hidden
                className={`absolute top-2 -left-8 size-2.5 -translate-x-1/2 rounded-full ring-4 ring-ink sm:-left-12 ${i === 0 ? "bg-coral" : "bg-white/30"}`}
              />
              <Reveal>
                <p className="font-mono text-[11px] tracking-[0.18em] text-mute uppercase">
                  {job.period} · {job.location}
                </p>
                <h3 className="mt-3 text-2xl font-medium tracking-tight sm:text-3xl">{job.company}</h3>
                <p className="mt-1 font-serif text-lg text-coral italic">{job.role}</p>
                <ul className="mt-5 space-y-3">
                  {job.points.map((p) => (
                    <li key={p} className="flex gap-3 leading-relaxed text-paper/65">
                      <span className="mt-2.5 h-px w-3 shrink-0 bg-white/30" aria-hidden />
                      {p}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </li>
          ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
