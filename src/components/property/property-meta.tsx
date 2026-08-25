import { formatPropertyPrice, formatPropertySize, type Property } from '@/lib/properties';

function formatRoomsLabel(bedrooms: number): string {
  if (bedrooms === 1) return '1 Soba';
  if (bedrooms >= 2 && bedrooms <= 4) return `${bedrooms} Sobe`;
  return `${bedrooms} Soba`;
}

export function PropertyMeta({ property }: { property: Property }) {
  const stats = [
    { label: 'Lokacija', value: property.location },
    { label: 'Veličina', value: formatPropertySize(property.sizeM2) },
    { label: 'Sobe', value: formatRoomsLabel(property.bedrooms) },
    { label: 'Vrsta', value: property.propertyType },
    { label: 'Cijena', value: formatPropertyPrice(property.priceEUR) },
  ];

  return (
    <dl className="border-line grid grid-cols-2 gap-6 border-y py-6 sm:grid-cols-3 lg:grid-cols-5">
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
