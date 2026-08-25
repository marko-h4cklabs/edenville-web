'use client';

import { type ReactNode, useMemo, useState } from 'react';
import { PropertyCard } from '@/components/property-card';
import { PROPERTY_LOCATIONS, PROPERTY_TYPES, type Property } from '@/lib/properties';
import {
  BEDROOM_OPTIONS,
  createEmptyFilters,
  filterProperties,
  hasActiveFilters,
  PRICE_RANGES,
  type SearchFilters,
} from '@/lib/search-filters';
import { cn } from '@/lib/utils';

function toggleSetValue<T>(set: Set<T>, value: T): Set<T> {
  const next = new Set(set);
  if (next.has(value)) {
    next.delete(value);
  } else {
    next.add(value);
  }
  return next;
}

export function SearchExperience({ properties }: { properties: Property[] }) {
  const [filters, setFilters] = useState<SearchFilters>(createEmptyFilters);

  const results = useMemo(() => filterProperties(properties, filters), [properties, filters]);
  const filtersActive = hasActiveFilters(filters);

  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-[280px_1fr]">
      <aside>
        <div className="border-line rounded-2xl border bg-white p-6">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-ink font-serif text-xl italic">Filteri</h2>
            {filtersActive ? (
              <button
                type="button"
                onClick={() => setFilters(createEmptyFilters())}
                className="text-muted hover:text-gold text-xs font-medium transition-colors hover:underline"
              >
                Poništi
              </button>
            ) : null}
          </div>

          <label className="text-ink mt-6 flex items-center gap-2.5 text-sm">
            <input
              type="checkbox"
              className="accent-gold size-4"
              checked={filters.featuredOnly}
              onChange={(event) =>
                setFilters((prev) => ({ ...prev, featuredOnly: event.target.checked }))
              }
            />
            Istaknute Nekretnine
          </label>

          <FilterGroup title="Lokacija" className="max-h-52 overflow-y-auto pr-1">
            {PROPERTY_LOCATIONS.map((location) => (
              <FilterCheckbox
                key={location}
                label={location}
                checked={filters.locations.has(location)}
                onChange={() =>
                  setFilters((prev) => ({
                    ...prev,
                    locations: toggleSetValue(prev.locations, location),
                  }))
                }
              />
            ))}
          </FilterGroup>

          <FilterGroup title="Vrsta Nekretnine">
            {PROPERTY_TYPES.map((type) => (
              <FilterCheckbox
                key={type}
                label={type}
                checked={filters.propertyTypes.has(type)}
                onChange={() =>
                  setFilters((prev) => ({
                    ...prev,
                    propertyTypes: toggleSetValue(prev.propertyTypes, type),
                  }))
                }
              />
            ))}
          </FilterGroup>

          <FilterGroup title="Raspon Cijene">
            {PRICE_RANGES.map((range) => (
              <FilterCheckbox
                key={range.key}
                label={range.label}
                checked={filters.priceRanges.has(range.key)}
                onChange={() =>
                  setFilters((prev) => ({
                    ...prev,
                    priceRanges: toggleSetValue(prev.priceRanges, range.key),
                  }))
                }
              />
            ))}
          </FilterGroup>

          <FilterGroup title="Spavaće Sobe">
            {BEDROOM_OPTIONS.map((option) => (
              <FilterCheckbox
                key={option.key}
                label={option.label}
                checked={filters.bedrooms.has(option.key)}
                onChange={() =>
                  setFilters((prev) => ({
                    ...prev,
                    bedrooms: toggleSetValue(prev.bedrooms, option.key),
                  }))
                }
              />
            ))}
          </FilterGroup>
        </div>
      </aside>

      <div>
        <p className="text-muted text-sm">
          {results.length} {results.length === 1 ? 'nekretnina pronađena' : 'nekretnina pronađeno'}
        </p>

        {results.length > 0 ? (
          <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3">
            {results.map((property) => (
              <PropertyCard key={property.slug} property={property} />
            ))}
          </div>
        ) : (
          <div className="border-line mt-6 rounded-2xl border border-dashed p-12 text-center">
            <p className="text-muted text-sm">
              Nema nekretnina koje odgovaraju odabranim filterima.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

function FilterGroup({
  title,
  className,
  children,
}: {
  title: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <fieldset className="border-line m-0 mt-6 border-0 border-t p-0 pt-6">
      <legend className="text-gold mb-3 p-0 text-xs font-semibold tracking-[0.15em] uppercase">
        {title}
      </legend>
      <div className={cn('flex flex-col gap-2.5', className)}>{children}</div>
    </fieldset>
  );
}

function FilterCheckbox({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <label className="text-ink flex items-center gap-2.5 text-sm">
      <input type="checkbox" className="accent-gold size-4" checked={checked} onChange={onChange} />
      {label}
    </label>
  );
}
