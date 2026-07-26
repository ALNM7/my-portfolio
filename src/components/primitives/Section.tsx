import type { ReactNode } from 'react';
import { motion } from 'motion/react';
import { cn } from '../../lib/cn';

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
    <section id={id} className={cn('scroll-mt-24 border-t border-line py-20 sm:py-28', className)}>
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.header
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 sm:mb-16"
        >
          <div className="mb-5 flex items-center gap-4">
            <span className="label-mono">{index}</span>
            <span className="h-px flex-1 bg-line" aria-hidden="true" />
          </div>
          <h2 className="text-fg">{title}</h2>
          {lede && <p className="mt-4 max-w-2xl text-[1.0625rem] leading-relaxed text-fg-dim">{lede}</p>}
        </motion.header>
        {children}
      </div>
    </section>
  );
}

/** Shared reveal wrapper so every block animates identically. */
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
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
