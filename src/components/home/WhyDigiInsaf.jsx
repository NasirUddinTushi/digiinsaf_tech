import SectionHeading from '@/components/common/SectionHeading';
import Section from '@/components/common/Section';

const points = [
  {
    number: '01',
    title: 'Business-first engineering',
    description:
      'Every engagement starts from the business goal, not a technology preference — we recommend the simplest architecture that meets requirement.',
  },
  {
    number: '02',
    title: 'One team from idea to launch',
    description:
      'Strategy, UI/UX design, and development sit under one roof, so early project decisions stay intact through to shipping.',
  },
  {
    number: '03',
    title: 'Transparent & direct communication',
    description:
      'Structured updates, bi-weekly demos, and honest timelines are part of how we work — you always know where your project stands.',
  },
  {
    number: '04',
    title: 'Scalable, maintainable code',
    description:
      'Architecture decisions are made to hold up as user traffic and feature scope grow, without requiring early rewrites.',
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

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {points.map((point) => (
          <div key={point.number} className="border-t-2 border-sea-700 pt-6">
            <span className="text-sm font-bold text-sea-700">{point.number}</span>
            <h3 className="mt-3 text-lg font-bold text-charcoal">{point.title}</h3>
            <p className="mt-2 text-body-sm leading-relaxed text-charcoal-muted">{point.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
