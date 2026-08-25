'use client';

import { useMemo, useState } from 'react';
import { PropertyCard } from '@/components/property-card';
import type { Property } from '@/lib/properties';
import { cn } from '@/lib/utils';

type SortMode = 'latest' | 'featured';

const SORT_OPTIONS: { key: SortMode; label: string }[] = [
  { key: 'latest', label: 'Najnovije' },
  { key: 'featured', label: 'Istaknuto' },
];

function sortProperties(properties: Property[], mode: SortMode): Property[] {
  const sorted = [...properties];
  if (mode === 'latest') {
    sorted.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  } else {
    sorted.sort((a, b) => Number(b.featured) - Number(a.featured));
  }
  return sorted;
}

export function DashboardGrid({ properties }: { properties: Property[] }) {
  const [sortMode, setSortMode] = useState<SortMode>('latest');
  const sorted = useMemo(() => sortProperties(properties, sortMode), [properties, sortMode]);

  return (
    <div>
      <div className="flex items-center justify-between gap-4">
        <p className="text-muted text-sm">{sorted.length} nekretnina</p>
        <div className="border-line inline-flex items-center gap-1 rounded-full border p-1">
          {SORT_OPTIONS.map((option) => (
            <button
              key={option.key}
              type="button"
              onClick={() => setSortMode(option.key)}
              className={cn(
                'rounded-full px-4 py-1.5 text-xs font-medium tracking-wide transition-colors',
                sortMode === option.key ? 'bg-ink text-cream' : 'text-muted hover:text-ink',
              )}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3">
        {sorted.map((property) => (
          <PropertyCard key={property.slug} property={property} />
        ))}
      </div>
    </div>
  );
}
