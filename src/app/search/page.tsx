import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeftIcon } from '@/components/icons';
import { SearchExperience } from '@/components/search/search-experience';
import { getProperties } from '@/lib/properties';

export const metadata: Metadata = {
  title: 'Tražilica Nekretnina | EdenVille',
  description:
    'Pretražite dostupne luksuzne nekretnine prema lokaciji, vrsti, cijeni i broju soba.',
};

export default async function SearchPage() {
  const properties = await getProperties();

  return (
    <div className="px-gutter py-section-y-sm sm:py-section-y mx-auto max-w-7xl">
      <Link
        href="/"
        className="text-muted hover:text-gold inline-flex items-center gap-2 text-sm font-medium transition-colors"
      >
        <ArrowLeftIcon className="size-4" />
        Natrag
      </Link>

      <h1 className="text-ink mt-6 font-serif text-3xl italic sm:text-4xl">Tražilica Nekretnina</h1>

      <div className="mt-10">
        <SearchExperience properties={properties} />
      </div>
    </div>
  );
}
