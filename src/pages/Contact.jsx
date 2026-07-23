import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Mail, MapPin, CalendarClock } from 'lucide-react';
import SEO from '@/components/common/SEO';
import PageHero from '@/components/common/PageHero';
import Section from '@/components/common/Section';
import MultiStepQuoteForm from '@/components/forms/MultiStepQuoteForm';
import ContactForm from '@/components/forms/ContactForm';
import siteConfig from '@/config/siteConfig';
import { cn } from '@/utils/cn';

export default function Contact() {
  const [searchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState(searchParams.get('type') === 'consultation' ? 'general' : 'quote');

  return (
    <>
      <SEO
        title="Contact & Get a Quote"
        description="Start a project inquiry, request a quote, or book a consultation with the DigiInsaf team."
      />

      <PageHero
        breadcrumbItems={[{ label: 'Home', to: '/' }, { label: 'Contact' }]}
        eyebrow="Contact"
        title="Tell us about your project."
        description="Fill in the quote form for a detailed proposal, or send a general message if you would rather start with a conversation."
        tone="navy"
        backgroundImage="/images/contact-typing.jpg"
        imageAlt="A person typing on a laptop at a desk"
      />

      <Section tone="surface" containerClassName="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
        <div>
          <div className="mb-8 inline-flex rounded-full border border-hairline bg-paper p-1">
            {[
              { key: 'quote', label: 'Get a Quote' },
              { key: 'general', label: 'General Inquiry' },
            ].map((tab) => (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActiveTab(tab.key)}
                aria-pressed={activeTab === tab.key}
                className={cn(
                  'focus-ring rounded-full px-5 py-2 text-body-sm font-medium transition-colors',
                  activeTab === tab.key ? 'bg-sea-700 text-white' : 'text-charcoal-muted hover:text-charcoal'
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {activeTab === 'quote' ? <MultiStepQuoteForm /> : <ContactForm />}
        </div>

        <aside className="space-y-6">
          <div className="rounded-xl2 border border-hairline bg-paper p-6">
            <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-sea-50 text-sea-700">
              <CalendarClock className="h-5 w-5" />
            </span>
            <h3 className="mb-2 text-lg font-semibold text-charcoal">Prefer a conversation?</h3>
            <p className="mb-4 text-body-sm leading-relaxed text-charcoal-muted">
              Book a short consultation call to talk through your project before submitting a formal
              quote request.
            </p>
            <a
              href={`mailto:${siteConfig.contact.salesEmail}?subject=Consultation request`}
              className="focus-ring inline-flex items-center gap-1.5 rounded text-body-sm font-semibold text-sea-700 hover:text-sea-800"
            >
              {siteConfig.cta.consultation}
            </a>
          </div>

          <div className="rounded-xl2 border border-hairline bg-paper p-6">
            <h3 className="mb-4 text-caption font-semibold uppercase tracking-wider text-charcoal-muted">
              Contact details
            </h3>
            <ul className="space-y-3 text-body-sm text-charcoal-muted">
              <li className="flex items-start gap-2.5">
                <Mail className="mt-0.5 h-4 w-4 flex-shrink-0 text-sea-700" />
                <div className="space-y-1.5">
                  <a href={`mailto:${siteConfig.contact.email}`} className="focus-ring block rounded hover:text-charcoal">
                    <span className="text-charcoal-muted">Info: </span>
                    {siteConfig.contact.email}
                  </a>
                  <a href={`mailto:${siteConfig.contact.supportEmail}`} className="focus-ring block rounded hover:text-charcoal">
                    <span className="text-charcoal-muted">Support: </span>
                    {siteConfig.contact.supportEmail}
                  </a>
                  <a href={`mailto:${siteConfig.contact.billingEmail}`} className="focus-ring block rounded hover:text-charcoal">
                    <span className="text-charcoal-muted">Billing: </span>
                    {siteConfig.contact.billingEmail}
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin className="h-4 w-4 flex-shrink-0 text-sea-700" />
                {siteConfig.company.locationLabel}
              </li>
            </ul>
          </div>
        </aside>
      </Section>
    </>
  );
}
