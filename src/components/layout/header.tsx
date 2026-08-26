'use client';

import Link from 'next/link';
import { useState } from 'react';
import { CloseIcon, MenuIcon } from '@/components/icons';
import { Logo } from '@/components/layout/logo';

const NAV_LINKS = [
  { label: 'SVE NEKRETNINE', href: '/search' },
  { label: 'RECENZIJE', href: '/recenzije' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'O NAMA', href: '/#onama' },
] as const;

const CTA_LINK = { label: 'Kontaktirajte Nas', href: '/contact' } as const;

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="h-header bg-ink text-cream sticky top-0 z-50 border-b border-white/10">
      <div className="px-gutter mx-auto flex h-full max-w-7xl items-center justify-between">
        <Logo />

        <nav className="hidden items-center gap-8 md:flex" aria-label="Glavna navigacija">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-cream/90 hover:text-gold text-sm font-medium tracking-wide transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={CTA_LINK.href}
            className="bg-gold text-ink hover:bg-gold-muted shadow-gold/20 rounded-full px-6 py-3 text-sm font-semibold tracking-wide shadow-sm transition-all duration-200 hover:scale-[1.03] hover:shadow-md"
          >
            {CTA_LINK.label}
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav"
          aria-label={isMenuOpen ? 'Zatvori izbornik' : 'Otvori izbornik'}
          className="text-cream md:hidden"
        >
          {isMenuOpen ? <CloseIcon className="size-6" /> : <MenuIcon className="size-6" />}
        </button>
      </div>

      {isMenuOpen ? (
        <nav
          id="mobile-nav"
          aria-label="Mobilna navigacija"
          className="bg-ink px-gutter flex flex-col gap-1 border-t border-white/10 py-6 md:hidden"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-cream/90 hover:text-gold py-3 text-sm font-medium tracking-wide transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={CTA_LINK.href}
            onClick={() => setIsMenuOpen(false)}
            className="bg-gold text-ink hover:bg-gold-muted shadow-gold/20 mt-3 rounded-full px-6 py-3 text-center text-sm font-semibold tracking-wide shadow-sm transition-all duration-200 hover:shadow-md hover:brightness-105"
          >
            {CTA_LINK.label}
          </Link>
        </nav>
      ) : null}
    </header>
  );
}
