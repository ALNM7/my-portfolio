# Portfolio: Alfredo Navarrete Montes

Personal portfolio for work in high-performance computing, distributed systems and applied NLP.
Single-page React app, no backend.

## Running it

```bash
npm install
npm run dev        # dev server
npm run typecheck  # tsc --noEmit
npm run build      # typecheck, then production build to dist/
npm run preview    # serve the production build
```

Node 20 or newer (see `.nvmrc`).

## Stack

React 18, TypeScript, Vite, Tailwind CSS v4, motion, lucide-react. No component library: the few
primitives the site needs live in `src/components/primitives` and `src/components/data`.

## Structure

```
src/
  data/          content: profile, projects (incl. case studies and chart data), experience, skills
  components/    section components; primitives/ and data/ hold the shared building blocks
  hooks/         theme, scroll-spy, and the hash route backing the case-study panel
  styles/        design tokens and base styles
```

Content lives in `src/data` and is typed by `src/data/types.ts`. Editing a project, a metric or a
chart means editing data, not JSX.

## Conventions

- Numbers on the site come from the linked repository's README or its report. Bounds are shown as
  bounds, team projects state which part was mine, and reported limitations are kept.
- Typography: Source Serif 4 carries display and body, JetBrains Mono carries labels, units, tags,
  navigation and tool lists. Both are self-hosted as variable WOFF2 under `public/fonts`, latin and
  latin-ext subsets only. The two latin faces are preloaded in `index.html`; latin-ext stays behind
  its `unicode-range`. A `Source Serif Fallback` face carries Source Serif's own line-box metrics so
  the swap cannot shift anything vertically.
- Colour: one ink-on-paper system in two themes. Cyan is the primary ink, magenta the second, amber
  the third; solid fills always take `--ink`, never white. Every text token clears WCAG 4.5:1 on bg,
  bg-raised, surface and surface-2 in both themes.
- No cards and no shadows. Hierarchy is carried by hairlines, the index channel and air. The single
  radius is 2px, and the only vertical rule on a page is the figures rail in Work.
- Motion: curves, durations and stagger offsets live in `src/lib/motion.ts`. Entrances decelerate,
  interactive feedback stays under 300ms, and only `transform` and `opacity` are animated.
- Theming: light and dark palettes are CSS custom properties under `:root[data-theme]`, exposed to
  Tailwind through `@theme inline`. An inline script in `index.html` applies the stored choice
  before first paint to avoid a flash.
- Case studies open as a panel and are deep-linkable at `#/case/<id>`, closed by the browser back
  button. No router dependency.
- Charts are rendered as layout rather than canvas or SVG so they stay legible at phone width, and
  each ships a visually hidden `<table>` with the same numbers for assistive tech.
