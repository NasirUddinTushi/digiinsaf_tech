import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import SEO from '@/components/common/SEO';
import PageHero from '@/components/common/PageHero';
import SectionHeading from '@/components/common/SectionHeading';
import Section from '@/components/common/Section';
import Icon from '@/components/common/Icon';
import CaseStudyCard from '@/components/cards/CaseStudyCard';
import CTASection from '@/components/common/CTASection';
import Button from '@/components/common/Button';
import { services, getServiceBySlug } from '@/data/services';
import { projects } from '@/data/projects';
import { fadeUpViewport } from '@/utils/motionVariants';

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  if (!service) return <Navigate to="/services" replace />;

  const relatedProjects = projects.filter((project) => service.relatedCaseStudies.includes(project.slug));
  const otherServices = services.filter((item) => item.slug !== service.slug).slice(0, 3);

  return (
    <>
      <SEO title={service.name} description={service.shortDescription} />

      <PageHero
        breadcrumbItems={[{ label: 'Home', to: '/' }, { label: 'Services', to: '/services' }, { label: service.name }]}
        tone="navy"
        backgroundImage={service.image}
        imageAlt={service.imageAlt}
      >
        <div className="mt-6 flex items-start gap-5">
          <span className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl2 bg-white/10 text-white">
            <Icon name={service.icon} className="h-6 w-6" />
          </span>
          <div>
            <h1 className="text-4xl leading-tight text-white sm:text-h1">{service.name}</h1>
            <p className="mt-4 max-w-2xl text-body-lg leading-relaxed text-white/70">{service.heroDescription}</p>
            <div className="mt-7">
              <Button to="/contact" variant="secondary" size="lg">
                Start a Project
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </PageHero>

      <Section tone="surface">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading eyebrow="Who this is for" title="Signs this service is what you need." tone="light" className="mb-8" />
            <ul className="space-y-3">
              {service.problems.map((problem) => (
                <li key={problem} className="flex gap-3 rounded-xl2 border border-hairline bg-paper p-4 text-body-sm text-charcoal-muted">
                  <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-sea-700" />
                  {problem}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading eyebrow="What's included" title="What this engagement typically covers." tone="light" className="mb-8" />
            <ul className="space-y-3">
              {service.included.map((item) => (
                <li key={item} className="flex gap-3 rounded-xl2 border border-hairline bg-paper p-4 text-body-sm text-charcoal-muted">
                  <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-sea-700" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section tone="paper">
        <SectionHeading eyebrow="Related subservices" title="Specific work we cover under this service." align="center" tone="light" className="mb-10" />
        <div className="flex flex-wrap justify-center gap-2.5">
          {service.subservices.map((sub) => (
            <span key={sub} className="rounded-full border border-hairline bg-white px-4 py-2 text-body-sm font-medium text-charcoal-muted">
              {sub}
            </span>
          ))}
        </div>
      </Section>

      <Section tone="surface">
        <SectionHeading eyebrow="Our approach" title="How we run this type of engagement." tone="light" className="mb-10" />
        <div className="grid gap-4 sm:grid-cols-2">
          {service.approach.map((step, index) => (
            <div key={step} className="flex gap-4 rounded-xl2 border border-hairline bg-paper p-5">
              <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-sea-700 text-xs font-semibold text-white">
                {index + 1}
              </span>
              <p className="text-body-sm leading-relaxed text-charcoal-muted">{step}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="paper">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading eyebrow="Technology stack" title="Tools we typically use for this service." tone="light" className="mb-8" />
            <div className="flex flex-wrap gap-2.5">
              {service.techStack.map((tech) => (
                <span key={tech} className="rounded-full border border-hairline bg-white px-4 py-2 text-body-sm font-medium text-charcoal-muted">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div>
            <SectionHeading eyebrow="Expected deliverables" title="What you receive at the end of the engagement." tone="light" className="mb-8" />
            <ul className="space-y-3">
              {service.deliverables.map((deliverable) => (
                <li key={deliverable} className="flex gap-3 text-body-sm text-charcoal-muted">
                  <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-sea-700" />
                  {deliverable}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {relatedProjects.length > 0 && (
        <Section tone="surface">
          <SectionHeading eyebrow="Related work" title="See this service applied to a real project." tone="light" className="mb-10" />
          <div className="grid gap-4 sm:grid-cols-2">
            {relatedProjects.map((project) => (
              <CaseStudyCard key={project.slug} project={project} />
            ))}
          </div>
        </Section>
      )}

      <Section tone="paper">
        <SectionHeading eyebrow="Explore more" title="Other services that pair well with this one." align="center" tone="light" className="mb-10" />
        <motion.div {...fadeUpViewport} className="grid gap-4 sm:grid-cols-3">
          {otherServices.map((other) => (
            <Link
              key={other.slug}
              to={`/services/${other.slug}`}
              className="focus-ring group flex items-center gap-3 rounded-xl2 border border-hairline bg-white p-5 transition-shadow hover:shadow-elevation-sm"
            >
              <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-sea-50 text-sea-700">
                <Icon name={other.icon} className="h-5 w-5" />
              </span>
              <span className="text-body-sm font-medium text-charcoal">{other.name}</span>
            </Link>
          ))}
        </motion.div>
      </Section>

      <CTASection />
    </>
  );
}
