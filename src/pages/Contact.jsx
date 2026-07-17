import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, CalendarClock } from 'lucide-react';
import SEO from '@/components/common/SEO';
import Breadcrumb from '@/components/common/Breadcrumb';
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
        description="Start a project inquiry, request a quote, or book a consultation with the Digiinsaf team."
      />

      <section className="theme-page-header bg-ink-950 pb-16 pt-10 sm:pb-20 sm:pt-14">
        <div className="container-xl">
          <Breadcrumb tone="dark" items={[{ label: 'Home', to: '/' }, { label: 'Contact' }]} />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mt-8 max-w-2xl"
          >
            <h1 className="text-4xl font-semibold text-white sm:text-5xl">
              Tell us about your project.
            </h1>
            <p className="mt-5 text-lg text-mist-200/75">
              Fill in the quote form for a detailed proposal, or send a general message if you would
              rather start with a conversation.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="container-xl bg-ink-900 grid gap-10 py-16 sm:py-24 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
        <div>
          <div className="mb-8 inline-flex rounded-full border border-white/10 bg-white/[0.04] p-1">
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
                  'focus-ring rounded-full px-5 py-2 text-sm font-medium transition-colors',
                  activeTab === tab.key ? 'bg-cyan-600 text-white' : 'text-graphite-500 hover:text-white'
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {activeTab === 'quote' ? <MultiStepQuoteForm /> : <ContactForm />}
        </div>

        <aside className="space-y-6">
          <div className="rounded-xl2 border border-white/10 bg-white/[0.04] p-6">
            <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400">
              <CalendarClock className="h-5 w-5" />
            </span>
            <h3 className="mb-2 text-lg font-semibold text-white">Prefer a conversation?</h3>
            <p className="mb-4 text-sm leading-relaxed text-graphite-500">
              Book a short consultation call to talk through your project before submitting a formal
              quote request.
            </p>
            <a
              href={`mailto:${siteConfig.contact.salesEmail}?subject=Consultation request`}
              className="focus-ring inline-flex items-center gap-1.5 rounded text-sm font-medium text-cyan-400"
            >
              {siteConfig.cta.consultation}
            </a>
          </div>

          <div className="rounded-xl2 border border-white/10 bg-white/[0.04] p-6">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-graphite-400">
              Contact details
            </h3>
            <ul className="space-y-3 text-sm text-graphite-500">
              <li className="flex items-start gap-2.5">
                <Mail className="mt-0.5 h-4 w-4 flex-shrink-0 text-cyan-400" />
                <div className="space-y-1.5">
                  <a href={`mailto:${siteConfig.contact.email}`} className="focus-ring block rounded hover:text-white">
                    <span className="text-graphite-400">Info: </span>
                    {siteConfig.contact.email}
                  </a>
                  <a href={`mailto:${siteConfig.contact.supportEmail}`} className="focus-ring block rounded hover:text-white">
                    <span className="text-graphite-400">Support: </span>
                    {siteConfig.contact.supportEmail}
                  </a>
                  <a href={`mailto:${siteConfig.contact.billingEmail}`} className="focus-ring block rounded hover:text-white">
                    <span className="text-graphite-400">Billing: </span>
                    {siteConfig.contact.billingEmail}
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 flex-shrink-0 text-cyan-400" />
                {siteConfig.contact.phone}
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin className="h-4 w-4 flex-shrink-0 text-cyan-400" />
                {siteConfig.company.locationLabel}
              </li>
            </ul>
          </div>
        </aside>
      </section>
    </>
  );
}
