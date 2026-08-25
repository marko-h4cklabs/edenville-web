import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const CONTACT_RECIPIENT = 'matija@edenville.hr';

export async function POST(request: Request) {
  const { name, email, phone, message } = await request.json();

  if (!name || !email || !phone || !message) {
    return NextResponse.json({ error: 'Sva polja su obavezna.' }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const emailDomain = process.env.RESEND_EMAIL_DOMAIN;

  if (!apiKey || !emailDomain) {
    console.error('RESEND_API_KEY or RESEND_EMAIL_DOMAIN is not set — cannot send contact email.');
    return NextResponse.json({ error: 'Slanje trenutno nije dostupno.' }, { status: 503 });
  }

  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from: `EdenVille Website <contact@${emailDomain}>`,
    to: CONTACT_RECIPIENT,
    replyTo: email,
    subject: `Novi upit s web stranice — ${name}`,
    text: `Ime: ${name}\nEmail: ${email}\nBroj mobitela: ${phone}\n\nPoruka:\n${message}`,
  });

  if (error) {
    console.error('Failed to send contact email', error);
    return NextResponse.json({ error: 'Slanje nije uspjelo.' }, { status: 502 });
  }

  return NextResponse.json({ success: true });
}
