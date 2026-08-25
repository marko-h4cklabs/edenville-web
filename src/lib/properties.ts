/**
 * Property data access. Backed by a static seed array for now — swap the
 * bodies of getProperties()/getPropertyBySlug() for a Supabase (Baza) query
 * later; every caller already awaits these, so that's a one-file change.
 */

export const PROPERTY_LOCATIONS = [
  'Jarun',
  'Borongaj',
  'Rogoznica',
  'Trešnjevka',
  'Velika Gorica',
  'Maksimir',
  'Pantovčak',
  'Petrova',
  'Srebrnjak',
  'Gračani',
  'Trnje',
  'Volovčica',
  'Centar',
  'Rudeš',
  'Čakovec',
  'Dubrava',
  'Petruševec',
  'Stenjevec',
  'Ferenšćica',
  'Črnomerec',
  'Malešnica',
  'Vrbani',
  'Ribnjak',
  'Ivanec',
  'Markuševec',
  'Sv. Martin na Muri',
  'Kvatrić',
  'Peščenica',
  'Blaguša',
] as const;

export type PropertyLocation = (typeof PROPERTY_LOCATIONS)[number];

export const PROPERTY_TYPES = ['Stan', 'Kuća', 'Penthouse', 'Villa'] as const;

export type PropertyType = (typeof PROPERTY_TYPES)[number];

export type Property = {
  slug: string;
  title: string;
  /** A single value (138) or a unit range as a string ("58 - 97"). */
  sizeM2: number | string;
  location: PropertyLocation;
  propertyType: PropertyType;
  /** null for "Na Upit" (price on request) listings. */
  priceEUR: number | null;
  bedrooms: number;
  images: string[];
  description: string;
  featured: boolean;
  createdAt: Date;
};

function placeholderImages(slug: string, count: number): string[] {
  return Array.from({ length: count }, (_, i) => `/images/properties/${slug}/${i + 1}.jpg`);
}

const properties: Property[] = [
  {
    slug: 'luksuzan-vmd-stan-138-m2',
    title: 'LUKSUZAN VMD stan',
    sizeM2: 138,
    location: 'Peščenica',
    propertyType: 'Stan',
    priceEUR: 420_000,
    bedrooms: 3,
    images: placeholderImages('luksuzan-vmd-stan-138-m2', 10),
    description:
      'Prostran stan visokog standarda opremljen kvalitetnim materijalima i modernim dizajnom. Otvoreni dnevni boravak s kuhinjom, velike terase i pogled na grad čine ovaj stan idealnim za život u srcu Zagreba.',
    featured: true,
    createdAt: new Date('2026-08-14'),
  },
  {
    slug: 'dizajnerski-5-sobni-stan-238-m2',
    title: 'Dizajnerski 5-sobni Stan',
    sizeM2: 238,
    location: 'Peščenica',
    propertyType: 'Stan',
    priceEUR: 690_000,
    bedrooms: 5,
    images: placeholderImages('dizajnerski-5-sobni-stan-238-m2', 10),
    description:
      'Dvoetažni dizajnerski stan s pet soba, uređen po mjeri s pažnjom posvećenom svakom detalju. Velike staklene površine donose obilje prirodnog svjetla, a raspored prostora pogodan je i za obitelji i za rad od kuće.',
    featured: true,
    createdAt: new Date('2026-08-05'),
  },
  {
    slug: 'luksuzna-vila-s-bazenom-i-pogledom-na-more-176-m2',
    title: 'Luksuzna vila s bazenom i pogledom na more',
    sizeM2: 176,
    location: 'Rogoznica',
    propertyType: 'Villa',
    priceEUR: 890_000,
    bedrooms: 4,
    images: placeholderImages('luksuzna-vila-s-bazenom-i-pogledom-na-more-176-m2', 13),
    description:
      'Vila smještena na mirnoj lokaciji uz obalu, s privatnim bazenom i panoramskim pogledom na more. Prostrane terase, uređen vrt i blizina plaže čine je savršenim odmaralištem ili stalnim domom.',
    featured: true,
    createdAt: new Date('2026-07-28'),
  },
  {
    slug: 'luksuzni-stanovi-novogradnja-maksimir',
    title: 'Luksuzni Stanovi, Novogradnja',
    sizeM2: '58 - 97',
    location: 'Maksimir',
    propertyType: 'Stan',
    priceEUR: null,
    bedrooms: 3,
    images: placeholderImages('luksuzni-stanovi-novogradnja-maksimir', 18),
    description:
      'Novogradnja u mirnom dijelu Maksimira, okružena zelenilom i s izvrsnom prometnom povezanošću. Stanovi su izvedeni prema visokim energetskim standardima uz potresnu sigurnost i kvalitetnu opremu.',
    featured: true,
    createdAt: new Date('2026-08-20'),
  },
  {
    slug: 'luksuzna-vila-s-bazenom-125-m2',
    title: 'Luksuzna Vila s Bazenom',
    sizeM2: 125,
    location: 'Sv. Martin na Muri',
    propertyType: 'Villa',
    priceEUR: 395_000,
    bedrooms: 4,
    images: placeholderImages('luksuzna-vila-s-bazenom-125-m2', 10),
    description:
      'Elegantna vila s bazenom, jacuzzijem i saunom, smještena na prostranoj parceli. Zimski vrt, solarni paneli i visokokvalitetna gradnja omogućuju udoban boravak tijekom cijele godine.',
    featured: true,
    createdAt: new Date('2026-08-01'),
  },
];

export async function getProperties(): Promise<Property[]> {
  return properties;
}

export async function getPropertyBySlug(slug: string): Promise<Property | undefined> {
  return properties.find((property) => property.slug === slug);
}

export function formatPropertySize(sizeM2: Property['sizeM2']): string {
  return `${sizeM2} m²`;
}

export function formatPropertyPrice(priceEUR: Property['priceEUR']): string {
  if (priceEUR === null) return 'Na Upit';
  return `${new Intl.NumberFormat('hr-HR').format(priceEUR)} €`;
}
