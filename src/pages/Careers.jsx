import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import SEO from '@/components/common/SEO';
import SectionHeading from '@/components/common/SectionHeading';
import Breadcrumb from '@/components/common/Breadcrumb';
import ValueCard from '@/components/cards/ValueCard';
import EmptyState from '@/components/common/EmptyState';
import Button from '@/components/common/Button';
import CTASection from '@/components/common/CTASection';
import Section from '@/components/common/Section';
import siteConfig from '@/config/siteConfig';

const workingPoints = [
  {
    icon: 'Handshake',
    title: 'Direct client exposure',
    description: 'Work close to real client problems, not buried behind layers of process.',
  },
  {
    icon: 'SlidersHorizontal',
    title: 'Modern tooling',
    description: 'Current frameworks and tools chosen for the job, not legacy stacks kept alive out of habit.',
  },
  {
    icon: 'Globe',
    title: 'Remote-friendly, EU time zone',
    description: 'An Estonia-based team working comfortably across European time zones.',
  },
];

export default function Careers() {
  return (
    <>
      <SEO
        title="Careers"
        description="Careers at Digiinsaf, an Estonia-based digital product studio. No open positions listed right now — reach out if you think you'd be a good fit."
      />

      <section className="theme-page-header bg-ink-950 pb-16 pt-10 sm:pb-24 sm:pt-14">
        <div className="container-xl">
          <Breadcrumb tone="dark" items={[{ label: 'Home', to: '/' }, { label: 'Careers' }]} />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mt-8 max-w-2xl"
          >
            <h1 className="text-4xl font-semibold text-white sm:text-5xl">Careers at Digiinsaf</h1>
            <p className="mt-5 text-lg text-mist-200/75">
              We're a small, growing studio based in Estonia. We're not actively hiring right now, but
              we're always glad to hear from people who do good work.
            </p>
          </motion.div>
        </div>
      </section>

      <Section tone="light">
        <SectionHeading
          eyebrow="Why Digiinsaf"
          title="What working with us looks like."
          align="center"
          className="mb-14"
        />
        <div className="grid gap-5 sm:grid-cols-3">
          {workingPoints.map((point, index) => (
            <ValueCard key={point.title} value={point} index={index} />
          ))}
        </div>
      </Section>

      <Section tone="mist">
        <SectionHeading eyebrow="Open positions" title="Current openings." align="center" className="mb-10" />
        <div className="mx-auto max-w-xl">
          <EmptyState
            icon="Inbox"
            title="No open positions right now"
            description="We don't have any roles listed at the moment. If that changes, we'll post them here."
          />
          <p className="mt-8 text-center text-body-sm text-muted-onlight">
            Think you'd be a good fit for a future role? Send your CV and a short note to{' '}
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="focus-ring rounded font-medium text-cyan-400 hover:text-cyan-300"
            >
              {siteConfig.contact.email}
            </a>
            .
          </p>
          <div className="mt-6 flex justify-center">
            <Button href={`mailto:${siteConfig.contact.email}`} variant="secondary" size="md">
              <Mail className="h-4 w-4" />
              Email Your CV
            </Button>
          </div>
        </div>
      </Section>

      <div className="pb-20 sm:pb-28">
        <CTASection
          title="Don't see a role that fits? Reach out anyway."
          description="We'd rather hear from good people early than miss them because a specific role wasn't listed."
          primaryLabel="Get in Touch"
          primaryTo="/contact"
          secondaryLabel="About Digiinsaf"
          secondaryTo="/about"
        />
      </div>
    </>
  );
}
