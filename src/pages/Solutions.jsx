import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import SEO from '@/components/common/SEO';
import Breadcrumb from '@/components/common/Breadcrumb';
import SectionHeading from '@/components/common/SectionHeading';
import IconBadge from '@/components/common/IconBadge';
import Button from '@/components/common/Button';
import CTASection from '@/components/common/CTASection';
import { solutions } from '@/data/solutions';
import { getServiceBySlug } from '@/data/services';

export default function Solutions() {
  return (
    <>
      <SEO
        title="Solutions"
        description="How Digiinsaf helps startups, small and medium businesses, enterprise teams, e-commerce brands, agencies and SaaS founders design, build and scale digital products."
      />

      <section className="theme-page-header bg-ink-950 pb-16 pt-10 sm:pb-24 sm:pt-14">
        <div className="container-xl">
          <Breadcrumb tone="dark" items={[{ label: 'Home', to: '/' }, { label: 'Solutions' }]} />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mt-8 max-w-2xl"
          >
            <h1 className="text-4xl font-semibold text-white sm:text-5xl">
              Solutions built around how your business actually operates.
            </h1>
            <p className="mt-5 text-lg text-muted-ondark">
              The underlying services are the same — how they are applied depends on the kind of
              business you are running. Find the closest fit below.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="container-xl bg-ink-900 py-20 sm:py-28">
        <div className="grid gap-6">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.slug}
              id={solution.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.06, ease: 'easeOut' }}
              className="surface-card scroll-mt-28 p-6 sm:p-8"
            >
              <div className="grid gap-8 lg:grid-cols-[auto_1fr] lg:items-start">
                <IconBadge name={solution.icon} size="lg" />
                <div>
                  <h2 className="text-xl font-semibold text-white sm:text-2xl">{solution.title}</h2>
                  <p className="mt-3 max-w-2xl text-body-sm leading-relaxed text-muted-onlight sm:text-body">
                    {solution.description}
                  </p>

                  <div className="mt-6 grid gap-6 sm:grid-cols-2">
                    <div>
                      <h3 className="mb-3 text-caption font-semibold uppercase tracking-wider text-cyan-400">
                        Common challenges
                      </h3>
                      <ul className="space-y-2.5">
                        {solution.painPoints.map((point) => (
                          <li key={point} className="flex gap-2.5 text-body-sm text-graphite-600">
                            <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-graphite-400" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="mb-3 text-caption font-semibold uppercase tracking-wider text-cyan-400">
                        How we help
                      </h3>
                      <ul className="space-y-2.5">
                        {solution.howWeHelp.map((item) => (
                          <li key={item} className="flex gap-2.5 text-body-sm text-graphite-600">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-signal-green" />
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
                          className="focus-ring rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-caption font-medium text-graphite-500 transition-colors hover:border-cyan-400/40 hover:text-cyan-400"
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

        <div className="mt-6 flex justify-center">
          <Button to="/contact" variant="primary" size="lg">
            Start Your Project
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </section>

      <div className="pb-20 sm:pb-28">
        <CTASection />
      </div>
    </>
  );
}
