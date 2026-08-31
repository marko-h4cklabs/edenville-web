import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn('inline-flex shrink-0 transition-opacity hover:opacity-80', className)}
    >
      <Image
        src="/images/edenville-logo.png"
        alt="EdenVille"
        width={852}
        height={249}
        className="h-9 w-auto sm:h-10"
      />
    </Link>
  );
}
