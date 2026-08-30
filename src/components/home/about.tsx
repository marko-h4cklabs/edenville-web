import Image from 'next/image';
import { FacebookIcon, InstagramIcon, LinkedinIcon } from '@/components/icons';

const SOCIALS = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/matija-kutnjak-662b3a2aa/?originalSubdomain=hr',
    icon: LinkedinIcon,
  },
  { label: 'Instagram', href: 'https://www.instagram.com/matijakutnjak/', icon: InstagramIcon },
  { label: 'Facebook', href: 'https://web.facebook.com/matija.kutnjak.33', icon: FacebookIcon },
];

export function About() {
  return (
    <section id="onama" className="bg-mist py-section-y-sm sm:py-section-y scroll-mt-header">
      <div className="px-gutter mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div className="relative mx-auto aspect-[4/5] w-full max-w-sm">
          <div className="relative h-full w-full overflow-hidden rounded-2xl">
            <Image
              src="/images/about-portrait-main.jpg"
              alt="Matija Kutnjak"
              fill
              sizes="(min-width: 1024px) 384px, 90vw"
              className="object-cover"
            />
          </div>
          <div className="border-mist absolute -right-6 -bottom-6 h-2/5 w-2/5 overflow-hidden rounded-2xl border-4">
            <Image
              src="/images/about-portrait-lifestyle.jpg"
              alt="Matija Kutnjak"
              fill
              sizes="200px"
              className="object-cover"
            />
          </div>
        </div>

        <div>
          <div className="fade-in-up">
            <p className="text-gold text-sm font-semibold tracking-[0.15em] uppercase">O nama</p>
            <h2 className="text-ink mt-3 font-serif text-3xl italic sm:text-4xl">
              Upoznajte EdenVille
            </h2>
          </div>
          <p className="text-muted mt-6 leading-relaxed">
            Matija Kutnjak je licencirani broker za nekretnine čija karijera u svijetu nekretnina
            počinje već s 19 godina. Kroz dugogodišnje iskustvo izgradio je duboko razumijevanje
            tržišta luksuznih nekretnina diljem Hrvatske.
          </p>
          <p className="text-muted mt-4 leading-relaxed">
            Svakom klijentu koji kupuje ili prodaje nekretninu pristupa osobno i s punom
            posvećenošću, vjerujući da kupnja nekretnine nije samo transakcija, već jedna od
            najvažnijih životnih odluka.
          </p>
          <div className="mt-8 flex items-center gap-4">
            {SOCIALS.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="border-line text-ink hover:border-gold hover:text-gold flex size-10 items-center justify-center rounded-full border transition-colors"
              >
                <span className="sr-only">{label}</span>
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
