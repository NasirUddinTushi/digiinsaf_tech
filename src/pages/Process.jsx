import { CheckCircle2 } from 'lucide-react';
import SEO from '@/components/common/SEO';
import PageHero from '@/components/common/PageHero';
import SectionHeading from '@/components/common/SectionHeading';
import Section from '@/components/common/Section';
import ProcessTimeline from '@/components/common/ProcessTimeline';
import CTASection from '@/components/common/CTASection';
import { processSteps, clientRequirements } from '@/data/process';

const lifecycleStages = [
  'Discovery',
  'Scope definition',
  'Proposal and milestones',
  'UI/UX design',
  'Review and revisions',
  'Development',
  'Quality assurance',
  'Client acceptance',
  'Deployment',
  'Handover',
  'Maintenance',
];

export default function Process() {
  return (
    <>
      <SEO
        title="Our Process"
        description="The complete DigiInsaf project lifecycle, from discovery and scoping through development, QA, deployment and ongoing maintenance."
      />

      <PageHero
        breadcrumbItems={[{ label: 'Home', to: '/' }, { label: 'Process' }]}
        eyebrow="Process"
        title="A structured process from first conversation to ongoing support."
        description="Every engagement moves through the same eleven stages, adapted in depth to the size of the project — so nothing important is skipped, and nothing gets stuck waiting on unclear next steps."
        tone="navy"
        backgroundImage="/images/process-brainstorm.jpg"
        imageAlt="A team brainstorming with sticky notes"
      >
        <div className="mt-10 flex flex-wrap gap-2">
          {lifecycleStages.map((stage, index) => (
            <span
              key={stage}
              className="flex items-center gap-2 rounded-full border border-hairline bg-white px-3.5 py-1.5 text-caption font-medium text-charcoal-muted"
            >
              <span className="text-sea-700">{String(index + 1).padStart(2, '0')}</span>
              {stage}
            </span>
          ))}
        </div>
      </PageHero>

      <Section tone="surface">
        <SectionHeading
          eyebrow="The seven core phases"
          title="How each phase actually runs."
          description="These phases group the eleven lifecycle stages above into the practical rhythm clients experience day to day."
          tone="light"
          className="mb-14"
        />
        <ProcessTimeline steps={processSteps} />
      </Section>

      <Section tone="paper">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-16">
          <SectionHeading
            eyebrow="Before we start"
            title="What we need from the client."
            description="Coming prepared with the following speeds up discovery and keeps early milestones on schedule."
            tone="light"
          />
          <ul className="space-y-3">
            {clientRequirements.map((item) => (
              <li key={item} className="flex items-center gap-3 rounded-xl2 border border-hairline bg-white px-4 py-3.5">
                <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-sea-700" />
                <span className="text-body-sm text-charcoal-muted">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <CTASection
        title="Ready to start the discovery conversation?"
        description="Tell us about your project and we will walk you through how our process would apply to it."
      />
    </>
  );
}
