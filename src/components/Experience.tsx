import { motion } from 'motion/react';
import { Section } from './primitives/Section';
import { roles } from '../data/experience';
import { profile } from '../data/profile';
import { enterUp, staggerGroup, viewportEdge } from '../lib/motion';

export function Experience() {
  return (
    <Section
      id="experience"
      index="02"
      title="Experience"
      lede="Two research groups, a semester of benchmark campaigns on production HPC hardware, and an internship in industry."
    >
      <motion.div
        variants={staggerGroup(0.06)}
        initial="hidden"
        whileInView="show"
        viewport={viewportEdge}
      >
        {roles.map((role) => (
          <motion.article
            key={`${role.org}-${role.period}`}
            variants={enterUp}
            className="grid gap-4 border-t border-line py-[34px] md:grid-cols-[14.375rem_1fr] md:gap-14"
          >
            <div className="flex flex-wrap items-baseline gap-x-4 md:flex-col md:items-start md:gap-y-2.5">
              <span className="label-mono">{role.period}</span>
              {role.current && <span className="label-mono text-accent">Current</span>}
            </div>

            <div className="min-w-0">
              <h4 className="text-fg">{role.title}</h4>
              <p className="label-mono mt-2.5">
                <span className="text-fg-dim">{role.org}</span>
                <span> · {role.location}</span>
              </p>

              <ul className="mt-5 max-w-[66ch] space-y-3">
                {role.points.map((point) => (
                  <li
                    key={point.slice(0, 40)}
                    className="flex gap-3.5 text-[1.0625rem] leading-[1.7] text-fg-dim"
                  >
                    <span
                      className="mt-[0.85em] h-px w-3 shrink-0 bg-line-strong"
                      aria-hidden="true"
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <ul className="mt-5 flex flex-wrap gap-2">
                {role.tags.map((tag) => (
                  <li key={tag} className="tag">
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </motion.article>
        ))}

        <motion.article
          variants={enterUp}
          className="grid gap-4 border-y border-line py-[34px] md:grid-cols-[14.375rem_1fr] md:gap-14"
        >
          <div className="flex flex-wrap items-baseline gap-x-4 md:flex-col md:items-start md:gap-y-2.5">
            <span className="label-mono">{profile.education.period}</span>
            <span className="label-mono">Education</span>
          </div>
          <div className="min-w-0">
            <h4 className="text-fg">{profile.education.degree}</h4>
            <p className="label-mono mt-2.5">
              <span className="text-fg-dim">{profile.education.school}</span>
              <span> · {profile.education.location}</span>
            </p>
            <p className="mt-5 max-w-[66ch] text-[0.9375rem] leading-[1.6] text-fg-faint">
              {profile.education.note}
            </p>
          </div>
        </motion.article>
      </motion.div>
    </Section>
  );
}
