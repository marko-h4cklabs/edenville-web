import { StarIcon } from '@/components/icons';
import type { Testimonial } from '@/lib/reviews';

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="border-line hover:border-gold/30 relative overflow-hidden rounded-2xl border bg-white p-8 transition-colors">
      <span
        aria-hidden="true"
        className="text-gold/10 pointer-events-none absolute -top-4 left-5 font-serif text-8xl leading-none italic select-none"
      >
        &rdquo;
      </span>
      <div className="relative">
        <div className="text-gold flex gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <StarIcon key={i} className="size-3.5" />
          ))}
        </div>
        <p className="text-ink/80 mt-5 font-serif text-base leading-relaxed italic">
          &ldquo;{testimonial.quote}&rdquo;
        </p>
        <div className="mt-6 flex items-center gap-3">
          <div className="bg-ink text-cream ring-gold/30 flex size-10 items-center justify-center rounded-full font-serif text-sm italic ring-1">
            {testimonial.initials}
          </div>
          <p className="text-ink text-sm font-semibold">{testimonial.name}</p>
        </div>
      </div>
    </div>
  );
}
