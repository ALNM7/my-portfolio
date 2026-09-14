import { motion } from 'motion/react';
import { ArrowUpRight, Github } from 'lucide-react';
import { Section, Reveal } from './primitives/Section';
import { TagRow } from './primitives/Tag';
import { projects, sideProjects } from '../data/projects';
import { fadeUp, staggerGroup, viewportOnce } from '../lib/motion';

export function Work({ onOpen }: { onOpen: (id: string) => void }) {
  return (
    <Section
      id="work"
      index="01 / Selected work"
      title="Five projects, with the numbers attached"
      lede="Each entry links to its repository and opens a case study with the method, the measured results and the caveats the READMEs report. Nothing here is rounded up."
    >
      <motion.ol
        variants={staggerGroup()}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="border-t border-line"
      >
        {projects.map((project, i) => (
          <motion.li
            key={project.id}
            variants={fadeUp}
            className="group border-b border-line transition-colors duration-[220ms] ease-out hover:bg-surface/60"
          >
            <div className="grid gap-6 py-10 sm:py-12 lg:grid-cols-[3.5rem_1fr_16rem] lg:gap-10">
              <div className="label-mono hidden pt-1 lg:block">
                {String(i + 1).padStart(2, '0')}
              </div>

              <div className="min-w-0">
                <div className="mb-2 flex flex-wrap items-center gap-x-3 gap-y-1">
                  <span className="label-mono lg:hidden">{String(i + 1).padStart(2, '0')}</span>
                  <span className="text-[0.75rem] text-fg-faint">{project.org}</span>
                  <span className="hidden text-fg-faint sm:inline" aria-hidden="true">
                    ·
                  </span>
                  <span className="tabular text-[0.75rem] text-fg-faint">{project.period}</span>
                </div>

                <h3 className="text-fg">
                  <button
                    type="button"
                    onClick={() => onOpen(project.id)}
                    className="link-underline text-left"
                  >
                    {project.title}
                  </button>
                </h3>

                <p className="mt-3 max-w-2xl text-[0.9375rem] leading-relaxed text-fg-dim">
                  {project.tagline}
                </p>

                {project.contribution && (
                  <p className="mt-3 max-w-2xl border-l-2 border-line pl-3 text-[0.8125rem] leading-relaxed text-fg-faint">
                    {project.contribution}
                  </p>
                )}

                <div className="mt-5">
                  <TagRow items={project.stack} limit={5} />
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2">
                  <button
                    type="button"
                    onClick={() => onOpen(project.id)}
                    className="inline-flex items-center gap-1.5 text-[0.8125rem] font-medium text-accent transition-transform duration-[180ms] ease-out hover:translate-x-0.5"
                  >
                    Read the case study
                    <ArrowUpRight className="size-3.5" />
                  </button>
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[0.8125rem] text-fg-dim transition-colors duration-[180ms] hover:text-fg"
                  >
                    <Github className="size-3.5" />
                    Repository
                  </a>
                </div>
              </div>

              <dl className="flex gap-6 lg:flex-col lg:gap-4 lg:border-l lg:border-line lg:pl-8">
                {project.metrics.map((metric) => (
                  <div key={metric.label} className="min-w-0">
                    <dd className="flex items-baseline gap-1">
                      <span className="numeral text-xl text-fg">{metric.value}</span>
                      {metric.unit && (
                        <span className="font-mono text-[0.6875rem] text-fg-faint">{metric.unit}</span>
                      )}
                    </dd>
                    <dt className="mt-0.5 text-[0.6875rem] leading-snug text-fg-faint">
                      {metric.label}
                    </dt>
                  </div>
                ))}
              </dl>
            </div>
          </motion.li>
        ))}
      </motion.ol>

      <Reveal className="mt-20">
        <h3 className="label-mono mb-6">Also built</h3>
        <div className="grid gap-4 sm:grid-cols-2">
          {sideProjects.map((project) => (
            <a
              key={project.title}
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="card card-hover group flex flex-col p-6 hover:-translate-y-0.5 hover:shadow-card"
            >
              <div className="mb-2 flex items-start justify-between gap-3">
                <h4 className="text-[0.9375rem] font-semibold text-fg">{project.title}</h4>
                <ArrowUpRight className="mt-0.5 size-4 shrink-0 text-fg-faint transition-all duration-[180ms] ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
              </div>
              <p className="mb-4 flex-1 text-[0.8125rem] leading-relaxed text-fg-dim">
                {project.description}
              </p>
              <TagRow items={project.stack} />
            </a>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
