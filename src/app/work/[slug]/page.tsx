import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/lib/projects";
import { ProjectVisual } from "@/components/ui/ProjectVisual";
import { Reveal, SplitText } from "@/components/ui/Reveal";
import { Tilt } from "@/components/ui/Tilt";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "@/components/ui/icons";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.name} case study`,
    description: project.summary,
    openGraph: { title: `${project.name} · Fatimah Akanbi`, description: project.summary },
  };
}

export default async function CaseStudy({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === slug);
  const next = projects[(index + 1) % projects.length];

  return (
    <main id="main" className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-60 left-1/2 h-150 w-[80vw] -translate-x-1/2 rounded-full opacity-25 blur-[140px]"
        style={{ background: project.accent }}
      />

      <article className="relative mx-auto max-w-7xl px-5 pt-36 pb-24 sm:px-8 sm:pt-44">
        <Link
          href="/#work"
          className="group inline-flex items-center gap-2 font-mono text-xs tracking-[0.18em] text-mute uppercase transition-colors hover:text-paper"
        >
          <ArrowLeft width={14} height={14} className="transition-transform group-hover:-translate-x-1" />
          All work
        </Link>

        <header className="mt-10">
          <p className="font-mono text-xs tracking-[0.2em] uppercase" style={{ color: project.accent }}>
            {project.sector} · {project.year}
          </p>
          <h1 className="mt-5 text-[clamp(3.5rem,11vw,9rem)] leading-[0.9] font-medium tracking-[-0.045em]">
            <SplitText text={project.name} onMount />
          </h1>
          <p className="mt-5 max-w-2xl font-serif text-2xl text-paper/75 italic sm:text-3xl">{project.tagline}</p>
        </header>

        <Reveal className="mt-14 grid gap-8 border-y border-white/10 py-8 sm:grid-cols-2 lg:grid-cols-4">
          <Meta label="Role" value={project.role} />
          <Meta label="Company" value={project.company} />
          <Meta label="Platforms" value={project.platforms.join(" · ")} />
          <div>
            <p className="font-mono text-[11px] tracking-[0.18em] text-mute uppercase">Live</p>
            {project.links.length > 0 ? (
              <ul className="mt-2 space-y-1">
                {project.links.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-1.5 hover:underline hover:underline-offset-4"
                    >
                      {l.href.replace(/^https?:\/\//, "")}
                      <ArrowUpRight width={15} height={15} />
                      <span className="sr-only">(opens in a new tab)</span>
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-2" style={{ color: project.accent }}>
                {project.status ?? "Private"}
              </p>
            )}
          </div>
        </Reveal>

        <Reveal className="mt-16">
          <Tilt className="rounded-3xl" max={4}>
            <ProjectVisual project={project} priority sizes="(min-width: 1280px) 1200px, 100vw" />
          </Tilt>
        </Reveal>

        <div className="mt-24 grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <h2 className="font-mono text-xs tracking-[0.2em] text-mute uppercase">Overview</h2>
            <p className="mt-5 text-xl leading-relaxed text-paper/80">{project.summary}</p>

            {project.metrics.length > 0 && (
              <dl className="mt-10 grid grid-cols-3 gap-4">
                {project.metrics.map((m) => (
                  <div key={m.label} className="flex flex-col-reverse rounded-2xl border border-white/10 p-4">
                    <dt className="mt-1 text-xs text-mute">{m.label}</dt>
                    <dd className="text-3xl font-medium tracking-tight">{m.value}</dd>
                  </div>
                ))}
              </dl>
            )}

            <h2 className="mt-12 font-mono text-xs tracking-[0.2em] text-mute uppercase">Stack</h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((s) => (
                <li key={s} className="rounded-full border border-white/10 px-3 py-1.5 text-sm text-paper/75">
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h2 className="font-mono text-xs tracking-[0.2em] text-mute uppercase">What I built</h2>
            {project.sections.map((section, i) => (
              <Reveal key={section.title} delay={0.05 * i}>
                <section className="rounded-3xl border border-white/10 bg-ink-2 p-7 sm:p-9">
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-xs" style={{ color: project.accent }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-2xl font-medium tracking-tight">{section.title}</h3>
                  </div>
                  <ul className="mt-6 space-y-3.5">
                    {section.points.map((p) => (
                      <li key={p} className="flex gap-3 leading-relaxed text-paper/70">
                        <span className="mt-2.5 size-1.5 shrink-0 rounded-full" style={{ background: project.accent }} aria-hidden />
                        {p}
                      </li>
                    ))}
                  </ul>
                </section>
              </Reveal>
            ))}
          </div>
        </div>

        <Link
          href={`/work/${next.slug}`}
          className="group mt-32 flex flex-col gap-4 border-t border-white/10 pt-10 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <p className="font-mono text-xs tracking-[0.2em] text-mute uppercase">Next project</p>
            <p className="mt-3 text-[clamp(2.5rem,7vw,6rem)] leading-none font-medium tracking-[-0.04em] transition-colors group-hover:text-coral">
              {next.name}
            </p>
          </div>
          <span className="grid size-16 place-items-center rounded-full border border-white/15 transition-all group-hover:border-coral group-hover:bg-coral group-hover:text-ink">
            <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
          </span>
        </Link>
      </article>
    </main>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="font-mono text-[11px] tracking-[0.18em] text-mute uppercase">{label}</p>
      <p className="mt-2">{value}</p>
    </div>
  );
}
