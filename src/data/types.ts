export type Bar = {
  label: string;
  value: number;
  /** Rendered de-emphasised, e.g. for baselines. */
  muted?: boolean;
  /** Highlighted as the headline result of the chart. */
  peak?: boolean;
  /** Replaces the printed value, e.g. "<300" for a bound. */
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
  /** Set on team projects to state which part was mine. */
  contribution?: string;
  stack: string[];
  /** Up to three numbers surfaced on the index row. */
  metrics: Metric[];
  /** Long-form case study. */
  summary: string;
  sections: CaseSection[];
  charts?: BarChartSpec[];
  tables?: TableSpec[];
  /** Caveats as stated in the repo README. */
  caveats?: string[];
};

export type SideProject = {
  title: string;
  description: string;
  stack: string[];
  repo: string;
};
