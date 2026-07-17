import SectionHeading from '@/components/common/SectionHeading';
import TestimonialCard from '@/components/cards/TestimonialCard';
import Badge from '@/components/common/Badge';
import Section from '@/components/common/Section';
import { testimonials, testimonialsNotice } from '@/data/testimonials';

export default function TestimonialsSection() {
  return (
    <Section tone="light">
      <SectionHeading
        eyebrow="Testimonials"
        title="What working with Digiinsaf looks like."
        align="center"
        className="mb-4"
      />
      <div className="mb-14 flex justify-center">
        <Badge tone="violetLight">{testimonialsNotice}</Badge>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={testimonial.name + testimonial.role}
            testimonial={testimonial}
            index={index}
          />
        ))}
      </div>
    </Section>
  );
}
