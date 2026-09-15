import { useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { AlertTriangle, Github, X } from 'lucide-react';
import type { Project } from '../data/types';
import { BarChart } from './data/BarChart';
import { DataTable } from './data/DataTable';
import { Tag } from './primitives/Tag';
import { DUR_PANEL, entrance } from '../lib/motion';

/**
 * Full-height side panel holding the long-form write-up for one project.
 * Opened from the work index and deep-linkable via `#/case/<id>`.
 */
export function CaseStudy({ project, onClose }: { project: Project | null; onClose: () => void }) {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!project) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', onKeyDown);
    panelRef.current?.focus();
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-50" role="dialog" aria-modal="true" aria-label={project.title}>
          <motion.button
            type="button"
            aria-label="Close case study"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: DUR_PANEL, ease: entrance }}
            onClick={onClose}
            className="absolute inset-0 h-full w-full cursor-default bg-[rgb(5_5_5_/_0.72)]"
          />

          <motion.div
            ref={panelRef}
            tabIndex={-1}
            initial={{ x: 24, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 24, opacity: 0 }}
            transition={{ duration: DUR_PANEL, ease: entrance }}
            className="thin-scroll absolute inset-y-0 right-0 w-full max-w-3xl overflow-y-auto border-l border-line-strong bg-bg-raised outline-none"
          >
            <header className="sticky top-0 z-10 flex items-center justify-between gap-4 border-b border-line bg-bg-raised px-5 py-3.5 sm:px-8">
              <span className="label-mono truncate">Case study</span>
              <div className="flex items-center gap-2">
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mono-ui link-rule inline-flex items-center gap-1.5 text-fg-dim"
                >
                  <Github className="size-3.5" />
                  Repository
                </a>
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close case study"
                  className="rounded-ink border border-line-strong p-2 text-fg-dim transition-colors duration-[160ms] hover:border-accent hover:text-fg"
                >
                  <X className="size-4" />
                </button>
              </div>
            </header>

            <div className="px-5 pt-10 pb-20 sm:px-8">
              <div className="label-mono mb-4 flex flex-wrap items-center gap-x-4 gap-y-1">
                <span className="text-fg-dim">{project.org}</span>
                <span>{project.period}</span>
              </div>

              <h2 className="text-fg">{project.title}</h2>

              <p className="mt-6 text-[1.0625rem] leading-relaxed text-fg-dim">{project.summary}</p>

              {project.contribution && (
                <div className="mt-6 border-l border-accent-2 pl-4">
                  <div className="label-mono mb-1.5 text-accent-2">My contribution</div>
                  <p className="text-[0.9375rem] leading-[1.6] text-fg-dim italic">
                    {project.contribution}
                  </p>
                </div>
              )}

              <dl className="mt-8 grid grid-cols-1 gap-6 border-t border-line pt-6 sm:grid-cols-3">
                {project.metrics.map((metric) => (
                  <div key={metric.label}>
                    <dd className="flex items-baseline gap-1.5">
                      <span className="numeral numeral-rail text-fg">{metric.value}</span>
                      {metric.unit && (
                        <span className="font-mono text-[0.75rem] text-fg-dim">{metric.unit}</span>
                      )}
                    </dd>
                    <dt className="label-mono mt-1.5">{metric.label}</dt>
                  </div>
                ))}
              </dl>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </div>

              {project.sections.map((section) => (
                <section key={section.heading} className="mt-12">
                  <h3 className="mb-4 text-fg">{section.heading}</h3>
                  {section.body.map((paragraph) => (
                    <p
                      key={paragraph.slice(0, 40)}
                      className="mb-4 text-[0.9375rem] leading-[1.75] text-fg-dim last:mb-0"
                    >
                      {paragraph}
                    </p>
                  ))}
                  {section.bullets && (
                    <ul className="mt-4 space-y-3">
                      {section.bullets.map((bullet) => (
                        <li
                          key={bullet.slice(0, 40)}
                          className="flex gap-3 text-[0.9375rem] leading-[1.7] text-fg-dim"
                        >
                          <span className="mt-[0.8em] h-px w-3 shrink-0 bg-accent" aria-hidden="true" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}

              {project.charts && project.charts.length > 0 && (
                <section className="mt-14">
                  <h3 className="mb-5 text-fg">Measurements</h3>
                  <div className="space-y-4">
                    {project.charts.map((chart) => (
                      <BarChart key={chart.title} spec={chart} />
                    ))}
                  </div>
                </section>
              )}

              {project.tables && project.tables.length > 0 && (
                <section className="mt-10 space-y-4">
                  {project.tables.map((table) => (
                    <DataTable key={table.caption ?? table.head.join('|')} spec={table} />
                  ))}
                </section>
              )}

              {project.caveats && project.caveats.length > 0 && (
                <section className="mt-12 border-t border-line pt-6">
                  <div className="mb-3 flex items-center gap-2">
                    <AlertTriangle className="size-4 text-warn" />
                    <h4 className="text-[1.0625rem] text-fg">Limitations, as reported</h4>
                  </div>
                  <ul className="space-y-2.5">
                    {project.caveats.map((caveat) => (
                      <li
                        key={caveat.slice(0, 40)}
                        className="flex gap-3 text-[0.8125rem] leading-relaxed text-fg-dim"
                      >
                        <span
                          className="mt-[0.8em] h-px w-3 shrink-0 bg-line-strong"
                          aria-hidden="true"
                        />
                        <span>{caveat}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
