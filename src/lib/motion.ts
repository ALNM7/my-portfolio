import type { Variants } from 'motion/react';

/**
 * Two curves for the whole site: entrances decelerate out of `entrance`,
 * anything the reader triggers uses `interaction`. Only transform and opacity
 * are ever animated, so the work stays on the compositor.
 */
export const entrance = [0.2, 0, 0, 1] as const;
export const interaction = [0.4, 0, 0.2, 1] as const;

export const DUR_ENTER = 0.42;
export const DUR_PANEL = 0.28;
export const DUR_BAR = 0.38;

/** Sections enter once, at 20% visibility. */
export const viewportOnce = { once: true, amount: 0.2 } as const;

/** Looser trigger for tall blocks that would never reach 20% on a phone. */
export const viewportEdge = { once: true, margin: '-64px' } as const;

export const enterUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: DUR_ENTER, ease: entrance },
  },
};

/**
 * Staggered group. Rows carry 60ms between them and the ramp stops after the
 * fifth, so a long list finishes arriving instead of trickling in.
 */
export function staggerGroup(stagger = 0.06, delay = 0): Variants {
  return {
    hidden: {},
    show: {
      transition: { staggerChildren: stagger, delayChildren: delay, staggerDirection: 1 },
    },
  };
}

/** Cap the ramp at five items, per the spec's stagger rule. */
export const STAGGER_CAP = 5;
