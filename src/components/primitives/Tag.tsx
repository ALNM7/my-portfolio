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
        'tag inline-flex items-center whitespace-nowrap',
        tone === 'accent' && 'border-accent text-accent',
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
    <div className="flex flex-wrap gap-2">
      {shown.map((item) => (
        <Tag key={item}>{item}</Tag>
      ))}
      {overflow > 0 && <Tag>+{overflow}</Tag>}
    </div>
  );
}
