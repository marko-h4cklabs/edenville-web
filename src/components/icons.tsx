import type { SVGProps } from 'react';

export function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
    </svg>
  );
}

export function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M14.5 8.5h2V5.3c-.35-.05-1.54-.15-2.94-.15-2.9 0-4.9 1.77-4.9 5.03V13H6v3.6h3.66V22h3.7v-5.4h3.52l.56-3.6h-4.08v-2.4c0-1.04.28-1.75 1.79-1.75Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function MailIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect x="3" y="5.5" width="18" height="13" rx="2.5" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="m4.5 7 7.5 6 7.5-6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PhoneIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M6.6 3.5 9.3 6a1.4 1.4 0 0 1-.05 1.9L7.7 9.4a11.7 11.7 0 0 0 6.9 6.9l1.5-1.55a1.4 1.4 0 0 1 1.9-.05l2.5 2.7a1.4 1.4 0 0 1-.08 2L18.9 20.9a2 2 0 0 1-1.87.55A16.6 16.6 0 0 1 3.55 6.97a2 2 0 0 1 .55-1.87L5.6 3.58a1.4 1.4 0 0 1 1-.08Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="8" cy="8.5" r="1.15" fill="currentColor" />
      <path d="M8 11v6.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path
        d="M12 17.5V13c0-1.1.7-2 2.1-2s1.9 1 1.9 2.2v4.3"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M12 11v.8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function CameraIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4 8.5A1.5 1.5 0 0 1 5.5 7h2.1l.9-1.5a1 1 0 0 1 .86-.5h3.28a1 1 0 0 1 .86.5l.9 1.5h2.1A1.5 1.5 0 0 1 20 8.5v8A1.5 1.5 0 0 1 18.5 18h-13A1.5 1.5 0 0 1 4 16.5Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="12.2" r="3.1" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export function StarIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 3.5 14.7 9l6 .87-4.35 4.24 1.03 5.99L12 17.1l-5.38 2.99 1.03-5.99L3.3 9.87 9.3 9Z" />
    </svg>
  );
}

export function ChevronDownIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="m6 9 6 6 6-6"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MenuIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4 7h16M4 12h16M4 17h16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function CloseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M6 6l12 12M18 6 6 18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
