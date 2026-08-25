import Link from 'next/link';
import { MailIcon, PhoneIcon } from '@/components/icons';

export function InquiryCta() {
  return (
    <div className="bg-ink text-cream rounded-2xl p-8">
      <h2 className="font-serif text-xl italic">Zainteresirani ste?</h2>
      <p className="text-cream/70 mt-2 text-sm leading-relaxed">
        Kontaktirajte nas za dodatne informacije, dogovor razgledavanja ili odgovore na vaša
        pitanja.
      </p>

      <Link
        href="/contact"
        className="bg-gold text-ink hover:bg-gold-muted mt-6 flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-colors"
      >
        Kontaktirajte Nas
      </Link>

      <div className="mt-6 space-y-3 border-t border-white/10 pt-6 text-sm">
        <a
          href="tel:+385915558995"
          className="hover:text-gold flex items-center gap-2.5 transition-colors"
        >
          <PhoneIcon className="size-4" />
          +385 91 555 8995
        </a>
        <a
          href="mailto:matija@edenville.hr"
          className="hover:text-gold flex items-center gap-2.5 transition-colors"
        >
          <MailIcon className="size-4" />
          matija@edenville.hr
        </a>
      </div>
    </div>
  );
}
