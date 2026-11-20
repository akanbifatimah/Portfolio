"use client";

import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "motion/react";
import { useRef } from "react";
import { featuredProjects, moreProjects, type Project } from "@/lib/projects";
import { ProjectVisual } from "@/components/ui/ProjectVisual";
import { Reveal, SplitText } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Tilt } from "@/components/ui/Tilt";
import { ArrowRight, ArrowUpRight } from "@/components/ui/icons";

export function Work() {
  const stack = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: stack, offset: ["start start", "end end"] });

  return (
    <section id="work" className="relative scroll-mt-20 py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <SectionLabel>Selected work</SectionLabel>
            <h2 className="mt-6 max-w-3xl text-[clamp(2.4rem,6vw,5rem)] leading-[0.98] font-medium tracking-[-0.035em]">
              <SplitText text="Products I've led," />{" "}
              <SplitText text="from first commit to the stores." delay={0.15} className="font-serif font-normal text-paper/80 italic" />
            </h2>
          </div>
          <Reveal className="max-w-sm text-paper/60">
            I&apos;ve led frontend and mobile work on telehealth, logistics, education and fintech products. Each
            one has a live link where it&apos;s public, and a case study with the details.
          </Reveal>
        </div>

        <div ref={stack} className="relative mt-16 space-y-6 lg:mt-24 lg:space-y-[12vh]">
          {featuredProjects.map((project, i) => (
            <FeaturedCard
              key={project.slug}
              project={project}
              index={i}
              total={featuredProjects.length}
              progress={scrollYProgress}
            />
          ))}
        </div>

        <div className="mt-28 sm:mt-36">
          <Reveal className="flex items-end justify-between gap-6 border-b border-white/10 pb-6">
            <h3 className="text-2xl font-medium tracking-tight sm:text-3xl">More shipped work</h3>
            <p className="font-mono text-xs text-mute">{String(moreProjects.length).padStart(2, "0")} projects</p>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {moreProjects.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 2) * 0.1}>
                <MoreCard project={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturedCard({
  project,
  index,
  total,
  progress,
}: {
  project: Project;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const reduce = useReducedMotion();
  const start = index / total;
  const scale = useTransform(progress, [start, 1], [1, 1 - (total - 1 - index) * 0.045]);
  const dim = useTransform(progress, [start, Math.min(1, start + 1 / total)], [0, index === total - 1 ? 0 : 0.45]);

  return (
    <div className="lg:sticky" style={{ top: `calc(6rem + ${index * 1.75}rem)` }}>
      <motion.article
        style={reduce ? undefined : { scale, transformOrigin: "top center" }}
        className="relative overflow-hidden rounded-3xl border border-white/10 bg-ink-2 p-6 sm:p-8 lg:grid lg:min-h-150 lg:grid-cols-[1fr_1.2fr] lg:gap-12 lg:p-12"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 -left-40 size-120 rounded-full opacity-25 blur-[110px]"
          style={{ background: project.accent }}
        />

        <div className="relative flex flex-col">
          <div className="flex items-center justify-between font-mono text-[11px] tracking-[0.18em] text-mute uppercase">
            <span>
              <span style={{ color: project.accent }}>{String(index + 1).padStart(2, "0")}</span> / {String(total).padStart(2, "0")}
            </span>
            <span>
              {project.sector} · {project.year}
            </span>
          </div>

          <h3 className="mt-8 text-5xl font-medium tracking-[-0.04em] sm:text-6xl">{project.name}</h3>
          <p className="mt-3 font-serif text-xl text-paper/70 italic sm:text-2xl">{project.tagline}</p>
          <p className="mt-5 max-w-lg leading-relaxed text-paper/65">{project.summary}</p>

          {project.metrics.length > 0 && (
            <dl className="mt-8 grid grid-cols-3 gap-4 border-y border-white/8 py-5">
              {project.metrics.map((m) => (
                <div key={m.label}>
                  <dt className="sr-only">{m.label}</dt>
                  <dd className="text-2xl font-medium tracking-tight sm:text-3xl">{m.value}</dd>
                  <dd className="mt-1 text-xs text-mute">{m.label}</dd>
                </div>
              ))}
            </dl>
          )}

          <ul className="mt-6 flex flex-wrap gap-2" aria-label="Platforms">
            {project.platforms.map((p) => (
              <li key={p} className="rounded-full border border-white/10 px-3 py-1 text-xs text-paper/70">
                {p}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 lg:mt-auto lg:pt-8">
            <Link
              href={`/work/${project.slug}`}
              className="group inline-flex items-center gap-2 rounded-full bg-paper px-5 py-3 text-sm font-medium text-ink transition-colors hover:bg-coral"
            >
              Case study
              <ArrowRight width={16} height={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            {project.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 text-sm text-paper/80 underline-offset-4 hover:text-paper hover:underline"
              >
                {l.label}
                <ArrowUpRight width={15} height={15} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                <span className="sr-only">(opens {project.name} in a new tab)</span>
              </a>
            ))}
          </div>
        </div>

        <Tilt className="relative mt-10 self-center rounded-2xl lg:mt-0">
          <Link href={`/work/${project.slug}`} aria-label={`${project.name} case study`} className="block rounded-2xl">
            <ProjectVisual project={project} priority={index === 0} />
          </Link>
        </Tilt>

        <motion.div aria-hidden className="pointer-events-none absolute inset-0 bg-ink" style={reduce ? { opacity: 0 } : { opacity: dim }} />
      </motion.article>
    </div>
  );
}

function MoreCard({ project }: { project: Project }) {
  return (
    <article className="group relative overflow-hidden rounded-3xl border border-white/10 bg-ink-2 p-4 transition-colors hover:border-white/20 sm:p-5">
      <div className="overflow-hidden rounded-2xl">
        <div className="transition-transform duration-700 ease-out group-hover:scale-[1.03]">
          <ProjectVisual project={project} sizes="(min-width: 640px) 45vw, 100vw" />
        </div>
      </div>
      <div className="flex items-start justify-between gap-4 px-2 pt-6 pb-2">
        <div>
          <p className="font-mono text-[11px] tracking-[0.18em] text-mute uppercase">
            {project.sector} · {project.year}
          </p>
          <h4 className="mt-2 text-2xl font-medium tracking-tight">
            <Link href={`/work/${project.slug}`} className="after:absolute after:inset-0">
              {project.name}
            </Link>
          </h4>
          <p className="mt-2 text-sm text-paper/60">
            {project.role} · {project.company}
          </p>
        </div>
        {project.links[0] && (
          <a
            href={project.links[0].href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${project.name} (opens in a new tab)`}
            className="relative z-10 grid size-11 shrink-0 place-items-center rounded-full border border-white/15 transition-colors hover:border-coral hover:bg-coral hover:text-ink"
          >
            <ArrowUpRight width={18} height={18} />
          </a>
        )}
      </div>
    </article>
  );
}
