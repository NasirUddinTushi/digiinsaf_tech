import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import SEO from '@/components/common/SEO';
import Breadcrumb from '@/components/common/Breadcrumb';
import SectionHeading from '@/components/common/SectionHeading';
import Icon from '@/components/common/Icon';
import FAQAccordion from '@/components/common/FAQAccordion';
import CaseStudyCard from '@/components/cards/CaseStudyCard';
import CTASection from '@/components/common/CTASection';
import Button from '@/components/common/Button';
import { services, getServiceBySlug } from '@/data/services';
import { projects } from '@/data/projects';
import { faqs } from '@/data/faqs';

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  if (!service) return <Navigate to="/services" replace />;

  const relatedProjects = projects.filter((project) => service.relatedCaseStudies.includes(project.slug));
  const otherServices = services.filter((item) => item.slug !== service.slug).slice(0, 3);

  return (
    <>
      <SEO title={service.name} description={service.shortDescription} />

      <section className="theme-page-header bg-ink-950 pb-16 pt-10 sm:pb-24 sm:pt-14">
        <div className="container-xl">
          <Breadcrumb
            tone="dark"
            items={[{ label: 'Home', to: '/' }, { label: 'Services', to: '/services' }, { label: service.name }]}
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mt-8 grid gap-10 lg:grid-cols-[auto_1fr] lg:items-start"
          >
            <span className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-xl2 bg-cta-gradient text-white shadow-glow">
              <Icon name={service.icon} className="h-8 w-8" />
            </span>
            <div className="max-w-2xl">
              <h1 className="text-4xl font-semibold text-white sm:text-5xl">{service.name}</h1>
              <p className="mt-5 text-lg text-mist-200/75">{service.heroDescription}</p>
              <div className="mt-8">
                <Button to="/contact" variant="primary" size="lg">
                  Start a Project
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="container-xl bg-ink-900 py-20 sm:py-28">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading eyebrow="Problems we solve" title="Signs this service is what you need." className="mb-8" />
            <ul className="space-y-3">
              {service.problems.map((problem) => (
                <li key={problem} className="flex gap-3 rounded-xl2 border border-white/10 bg-white/[0.04] p-4 text-sm text-graphite-500">
                  <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-cyan-400" />
                  {problem}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading eyebrow="What's included" title="What this engagement typically covers." className="mb-8" />
            <ul className="space-y-3">
              {service.included.map((item) => (
                <li key={item} className="flex gap-3 rounded-xl2 border border-white/10 bg-white/[0.04] p-4 text-sm text-graphite-500">
                  <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-violet-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-ink-800 py-20 sm:py-28">
        <div className="container-xl">
          <SectionHeading eyebrow="Related subservices" title="Specific work we cover under this service." align="center" className="mb-10" />
          <div className="flex flex-wrap justify-center gap-2.5">
            {service.subservices.map((sub) => (
              <span key={sub} className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm font-medium text-graphite-500">
                {sub}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="container-xl bg-ink-900 py-20 sm:py-28">
        <SectionHeading eyebrow="Our approach" title="How we run this type of engagement." className="mb-10" />
        <div className="grid gap-4 sm:grid-cols-2">
          {service.approach.map((step, index) => (
            <div key={step} className="flex gap-4 rounded-xl2 border border-white/10 bg-white/[0.04] p-5">
              <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-cyan-600 text-xs font-semibold text-white">
                {index + 1}
              </span>
              <p className="text-sm leading-relaxed text-graphite-500">{step}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-ink-800 py-20 sm:py-28">
        <div className="container-xl grid gap-14 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading eyebrow="Technology stack" title="Tools we typically use for this service." className="mb-8" />
            <div className="flex flex-wrap gap-2.5">
              {service.techStack.map((tech) => (
                <span key={tech} className="rounded-full bg-white/[0.05] px-4 py-2 text-sm font-medium text-graphite-500 shadow-card-dark">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div>
            <SectionHeading eyebrow="Expected deliverables" title="What you receive at the end of the engagement." className="mb-8" />
            <ul className="space-y-3">
              {service.deliverables.map((deliverable) => (
                <li key={deliverable} className="flex gap-3 text-sm text-graphite-600">
                  <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-signal-green" />
                  {deliverable}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {relatedProjects.length > 0 && (
        <section className="container-xl bg-ink-900 py-20 sm:py-28">
          <SectionHeading eyebrow="Related case studies" title="See this service applied to a real scenario." className="mb-10" />
          <div className="grid gap-4 sm:grid-cols-2">
            {relatedProjects.map((project) => (
              <CaseStudyCard key={project.slug} project={project} />
            ))}
          </div>
        </section>
      )}

      <section className="bg-ink-800 py-20 sm:py-28">
        <div className="container-xl max-w-3xl">
          <SectionHeading eyebrow="FAQ" title="Questions clients ask before starting." align="center" className="mb-12" />
          <FAQAccordion items={faqs.slice(0, 6)} />
        </div>
      </section>

      <section className="container-xl bg-ink-900 py-20 sm:py-28">
        <SectionHeading eyebrow="Explore more" title="Other services that pair well with this one." align="center" className="mb-10" />
        <div className="grid gap-4 sm:grid-cols-3">
          {otherServices.map((other) => (
            <Link
              key={other.slug}
              to={`/services/${other.slug}`}
              className="focus-ring group flex items-center gap-3 rounded-xl2 border border-white/10 bg-white/[0.04] p-5 transition-all hover:-translate-y-0.5 hover:border-cyan-400/40 hover:shadow-card-dark"
            >
              <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400">
                <Icon name={other.icon} className="h-5 w-5" />
              </span>
              <span className="text-sm font-medium text-white">{other.name}</span>
            </Link>
          ))}
        </div>
      </section>

      <div className="pb-20 sm:pb-28">
        <CTASection />
      </div>
    </>
  );
}
