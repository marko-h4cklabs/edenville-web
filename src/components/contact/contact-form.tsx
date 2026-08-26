'use client';

import { type FormEvent, useState } from 'react';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('submitting');

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          phone: formData.get('phone'),
          message: formData.get('message'),
        }),
      });

      if (!response.ok) throw new Error('request failed');

      setStatus('success');
      form.reset();
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="border-line rounded-2xl border bg-white p-10 text-center">
        <p className="text-ink font-serif text-xl italic">Hvala Vam!</p>
        <p className="text-muted mt-3">Kontaktirati ćemo vas u najkraćem mogućem roku.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <Field label="Ime" name="name" type="text" />
      <Field label="Email" name="email" type="email" />
      <Field label="Broj Mobitela" name="phone" type="tel" />

      <div>
        <label htmlFor="message" className="text-ink text-sm font-medium">
          Poruka
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="border-line focus:border-gold mt-2 w-full rounded-xl border px-4 py-3 text-sm transition-colors outline-none"
        />
      </div>

      {status === 'error' ? (
        <p className="text-sm text-red-600">
          Slanje nije uspjelo. Pokušajte ponovno ili nas kontaktirajte izravno.
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="bg-gold text-ink hover:bg-gold-muted shadow-gold/20 w-full rounded-full px-7 py-4 text-sm font-semibold tracking-wide shadow-md transition-all duration-200 hover:shadow-lg hover:brightness-105 disabled:opacity-60"
      >
        {status === 'submitting' ? 'Slanje...' : 'Pošaljite'}
      </button>
    </form>
  );
}

function Field({ label, name, type }: { label: string; name: string; type: string }) {
  return (
    <div>
      <label htmlFor={name} className="text-ink text-sm font-medium">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        className="border-line focus:border-gold mt-2 w-full rounded-xl border px-4 py-3 text-sm transition-colors outline-none"
      />
    </div>
  );
}
