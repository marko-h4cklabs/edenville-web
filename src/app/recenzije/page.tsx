import type { Metadata } from 'next';
import Link from 'next/link';
import { TestimonialCard } from '@/components/testimonial-card';
import { reviews } from '@/lib/reviews';

export const metadata: Metadata = {
  title: 'Recenzije | EdenVille',
  description: 'Riječi naših klijenata o suradnji s EdenVille agencijom za luksuzne nekretnine.',
};

export default function RecenzijePage() {
  return (
    <div className="px-gutter py-section-y-sm sm:py-section-y mx-auto max-w-7xl">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-gold text-sm font-semibold tracking-[0.15em] uppercase">Recenzije</p>
        <h1 className="text-ink mt-3 font-serif text-3xl italic sm:text-4xl">
          Riječi Naših Klijenata
        </h1>
        <p className="text-muted mt-6 leading-relaxed">
          Matija Kutnjak je licencirani broker s dugogodišnjim iskustvom u kupnji, prodaji i
          investiranju u luksuzne nekretnine. Ovo je nekoliko iskustava klijenata koji su mu
          povjerili jednu od najvažnijih životnih odluka.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {reviews.map((testimonial) => (
          <TestimonialCard key={testimonial.name} testimonial={testimonial} />
        ))}
      </div>

      <div className="border-line mt-20 rounded-2xl border bg-white p-10 text-center sm:p-14">
        <h2 className="text-ink font-serif text-2xl italic sm:text-3xl">
          Imate dodatnih pitanja? Slobodno nam se javite
        </h2>
        <Link
          href="/contact"
          className="bg-gold text-ink hover:bg-gold-muted shadow-gold/20 mt-8 inline-flex items-center justify-center rounded-full px-9 py-4 text-sm font-semibold tracking-wide shadow-md transition-all duration-200 hover:scale-[1.03] hover:shadow-lg"
        >
          Kontaktirajte Nas
        </Link>
      </div>
    </div>
  );
}
