import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="px-gutter py-section-y-sm sm:py-section-y mx-auto flex max-w-2xl flex-col items-center text-center">
      <p className="text-gold text-sm font-semibold tracking-[0.15em] uppercase">404</p>
      <h1 className="text-ink mt-4 font-serif text-3xl italic sm:text-4xl">
        Stranica Nije Pronađena
      </h1>
      <p className="text-muted mt-4 max-w-md">
        Nažalost, stranica koju tražite ne postoji ili je premještena.
      </p>
      <Link
        href="/"
        className="bg-gold text-ink hover:bg-gold-muted mt-8 inline-flex items-center justify-center rounded-full px-8 py-3.5 text-sm font-semibold tracking-wide transition-colors"
      >
        Natrag na Početnu
      </Link>
    </div>
  );
}
