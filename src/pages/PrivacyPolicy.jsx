import SEO from '@/components/common/SEO';
import siteConfig from '@/config/siteConfig';

const sections = [
  {
    title: '1. Information We Collect',
    body: 'When you use this website or submit a project inquiry, we may collect information you provide directly, such as your name, email address, company name and project details. We may also collect standard technical data such as browser type and pages visited.',
  },
  {
    title: '2. How We Use Information',
    body: 'Information submitted through contact or quote forms is used to respond to your inquiry and, where relevant, to prepare a project proposal. We do not sell personal information to third parties.',
  },
  {
    title: '3. Cookies and Analytics',
    body: 'This site may use basic analytics tools to understand aggregate usage patterns. A production deployment should disclose the specific tools in use and provide cookie consent controls where required by applicable law.',
  },
  {
    title: '4. Data Storage and Security',
    body: 'Reasonable technical and organisational measures should be applied to protect any personal information collected once a backend and database are connected to this frontend.',
  },
  {
    title: '5. Your Rights',
    body: 'Depending on your location, you may have rights to access, correct or request deletion of your personal information. Contact details for such requests should be confirmed and published before launch.',
  },
  {
    title: '6. Changes to This Policy',
    body: 'This policy may be updated as the product and its data practices evolve. The current version and effective date should be clearly displayed once finalised.',
  },
];

export default function PrivacyPolicy() {
  return (
    <>
      <SEO title="Privacy Policy" description="How Digiinsaf collects, uses and protects information." />
      <section className="container-xl max-w-3xl bg-paper pb-16 pt-28 sm:pb-24 sm:pt-36">
        <p className="mb-4 inline-block rounded-full border border-hairline bg-white px-3.5 py-1.5 text-caption font-semibold text-charcoal-muted">
          {siteConfig.legalNotice}
        </p>
        <h1 className="mb-6 text-3xl font-semibold text-charcoal sm:text-4xl">Privacy Policy</h1>
        <p className="mb-10 text-sm text-charcoal-muted">
          This draft outlines the structure a full privacy policy should follow. It is provided as a
          starting point only and must be reviewed and completed by a qualified legal professional
          before publication.
        </p>

        <div className="space-y-8">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="mb-2 text-xl font-semibold text-charcoal">{section.title}</h2>
              <p className="text-sm leading-relaxed text-charcoal-muted">{section.body}</p>
            </div>
          ))}
        </div>

        <p className="mt-12 text-sm text-charcoal-muted">
          Questions about this draft can be directed to{' '}
          <a href={`mailto:${siteConfig.contact.email}`} className="focus-ring rounded font-medium text-sea-700">
            {siteConfig.contact.email}
          </a>
          .
        </p>
      </section>
    </>
  );
}
