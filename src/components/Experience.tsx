import { motion } from 'motion/react';
import { MapPin } from 'lucide-react';
import { Section } from './primitives/Section';
import { TagRow } from './primitives/Tag';
import { roles } from '../data/experience';
import { profile } from '../data/profile';

export function Experience() {
  return (
    <Section
      id="experience"
      index="02 / Experience"
      title="Research assistantships and cluster time"
      lede="Two research groups and a semester of benchmark campaigns on production HPC hardware."
    >
      <div className="space-y-0">
        {roles.map((role, i) => (
          <motion.article
            key={`${role.org}-${role.period}`}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45, delay: Math.min(i, 3) * 0.06, ease: [0.22, 1, 0.36, 1] }}
            className="grid gap-5 border-t border-line py-8 lg:grid-cols-[12rem_1fr] lg:gap-10 lg:py-10"
          >
            <div className="lg:pt-1">
              <div className="tabular text-[0.75rem] text-fg-faint">{role.period}</div>
              {role.current && (
                <div className="mt-2 inline-flex items-center gap-1.5">
                  <span className="size-1.5 rounded-full bg-ok" />
                  <span className="label-mono text-ok">Current</span>
                </div>
              )}
            </div>

            <div className="min-w-0">
              <h3 className="text-fg">{role.title}</h3>
              <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1">
                <span className="text-[0.875rem] font-medium text-accent">{role.org}</span>
                <span className="inline-flex items-center gap-1 text-[0.75rem] text-fg-faint">
                  <MapPin className="size-3" />
                  {role.location}
                </span>
              </div>

              <ul className="mt-5 max-w-3xl space-y-3">
                {role.points.map((point) => (
                  <li
                    key={point.slice(0, 40)}
                    className="flex gap-3 text-[0.9375rem] leading-relaxed text-fg-dim"
                  >
                    <span
                      className="mt-2.5 h-px w-3 shrink-0 bg-line-strong"
                      aria-hidden="true"
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5">
                <TagRow items={role.tags} />
              </div>
            </div>
          </motion.article>
        ))}

        {/* Education closes the timeline rather than sitting in its own section. */}
        <motion.article
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="grid gap-5 border-y border-line py-8 lg:grid-cols-[12rem_1fr] lg:gap-10 lg:py-10"
        >
          <div className="lg:pt-1">
            <div className="tabular text-[0.75rem] text-fg-faint">{profile.education.period}</div>
            <div className="label-mono mt-2">Education</div>
          </div>
          <div className="min-w-0">
            <h3 className="text-fg">{profile.education.degree}</h3>
            <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1">
              <span className="text-[0.875rem] font-medium text-accent">
                {profile.education.school}
              </span>
              <span className="inline-flex items-center gap-1 text-[0.75rem] text-fg-faint">
                <MapPin className="size-3" />
                {profile.education.location}
              </span>
            </div>
            <p className="mt-4 max-w-2xl text-[0.875rem] leading-relaxed text-fg-dim">
              {profile.education.note}
            </p>
          </div>
        </motion.article>
      </div>
    </Section>
  );
}
