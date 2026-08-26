import type { Metadata } from 'next';
import { DashboardGrid } from '@/components/dashboard/dashboard-grid';
import { getProperties } from '@/lib/properties';

export const metadata: Metadata = {
  title: 'Sve Nekretnine | EdenVille',
  description: 'Pregledajte sve dostupne luksuzne nekretnine u ponudi agencije EdenVille.',
};

export default async function DashboardPage({ searchParams }: PageProps<'/dashboard'>) {
  const properties = await getProperties();
  const { sort } = await searchParams;
  const initialSort = sort === 'featured' ? 'featured' : 'latest';

  return (
    <div className="px-gutter py-section-y-sm sm:py-section-y mx-auto max-w-7xl">
      <p className="text-gold text-sm font-semibold tracking-[0.15em] uppercase">Nekretnine</p>
      <h1 className="text-ink mt-3 font-serif text-3xl italic sm:text-4xl">Sve Nekretnine</h1>
      <p className="text-muted mt-4 max-w-2xl">
        Pregledajte cjelokupnu ponudu nekretnina agencije EdenVille.
      </p>

      <div className="mt-10">
        <DashboardGrid properties={properties} initialSort={initialSort} />
      </div>
    </div>
  );
}
