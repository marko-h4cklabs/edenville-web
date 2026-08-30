import Image from 'next/image';
import Link from 'next/link';
import { BathIcon, BedIcon, CameraIcon } from '@/components/icons';
import { ArchitecturalPlaceholder } from '@/components/ui/architectural-placeholder';
import { formatPropertyPrice, formatPropertySize, type Property } from '@/lib/properties';
import { getPriceRangeLabel } from '@/lib/search-filters';

export function PropertyCard({ property }: { property: Property }) {
  const priceRangeLabel = getPriceRangeLabel(property.priceEUR);
  const coverImage = property.images[0];

  return (
    <Link
      href={`/Property-Details/${property.slug}`}
      className="group border-line hover:border-gold/30 block overflow-hidden rounded-2xl border bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        {coverImage ? (
          <Image
            src={coverImage}
            alt={property.title}
            fill
            sizes="(min-width: 1280px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <ArchitecturalPlaceholder className="transition-transform duration-500 group-hover:scale-105" />
        )}
        {priceRangeLabel ? (
          <div className="bg-gold text-ink absolute top-3 left-3 rounded-full px-2.5 py-1 text-xs font-semibold">
            {priceRangeLabel}
          </div>
        ) : null}
        <div className="bg-ink-deep/70 text-cream absolute right-3 bottom-3 flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium backdrop-blur-sm">
          <CameraIcon className="size-3.5" />
          {property.images.length}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-ink font-serif text-lg italic">{property.title}</h3>
        <p className="text-gold mt-2 text-base font-semibold">
          {formatPropertyPrice(property.priceEUR)}
        </p>
        <p className="text-muted mt-2 text-sm">
          {formatPropertySize(property.sizeM2)} · {property.location}
        </p>
        <div className="border-line text-muted mt-4 flex items-center gap-4 border-t pt-4 text-xs">
          <span className="flex items-center gap-1.5">
            <BedIcon className="size-4" />
            {property.bedrooms}
          </span>
          <span className="flex items-center gap-1.5">
            <BathIcon className="size-4" />
            {property.bathrooms}
          </span>
        </div>
      </div>
    </Link>
  );
}
