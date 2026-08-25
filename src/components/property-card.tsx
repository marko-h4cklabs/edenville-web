import Link from 'next/link';
import { CameraIcon } from '@/components/icons';
import { ArchitecturalPlaceholder } from '@/components/ui/architectural-placeholder';
import type { Property } from '@/lib/properties';

export function PropertyCard({ property }: { property: Property }) {
  return (
    <Link
      href={`/Property-Details/${property.slug}`}
      className="group border-line block overflow-hidden rounded-2xl border bg-white transition-shadow hover:shadow-xl"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <ArchitecturalPlaceholder className="transition-transform duration-500 group-hover:scale-105" />
        <div className="bg-ink-deep/70 text-cream absolute right-3 bottom-3 flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium backdrop-blur-sm">
          <CameraIcon className="size-3.5" />
          {property.photoCount}
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-ink font-serif text-lg italic">{property.title}</h3>
        <p className="text-muted mt-2 text-sm">
          {property.size} · {property.location}
        </p>
      </div>
    </Link>
  );
}
