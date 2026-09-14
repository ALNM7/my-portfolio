import type { ReactNode } from 'react';
import { motion } from 'motion/react';
import { cn } from '../../lib/cn';
import { DUR_REVEAL, easeOutExpo, fadeUp, staggerGroup, viewportOnce } from '../../lib/motion';

type SectionProps = {
  id: string;
  index: string;
  title: string;
  lede?: string;
  children: ReactNode;
  className?: string;
};

/**
 * Every section shares one header treatment: a monospaced index, a rule, the
 * title, and an optional lede constrained to a readable measure.
 */
export function Section({ id, index, title, lede, children, className }: SectionProps) {
  return (
    <section
      id={id}
      className={cn('scroll-mt-24 border-t border-line py-24 sm:py-28 lg:py-32', className)}
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.header
          variants={staggerGroup(0.06)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mb-12 sm:mb-16"
        >
          <motion.div variants={fadeUp} className="mb-6 flex items-center gap-5">
            <span className="label-mono shrink-0">{index}</span>
            <span className="h-px flex-1 bg-line" aria-hidden="true" />
          </motion.div>
          <motion.h2 variants={fadeUp} className="max-w-[20ch] text-fg">
            {title}
          </motion.h2>
          {lede && (
            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-2xl text-[1.0625rem] leading-[1.7] text-fg-dim"
            >
              {lede}
            </motion.p>
          )}
        </motion.header>
        {children}
      </div>
    </section>
  );
}

/** Shared scroll-reveal wrapper. */
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      transition={{ duration: DUR_REVEAL, ease: easeOutExpo, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
