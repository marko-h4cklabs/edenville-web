import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeftIcon } from '@/components/icons';
import { InquiryCta } from '@/components/inquiry-cta';
import { PropertyGallery } from '@/components/property/property-gallery';
import { PropertyMeta } from '@/components/property/property-meta';
import { getProperties, getPropertyBySlug } from '@/lib/properties';

export async function generateStaticParams() {
  const properties = await getProperties();
  return properties.map((property) => ({ slug: property.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<'/Property-Details/[slug]'>): Promise<Metadata> {
  const { slug } = await params;
  const property = await getPropertyBySlug(slug);

  if (!property) return {};

  return {
    title: `${property.title} | EdenVille`,
    description: property.description,
  };
}

export default async function PropertyDetailsPage({
  params,
}: PageProps<'/Property-Details/[slug]'>) {
  const { slug } = await params;
  const property = await getPropertyBySlug(slug);

  if (!property) {
    notFound();
  }

  return (
    <div className="px-gutter py-section-y-sm sm:py-section-y mx-auto max-w-7xl">
      <Link
        href="/search"
        className="text-muted hover:text-gold inline-flex items-center gap-2 text-sm font-medium transition-colors"
      >
        <ArrowLeftIcon className="size-4" />
        Natrag na pretragu
      </Link>

      <div className="mt-6">
        <PropertyGallery images={property.images} />
      </div>

      <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-[1fr_320px]">
        <div>
          <p className="text-gold text-sm font-semibold tracking-[0.15em] uppercase">
            {property.location}
          </p>
          <h1 className="text-ink mt-3 font-serif text-3xl italic sm:text-4xl">{property.title}</h1>

          <div className="mt-8">
            <PropertyMeta property={property} />
          </div>

          <h2 className="text-ink mt-10 font-serif text-xl italic">Opis</h2>
          <p className="text-muted mt-4 leading-relaxed">{property.description}</p>
        </div>

        <div className="lg:sticky lg:top-24 lg:self-start">
          <InquiryCta />
        </div>
      </div>
    </div>
  );
}
