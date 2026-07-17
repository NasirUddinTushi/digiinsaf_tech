import SectionHeading from '@/components/common/SectionHeading';
import ValueCard from '@/components/cards/ValueCard';
import Section from '@/components/common/Section';
import { whyChooseUs } from '@/data/industries';

export default function WhyChooseUs() {
  return (
    <Section tone="dark" className="theme-dark-section">
      <SectionHeading
        eyebrow="Why choose Digiinsaf"
        title="Built on trust, not just delivery."
        description="Clients stay involved throughout the project through progress updates, review sessions and structured feedback rounds."
        align="center"
        tone="dark"
        className="mb-14"
      />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {whyChooseUs.map((value, index) => (
          <ValueCard key={value.title} value={value} tone="dark" index={index} />
        ))}
      </div>
    </Section>
  );
}
