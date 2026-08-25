import type { Metadata } from 'next';
import { LegalPage } from '@/components/legal-page';

export const metadata: Metadata = {
  title: 'Privacy Policy | EdenVille',
  description:
    'EdenVille privacy policy — how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      lastUpdated="7/20/24"
      sections={[
        {
          heading: 'Introduction',
          body: (
            <p>
              EdenVille (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) values the
              privacy of our website visitors and clients. This Privacy Policy explains what
              personal information we collect, how we use it, and your rights regarding this
              information. By using our website, you agree to this policy.
            </p>
          ),
        },
        {
          heading: 'Information We Collect',
          body: (
            <>
              <p>We collect the following types of data:</p>
              <ul className="list-disc space-y-1 pl-5">
                <li>
                  Personal Information: Name, email address, and contact details when you fill out
                  forms.
                </li>
                <li>
                  Usage Data: Automatically collected data like IP addresses, browser type, device,
                  and usage patterns through cookies.
                </li>
              </ul>
            </>
          ),
        },
        {
          heading: 'How We Use Your Information',
          body: (
            <>
              <p>We use the information collected to:</p>
              <ul className="list-disc space-y-1 pl-5">
                <li>Provide and improve our services.</li>
                <li>
                  Communicate with you, respond to inquiries, and send updates about our offerings.
                </li>
                <li>Analyze site traffic to improve user experience.</li>
              </ul>
            </>
          ),
        },
        {
          heading: 'Cookies',
          body: (
            <p>
              Cookies are small files stored on your device to track user activity on our website.
              You can control cookie settings in your browser to accept or decline them.
            </p>
          ),
        },
        {
          heading: 'Third-Party Sharing',
          body: (
            <p>
              We do not sell or share your personal information with third parties except for
              essential service providers (e.g., hosting services) who help maintain the website.
              These providers follow strict confidentiality agreements.
            </p>
          ),
        },
        {
          heading: 'Security of Your Data',
          body: (
            <p>
              We take data protection seriously and use appropriate security measures to protect
              your personal information from unauthorized access, alteration, or disclosure.
            </p>
          ),
        },
        {
          heading: 'Your Rights',
          body: (
            <p>
              You have the right to request access, correction, or deletion of your personal
              information at any time. Contact us to exercise these rights.
            </p>
          ),
        },
        {
          heading: 'Changes to This Policy',
          body: (
            <p>
              We may update this privacy policy periodically. Any changes will be posted here, and
              the date of the last update will be indicated.
            </p>
          ),
        },
        {
          heading: 'Contact Us',
          body: (
            <p>
              For any privacy concerns or questions, feel free to reach out at{' '}
              <a href="mailto:matija@edenville.hr" className="text-gold hover:underline">
                matija@edenville.hr
              </a>
              .
            </p>
          ),
        },
      ]}
    />
  );
}
