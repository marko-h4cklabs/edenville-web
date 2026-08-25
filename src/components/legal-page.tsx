import type { ReactNode } from 'react';

export type LegalSection = {
  heading: string;
  body: ReactNode;
};

export function LegalPage({
  title,
  lastUpdated,
  sections,
}: {
  title: string;
  lastUpdated: string;
  sections: LegalSection[];
}) {
  return (
    <div className="px-gutter py-section-y-sm sm:py-section-y mx-auto max-w-3xl">
      <p className="text-gold text-sm font-semibold tracking-[0.15em] uppercase">EdenVille</p>
      <h1 className="text-ink mt-3 font-serif text-3xl italic sm:text-4xl">{title}</h1>
      <p className="text-muted mt-3 text-sm">Last update: {lastUpdated}</p>

      <div className="border-line divide-line mt-10 divide-y border-t">
        {sections.map((section) => (
          <section key={section.heading} className="py-8">
            <h2 className="text-ink font-serif text-xl italic">{section.heading}</h2>
            <div className="text-muted mt-3 space-y-3 leading-relaxed">{section.body}</div>
          </section>
        ))}
      </div>
    </div>
  );
}
