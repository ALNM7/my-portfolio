import { motion } from 'motion/react';
import { Section } from './primitives/Section';
import { skillGroups } from '../data/skills';

export function Stack() {
  return (
    <Section
      id="stack"
      index="03 / Stack"
      title="What I actually work with"
      lede="Limited to tools that appear in a shipped repository or on my CV — no aspirational entries."
    >
      <div className="grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4, delay: Math.min(i, 5) * 0.05 }}
            className="flex flex-col bg-surface p-6"
          >
            <div className="label-mono mb-3">{String(i + 1).padStart(2, '0')}</div>
            <h3 className="text-[1.0625rem] font-semibold text-fg">{group.title}</h3>
            <p className="mt-1.5 mb-5 text-[0.8125rem] leading-relaxed text-fg-faint">
              {group.blurb}
            </p>
            <ul className="space-y-1.5">
              {group.items.map((item) => (
                <li key={item} className="flex items-center gap-2.5 font-mono text-[0.8125rem] text-fg-dim">
                  <span className="h-px w-2 shrink-0 bg-line-strong" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
