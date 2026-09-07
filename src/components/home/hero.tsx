import Link from 'next/link';
import { SearchIcon } from '@/components/icons';

const STATS = [
  { value: '130+', label: 'Zadovoljnih Klijenata' },
  { value: '5+', label: 'Godina Iskustva' },
];

export function Hero() {
  return (
    <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden text-center">
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="/images/hero-bg.jpg"
        className="absolute inset-0 size-full object-cover"
      >
        <source src="/videos/hero-bg-compressed.mp4" type="video/mp4" />
      </video>
      <div className="from-ink-deep/90 via-ink-deep/40 absolute inset-0 bg-gradient-to-t to-transparent" />
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(ellipse_at_center,transparent_40%,rgba(10,11,11,0.6)_100%)]" />
      <div className="px-gutter relative z-10 mx-auto flex max-w-3xl flex-col items-center py-24">
        <div className="flex flex-wrap items-center justify-center gap-3">
          {STATS.map((stat) => (
            <span
              key={stat.label}
              className="text-cream rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-medium tracking-wide backdrop-blur-sm sm:text-sm"
            >
              <span className="text-gold font-semibold">{stat.value}</span> {stat.label}
            </span>
          ))}
        </div>
        <div className="text-gold/90 mt-10 flex items-center gap-4">
          <span aria-hidden="true" className="bg-gold/40 h-px w-10" />
          <span className="font-serif text-xs tracking-[0.35em] uppercase italic [text-shadow:0_1px_10px_rgba(0,0,0,0.4)]">
            Nekretnine Hrvatska
          </span>
          <span aria-hidden="true" className="bg-gold/40 h-px w-10" />
        </div>
        <h1 className="text-cream mt-5 font-serif text-4xl leading-tight tracking-tight italic [text-shadow:0_2px_20px_rgba(0,0,0,0.45)] sm:text-5xl md:text-6xl lg:text-7xl">
          Pronađite svoju idealnu <span className="text-gold">nekretninu</span>
        </h1>

        <form
          action="/search"
          method="GET"
          role="search"
          className="focus-within:border-gold/50 mt-10 flex w-full max-w-md items-center gap-2 rounded-full border border-white/20 bg-white/10 py-2 pr-2 pl-5 backdrop-blur-sm transition-colors focus-within:bg-white/15"
        >
          <input
            type="text"
            name="q"
            placeholder="Pretraži po lokaciji ili nazivu..."
            className="text-cream placeholder:text-cream/50 min-w-0 flex-1 bg-transparent text-sm outline-none"
          />
          <button
            type="submit"
            aria-label="Pretraži nekretnine"
            className="bg-gold text-ink hover:bg-gold-muted flex size-10 shrink-0 items-center justify-center rounded-full transition-all duration-200 hover:scale-105"
          >
            <SearchIcon className="size-4.5" />
          </button>
        </form>

        <Link
          href="/search"
          className="bg-gold text-ink hover:bg-gold-muted shadow-gold/20 mt-6 rounded-full px-9 py-4 text-xs font-semibold tracking-[0.12em] uppercase shadow-md transition-all duration-200 hover:scale-[1.03] hover:shadow-lg"
        >
          Potraži nekretnine
        </Link>
      </div>
    </section>
  );
}
