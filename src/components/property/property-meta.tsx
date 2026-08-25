import { formatPropertyPrice, formatPropertySize, type Property } from '@/lib/properties';

function formatRoomsLabel(bedrooms: number): string {
  if (bedrooms === 1) return '1 Soba';
  if (bedrooms >= 2 && bedrooms <= 4) return `${bedrooms} Sobe`;
  return `${bedrooms} Soba`;
}

function formatBathroomsLabel(bathrooms: number): string {
  if (bathrooms === 1) return '1 Kupaonica';
  if (bathrooms >= 2 && bathrooms <= 4) return `${bathrooms} Kupaonice`;
  return `${bathrooms} Kupaonica`;
}

export function PropertyMeta({ property }: { property: Property }) {
  const stats = [
    { label: 'Lokacija', value: property.location },
    { label: 'Veličina', value: formatPropertySize(property.sizeM2) },
    { label: 'Sobe', value: formatRoomsLabel(property.bedrooms) },
    { label: 'Kupaonice', value: formatBathroomsLabel(property.bathrooms) },
    { label: 'Vrsta', value: property.propertyType },
    { label: 'Cijena', value: formatPropertyPrice(property.priceEUR) },
  ];

  return (
    <dl className="border-line grid grid-cols-2 gap-6 border-y py-6 sm:grid-cols-3 lg:grid-cols-6">
      {stats.map((stat) => (
        <div key={stat.label}>
          <dt className="text-gold text-xs font-semibold tracking-[0.15em] uppercase">
            {stat.label}
          </dt>
          <dd className="text-ink mt-1.5 text-sm font-medium">{stat.value}</dd>
        </div>
      ))}
    </dl>
  );
}
