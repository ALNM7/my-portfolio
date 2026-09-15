import { motion } from 'motion/react';
import { Section, Reveal } from './primitives/Section';
import { projects, sideProjects } from '../data/projects';
import { STAGGER_CAP, enterUp, staggerGroup, viewportEdge } from '../lib/motion';

export function Work({ onOpen }: { onOpen: (id: string) => void }) {
  return (
    <Section
      id="work"
      index="01"
      title="Selected work"
      lede="Five projects. Each links to its case study and to the repository that publishes the figures."
    >
      <motion.ol
        variants={staggerGroup(0.06)}
        initial="hidden"
        whileInView="show"
        viewport={viewportEdge}
      >
        {projects.map((project, i) => (
          <motion.li
            key={project.id}
            variants={enterUp}
            custom={Math.min(i, STAGGER_CAP)}
            className="group grid gap-6 border-t border-line py-[34px] transition-transform duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] lg:grid-cols-[4rem_1fr_18.75rem] lg:gap-10 lg:hover:translate-x-1.5"
          >
            <div className="mono-ui text-fg-faint transition-colors duration-[200ms] group-hover:text-accent">
              {String(i + 1).padStart(2, '0')}
            </div>

            <div className="flex min-w-0 flex-col gap-3">
              <div className="label-mono flex flex-wrap gap-x-4 gap-y-1">
                <span className="text-fg-dim">{project.org}</span>
                <span>{project.period}</span>
              </div>

              <h3 className="text-fg">
                <button type="button" onClick={() => onOpen(project.id)} className="text-left">
                  {project.title}
                </button>
              </h3>

              <p className="max-w-[56ch] text-[1.0625rem] leading-[1.65] text-fg-dim">
                {project.tagline}
              </p>

              {project.contribution && (
                <p className="max-w-[56ch] text-[0.9375rem] leading-[1.6] text-fg-faint italic">
                  {project.contribution}
                </p>
              )}

              <ul className="mt-1 flex flex-wrap gap-2">
                {project.stack.slice(0, 5).map((item) => (
                  <li key={item} className="tag">
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mono-ui mt-2.5 flex flex-wrap gap-x-[26px] gap-y-2">
                <button
                  type="button"
                  onClick={() => onOpen(project.id)}
                  className="link-rule link-rule-active"
                >
                  Read case study →
                </button>
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-rule text-fg-dim"
                >
                  Repository ↗
                </a>
              </div>
            </div>

            {/* The only vertical rule on the page: the figures rail. */}
            <dl className="grid grid-cols-3 gap-6 border-t border-line pt-5 lg:grid-cols-1 lg:gap-0 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-7">
              {project.metrics.map((metric, m) => (
                <div
                  key={metric.label}
                  className={
                    m === 0
                      ? 'flex flex-col gap-1 lg:pb-4'
                      : 'flex flex-col gap-1 lg:border-t lg:border-line lg:py-4 lg:last:pb-0'
                  }
                >
                  <dd className="flex items-baseline gap-1.5">
                    <span className="numeral numeral-rail text-fg">{metric.value}</span>
                    {metric.unit && (
                      <span className="font-mono text-[0.75rem] text-fg-dim">{metric.unit}</span>
                    )}
                  </dd>
                  <dt className="label-mono">{metric.label}</dt>
                </div>
              ))}
            </dl>
          </motion.li>
        ))}
      </motion.ol>

      <Reveal className="mt-[68px]">
        <div className="border-t border-line pt-[34px]">
          <div className="flex flex-wrap items-baseline gap-x-5 gap-y-2">
            <h4 className="text-fg">Also built</h4>
            <span className="label-mono">Smaller pieces, same rule on numbers</span>
          </div>

          <ul className="mt-[26px] grid gap-x-16 sm:grid-cols-2">
            {sideProjects.map((project) => (
              <li
                key={project.title}
                className="flex flex-col gap-[7px] border-t border-line py-5"
              >
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <span className="text-[1.1875rem] text-fg">{project.title}</span>
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-[0.6875rem] text-accent transition-colors duration-[160ms] hover:text-accent-bright"
                  >
                    Repo ↗
                  </a>
                </div>
                <p className="max-w-[44ch] text-[0.9375rem] leading-[1.6] text-fg-faint">
                  {project.description}
                </p>
                <p className="label-mono">{project.stack.join(' · ')}</p>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </Section>
  );
}
