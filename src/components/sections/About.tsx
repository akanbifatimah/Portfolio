import Image from "next/image";
import headshot from "../../../public/images/Headshot.jpeg";
import { Reveal, SplitText } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Tilt } from "@/components/ui/Tilt";

const values = [
  { title: "Detail you can feel", body: "Fast screens, honest loading states and flows that never leave people guessing." },
  { title: "Built for everyone", body: "Semantic markup, screen-reader labels and keyboard paths are part of the job, not extras." },
  { title: "Teams that rise together", body: "Code reviews, pairing and mentoring. I'd rather ship as a team than alone." },
];

export function About() {
  return (
    <section id="about" className="relative scroll-mt-20 border-t border-white/8 py-28 sm:py-36">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
        <Reveal className="relative mx-auto w-full max-w-md lg:mx-0">
          <Tilt className="rounded-4xl" max={6}>
            <div className="relative aspect-4/5 overflow-hidden rounded-4xl border border-white/10">
              <Image
                src={headshot}
                alt="Portrait of Fatimah Akanbi"
                fill
                placeholder="blur"
                sizes="(min-width: 1024px) 28rem, 90vw"
                className="object-cover object-top"
              />
              <div aria-hidden className="absolute inset-0 bg-linear-to-t from-ink/70 via-transparent to-transparent" />
              <p className="absolute bottom-5 left-5 font-mono text-[11px] tracking-[0.18em] text-paper/80 uppercase">
                Lagos, Nigeria
              </p>
            </div>
          </Tilt>

          {/* Rotating badge */}
          <div aria-hidden className="absolute -top-8 -right-6 size-28 sm:-right-10 sm:size-32">
            <svg viewBox="0 0 100 100" className="size-full animate-[spin_18s_linear_infinite]">
              <defs>
                <path id="badge-circle" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" />
              </defs>
              <circle cx="50" cy="50" r="49" className="fill-ink stroke-white/15" />
              <text className="fill-paper font-mono text-[9.5px] tracking-[0.2em] uppercase">
                <textPath href="#badge-circle">Frontend · Mobile · Mentor ·</textPath>
              </text>
            </svg>
            <span className="absolute inset-0 grid place-items-center text-xl font-semibold tracking-wider text-coral">FA</span>
          </div>
        </Reveal>

        <div>
          <SectionLabel>About</SectionLabel>
          <h2 className="mt-6 text-[clamp(2.4rem,5vw,4.25rem)] leading-[0.98] font-medium tracking-[-0.035em]">
            <SplitText text="From the chemistry lab" />{" "}
            <SplitText text="to production code." delay={0.15} className="font-serif font-normal text-paper/80 italic" />
          </h2>
          <Reveal className="mt-8 space-y-5 text-lg leading-relaxed text-paper/65">
            <p>
              I didn&apos;t start in tech. I trained as a chemist, with a BSc from the University of Ilorin and an MSc
              from the University of Lagos, and spent two years as an administrative officer before I wrote my first
              line of code. That path taught me precision and documentation, and it taught me to talk to people, not
              just computers.
            </p>
            <p>
              Today I lead frontend and mobile builds for products in healthcare, logistics, education and fintech. I
              take a design from Figma to a production web app and a store-ready mobile app, and I stay with it after
              launch.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08} className="border-t border-white/10 pt-5">
                <h3 className="font-medium">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-paper/55">{v.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
