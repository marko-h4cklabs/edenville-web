const STATS = [
  { value: '130+', label: 'Zadovoljnih Klijenata' },
  { value: '5+', label: 'Godina Iskustva' },
];

export function Stats() {
  return (
    <section className="bg-ink py-section-y-sm sm:py-section-y">
      <div className="px-gutter mx-auto grid max-w-4xl grid-cols-1 gap-12 text-center sm:grid-cols-2">
        {STATS.map((stat) => (
          <div key={stat.label}>
            <p className="text-gold font-serif text-5xl italic sm:text-6xl">{stat.value}</p>
            <p className="text-cream/70 mt-3 text-sm font-medium tracking-[0.15em] uppercase">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
