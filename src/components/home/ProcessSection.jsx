import SectionHeading from '@/components/common/SectionHeading';
import Button from '@/components/common/Button';
import Section from '@/components/common/Section';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    step: '01',
    title: 'Discovery & Architecture',
    time: 'Week 1',
    description: 'Understand business goals, map user journeys, define cloud architecture, and outline fixed scope.',
    deliverables: ['Tech Specification', 'Architecture Diagram', 'Fixed Scope Roadmap'],
  },
  {
    step: '02',
    title: 'UX/UI & Prototype',
    time: 'Week 2',
    description: 'Create interactive Figma wireframes and design systems to validate usability before writing code.',
    deliverables: ['Design System', 'Clickable Figma Prototype', 'Design Handoff'],
  },
  {
    step: '03',
    title: 'Agile Build & Testing',
    time: 'Weeks 3–5',
    description: 'Full-stack React/Node/Python development in bi-weekly sprints with continuous staging deployments.',
    deliverables: ['Production Code', 'Bi-weekly Demos', 'Automated QA'],
  },
  {
    step: '04',
    title: 'Launch & Support',
    time: 'Week 6+',
    description: 'Deploy on cloud infrastructure (AWS/Vercel/Docker), monitor analytics, and provide ongoing support.',
    deliverables: ['Cloud Deployment', 'SLA Support', 'Analytics Setup'],
  },
];

export default function ProcessSection() {
  return (
    <Section tone="paper" className="border-t border-hairline">
      <SectionHeading
        eyebrow="How we work"
        title="A structured process from initial idea to supported product."
        description="Transparent milestone-based delivery with continuous staging access and zero surprises."
        tone="light"
        className="mb-14"
      />

      <div className="grid gap-8 lg:grid-cols-4">
        {steps.map((item) => (
          <div key={item.step} className="border-t-2 border-sea-700 pt-6">
            <div className="flex items-center justify-between text-xs font-bold text-sea-700">
              <span>PHASE {item.step}</span>
              <span className="rounded-full bg-sea-50 border border-hairline px-2.5 py-0.5 text-[10px] text-sea-800">
                {item.time}
              </span>
            </div>

            <h3 className="mt-3 text-lg font-bold text-charcoal">{item.title}</h3>
            <p className="mt-2 text-body-sm leading-relaxed text-charcoal-muted">{item.description}</p>

            <div className="mt-4 pt-3 border-t border-hairline">
              <span className="text-[10px] font-bold uppercase tracking-wider text-charcoal">Key Outputs</span>
              <ul className="mt-1.5 space-y-1 text-xs text-charcoal-muted">
                {item.deliverables.map((deliv) => (
                  <li key={deliv} className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-sea-700" />
                    <span>{deliv}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <Button to="/process" variant="primary" size="lg">
          See Complete Process <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </Section>
  );
}
