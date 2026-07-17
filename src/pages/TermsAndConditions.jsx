import SEO from '@/components/common/SEO';
import siteConfig from '@/config/siteConfig';

const sections = [
  {
    title: '1. Acceptance of Terms',
    body: 'By accessing this website, you agree to the terms outlined here. These terms apply to general use of the site; individual client engagements are governed by separate signed agreements or statements of work.',
  },
  {
    title: '2. Services',
    body: 'Digiinsaf provides digital product design and development services as described on this website. Specific deliverables, timelines and pricing for a given engagement are defined in a project proposal or contract, not by this website alone.',
  },
  {
    title: '3. Intellectual Property',
    body: 'Content on this website, including text, graphics and the design system, belongs to Digiinsaf unless otherwise noted. Ownership of deliverables produced under a client engagement is defined in the relevant project agreement.',
  },
  {
    title: '4. Project Inquiries and Quotes',
    body: 'Submitting a project inquiry or quote request through this website does not create a binding contract. A formal agreement is established only once both parties confirm scope, pricing and terms in writing.',
  },
  {
    title: '5. Limitation of Liability',
    body: 'This website and its content are provided on an "as is" basis. A complete limitation of liability clause should be drafted and reviewed by a qualified legal professional before publication.',
  },
  {
    title: '6. Governing Law',
    body: 'The governing law and jurisdiction for these terms should be confirmed in line with Digiinsaf’s registered place of business in Estonia and reviewed by legal counsel.',
  },
];

export default function TermsAndConditions() {
  return (
    <>
      <SEO title="Terms & Conditions" description="Terms and conditions for using the Digiinsaf website." />
      <section className="container-xl bg-ink-900 max-w-3xl py-16 sm:py-24">
        <p className="mb-4 inline-block rounded-full bg-amber-400/10 px-3.5 py-1.5 text-xs font-semibold text-amber-400">
          {siteConfig.legalNotice}
        </p>
        <h1 className="mb-6 text-3xl font-semibold text-white sm:text-4xl">Terms & Conditions</h1>
        <p className="mb-10 text-sm text-graphite-500">
          This draft outlines the structure a full terms and conditions document should follow. It is
          provided as a starting point only and must be reviewed and completed by a qualified legal
          professional before publication.
        </p>

        <div className="space-y-8">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="mb-2 text-xl font-semibold text-white">{section.title}</h2>
              <p className="text-sm leading-relaxed text-graphite-500">{section.body}</p>
            </div>
          ))}
        </div>

        <p className="mt-12 text-sm text-graphite-500">
          Questions about this draft can be directed to{' '}
          <a href={`mailto:${siteConfig.contact.email}`} className="focus-ring rounded font-medium text-cyan-400">
            {siteConfig.contact.email}
          </a>
          .
        </p>
      </section>
    </>
  );
}
