import { stack, stats } from "@/lib/site";
import { Counter } from "@/components/ui/Counter";
import { Reveal } from "@/components/ui/Reveal";

export function Impact() {
  return (
    <section aria-label="Impact in numbers" className="relative border-y border-white/8 bg-ink">
      <div className="mx-auto grid max-w-7xl grid-cols-2 lg:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal
            key={s.label}
            delay={i * 0.08}
            className={`border-white/8 px-5 py-12 sm:px-8 sm:py-16 ${i % 2 === 0 ? "border-r" : ""} ${i < 2 ? "max-lg:border-b" : ""} ${i === 1 ? "lg:border-r" : ""}`}
          >
            <p className="text-[clamp(2.75rem,6vw,4.75rem)] leading-none font-medium tracking-[-0.04em]">
              <Counter value={s.value} suffix={s.suffix} />
            </p>
            <p className="mt-4 max-w-[16rem] text-sm text-paper/55">{s.label}</p>
          </Reveal>
        ))}
      </div>

      <div className="relative overflow-hidden border-t border-white/8 py-6" aria-label="Technologies I work with">
        <div className="flex w-max animate-marquee gap-12 pr-12 hover:[animation-play-state:paused]">
          {[...stack, ...stack].map((tech, i) => (
            <span
              key={i}
              aria-hidden={i >= stack.length}
              className="flex items-center gap-12 font-serif text-2xl whitespace-nowrap text-paper/40 italic sm:text-3xl"
            >
              {tech}
              <span className="size-1.5 rounded-full bg-coral/70" aria-hidden />
            </span>
          ))}
        </div>
        <div aria-hidden className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-linear-to-r from-ink to-transparent" />
        <div aria-hidden className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-linear-to-l from-ink to-transparent" />
      </div>
    </section>
  );
}
