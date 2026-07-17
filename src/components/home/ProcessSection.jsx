import SectionHeading from '@/components/common/SectionHeading';
import ProcessTimeline from '@/components/common/ProcessTimeline';
import Button from '@/components/common/Button';
import Section from '@/components/common/Section';
import { processSteps } from '@/data/process';

export default function ProcessSection() {
  return (
    <Section tone="dark" className="theme-dark-section relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-precision-lines opacity-35" aria-hidden="true" />
      <SectionHeading
        eyebrow="How we work"
        title="A structured, collaborative delivery process."
        description="Six stages take a project from first conversation to a supported, live product — with your input built into every stage."
        tone="dark"
        className="mb-14"
      />
      <ProcessTimeline steps={processSteps} tone="dark" />
      <div className="mt-12 flex justify-center">
        <Button to="/process" variant="outlineLight" size="lg">
          See Our Complete Process
        </Button>
      </div>
    </Section>
  );
}
