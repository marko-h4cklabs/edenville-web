import type { Metadata } from 'next';
import { LegalPage } from '@/components/legal-page';

export const metadata: Metadata = {
  title: 'Terms of Service | EdenVille',
  description: 'EdenVille terms and conditions for using this website.',
};

export default function TermsOfServicePage() {
  return (
    <LegalPage
      title="Terms &amp; Condition"
      lastUpdated="7/20/24"
      sections={[
        {
          heading: 'Introduction',
          body: (
            <p>
              Welcome to EdenVille. By accessing and using this website, you agree to comply with
              and be bound by the following terms and conditions. If you disagree with any part of
              these terms, please do not use our website.
            </p>
          ),
        },
        {
          heading: 'Use of Website',
          body: (
            <p>
              You agree to use the website only for lawful purposes. Any unauthorized use of this
              website may give rise to a claim for damages and/or be a criminal offense.
            </p>
          ),
        },
        {
          heading: 'Intellectual Property',
          body: (
            <p>
              All content on EdenVille, including but not limited to text, images, and logos, is
              owned by EdenVille or its licensors. You may not reproduce, distribute, or
              commercially exploit any content without prior written permission.
            </p>
          ),
        },
        {
          heading: 'User Accounts',
          body: (
            <p>
              When creating an account, you agree to provide accurate information. You are
              responsible for maintaining the confidentiality of your account details.
            </p>
          ),
        },
        {
          heading: 'Third-Party Links',
          body: (
            <p>
              EdenVille may contain links to third-party websites. We are not responsible for the
              content or privacy practices of these sites.
            </p>
          ),
        },
        {
          heading: 'Limitation of Liability',
          body: (
            <p>
              We strive to keep the information on EdenVille accurate, but we make no warranties or
              representations of its accuracy or completeness. EdenVille will not be liable for any
              direct, indirect, or consequential losses arising from the use of this website.
            </p>
          ),
        },
        {
          heading: 'Termination',
          body: (
            <p>
              We reserve the right to terminate or suspend your access to EdenVille at our sole
              discretion, without notice or liability, for any reason.
            </p>
          ),
        },
        {
          heading: 'Changes to Terms',
          body: (
            <p>
              We may update these terms periodically. It is your responsibility to review the terms
              regularly to ensure you are aware of any changes.
            </p>
          ),
        },
        {
          heading: 'Contact Us',
          body: (
            <p>
              If you have any questions or concerns regarding these terms, please contact us at{' '}
              <a href="mailto:homfortsupport@gmail.com" className="text-gold hover:underline">
                homfortsupport@gmail.com
              </a>
              .
            </p>
          ),
        },
      ]}
    />
  );
}
