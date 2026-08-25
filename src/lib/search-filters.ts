import type { Property, PropertyType } from '@/lib/properties';

export type PriceRangeKey = 'under-250k' | '251k-400k' | '401k-1m' | 'over-1m' | 'na-upit';

export const PRICE_RANGES: {
  key: PriceRangeKey;
  label: string;
  test: (priceEUR: number | null) => boolean;
}[] = [
  { key: 'under-250k', label: '<€250K', test: (price) => price !== null && price < 250_000 },
  {
    key: '251k-400k',
    label: '€251K-€400K',
    test: (price) => price !== null && price >= 251_000 && price <= 400_000,
  },
  {
    key: '401k-1m',
    label: '€401K-€1M',
    test: (price) => price !== null && price >= 401_000 && price <= 1_000_000,
  },
  { key: 'over-1m', label: '>€1M', test: (price) => price !== null && price > 1_000_000 },
  { key: 'na-upit', label: 'Na Upit', test: (price) => price === null },
];

export type BedroomKey = '1' | '2' | '3' | '4plus';

export const BEDROOM_OPTIONS: {
  key: BedroomKey;
  label: string;
  test: (bedrooms: number) => boolean;
}[] = [
  { key: '1', label: '1 Soba', test: (bedrooms) => bedrooms === 1 },
  { key: '2', label: '2 Sobe', test: (bedrooms) => bedrooms === 2 },
  { key: '3', label: '3 Sobe', test: (bedrooms) => bedrooms === 3 },
  { key: '4plus', label: '4+ Sobe', test: (bedrooms) => bedrooms >= 4 },
];

export type SearchFilters = {
  featuredOnly: boolean;
  locations: Set<string>;
  propertyTypes: Set<PropertyType>;
  priceRanges: Set<PriceRangeKey>;
  bedrooms: Set<BedroomKey>;
};

export function createEmptyFilters(): SearchFilters {
  return {
    featuredOnly: false,
    locations: new Set(),
    propertyTypes: new Set(),
    priceRanges: new Set(),
    bedrooms: new Set(),
  };
}

export function hasActiveFilters(filters: SearchFilters): boolean {
  return (
    filters.featuredOnly ||
    filters.locations.size > 0 ||
    filters.propertyTypes.size > 0 ||
    filters.priceRanges.size > 0 ||
    filters.bedrooms.size > 0
  );
}

/**
 * Categories combine with AND (a property must satisfy every active
 * category); options within a category combine with OR (matching any
 * selected location/price range/etc. is enough).
 */
export function filterProperties(properties: Property[], filters: SearchFilters): Property[] {
  return properties.filter((property) => {
    if (filters.featuredOnly && !property.featured) return false;

    if (filters.locations.size > 0 && !filters.locations.has(property.location)) return false;

    if (filters.propertyTypes.size > 0 && !filters.propertyTypes.has(property.propertyType)) {
      return false;
    }

    if (filters.priceRanges.size > 0) {
      const matchesPrice = PRICE_RANGES.some(
        (range) => filters.priceRanges.has(range.key) && range.test(property.priceEUR),
      );
      if (!matchesPrice) return false;
    }

    if (filters.bedrooms.size > 0) {
      const matchesBedrooms = BEDROOM_OPTIONS.some(
        (option) => filters.bedrooms.has(option.key) && option.test(property.bedrooms),
      );
      if (!matchesBedrooms) return false;
    }

    return true;
  });
}
