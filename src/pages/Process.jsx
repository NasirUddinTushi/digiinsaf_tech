import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import SEO from '@/components/common/SEO';
import Breadcrumb from '@/components/common/Breadcrumb';
import SectionHeading from '@/components/common/SectionHeading';
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
        description="The complete Digiinsaf project lifecycle, from discovery and scoping through development, QA, deployment and ongoing maintenance."
      />

      <section className="theme-page-header bg-ink-950 pb-16 pt-10 sm:pb-24 sm:pt-14">
        <div className="container-xl">
          <Breadcrumb tone="dark" items={[{ label: 'Home', to: '/' }, { label: 'Process' }]} />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mt-8 max-w-2xl"
          >
            <h1 className="text-4xl font-semibold text-white sm:text-5xl">
              A structured process from first conversation to ongoing support.
            </h1>
            <p className="mt-5 text-lg text-mist-200/75">
              Every engagement moves through the same eleven stages, adapted in depth to the size of
              the project — so nothing important is skipped, and nothing gets stuck waiting on
              unclear next steps.
            </p>
          </motion.div>

          <div className="mt-10 flex flex-wrap gap-2">
            {lifecycleStages.map((stage, index) => (
              <span
                key={stage}
                className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-xs font-medium text-mist-200/80"
              >
                <span className="text-cyan-400">{String(index + 1).padStart(2, '0')}</span>
                {stage}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="container-xl bg-ink-900 py-20 sm:py-28">
        <SectionHeading
          eyebrow="The six core phases"
          title="How each phase actually runs."
          description="These six phases group the eleven lifecycle stages above into the practical rhythm clients experience day to day."
          className="mb-14"
        />
        <ProcessTimeline steps={processSteps} />
      </section>

      <section className="bg-ink-800 py-20 sm:py-28">
        <div className="container-xl grid gap-14 lg:grid-cols-2 lg:gap-16">
          <SectionHeading
            eyebrow="Before we start"
            title="What we need from the client."
            description="Coming prepared with the following speeds up discovery and keeps early milestones on schedule."
          />
          <motion.ul
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="space-y-3"
          >
            {clientRequirements.map((item) => (
              <li key={item} className="flex items-center gap-3 rounded-xl2 border border-white/10 bg-white/[0.04] px-4 py-3.5">
                <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-cyan-400" />
                <span className="text-sm text-graphite-500">{item}</span>
              </li>
            ))}
          </motion.ul>
        </div>
      </section>

      <div className="py-20 sm:py-28">
        <CTASection
          title="Ready to start the discovery conversation?"
          description="Tell us about your project and we will walk you through how our process would apply to it."
        />
      </div>
    </>
  );
}
