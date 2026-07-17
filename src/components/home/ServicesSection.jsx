import { ArrowRight, CheckCircle2 } from 'lucide-react';
import SectionHeading from '@/components/common/SectionHeading';
import ServiceCard from '@/components/cards/ServiceCard';
import Button from '@/components/common/Button';
import Section from '@/components/common/Section';
import { services } from '@/data/services';

const serviceHighlights = [
  'Websites and landing pages',
  'Web apps and SaaS dashboards',
  'Mobile apps and AI automation',
];

export default function ServicesSection() {
  const featuredServices = services.filter((service) => service.featured).slice(0, 8);

  return (
    <Section tone="dark" className="theme-dark-section relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-precision-lines opacity-40" aria-hidden="true" />
      <div className="pointer-events-none absolute left-0 top-0 h-80 w-80 rounded-full bg-cyan-500/[0.13] blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-violet-500/[0.1] blur-3xl" aria-hidden="true" />

      <div className="mb-12 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
        <SectionHeading
          eyebrow="Services first"
          title="Start with the right service, then see the proof in our work."
          description="Choose the capability your project needs most. Each service is shaped around launch quality, user experience and maintainable engineering."
          tone="dark"
        />

        <div className="rounded-[1.35rem] border border-white/10 bg-white/[0.06] p-5 backdrop-blur-xl">
          <p className="mb-4 text-sm font-semibold text-white">Most requested combinations</p>
          <div className="grid gap-3">
            {serviceHighlights.map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.045] px-4 py-3 text-sm font-medium text-mist-100/[0.85]">
                <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-signal-green" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {featuredServices.map((service, index) => (
          <ServiceCard key={service.slug} service={service} index={index} tone="dark" />
        ))}
      </div>

      <div className="mt-12 flex flex-col items-center justify-between gap-4 rounded-[1.35rem] border border-white/10 bg-white/[0.055] px-5 py-5 backdrop-blur-xl sm:flex-row">
        <p className="max-w-2xl text-body-sm text-mist-200/[0.78]">
          Need something more specific? We also handle e-commerce, CMS, DevOps, consulting, maintenance and digital strategy.
        </p>
        <Button to="/services" variant="primary" size="lg">
          View All Services
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </Section>
  );
}
