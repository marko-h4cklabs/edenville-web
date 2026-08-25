import Link from 'next/link';
import { ArchitecturalPlaceholder } from '@/components/ui/architectural-placeholder';

const STATS = [
  { value: '130+', label: 'Zadovoljnih Klijenata' },
  { value: '5+', label: 'Godina Iskustva' },
];

export function Hero() {
  return (
    <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden text-center">
      <ArchitecturalPlaceholder />
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
        <h1 className="text-cream mt-8 font-serif text-4xl leading-tight italic sm:text-5xl md:text-6xl">
          Pronađite svoju idealnu <span className="text-gold">&ldquo;Vilu iz Edena&rdquo;</span>
        </h1>
        <Link
          href="/search"
          className="bg-gold text-ink hover:bg-gold-muted mt-10 rounded-full px-8 py-3.5 text-sm font-semibold tracking-wide transition-colors"
        >
          Potraži nekretnine
        </Link>
      </div>
    </section>
  );
}
