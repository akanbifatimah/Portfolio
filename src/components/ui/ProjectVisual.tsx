import Image from "next/image";
import type { Project } from "@/lib/projects";

/** A browser-frame mockup of the live site, or a designed brand panel when there is no public page yet. */
export function ProjectVisual({ project, priority = false, sizes }: { project: Project; priority?: boolean; sizes?: string }) {
  const host = project.links[0]?.href.replace(/^https?:\/\//, "") ?? project.domain ?? project.name;

  return (
    <div className="relative size-full overflow-hidden rounded-[inherit] border border-white/10 bg-ink-3 shadow-2xl shadow-black/50">
      {/* Browser chrome */}
      <div className="flex h-9 items-center gap-3 border-b border-white/8 bg-ink-2 px-4">
        <div className="flex gap-1.5" aria-hidden>
          <span className="size-2.5 rounded-full bg-white/15" />
          <span className="size-2.5 rounded-full bg-white/15" />
          <span className="size-2.5 rounded-full bg-white/15" />
        </div>
        <div className="mx-auto max-w-[60%] truncate rounded-md bg-white/5 px-3 py-0.5 font-mono text-[10px] text-mute">
          {host}
        </div>
      </div>

      <div className="relative aspect-16/10">
        {project.image ? (
          <Image
            src={project.image}
            alt={`${project.name} home page`}
            fill
            priority={priority}
            sizes={sizes ?? "(min-width: 1024px) 50vw, 100vw"}
            className="object-cover object-top"
          />
        ) : (
          <BrandPanel project={project} />
        )}
      </div>
    </div>
  );
}

function BrandPanel({ project }: { project: Project }) {
  return (
    <div
      className="absolute inset-0 flex flex-col justify-between overflow-hidden p-6 sm:p-8"
      style={{
        background: `radial-gradient(120% 90% at 85% 10%, ${project.accent}33, transparent 55%), radial-gradient(80% 80% at 0% 100%, ${project.accent}1f, transparent 60%), #0d0d13`,
      }}
      role="img"
      aria-label={`${project.name}: ${project.platforms.join(", ")}`}
    >
      {/* Grid lines */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgb(255 255 255 / 0.06) 1px, transparent 1px), linear-gradient(to bottom, rgb(255 255 255 / 0.06) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />

      <div className="relative flex items-center justify-between">
        <span className="font-mono text-[10px] tracking-[0.25em] text-paper/60 uppercase">{project.sector}</span>
        {project.status && (
          <span
            className="flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-[10px] tracking-[0.15em] uppercase"
            style={{ borderColor: `${project.accent}55`, color: project.accent }}
          >
            <span className="size-1.5 animate-pulse-dot rounded-full" style={{ background: project.accent }} />
            {project.status}
          </span>
        )}
      </div>

      {/* Device silhouettes: a dashboard and a phone */}
      <div aria-hidden className="relative mx-auto flex w-full max-w-md items-end justify-center gap-4">
        <div className="w-3/4 rounded-lg border border-white/12 bg-white/3 p-2.5 backdrop-blur-sm">
          <div className="mb-2 flex gap-1">
            <span className="h-1.5 w-8 rounded-full" style={{ background: project.accent }} />
            <span className="h-1.5 w-5 rounded-full bg-white/15" />
          </div>
          <div className="grid grid-cols-3 gap-1.5">
            {[0, 1, 2].map((i) => (
              <div key={i} className="h-7 rounded-sm bg-white/6" />
            ))}
            <div className="col-span-2 h-14 rounded-sm bg-white/6">
              <svg viewBox="0 0 100 40" className="size-full" preserveAspectRatio="none">
                <path d="M0 32 L15 26 L30 29 L45 17 L60 21 L75 9 L100 13" fill="none" stroke={project.accent} strokeWidth="1.5" />
              </svg>
            </div>
            <div className="h-14 rounded-sm bg-white/6" />
          </div>
        </div>
        <div className="w-1/5 min-w-14 rounded-xl border border-white/15 bg-ink p-1.5">
          <div className="mx-auto mb-1.5 h-1 w-5 rounded-full bg-white/20" />
          <div className="space-y-1">
            <div className="h-6 rounded-sm" style={{ background: `${project.accent}40` }} />
            <div className="h-3 rounded-sm bg-white/8" />
            <div className="h-3 rounded-sm bg-white/8" />
            <div className="h-3 w-2/3 rounded-sm bg-white/8" />
          </div>
        </div>
      </div>

      <p className="relative font-serif text-4xl text-paper italic sm:text-5xl">{project.name}</p>
    </div>
  );
}
