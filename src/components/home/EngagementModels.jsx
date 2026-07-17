import SectionHeading from '@/components/common/SectionHeading';
import ValueCard from '@/components/cards/ValueCard';
import Section from '@/components/common/Section';
import { engagementModels, engagementNote } from '@/data/industries';

export default function EngagementModels() {
  return (
    <Section tone="dark" className="theme-dark-section">
      <SectionHeading
        eyebrow="Engagement models"
        title="Work with us in the way that fits your project."
        align="center"
        tone="dark"
        className="mb-14"
      />
      <div className="grid gap-5 lg:grid-cols-3">
        {engagementModels.map((model, index) => (
          <ValueCard key={model.title} value={model} tone="dark" index={index} />
        ))}
      </div>
      <p className="mx-auto mt-8 max-w-2xl text-center text-body-sm text-muted-ondark">{engagementNote}</p>
    </Section>
  );
}
