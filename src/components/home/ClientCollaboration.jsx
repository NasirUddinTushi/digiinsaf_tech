import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import SectionHeading from '@/components/common/SectionHeading';
import Section from '@/components/common/Section';
import { fadeUpViewport } from '@/utils/motionVariants';
import { collaborationSteps } from '@/data/process';

export default function ClientCollaboration() {
  return (
    <Section tone="dark" className="theme-dark-section" containerClassName="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
      <SectionHeading
        eyebrow="Client collaboration"
        title="Feedback built into the schedule, not squeezed in around it."
        description="Client feedback is welcomed at agreed project milestones, so revisions happen with intention rather than as last-minute scrambles."
        tone="dark"
      />
      <motion.ol {...fadeUpViewport} className="space-y-3">
        {collaborationSteps.map((step, index) => (
          <li key={step} className="dark-chip flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5">
            <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-signal-green" />
            <span className="text-body-sm text-muted-ondark-strong">
              <span className="mr-2 text-caption font-semibold text-cyan-400">{String(index + 1).padStart(2, '0')}</span>
              {step}
            </span>
          </li>
        ))}
      </motion.ol>
    </Section>
  );
}
