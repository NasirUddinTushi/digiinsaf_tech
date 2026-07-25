import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, CalendarClock, Clock, ShieldCheck, MessageSquare, FileText, ArrowRight, Lock } from 'lucide-react';
import SEO from '@/components/common/SEO';
import PageHero from '@/components/common/PageHero';
import MultiStepQuoteForm from '@/components/forms/MultiStepQuoteForm';
import ContactForm from '@/components/forms/ContactForm';
import siteConfig from '@/config/siteConfig';

const contactInfo = [
  { icon: Mail, label: 'Info', value: siteConfig.contact.email, href: `mailto:${siteConfig.contact.email}` },
  { icon: Mail, label: 'Support', value: siteConfig.contact.supportEmail, href: `mailto:${siteConfig.contact.supportEmail}` },
  { icon: MapPin, label: 'Location', value: siteConfig.company.locationLabel, href: null },
  { icon: Clock, label: 'Response Time', value: 'Within 24 hours', href: null },
];

const trustPoints = [
  { icon: ShieldCheck, text: 'GDPR-aligned Practices' },
  { icon: Clock, text: 'Response within 24 hours' },
  { icon: ShieldCheck, text: 'No commitment required' },
];

export default function Contact() {
  const [searchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState(searchParams.get('type') === 'consultation' ? 'general' : 'quote');

  const tabs = [
    { key: 'quote', label: 'Get a Quote', icon: FileText },
    { key: 'general', label: 'General Inquiry', icon: MessageSquare },
  ];

  return (
    <>
      <SEO
        title="Contact & Get a Quote"
        description="Start a project inquiry, request a quote, or book a consultation with the DigiInsaf team."
      />

      <PageHero
        tone="navy"
        eyebrow="Let's Build Together"
        title="Tell us about your project."
        description="Fill in the quote form for a detailed proposal, or send a general message if you would rather start with a conversation."
      >
        <div className="mt-6 flex flex-wrap gap-4">
          {trustPoints.map(({ icon: Icon, text }) => (
            <span key={text} className="flex items-center gap-1.5 text-xs text-graphite-400">
              <Icon className="h-3.5 w-3.5 text-cyan-400" /> {text}
            </span>
          ))}
        </div>
      </PageHero>

      {/* Main Content */}
      <section className="bg-paper py-16">
        <div className="container-xl grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-14">

          {/* Form Side */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            {/* Tab switcher */}
            <div className="mb-8 inline-flex rounded-2xl border border-hairline bg-white p-1.5 shadow-elevation-sm">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.key;
                return (
                  <button
                    key={tab.key}
                    type="button"
                    onClick={() => setActiveTab(tab.key)}
                    aria-pressed={isActive}
                    className={`relative flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition-colors ${
                      isActive ? 'text-white' : 'text-charcoal-muted hover:text-charcoal'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="contactTabIndicator"
                        className="absolute inset-0 rounded-xl bg-sea-950"
                        transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
                      />
                    )}
                    <span className="relative z-10 flex items-center gap-2">
                      <Icon className="h-4 w-4" />
                      {tab.label}
                    </span>
                  </button>
                );
              })}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
              >
                {activeTab === 'quote' ? <MultiStepQuoteForm /> : <ContactForm />}
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Sidebar */}
          <motion.aside
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-5 lg:sticky lg:top-24 lg:self-start"
          >
            {/* Book a call card */}
            <div className="rounded-2xl bg-sea-950 p-7 text-white">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/15 mb-5">
                <CalendarClock className="h-6 w-6 text-cyan-300" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Prefer a conversation?</h3>
              <p className="text-sm leading-relaxed text-graphite-400 mb-5">
                Book a short consultation call to talk through your project before submitting a formal quote request.
              </p>
              <a
                href={`mailto:${siteConfig.contact.salesEmail}?subject=Consultation request`}
                className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 text-sm font-bold text-sea-950 transition-colors hover:bg-cyan-400"
              >
                {siteConfig.cta.consultation} <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            {/* Contact details card */}
            <div className="rounded-2xl border border-hairline bg-white p-6 shadow-elevation-sm">
              <h3 className="text-xs font-bold uppercase tracking-wider text-charcoal-muted mb-5">Contact Details</h3>
              <ul className="space-y-4">
                {contactInfo.map(({ icon: Icon, label, value, href }) => (
                  <li key={label} className="flex items-start gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sea-50 shrink-0">
                      <Icon className="h-4 w-4 text-sea-700" />
                    </div>
                    <div>
                      <span className="block text-[10px] font-bold uppercase tracking-wider text-charcoal-muted">{label}</span>
                      {href ? (
                        <a href={href} className="text-sm text-charcoal hover:text-sea-700 transition-colors font-medium">{value}</a>
                      ) : (
                        <span className="text-sm text-charcoal font-medium">{value}</span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Trust badges */}
            <div className="flex items-start gap-2.5 rounded-2xl border border-hairline bg-sea-50/60 p-5">
              <Lock className="mt-0.5 h-4 w-4 shrink-0 text-sea-700" />
              <p className="text-xs text-charcoal-muted leading-relaxed">
                Your information is safe. We follow <strong>GDPR-aligned practices</strong> and never share your data with third parties.
              </p>
            </div>
          </motion.aside>
        </div>
      </section>
    </>
  );
}
