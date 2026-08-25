import { StarIcon } from '@/components/icons';
import type { Testimonial } from '@/lib/reviews';

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="border-line rounded-2xl border bg-white p-6">
      <div className="text-gold flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <StarIcon key={i} className="size-4" />
        ))}
      </div>
      <p className="text-muted mt-4 text-sm leading-relaxed">&ldquo;{testimonial.quote}&rdquo;</p>
      <div className="mt-6 flex items-center gap-3">
        <div className="bg-ink text-cream flex size-10 items-center justify-center rounded-full font-serif text-sm italic">
          {testimonial.initials}
        </div>
        <p className="text-ink text-sm font-semibold">{testimonial.name}</p>
      </div>
    </div>
  );
}
