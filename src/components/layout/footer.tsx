import Image from 'next/image';
import Link from 'next/link';
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  MailIcon,
  PhoneIcon,
  TiktokIcon,
  YoutubeIcon,
} from '@/components/icons';
import { Logo } from '@/components/layout/logo';

const CATEGORY_LINKS = [
  { label: 'Latest Properties', href: '/dashboard' },
  { label: 'Featured Properties', href: '/dashboard?sort=featured' },
];

const MORE_LINKS = [
  { label: 'Search Properties', href: '/search' },
  { label: 'All Listings', href: '/dashboard' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms of Service', href: '/terms-of-service' },
];

const SOCIAL_LINKS = [
  { label: 'Facebook', href: 'https://web.facebook.com/matija.kutnjak.33', icon: FacebookIcon },
  { label: 'Instagram', href: 'https://www.instagram.com/matijakutnjak/', icon: InstagramIcon },
  // No real YouTube profile sourced yet — placeholder until Marko supplies one.
  { label: 'YouTube', href: '#', icon: YoutubeIcon },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/matija-kutnjak-662b3a2aa/?originalSubdomain=hr',
    icon: LinkedinIcon,
  },
  // No real TikTok profile sourced yet — placeholder until Marko supplies one.
  { label: 'TikTok', href: '#', icon: TiktokIcon },
  { label: 'Email', href: 'mailto:matija@edenville.hr', icon: MailIcon },
  { label: 'Telefon', href: 'tel:+385915558995', icon: PhoneIcon },
];

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-gold/90 mb-4 text-xs font-semibold tracking-[0.15em] uppercase">
      {children}
    </h3>
  );
}

export function Footer() {
  return (
    <footer className="bg-ink text-cream relative overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'url(/images/footer-noise.png)',
          backgroundRepeat: 'repeat',
          backgroundSize: '150px',
        }}
      />

      <div className="px-gutter relative mx-auto max-w-7xl py-16 sm:py-20">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Logo />
            <div className="text-cream/70 mt-4 space-y-1 text-sm">
              <p>Ured: Ulica Milislava Demerca 1, 10 000 ZAGREB</p>
              <p>
                Mail:{' '}
                <a href="mailto:matija@edenville.hr" className="hover:text-gold transition-colors">
                  matija@edenville.hr
                </a>
              </p>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="text-cream/70 hover:text-gold transition-colors"
                >
                  <span className="sr-only">{label}</span>
                  <Icon className="size-5" />
                </a>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-white/10 pt-6">
              <Image
                src="/images/hgk-logo.jpeg"
                alt="Hrvatska gospodarska komora"
                width={1320}
                height={671}
                className="h-8 w-auto rounded-sm opacity-70 grayscale"
              />
              <p className="text-cream/40 text-xs tracking-wide">
                Licencirana agencija za nekretnine
              </p>
            </div>
          </div>

          <div>
            <FooterHeading>Categories</FooterHeading>
            <ul className="text-cream/70 space-y-3 text-sm">
              {CATEGORY_LINKS.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-gold transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <FooterHeading>More</FooterHeading>
            <ul className="text-cream/70 space-y-3 text-sm">
              {MORE_LINKS.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-gold transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-cream/50 mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs sm:flex-row">
          <p>
            Made by:{' '}
            <a
              href="https://theaurelius.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold transition-colors"
            >
              TheAurelius
            </a>
          </p>
          <p>Copyright © 2026 EdenVille. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
