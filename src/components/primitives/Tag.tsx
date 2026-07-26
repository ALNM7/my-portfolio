import type { ReactNode } from 'react';
import { cn } from '../../lib/cn';

export function Tag({
  children,
  className,
  tone = 'default',
}: {
  children: ReactNode;
  className?: string;
  tone?: 'default' | 'accent';
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-md border px-2 py-0.5 font-mono text-[0.6875rem] tracking-tight whitespace-nowrap',
        tone === 'accent'
          ? 'border-accent/40 bg-accent-soft text-accent'
          : 'border-line bg-surface-2 text-fg-dim',
        className,
      )}
    >
      {children}
    </span>
  );
}

export function TagRow({ items, limit }: { items: readonly string[]; limit?: number }) {
  const shown = limit ? items.slice(0, limit) : items;
  const overflow = limit ? items.length - shown.length : 0;

  return (
    <div className="flex flex-wrap gap-1.5">
      {shown.map((item) => (
        <Tag key={item}>{item}</Tag>
      ))}
      {overflow > 0 && <Tag>+{overflow}</Tag>}
    </div>
  );
}
