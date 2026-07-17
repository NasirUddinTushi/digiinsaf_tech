import SectionHeading from '@/components/common/SectionHeading';
import IndustryCard from '@/components/cards/IndustryCard';
import Section from '@/components/common/Section';
import { industries } from '@/data/industries';

export default function IndustriesSection() {
  return (
    <Section tone="mist">
      <SectionHeading
        eyebrow="Industries we support"
        title="Domain-aware delivery across a wide range of sectors."
        align="center"
        className="mb-14"
      />
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {industries.map((industry, index) => (
          <IndustryCard key={industry.name} industry={industry} index={index} />
        ))}
      </div>
      <p className="mt-8 text-center text-caption text-graphite-400">
        Regulated-industry work is scoped case by case; certifications are not implied.
      </p>
    </Section>
  );
}
