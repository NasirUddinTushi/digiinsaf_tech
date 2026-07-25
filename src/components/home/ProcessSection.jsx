import { motion } from 'framer-motion';
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

      {/* Connection line (desktop) */}
      <div className="relative">
        <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-sea-200 to-transparent z-0" />

        <div className="grid gap-6 lg:grid-cols-4 relative z-10">
          {steps.map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group relative bg-white rounded-2xl border border-hairline shadow-elevation-sm hover:shadow-elevation-md hover:border-sea-200 transition-all duration-300 overflow-hidden"
            >
              {/* Top accent bar */}
              <div className="h-1.5 w-full bg-sea-700" />

              <div className="p-6">
                {/* Step number bubble */}
                <div className="flex items-center justify-between mb-5">
                  <motion.div
                    className="flex h-10 w-10 items-center justify-center rounded-xl bg-sea-800"
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-xs font-black text-white">{item.step}</span>
                  </motion.div>
                  <span className="rounded-full bg-sea-50 border border-hairline px-2.5 py-1 text-[10px] font-bold text-charcoal-muted">
                    {item.time}
                  </span>
                </div>

                <h3 className="text-base font-bold text-charcoal group-hover:text-sea-800 transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-charcoal-muted">{item.description}</p>

                <div className="mt-5 pt-4 border-t border-hairline">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-charcoal">Key Outputs</span>
                  <ul className="mt-2 space-y-1.5">
                    {item.deliverables.map((deliv, di) => (
                      <motion.li
                        key={deliv}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.4 + i * 0.1 + di * 0.05 }}
                        className="flex items-center gap-1.5 text-xs text-charcoal-muted"
                      >
                        <CheckCircle2 className="h-3.5 w-3.5 text-sea-700 shrink-0" />
                        <span>{deliv}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-12 flex justify-center"
      >
        <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
          <Button to="/process" variant="primary" size="lg">
            See Complete Process <ArrowRight className="h-4 w-4" />
          </Button>
        </motion.div>
      </motion.div>
    </Section>
  );
}
