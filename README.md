# Portfolio — Alfredo Navarrete Montes

Personal portfolio for work in high-performance computing, distributed systems and applied NLP.
Single-page React app, no backend.

## Editorial rule

Every number on the site is traceable to the linked repository's README or its report. Bounds are
shown as bounds, team projects state which part was mine, and reported limitations are reproduced
rather than dropped. When a project's own README declines to claim a figure, the site declines too.

## Running it

```bash
npm install
npm run dev        # dev server
npm run typecheck  # tsc --noEmit
npm run build      # typecheck, then production build to dist/
npm run preview    # serve the production build
```

## Stack

React 18 · TypeScript · Vite · Tailwind CSS v4 · motion · lucide-react.

No component library: the handful of primitives the site needs live in `src/components/primitives`
and `src/components/data`.

## Structure

```
src/
  data/          content — profile, projects (incl. case studies and chart data), experience, skills
  components/    section components; primitives/ and data/ hold the shared building blocks
  hooks/         theme, scroll-spy, and the hash route backing the case-study panel
  styles/        design tokens and base styles
```

Content lives in `src/data` and is typed by `src/data/types.ts`. Editing a project, a metric or a
chart means editing data, not JSX.

## Notes

- **Theming.** Light and dark palettes are CSS custom properties under `:root[data-theme]`, exposed
  to Tailwind through `@theme inline`. An inline script in `index.html` applies the stored choice
  before first paint so there is no flash.
- **Case studies.** Each opens as a panel and is deep-linkable at `#/case/<id>` — shareable,
  reloadable, and closed by the browser back button. No router dependency.
- **Charts.** Rendered as layout rather than canvas or SVG so they stay legible at phone width, and
  each one ships a visually hidden `<table>` with the same numbers for assistive tech.
