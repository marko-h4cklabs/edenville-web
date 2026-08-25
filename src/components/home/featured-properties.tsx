import Link from 'next/link';
import { PropertyCard } from '@/components/property-card';
import { getProperties } from '@/lib/properties';

export async function FeaturedProperties() {
  const properties = (await getProperties()).filter((property) => property.featured);

  return (
    <section className="px-gutter py-section-y-sm sm:py-section-y mx-auto max-w-7xl">
      <div className="text-center">
        <p className="text-gold text-sm font-semibold tracking-[0.15em] uppercase">Nekretnine</p>
        <h2 className="text-ink mt-3 font-serif text-3xl italic sm:text-4xl">
          Istaknute Nekretnine
        </h2>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {properties.map((property) => (
          <PropertyCard key={property.slug} property={property} />
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <Link
          href="/search"
          className="border-ink text-ink hover:bg-ink hover:text-cream rounded-full border px-8 py-3.5 text-sm font-semibold tracking-wide transition-colors"
        >
          Pogledaj sve dostupne Nekretnine
        </Link>
      </div>
    </section>
  );
}
