import SectionHeading from '@/components/common/SectionHeading';
import FAQAccordion from '@/components/common/FAQAccordion';
import Button from '@/components/common/Button';
import Section from '@/components/common/Section';
import { getFeaturedFaqs } from '@/data/faqs';

const featuredFaqs = getFeaturedFaqs();

export default function FAQSection() {
  return (
    <Section tone="mist" containerClassName="max-w-3xl">
      <SectionHeading
        eyebrow="FAQ"
        title="Common questions about working with us."
        align="center"
        className="mb-12"
      />
      <FAQAccordion items={featuredFaqs} />
      <div className="mt-10 flex justify-center">
        <Button to="/services#faq" variant="secondary" size="md">
          View All FAQs
        </Button>
      </div>
    </Section>
  );
}
