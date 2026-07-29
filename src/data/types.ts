export type Bar = {
  label: string;
  value: number;
  /** Rendered de-emphasised, for baselines and for runs I did not own. */
  muted?: boolean;
  /** Highlighted as the headline result of the chart. */
  peak?: boolean;
  /** Replaces the printed value, e.g. "<300" for a bound rather than a measurement. */
  display?: string;
  /** Small caption under the bar label. */
  note?: string;
};

export type BarChartSpec = {
  kind: 'bar';
  title: string;
  unit: string;
  caption?: string;
  footnote?: string;
  bars: Bar[];
};

export type TableSpec = {
  caption?: string;
  head: string[];
  rows: string[][];
  footnote?: string;
};

export type Metric = {
  value: string;
  unit?: string;
  label: string;
};

export type CaseSection = {
  heading: string;
  body: string[];
  bullets?: string[];
};

export type Project = {
  id: string;
  title: string;
  /** One line, shown in the index row. */
  tagline: string;
  org: string;
  period: string;
  repo: string;
  /** Present when the work was a team effort; states exactly what was mine. */
  contribution?: string;
  stack: string[];
  /** Up to three numbers surfaced on the index row. */
  metrics: Metric[];
  /** Long-form case study. */
  summary: string;
  sections: CaseSection[];
  charts?: BarChartSpec[];
  tables?: TableSpec[];
  /** Caveats stated in the repo README; reproduced rather than smoothed over. */
  caveats?: string[];
};

export type SideProject = {
  title: string;
  description: string;
  stack: string[];
  repo: string;
};
