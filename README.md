# Fatimah Akanbi · Portfolio

Personal site for Fatimah Akanbi, Frontend & Mobile Engineer.

**Stack:** Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS 4 · Three.js / React Three Fiber · Motion · Lenis

## Run it

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build (all pages are static)
```

## Where things live

| What | File |
| --- | --- |
| Name, links, stats, stack, experience, testimonials | `src/lib/site.ts` |
| Projects and case-study content | `src/lib/projects.ts` |
| Project screenshots (1440×900) | `public/work/` |
| Résumé PDF | `public/Fatimah-Akanbi-CV.pdf` |
| 3D hero (custom GLSL particle system) | `src/components/three/Constellation.tsx` |
| Page sections | `src/components/sections/` |

To add a project, add an entry to `projects` in `src/lib/projects.ts` (set `featured: true` to put it in the stacked showcase), and drop a screenshot into `public/work/`. Its case study page at `/work/<slug>` is generated automatically.

## Motion and accessibility

- With `prefers-reduced-motion`, smooth scroll, autoplaying animation and tilt effects are turned off. The 3D scene still responds to scrolling, but stops animating on its own.
- The WebGL canvas only renders while the hero is on screen. Phones get fewer particles.
- There's a skip link, visible focus rings and screen-reader labels on icon-only links and external links.
