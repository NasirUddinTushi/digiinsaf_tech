import SectionHeading from '@/components/common/SectionHeading';
import SolutionCard from '@/components/cards/SolutionCard';
import Button from '@/components/common/Button';
import Section from '@/components/common/Section';
import { solutions } from '@/data/solutions';

const highlights = [
  ['Lean MVPs', 'for early-stage founders'],
  ['Operational tools', 'for growing teams'],
  ['Scalable platforms', 'for SaaS and enterprise'],
];

export default function SolutionsSection() {
  return (
    <Section tone="dark" id="solutions" className="theme-dark-section relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-precision-lines opacity-45" aria-hidden="true" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-[46rem] -translate-x-1/2 rounded-full bg-cyan-500/[0.12] blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl" aria-hidden="true" />

      <SectionHeading
        eyebrow="Who we work with"
        title="Solutions built around how your business actually operates."
        description="The underlying services are the same - how they are applied depends on the kind of business you are running."
        align="center"
        tone="dark"
        className="mb-12"
      />

      <div className="mb-8 grid gap-3 sm:grid-cols-3">
        {highlights.map(([title, text]) => (
          <div key={title} className="rounded-2xl border border-white/[0.12] bg-white/[0.07] px-5 py-4 text-center backdrop-blur-xl">
            <p className="font-heading text-lg font-semibold text-white">{title}</p>
            <p className="mt-1 text-caption font-medium text-mist-200/70">{text}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {solutions.map((solution, index) => (
          <SolutionCard key={solution.slug} solution={solution} index={index} linkTo={`/solutions#${solution.slug}`} />
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <Button to="/solutions" variant="outlineLight" size="lg">
          View All Solutions
        </Button>
      </div>
    </Section>
  );
}
