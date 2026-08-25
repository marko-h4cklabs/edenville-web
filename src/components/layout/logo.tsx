import Link from 'next/link';
import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn(
        'font-serif text-2xl tracking-tight italic transition-opacity hover:opacity-80',
        className,
      )}
    >
      Eden<span className="text-gold">Ville</span>
    </Link>
  );
}
