import type { Variants } from 'motion/react';

/**
 * Curves and durations shared by every animated block, so entrances across the
 * page read as one sequence instead of eight independent ones.
 *
 * Entrances decelerate (ease-out), interactive feedback stays under 300ms, and
 * nothing animates a property that would force layout: transform and opacity
 * only.
 */
export const easeOutExpo = [0.19, 1, 0.22, 1] as const;
export const easeOutCubic = [0.215, 0.61, 0.355, 1] as const;

export const DUR_REVEAL = 0.44;

/** Viewport config for scroll-triggered reveals. */
export const viewportOnce = { once: true, margin: '-72px' } as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: DUR_REVEAL, ease: easeOutExpo },
  },
};

/**
 * Container for a staggered group. Offsets stay short so a long list finishes
 * arriving quickly rather than trickling in.
 */
export function staggerGroup(stagger = 0.055, delay = 0): Variants {
  return {
    hidden: {},
    show: { transition: { staggerChildren: stagger, delayChildren: delay } },
  };
}
