import type { Metadata } from 'next';
import { Lato, Playfair_Display } from 'next/font/google';
import Script from 'next/script';
import { Footer } from '@/components/layout/footer';
import { Header } from '@/components/layout/header';
import './globals.css';

const playfairDisplay = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin', 'latin-ext'],
  style: ['normal', 'italic'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const lato = Lato({
  variable: '--font-lato',
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '700', '900'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'EdenVille | Agencija za Luksuzne Nekretnine',
  description:
    'EdenVille je agencija za luksuzne nekretnine koju vodi Matija Kutnjak, licencirani broker s dugogodišnjim iskustvom u kupnji, prodaji i investiranju u luksuzne nekretnine.',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="hr" className={`${playfairDisplay.variable} ${lato.variable} h-full antialiased`}>
      <body className="bg-cream text-ink flex min-h-full flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Script src="https://real-estate-chatbot-eta.vercel.app/widget-embed.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
