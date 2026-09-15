import { motion } from 'motion/react';
import { Section } from './primitives/Section';
import { skillGroups } from '../data/skills';
import { enterUp, staggerGroup, viewportEdge } from '../lib/motion';

export function Stack() {
  return (
    <Section
      id="stack"
      index="03"
      title="Stack"
      lede="Limited to tools that appear in a shipped repository or on my CV. No aspirational entries."
    >
      <motion.div
        variants={staggerGroup(0.05)}
        initial="hidden"
        whileInView="show"
        viewport={viewportEdge}
        className="grid gap-x-14 sm:grid-cols-2 lg:grid-cols-3"
      >
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.id}
            variants={enterUp}
            className="flex flex-col gap-2.5 border-t border-line py-[26px]"
          >
            <div className="flex items-baseline gap-3">
              <span className="label-mono text-accent">{String(i + 1).padStart(2, '0')}</span>
              <h4 className="text-[1.3125rem] text-fg">{group.title}</h4>
            </div>
            <p className="text-[0.9375rem] leading-[1.6] text-fg-faint">{group.blurb}</p>
            <p className="mono-ui mt-1 text-fg-dim">{group.items.join(' · ')}</p>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
