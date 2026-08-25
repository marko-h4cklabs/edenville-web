import Link from 'next/link';
import { TestimonialCard } from '@/components/testimonial-card';
import { reviews } from '@/lib/reviews';

export function ReviewsPreview() {
  const featured = reviews.slice(0, 3);

  return (
    <section className="px-gutter py-section-y-sm sm:py-section-y mx-auto max-w-7xl">
      <div className="text-center">
        <p className="text-gold text-sm font-semibold tracking-[0.15em] uppercase">Recenzije</p>
        <h2 className="text-ink mt-3 font-serif text-3xl italic sm:text-4xl">
          Riječi Naših Klijenata
        </h2>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
        {featured.map((testimonial) => (
          <TestimonialCard key={testimonial.name} testimonial={testimonial} />
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
