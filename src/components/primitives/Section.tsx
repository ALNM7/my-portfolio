import type { ReactNode } from 'react';
import { motion } from 'motion/react';
import { cn } from '../../lib/cn';
import { DUR_ENTER, entrance, enterUp, staggerGroup, viewportOnce } from '../../lib/motion';

type SectionProps = {
  id: string;
  index: string;
  title: string;
  lede?: string;
  children: ReactNode;
  className?: string;
};

/**
 * Section head, set like a page in a paper: a hairline flush to the container,
 * 72px of air, then the title with its number hung off the baseline and the
 * standfirst pushed to the outer edge.
 */
export function Section({ id, index, title, lede, children, className }: SectionProps) {
  return (
    <section id={id} className={cn('scroll-mt-24', className)}>
      <div className="mx-auto max-w-[84rem] px-5 sm:px-8 lg:px-12">
        <div className="border-t border-line pt-[68px] pb-[68px] sm:pt-[72px] md:pb-[88px] lg:pb-[112px]">
          <motion.header
            variants={staggerGroup(0.06)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="flex flex-col gap-4 lg:flex-row lg:items-end lg:gap-7"
          >
            <motion.h2 variants={enterUp} className="text-fg">
              {title}
            </motion.h2>
            <motion.span variants={enterUp} className="label-mono text-accent lg:pb-2.5">
              {index}
            </motion.span>
            {lede && (
              <motion.p
                variants={enterUp}
                className="text-[1rem] leading-[1.6] text-fg-faint lg:ml-auto lg:max-w-[38ch] lg:text-right"
              >
                {lede}
              </motion.p>
            )}
          </motion.header>

          <div className="mt-14">{children}</div>
        </div>
      </div>
    </section>
  );
}

/** Shared scroll-reveal wrapper for blocks that are not part of a stagger. */
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
      variants={enterUp}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      transition={{ duration: DUR_ENTER, ease: entrance, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
