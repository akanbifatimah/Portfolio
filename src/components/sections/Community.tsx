import { classroom, community, testimonials } from "@/lib/site";
import { Reveal, SplitText } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ArrowUpRight } from "@/components/ui/icons";

export function Community() {
  return (
    <section aria-labelledby="community-title" className="relative border-t border-white/8 py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionLabel>Beyond the code</SectionLabel>
        <h2 id="community-title" className="mt-6 max-w-4xl text-[clamp(2.4rem,5vw,4.25rem)] leading-[0.98] font-medium tracking-[-0.035em]">
          <SplitText text="I teach what I build," />{" "}
          <SplitText text="and build who comes next." delay={0.15} className="font-serif font-normal text-paper/80 italic" />
        </h2>

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {community.map((c, i) => (
            <Reveal key={c.org} delay={i * 0.08} className="h-full">
              <a
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col rounded-3xl border border-white/10 bg-ink-2 p-7 transition-colors hover:border-coral/50"
              >
                <div className="flex items-start justify-between gap-4">
                  <p className="font-mono text-[11px] tracking-[0.18em] text-mute uppercase">{c.title}</p>
                  <ArrowUpRight
                    width={18}
                    height={18}
                    className="shrink-0 text-paper/50 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-coral"
                  />
                </div>
                <h3 className="mt-10 font-serif text-3xl italic">{c.org}</h3>
                <p className="mt-3 text-sm leading-relaxed text-paper/60">{c.body}</p>
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 rounded-3xl border border-dashed border-white/12 p-7">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-sm">
              <h3 className="font-medium">From the classroom</h3>
              <p className="mt-1 text-sm text-paper/55">
                Projects from my time as a coding instructor, built alongside my students.
              </p>
            </div>
            <ul className="flex flex-wrap gap-2">
              {classroom.map((c) => (
                <li key={c.href}>
                  <a
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-4 py-2 text-sm text-paper/75 transition-colors hover:border-white/30 hover:text-paper"
                  >
                    {c.title}
                    <ArrowUpRight width={14} height={14} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <div className="mt-28">
          <h3 className="sr-only">What people say</h3>
          <div className="grid gap-5 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.1} className="h-full">
                <figure className="flex h-full flex-col justify-between rounded-3xl bg-white/3 p-8">
                  <blockquote className="font-serif text-xl leading-snug text-paper/85 italic">
                    <span className="text-coral" aria-hidden>
                      “
                    </span>
                    {t.quote}
                    <span className="text-coral" aria-hidden>
                      ”
                    </span>
                  </blockquote>
                  <figcaption className="mt-8 flex items-center gap-3 border-t border-white/8 pt-5">
                    <span
                      aria-hidden
                      className="grid size-10 place-items-center rounded-full bg-linear-to-br from-coral to-violet font-medium text-ink"
                    >
                      {t.name[0]}
                    </span>
                    <span>
                      <span className="block text-sm font-medium">{t.name}</span>
                      <span className="block text-xs text-mute">{t.title}</span>
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
