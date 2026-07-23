import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import SEO from '@/components/common/SEO';
import PageHero from '@/components/common/PageHero';
import SectionHeading from '@/components/common/SectionHeading';
import Section from '@/components/common/Section';
import Badge from '@/components/common/Badge';
import FAQAccordion from '@/components/common/FAQAccordion';
import CTASection from '@/components/common/CTASection';
import ProjectCard from '@/components/cards/ProjectCard';
import ProjectEstimator from '@/components/forms/ProjectEstimator';
import EngagementModels from '@/components/home/EngagementModels';
import ProcessSection from '@/components/home/ProcessSection';
import TechStrip from '@/components/home/TechStrip';
import { capabilityGroups } from '@/data/capabilityGroups';
import { getServiceBySlug } from '@/data/services';
import { faqs } from '@/data/faqs';
import { getProjectBySlug } from '@/data/projects';

const relatedWorkSlugs = ['happy-home-tex', 'fawz-cleaning-and-gardening'];

export default function Services() {
  const relatedWork = relatedWorkSlugs.map(getProjectBySlug);

  return (
    <>
      <SEO
        title="Services & Scope Calculator"
        description="UI/UX design, web and software development, mobile app development, and AI and business automation from DigiInsaf."
      />

      <PageHero
        breadcrumbItems={[{ label: 'Home', to: '/' }, { label: 'Services' }]}
        backgroundImage="/images/services-team-working.jpg"
        imageAlt="A team collaborating together on laptops"
        eyebrow="Services"
        title="Services covering the full digital product lifecycle."
        description="Every engagement starts from the business outcome, not a fixed package. Below are the four capabilities we work in, and where they apply."
      />

      <Section tone="paper" spacing="tight">
        {capabilityGroups.map((group, index) => {
          const groupServices = group.services.map(getServiceBySlug).filter(Boolean);
          const signs = groupServices.map((service) => service.problems[0]).slice(0, 4);

          return (
            <div key={group.category} className="grid gap-10 border-t border-hairline py-12 first:border-t-0 first:pt-0 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <Badge tone="brand" className="mb-4">
                  {group.category}
                </Badge>
                <h2 className="text-2xl font-semibold leading-snug text-charcoal sm:text-h3">{group.title}</h2>
                <p className="mt-4 text-body-sm leading-relaxed text-charcoal-muted">{group.description}</p>
              </div>

              <div className="lg:col-span-4">
                <h3 className="text-caption font-semibold uppercase tracking-wider text-sea-700">Signs you need this</h3>
                <ul className="mt-4 grid gap-2.5">
                  {signs.map((problem) => (
                    <li key={problem} className="flex items-start gap-2.5 text-body-sm text-charcoal-muted">
                      <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-sea-700" />
                      {problem}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="lg:col-span-4">
                <h3 className="text-caption font-semibold uppercase tracking-wider text-sea-700">Individual services</h3>
                <ul className="mt-4 grid gap-3">
                  {groupServices.map((service) => (
                    <li key={service.slug}>
                      <Link
                        to={`/services/${service.slug}`}
                        className="focus-ring group flex items-start justify-between gap-3 rounded-xl border border-hairline bg-white px-4 py-3 transition-colors hover:border-sea-700 hover:shadow-elevation-sm"
                      >
                        <span className="text-body-sm font-medium text-charcoal">{service.name}</span>
                        <ArrowUpRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-charcoal-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-sea-700" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </Section>

      <div className="container-xl py-12">
        <ProjectEstimator />
      </div>

      <TechStrip />

      <EngagementModels />

      <ProcessSection />

      <Section tone="surface">
        <div className="mb-10 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Selected related work"
            title="Services applied to real projects."
            tone="light"
          />
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {relatedWork.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} variant="compact" />
          ))}
        </div>
      </Section>

      <Section tone="paper">
        <div className="mx-auto max-w-3xl">
          <SectionHeading eyebrow="FAQ" title="Common questions about our services." align="center" tone="light" className="mb-12" />
          <FAQAccordion items={faqs} />
        </div>
      </Section>

      <CTASection />
    </>
  );
}
