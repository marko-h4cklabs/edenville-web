import Link from 'next/link';
import { PlusIcon } from '@/components/icons';

const FAQ_ITEMS = [
  {
    question: 'Što vas razlikuje od drugih agencija i agenata?',
    answer:
      'Pristupamo svakom klijentu osobno i s punom posvećenošću. Fokus je na transparentnosti, brzoj komunikaciji i dubokom poznavanju tržišta luksuznih nekretnina.',
  },
  {
    question: 'Pružate li podršku i nakon kupnje?',
    answer:
      'Da, podrška je dostupna i nakon završetka kupoprodaje — od pitanja vezanih uz useljenje do preporuka za uređenje ili daljnje investicije.',
  },
  {
    question: 'Pomažete li klijentima koji žele kupiti nekretninu na daljinu (virtualni obilazak)?',
    answer:
      'Da, organiziramo video pozive i virtualne obilaske za klijente koji nisu u mogućnosti fizički posjetiti nekretninu prije donošenja odluke.',
  },
  {
    question: 'Možete li organizirati obilazak nekretnine i izvan radnog vremena?',
    answer:
      'Obilaske je moguće dogovoriti prema vašem rasporedu, uključujući vikende i večernje termine, kako bi cijeli proces bio što jednostavniji.',
  },
  {
    question: 'Koje dokumente kao kupac moram imati spremne za kupnju?',
    answer:
      'Uglavnom je potrebna osobna iskaznica ili putovnica, dokaz o financiranju (gotovina ili odobrenje kredita) te OIB. Za strane državljane provjeravamo dodatne uvjete ovisno o državljanstvu.',
  },
  {
    question: 'Radite li s investitorima i možete li procijeniti potencijal ulaganja?',
    answer:
      'Da, surađujemo s investitorima i pomažemo u procjeni potencijalnog povrata ulaganja, uključujući analizu lokacije, stanja tržišta i mogućnosti najma.',
  },
  {
    question: 'S čime pomažete kupcima tijekom kupnje (pregovori, dokumentacija, provjere)?',
    answer:
      'Pomažemo oko pregovora o cijeni, prikupljanja i provjere dokumentacije, koordinacije s javnim bilježnikom te provjere pravnog statusa nekretnine.',
  },
  {
    question: 'Radite li procjenu vrijednosti nekretnine prije prodaje?',
    answer:
      'Da, prije izlaska nekretnine na tržište radimo procjenu vrijednosti na temelju usporedivih nekretnina i trenutnog stanja tržišta.',
  },
  {
    question: 'Što prodavatelj dobiva u usluzi koju nudite?',
    answer:
      'Prodavatelji dobivaju profesionalnu fotografiju, marketinšku strategiju, pristup bazi zainteresiranih kupaca te potpunu podršku kroz cijeli proces prodaje.',
  },
];

export function Faq() {
  return (
    <section id="faq" className="py-section-y-sm sm:py-section-y scroll-mt-header">
      <div className="px-gutter mx-auto max-w-3xl">
        <div className="fade-in-up text-center">
          <p className="text-gold text-sm font-semibold tracking-[0.15em] uppercase">FAQ</p>
          <h2 className="text-ink mt-3 font-serif text-3xl italic sm:text-4xl">
            Vi ste pitali. Mi smo odgovorili.
          </h2>
        </div>

        <div className="divide-line border-line mt-12 divide-y border-t">
          {FAQ_ITEMS.map((item) => (
            <details key={item.question} className="group py-6">
              <summary className="text-ink flex cursor-pointer list-none items-start justify-between gap-4 font-serif text-lg italic marker:content-none [&::-webkit-details-marker]:hidden">
                {item.question}
                <PlusIcon className="text-gold mt-1 size-5 shrink-0 transition-transform duration-200 group-open:rotate-45" />
              </summary>
              <p className="text-muted mt-4 text-sm leading-relaxed">{item.answer}</p>
            </details>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/contact"
            className="bg-gold text-ink hover:bg-gold-muted shadow-gold/20 rounded-full px-9 py-4 text-sm font-semibold tracking-wide shadow-md transition-all duration-200 hover:scale-[1.03] hover:shadow-lg"
          >
            Kontaktirajte Nas
          </Link>
        </div>
      </div>
    </section>
  );
}
