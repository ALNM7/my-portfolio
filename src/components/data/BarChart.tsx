import { motion } from 'motion/react';
import type { BarChartSpec } from '../../data/types';
import { cn } from '../../lib/cn';

function format(value: number) {
  // Keep one decimal only when the measurement actually has one.
  return Number.isInteger(value) ? value.toLocaleString('en-US') : value.toFixed(value < 10 ? 2 : 1);
}

/**
 * Horizontal bar chart, rendered as layout rather than SVG so long labels wrap
 * naturally and the figure stays readable down to phone width. The underlying
 * numbers are also exposed as a real <table> for assistive tech.
 */
export function BarChart({ spec }: { spec: BarChartSpec }) {
  const max = Math.max(...spec.bars.map((bar) => bar.value));

  return (
    <figure className="card p-5 sm:p-6">
      <figcaption className="mb-5">
        <h4 className="text-[0.9375rem] font-semibold text-fg">{spec.title}</h4>
        {spec.caption && <p className="mt-1 text-[0.8125rem] text-fg-dim">{spec.caption}</p>}
        <p className="label-mono mt-2">{spec.unit}</p>
      </figcaption>

      <div className="space-y-3.5">
        {spec.bars.map((bar, i) => {
          const pct = max > 0 ? (bar.value / max) * 100 : 0;
          return (
            <div key={bar.label} className="grid grid-cols-[minmax(5.5rem,9rem)_1fr] items-center gap-3 sm:gap-4">
              <div className="min-w-0">
                <div className="truncate font-mono text-[0.75rem] text-fg" title={bar.label}>
                  {bar.label}
                </div>
                {bar.note && <div className="truncate text-[0.6875rem] text-fg-faint">{bar.note}</div>}
              </div>

              <div className="flex items-center gap-3">
                <div className="h-6 min-w-0 flex-1 overflow-hidden rounded-[3px] bg-surface-2">
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.7, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                    style={{ width: `${pct}%`, transformOrigin: 'left' }}
                    className={cn(
                      'h-full rounded-[3px]',
                      bar.peak && 'bg-accent',
                      !bar.peak && !bar.muted && 'bg-fg-faint',
                      bar.muted && 'bg-line-strong',
                    )}
                  />
                </div>
                <div
                  className={cn(
                    'tabular w-[4.5rem] shrink-0 text-right text-[0.8125rem]',
                    bar.peak ? 'font-semibold text-accent' : 'text-fg-dim',
                  )}
                >
                  {bar.display ?? format(bar.value)}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {spec.footnote && (
        <p className="mt-5 border-t border-line pt-4 text-[0.75rem] leading-relaxed text-fg-faint">
          {spec.footnote}
        </p>
      )}

      {/* Accessible equivalent of the figure above. */}
      <table className="sr-only">
        <caption>
          {spec.title} — {spec.unit}
        </caption>
        <thead>
          <tr>
            <th scope="col">Configuration</th>
            <th scope="col">{spec.unit}</th>
          </tr>
        </thead>
        <tbody>
          {spec.bars.map((bar) => (
            <tr key={bar.label}>
              <th scope="row">{bar.label}</th>
              <td>{bar.display ?? format(bar.value)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </figure>
  );
}
