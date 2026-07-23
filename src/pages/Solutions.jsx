import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import SEO from '@/components/common/SEO';
import PageHero from '@/components/common/PageHero';
import IconBadge from '@/components/common/IconBadge';
import Button from '@/components/common/Button';
import CTASection from '@/components/common/CTASection';
import Section from '@/components/common/Section';
import { solutions } from '@/data/solutions';
import { getServiceBySlug } from '@/data/services';

export default function Solutions() {
  return (
    <>
      <SEO
        title="Solutions"
        description="How DigiInsaf helps startups, small and medium businesses, enterprise teams, e-commerce brands, agencies and SaaS founders design, build and scale digital products."
      />

      <PageHero
        breadcrumbItems={[{ label: 'Home', to: '/' }, { label: 'Solutions' }]}
        eyebrow="Solutions"
        title="Solutions built around how your business actually operates."
        description="The underlying services are the same — how they are applied depends on the kind of business you are running. Find the closest fit below."
        tone="navy"
        backgroundImage="/images/solutions-meeting.jpg"
        imageAlt="A business meeting around a conference table"
      />

      <Section tone="surface">
        <div className="grid gap-6">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.slug}
              id={solution.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.06, ease: 'easeOut' }}
              className="scroll-mt-28 rounded-2xl border border-hairline bg-white p-6 sm:p-8"
            >
              <div className="grid gap-8 lg:grid-cols-[auto_1fr] lg:items-start">
                <IconBadge name={solution.icon} size="lg" />
                <div>
                  <h2 className="text-xl font-semibold text-charcoal sm:text-2xl">{solution.title}</h2>
                  <p className="mt-3 max-w-2xl text-body-sm leading-relaxed text-charcoal-muted sm:text-body">
                    {solution.description}
                  </p>

                  <div className="mt-6 grid gap-6 sm:grid-cols-2">
                    <div>
                      <h3 className="mb-3 text-caption font-semibold uppercase tracking-wider text-sea-700">
                        Common challenges
                      </h3>
                      <ul className="space-y-2.5">
                        {solution.painPoints.map((point) => (
                          <li key={point} className="flex gap-2.5 text-body-sm text-charcoal-muted">
                            <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-charcoal-muted" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="mb-3 text-caption font-semibold uppercase tracking-wider text-sea-700">
                        How we help
                      </h3>
                      <ul className="space-y-2.5">
                        {solution.howWeHelp.map((item) => (
                          <li key={item} className="flex gap-2.5 text-body-sm text-charcoal-muted">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-sea-700" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {solution.relatedServices.map((slug) => {
                      const service = getServiceBySlug(slug);
                      if (!service) return null;
                      return (
                        <Link
                          key={slug}
                          to={`/services/${slug}`}
                          className="focus-ring rounded-full border border-hairline bg-paper px-3.5 py-1.5 text-caption font-medium text-charcoal-muted transition-colors hover:border-sea-700 hover:text-sea-700"
                        >
                          {service.name}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button to="/contact" variant="primary" size="lg">
            Start Your Project
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
