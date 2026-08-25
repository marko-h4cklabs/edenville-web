import Link from 'next/link';
import { StarIcon } from '@/components/icons';

const TESTIMONIALS = [
  {
    name: 'Ana Perić',
    initials: 'AP',
    quote:
      'Profesionalnost i posvećenost od prvog razgovora do potpisa ugovora. Cijeli proces kupnje protekao je glatko i bez stresa.',
  },
  {
    name: 'Ivan Marić',
    initials: 'IM',
    quote:
      'Matija nam je pomogao pronaći savršenu vilu unutar zadanog budžeta. Odlična komunikacija i poznavanje tržišta.',
  },
  {
    name: 'Petra Novak',
    initials: 'PN',
    quote:
      'Prodaja nekretnine nikad nije bila jednostavnija. Transparentan pristup i brza realizacija posla.',
  },
];

export function ReviewsPreview() {
  return (
    <section className="px-gutter py-section-y-sm sm:py-section-y mx-auto max-w-7xl">
      <div className="text-center">
        <p className="text-gold text-sm font-semibold tracking-[0.15em] uppercase">Recenzije</p>
        <h2 className="text-ink mt-3 font-serif text-3xl italic sm:text-4xl">
          Riječi Naših Klijenata
        </h2>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
        {TESTIMONIALS.map((testimonial) => (
          <div key={testimonial.name} className="border-line rounded-2xl border bg-white p-6">
            <div className="text-gold flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} className="size-4" />
              ))}
            </div>
            <p className="text-muted mt-4 text-sm leading-relaxed">
              &ldquo;{testimonial.quote}&rdquo;
            </p>
            <div className="mt-6 flex items-center gap-3">
              <div className="bg-ink text-cream flex size-10 items-center justify-center rounded-full font-serif text-sm italic">
                {testimonial.initials}
              </div>
              <p className="text-ink text-sm font-semibold">{testimonial.name}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <Link
          href="/recenzije"
          className="border-ink text-ink hover:bg-ink hover:text-cream rounded-full border px-8 py-3.5 text-sm font-semibold tracking-wide transition-colors"
        >
          Sve Recenzije
        </Link>
      </div>
    </section>
  );
}
