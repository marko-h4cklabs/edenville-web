import { createClient, type SupabaseClient } from '@supabase/supabase-js';

/**
 * Property data access, backed by Baza's `nekretnine` table in Supabase
 * (read-only: SELECT only, never write/update from this app). Every caller
 * already awaits getProperties()/getPropertyBySlug(), so swapping the query
 * body again later stays a one-file change.
 *
 * Baza has no `slug` or `featured` column, so both are derived here:
 * - slug: kebab-case(title) + kebab-case(code), which is stable and unique
 *   since Baza's `code` (e.g. "EDV-1042") is unique per listing.
 * - featured: the 4 most recently created active listings. Baza's CRM has
 *   no "featured" concept — this is a placeholder heuristic; swap it for a
 *   real column if/when Baza gets one.
 */

export const PROPERTY_TYPES = [
  'Stan',
  'Kuća',
  'Vila',
  'Poslovni prostor',
  'Hotel',
  'Zemljište',
] as const;

export type PropertyType = (typeof PROPERTY_TYPES)[number];

export type Property = {
  slug: string;
  title: string;
  /** A single value (138) or a unit range as a string ("58 - 97"). */
  sizeM2: number | string;
  /** City/town, e.g. "Zagreb" — Baza's `region` column. */
  region: string;
  /** Freeform neighbourhood/district text from Baza — not a fixed list. */
  location: string;
  propertyType: PropertyType;
  /** null for "Na Upit" (price on request) listings. */
  priceEUR: number | null;
  bedrooms: number;
  bathrooms: number;
  /** Freeform highlight tags from Baza, e.g. "Bazen", "Parking", "Pogled na more". */
  attributes: string[];
  images: string[];
  description: string;
  featured: boolean;
  createdAt: Date;
};

const FEATURED_COUNT = 4;

/** Only the nekretnine columns this site actually needs — never sellers, agent_id, mediation/commission details, etc. */
const SELECT_COLUMNS =
  'code, title, type, region, location, price, surface_area, bedrooms, bathrooms, attributes, images, description, created_at';

type NekretnineRow = {
  code: string;
  title: string;
  type: string;
  region: string;
  location: string;
  price: number;
  surface_area: number;
  bedrooms: number;
  bathrooms: number;
  attributes: unknown;
  images: unknown;
  description: string;
  created_at: string;
};

let cachedClient: SupabaseClient | null = null;

function getSupabaseClient(): SupabaseClient | null {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_ANON_KEY;

  if (!url || !key) {
    console.warn('SUPABASE_URL/SUPABASE_ANON_KEY are not set — no properties will be returned.');
    return null;
  }

  if (!cachedClient) {
    try {
      cachedClient = createClient(url, key);
    } catch (error) {
      console.error('Failed to create Supabase client — no properties will be returned.', error);
      return null;
    }
  }

  return cachedClient;
}

function slugify(value: string): string {
  return value
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function mapRow(row: NekretnineRow): Property {
  const images = Array.isArray(row.images)
    ? row.images.filter((image): image is string => typeof image === 'string')
    : [];
  const attributes = Array.isArray(row.attributes)
    ? row.attributes.filter((attribute): attribute is string => typeof attribute === 'string')
    : [];

  return {
    slug: `${slugify(row.title)}-${slugify(row.code)}`,
    title: row.title,
    sizeM2: row.surface_area,
    region: row.region,
    location: row.location,
    propertyType: row.type as PropertyType,
    priceEUR: row.price === 0 ? null : row.price,
    bedrooms: row.bedrooms,
    bathrooms: row.bathrooms,
    attributes,
    images,
    description: row.description,
    featured: false,
    createdAt: new Date(row.created_at),
  };
}

async function fetchActiveProperties(): Promise<Property[]> {
  const client = getSupabaseClient();
  if (!client) return [];

  const { data, error } = await client
    .from('nekretnine')
    .select(SELECT_COLUMNS)
    .eq('status', 'active')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Failed to fetch properties from Baza', error);
    return [];
  }

  return (data ?? []).map((row, index) => ({
    ...mapRow(row as unknown as NekretnineRow),
    featured: index < FEATURED_COUNT,
  }));
}

export async function getProperties(): Promise<Property[]> {
  return fetchActiveProperties();
}

export async function getPropertyBySlug(slug: string): Promise<Property | undefined> {
  const properties = await fetchActiveProperties();
  return properties.find((property) => property.slug === slug);
}

/**
 * Prefers properties sharing the current one's location or type, then fills
 * any remaining slots with other properties.
 */
export function getRelatedProperties(
  properties: Property[],
  current: Property,
  count = 2,
): Property[] {
  const others = properties.filter((property) => property.slug !== current.slug);

  const preferred = others.filter(
    (property) =>
      property.location === current.location || property.propertyType === current.propertyType,
  );
  const rest = others.filter((property) => !preferred.includes(property));

  return [...preferred, ...rest].slice(0, count);
}

export function formatPropertySize(sizeM2: Property['sizeM2']): string {
  return `${sizeM2} m²`;
}

export function formatPropertyPrice(priceEUR: Property['priceEUR']): string {
  if (priceEUR === null) return 'Na Upit';
  return `${new Intl.NumberFormat('hr-HR').format(priceEUR)} €`;
}
