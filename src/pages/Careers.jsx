import { Mail } from 'lucide-react';
import SEO from '@/components/common/SEO';
import PageHero from '@/components/common/PageHero';
import SectionHeading from '@/components/common/SectionHeading';
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
        description="Careers at DigiInsaf, an Estonia-based digital product studio. No open positions listed right now — reach out if you think you'd be a good fit."
      />

      <PageHero
        breadcrumbItems={[{ label: 'Home', to: '/' }, { label: 'Careers' }]}
        eyebrow="Careers"
        title="Careers at DigiInsaf"
        description="We're a small, growing studio based in Estonia. We're not actively hiring right now, but we're always glad to hear from people who do good work."
        tone="navy"
        backgroundImage="/images/careers-colleagues.jpg"
        imageAlt="Two colleagues talking at a desk in an office"
      />

      <Section tone="surface">
        <SectionHeading
          eyebrow="Why DigiInsaf"
          title="What working with us looks like."
          align="center"
          tone="light"
          className="mb-14"
        />
        <div className="grid gap-5 sm:grid-cols-3">
          {workingPoints.map((point, index) => (
            <ValueCard key={point.title} value={point} index={index} />
          ))}
        </div>
      </Section>

      <Section tone="paper">
        <SectionHeading eyebrow="Open positions" title="Current openings." align="center" tone="light" className="mb-10" />
        <div className="mx-auto max-w-xl">
          <EmptyState
            icon="Inbox"
            title="No open positions right now"
            description="We don't have any roles listed at the moment. If that changes, we'll post them here."
          />
          <p className="mt-8 text-center text-body-sm text-charcoal-muted">
            Think you'd be a good fit for a future role? Send your CV and a short note to{' '}
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="focus-ring rounded font-medium text-sea-700 hover:text-sea-800"
            >
              {siteConfig.contact.email}
            </a>
            .
          </p>
          <div className="mt-6 flex justify-center">
            <Button href={`mailto:${siteConfig.contact.email}`} variant="primary" size="md">
              <Mail className="h-4 w-4" />
              Email Your CV
            </Button>
          </div>
        </div>
      </Section>

      <CTASection
        title="Don't see a role that fits? Reach out anyway."
        description="We'd rather hear from good people early than miss them because a specific role wasn't listed."
        primaryLabel="Get in Touch"
        primaryTo="/contact"
      />
    </>
  );
}
