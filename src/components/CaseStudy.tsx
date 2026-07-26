import { useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { AlertTriangle, Github, X } from 'lucide-react';
import type { Project } from '../data/types';
import { BarChart } from './data/BarChart';
import { DataTable } from './data/DataTable';
import { Tag } from './primitives/Tag';

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
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="absolute inset-0 h-full w-full cursor-default bg-bg/70 backdrop-blur-sm"
          />

          <motion.div
            ref={panelRef}
            tabIndex={-1}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="thin-scroll absolute inset-y-0 right-0 w-full max-w-3xl overflow-y-auto border-l border-line bg-bg outline-none"
          >
            <header className="sticky top-0 z-10 flex items-center justify-between gap-4 border-b border-line bg-bg px-5 py-3.5 sm:px-8">
              <span className="label-mono truncate">Case study</span>
              <div className="flex items-center gap-2">
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-md border border-line px-3 py-1.5 text-[0.75rem] text-fg-dim transition-colors hover:border-line-strong hover:text-fg"
                >
                  <Github className="size-3.5" />
                  Repository
                </a>
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close case study"
                  className="rounded-md border border-line p-2 text-fg-dim transition-colors hover:border-line-strong hover:text-fg"
                >
                  <X className="size-4" />
                </button>
              </div>
            </header>

            <div className="px-5 pt-10 pb-20 sm:px-8">
              <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.75rem] text-fg-faint">
                <span>{project.org}</span>
                <span aria-hidden="true">·</span>
                <span className="tabular">{project.period}</span>
              </div>

              <h2 className="text-fg">{project.title}</h2>

              <p className="mt-6 text-[1.0625rem] leading-relaxed text-fg-dim">{project.summary}</p>

              {project.contribution && (
                <div className="mt-6 rounded-md border border-line bg-surface p-4">
                  <div className="label-mono mb-1.5">My contribution</div>
                  <p className="text-[0.875rem] leading-relaxed text-fg-dim">{project.contribution}</p>
                </div>
              )}

              <dl className="mt-8 grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-3">
                {project.metrics.map((metric) => (
                  <div key={metric.label} className="bg-surface p-4">
                    <dd className="flex items-baseline gap-1">
                      <span className="tabular text-xl font-semibold tracking-tight text-fg">
                        {metric.value}
                      </span>
                      {metric.unit && (
                        <span className="font-mono text-[0.6875rem] text-fg-faint">{metric.unit}</span>
                      )}
                    </dd>
                    <dt className="mt-1 text-[0.75rem] leading-snug text-fg-faint">{metric.label}</dt>
                  </div>
                ))}
              </dl>

              <div className="mt-6 flex flex-wrap gap-1.5">
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
                          <span className="mt-2 size-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
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
                <section className="mt-12 rounded-lg border border-line bg-surface p-5">
                  <div className="mb-3 flex items-center gap-2">
                    <AlertTriangle className="size-4 text-warn" />
                    <h3 className="text-[0.9375rem] font-semibold text-fg">
                      Limitations, as reported
                    </h3>
                  </div>
                  <ul className="space-y-2.5">
                    {project.caveats.map((caveat) => (
                      <li
                        key={caveat.slice(0, 40)}
                        className="flex gap-3 text-[0.8125rem] leading-relaxed text-fg-dim"
                      >
                        <span
                          className="mt-1.5 size-1 shrink-0 rounded-full bg-fg-faint"
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
