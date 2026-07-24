import { motion } from 'framer-motion';
import SectionHeading from '@/components/common/SectionHeading';
import Section from '@/components/common/Section';

const points = [
  {
    number: '01',
    title: 'Business-first engineering',
    description:
      'Every engagement starts from the business goal, not a technology preference — we recommend the simplest architecture that meets requirement.',
    icon: '🎯',
  },
  {
    number: '02',
    title: 'One team from idea to launch',
    description:
      'Strategy, UI/UX design, and development sit under one roof, so early project decisions stay intact through to shipping.',
    icon: '🚀',
  },
  {
    number: '03',
    title: 'Transparent & direct communication',
    description:
      'Structured updates, bi-weekly demos, and honest timelines are part of how we work — you always know where your project stands.',
    icon: '💬',
  },
  {
    number: '04',
    title: 'Scalable, maintainable code',
    description:
      'Architecture decisions are made to hold up as user traffic and feature scope grow, without requiring early rewrites.',
    icon: '⚡',
  },
];

export default function WhyDigiInsaf() {
  return (
    <Section tone="paper" className="border-t border-hairline">
      <SectionHeading
        eyebrow="Why DigiInsaf"
        title="What working with us actually looks like."
        description="We combine European engineering discipline with agile delivery to build products that scale."
        tone="light"
        className="mb-12"
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {points.map((point, i) => (
          <motion.div
            key={point.number}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="group relative rounded-2xl border border-hairline bg-white p-6 shadow-elevation-sm hover:shadow-elevation-md hover:border-sea-300 transition-all duration-300 overflow-hidden cursor-default"
          >
            {/* Hover gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-sea-50/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

            {/* Top accent line */}
            <motion.div
              className="absolute top-0 left-0 h-1 bg-gradient-to-r from-sea-700 to-cyan-500 rounded-t-2xl"
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
            />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl">{point.icon}</span>
                <span className="text-3xl font-black text-sea-100 group-hover:text-sea-200 transition-colors select-none">
                  {point.number}
                </span>
              </div>

              <h3 className="text-base font-bold text-charcoal group-hover:text-sea-800 transition-colors leading-snug">
                {point.title}
              </h3>
              <p className="mt-2.5 text-xs leading-relaxed text-charcoal-muted">
                {point.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
