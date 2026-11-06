'use client';

import Image from 'next/image';
import { useState } from 'react';
import { ArchitecturalPlaceholder } from '@/components/ui/architectural-placeholder';
import { isSupabaseStorageUrl, supabaseImageLoader } from '@/lib/supabase-image-loader';

/**
 * A `fill` property photo that loads resized copies from Supabase Storage
 * and falls back to ArchitecturalPlaceholder if the image fails to load, so
 * a broken URL never shows alt text. Client-only because `loader` and
 * `onError` are functions.
 */
export function PropertyImage({
  src,
  alt,
  sizes,
  className,
  priority,
  loading,
}: {
  src: string;
  alt: string;
  sizes: string;
  className?: string;
  priority?: boolean;
  loading?: 'lazy' | 'eager';
}) {
  const [failedSrc, setFailedSrc] = useState<string | null>(null);

  if (failedSrc === src) {
    return <ArchitecturalPlaceholder className={className} />;
  }

  const isSupabase = isSupabaseStorageUrl(src);

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      loading={loading}
      loader={isSupabase ? supabaseImageLoader : undefined}
      unoptimized={!isSupabase}
      onError={() => setFailedSrc(src)}
      className={className}
    />
  );
}
