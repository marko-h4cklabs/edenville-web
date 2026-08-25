'use client';

import { useState } from 'react';
import { CameraIcon, ChevronLeftIcon, ChevronRightIcon } from '@/components/icons';
import { ArchitecturalPlaceholder } from '@/components/ui/architectural-placeholder';
import { cn } from '@/lib/utils';

export function PropertyGallery({ images }: { images: string[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = images.length;

  function goTo(index: number) {
    setActiveIndex(((index % total) + total) % total);
  }

  return (
    <div>
      <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
        <ArchitecturalPlaceholder key={activeIndex} monogram={String(activeIndex + 1)} />

        {total > 1 ? (
          <>
            <button
              type="button"
              onClick={() => goTo(activeIndex - 1)}
              aria-label="Prethodna fotografija"
              className="bg-ink-deep/60 text-cream hover:bg-ink-deep/80 absolute top-1/2 left-4 flex size-10 -translate-y-1/2 items-center justify-center rounded-full backdrop-blur-sm transition-colors"
            >
              <ChevronLeftIcon className="size-5" />
            </button>
            <button
              type="button"
              onClick={() => goTo(activeIndex + 1)}
              aria-label="Sljedeća fotografija"
              className="bg-ink-deep/60 text-cream hover:bg-ink-deep/80 absolute top-1/2 right-4 flex size-10 -translate-y-1/2 items-center justify-center rounded-full backdrop-blur-sm transition-colors"
            >
              <ChevronRightIcon className="size-5" />
            </button>
          </>
        ) : null}

        <div className="bg-ink-deep/70 text-cream absolute right-4 bottom-4 flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium backdrop-blur-sm">
          <CameraIcon className="size-3.5" />
          {activeIndex + 1} / {total}
        </div>
      </div>

      {total > 1 ? (
        <div className="mt-4 grid grid-cols-5 gap-3 sm:grid-cols-8">
          {images.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => goTo(index)}
              aria-label={`Prikaži fotografiju ${index + 1}`}
              aria-current={index === activeIndex}
              className={cn(
                'relative aspect-square overflow-hidden rounded-lg ring-2 transition',
                index === activeIndex ? 'ring-gold' : 'hover:ring-line ring-transparent',
              )}
            >
              <ArchitecturalPlaceholder />
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
