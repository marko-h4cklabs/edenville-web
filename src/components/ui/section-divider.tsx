import { cn } from '@/lib/utils';

export function SectionDivider({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn('flex items-center justify-center gap-4 py-10 sm:py-14', className)}
    >
      <span className="bg-gold/30 h-px w-16 sm:w-28" />
      <span className="bg-gold size-1.5 rotate-45" />
      <span className="bg-gold/30 h-px w-16 sm:w-28" />
    </div>
  );
}
