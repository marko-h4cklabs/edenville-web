import type { Metadata } from 'next';
import { ContactForm } from '@/components/contact/contact-form';
import { MailIcon, PhoneIcon } from '@/components/icons';

export const metadata: Metadata = {
  title: 'Kontakt | EdenVille',
  description:
    'Kontaktirajte EdenVille za sva pitanja o kupnji, prodaji ili investiranju u luksuzne nekretnine.',
};

export default function ContactPage() {
  return (
    <div className="px-gutter py-section-y-sm sm:py-section-y mx-auto max-w-7xl">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-gold text-sm font-semibold tracking-[0.15em] uppercase">Kontakt</p>
        <h1 className="text-ink mt-3 font-serif text-3xl italic sm:text-4xl">Kontaktirajte Nas</h1>
        <p className="text-muted mt-6 leading-relaxed">
          Imate pitanje o nekretnini ili želite dogovoriti razgledavanje? Ispunite obrazac ili nas
          kontaktirajte izravno.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-[1fr_320px]">
        <ContactForm />

        <div className="border-line h-fit rounded-2xl border bg-white p-8">
          <h2 className="text-ink font-serif text-lg italic">Kontakt Podaci</h2>
          <div className="mt-6 space-y-5 text-sm">
            <div>
              <p className="text-gold text-xs font-semibold tracking-[0.15em] uppercase">Email</p>
              <a
                href="mailto:matija@edenville.hr"
                className="text-ink hover:text-gold mt-1 flex items-center gap-2 transition-colors"
              >
                <MailIcon className="size-4" />
                matija@edenville.hr
              </a>
            </div>
            <div>
              <p className="text-gold text-xs font-semibold tracking-[0.15em] uppercase">Broj</p>
              <a
                href="tel:+385915558995"
                className="text-ink hover:text-gold mt-1 flex items-center gap-2 transition-colors"
              >
                <PhoneIcon className="size-4" />
                +385 91 555 8995
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
