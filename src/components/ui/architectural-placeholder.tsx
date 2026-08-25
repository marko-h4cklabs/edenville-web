'use client';

import { useId } from 'react';
import { cn } from '@/lib/utils';

/**
 * Stand-in for dark architectural/interior photography. Renders a gradient
 * + faceted line pattern so hero/background image slots read as intentional
 * "luxury real estate" imagery until real photography is supplied.
 */
export function ArchitecturalPlaceholder({
  className,
  monogram,
}: {
  className?: string;
  /** Centered initials, for portrait/avatar placeholder slots (e.g. "MK"). */
  monogram?: string;
}) {
  const patternId = useId();

  return (
    <div
      aria-hidden="true"
      className={cn(
        'from-ink-deep via-ink to-navy absolute inset-0 overflow-hidden bg-gradient-to-br',
        className,
      )}
    >
      <svg className="absolute inset-0 h-full w-full opacity-15" preserveAspectRatio="none">
        <defs>
          <pattern id={patternId} width="72" height="72" patternUnits="userSpaceOnUse">
            <path d="M72 0 0 0 0 72" fill="none" stroke="currentColor" strokeWidth="1" />
            <path d="M0 36 72 36M36 0 36 72" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${patternId})`} className="text-cream" />
      </svg>
      <div className="from-ink-deep/90 via-ink-deep/10 absolute inset-0 bg-gradient-to-t to-transparent" />
      {monogram ? (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-gold/40 font-serif text-6xl italic">{monogram}</span>
        </div>
      ) : null}
    </div>
  );
}
