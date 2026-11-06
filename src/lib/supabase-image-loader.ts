import type { ImageLoaderProps } from 'next/image';

const OBJECT_PATH = '/storage/v1/object/public/';
const RENDER_PATH = '/storage/v1/render/image/public/';

export function isSupabaseStorageUrl(src: string): boolean {
  try {
    const url = new URL(src);
    return url.hostname.endsWith('.supabase.co') && url.pathname.startsWith(OBJECT_PATH);
  } catch {
    return false;
  }
}

/**
 * Serves Supabase Storage photos through Supabase's image transformation
 * endpoint instead of the full-size originals (Baza uploads multi-MB PNGs).
 * Supabase picks WebP automatically when the browser's Accept header allows
 * it. `resize=contain` keeps the aspect ratio — with only `width` set, the
 * default `cover` mode keeps the original height and returns a tall crop.
 */
export function supabaseImageLoader({ src, width, quality }: ImageLoaderProps): string {
  const url = new URL(src);
  url.pathname = url.pathname.replace(OBJECT_PATH, RENDER_PATH);
  url.searchParams.set('width', width.toString());
  url.searchParams.set('quality', (quality ?? 75).toString());
  url.searchParams.set('resize', 'contain');
  return url.href;
}
