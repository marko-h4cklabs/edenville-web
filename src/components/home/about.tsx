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
              src="/images/sky-office.jpg"
              alt=""
              fill
              sizes="200px"
              className="object-cover"
            />
          </div>
        </div>

        <div>
          <div className="fade-in-up">
            <p className="text-gold text-sm font-semibold tracking-[0.15em] uppercase">O nama</p>
            <h2 className="text-ink mt-3 font-serif text-3xl tracking-tight italic sm:text-4xl lg:text-5xl">
              Upoznajte EdenVille
            </h2>
          </div>
          <p className="text-muted mt-6 leading-relaxed">
            Svakom klijentu koji kupuje ili prodaje nekretninu pristupamo osobno i s punom
            posvećenošću.
          </p>
          <p className="text-muted mt-4 leading-relaxed">
            Naš cilj je da vam, u skladu s vašim mogućnostima i željama, ponudimo ono najbolje što
            naša ponuda ima.
          </p>
          <p className="text-muted mt-4 leading-relaxed">
            Svoju karijeru započeo sam s 19 godina, a danas me vodi iskrena strast prema ovom poslu
            u svakoj nekretnini vidim život.
          </p>
          <p className="text-muted mt-4 leading-relaxed">
            Upravo zato pažljivo biram nekretnine koje su funkcionalne, ali i potpuno usklađene sa
            svim potrebnim procedurama i propisima.
          </p>
          <p className="text-muted mt-4 leading-relaxed">
            Nismo jedina agencija za nekretnine, ali naši klijenti odabrali su nas, i preporučili
            nas drugima jer su prepoznali našu profesionalnost i predanost.
          </p>
          <p className="text-muted mt-4 leading-relaxed">
            Očekujem Vaš poziv ili poruku da zajedno krenemo pronaći najbolji dom za Vas.
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
