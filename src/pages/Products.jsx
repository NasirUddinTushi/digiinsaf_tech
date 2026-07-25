import { ArrowRight, Cpu, CheckCircle2, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from '@/components/common/SEO';
import PageHero from '@/components/common/PageHero';
import Button from '@/components/common/Button';
import Icon from '@/components/common/Icon';
import CTASection from '@/components/common/CTASection';
import { products } from '@/data/products';
import { fadeUpViewportStagger } from '@/utils/motionVariants';

export default function Products() {
  return (
    <>
      <SEO
        title="In-House SaaS Products"
        description="SaaS platforms and workflow automation tools currently in development at Digiinsaf."
      />

      <PageHero
        tone="navy"
        eyebrow="In-House SaaS Products"
        title="SaaS solutions built for speed, scale & intelligence."
        description="Alongside client work, we build our own SaaS products in-house. Here's what's currently in development."
      />

      {/* Featured Products Grid */}
      <section className="py-16 bg-sea-900/30 border-t border-b border-hairline">
        <div className="container-xl space-y-16">
          {products.map((product, idx) => (
            <motion.div
              key={product.slug}
              {...fadeUpViewportStagger(idx)}
              className="rounded-2xl border border-white/10 bg-sea-950 p-6 md:p-10"
            >
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8">
                <div className="space-y-4 max-w-2xl">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-cyan-500/15 px-3 py-1 text-xs font-semibold text-cyan-300">
                      {product.status}
                    </span>
                    <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-graphite-300">
                      {product.category}
                    </span>
                    {product.targetLaunch && (
                      <span className="rounded-full bg-sea-800 px-3 py-1 text-xs font-medium text-sea-200">
                        {product.targetLaunch}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-300">
                      <Icon name={product.icon} className="h-6 w-6" />
                    </div>
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">{product.name}</h2>
                      <p className="text-sm font-medium text-cyan-400">{product.tagline}</p>
                    </div>
                  </div>

                  <p className="text-graphite-300 leading-relaxed">{product.heroDescription}</p>

                  <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {product.highlights.map((item) => (
                      <div key={item} className="flex items-center gap-2 text-xs font-medium text-white/90">
                        <CheckCircle2 className="h-4 w-4 text-cyan-400 flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Box / Action */}
                <div className="w-full lg:w-80 flex flex-col justify-between rounded-xl border border-white/10 bg-white/[0.03] p-5">
                  <div className="space-y-3">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400">Tech Stack</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {product.techStack.map((tech) => (
                        <span key={tech} className="rounded bg-white/5 border border-white/10 px-2 py-0.5 text-[11px] text-graphite-300">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6">
                    <Link
                      to="/contact"
                      className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 px-4 py-2.5 text-xs font-bold text-sea-950 transition-colors"
                    >
                      Get Notified at Launch
                    </Link>
                  </div>
                </div>
              </div>

              {product.features && product.features.length > 0 && (
                <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {product.features.map((feat) => (
                    <div key={feat.title} className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
                      <h3 className="text-sm font-bold text-white flex items-center gap-1.5">
                        <Zap className="h-3.5 w-3.5 text-cyan-400" /> {feat.title}
                      </h3>
                      <p className="mt-1.5 text-xs text-graphite-400 leading-snug">{feat.description}</p>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Deploy your SaaS section */}
      <section className="py-20 bg-sea-950 text-white">
        <div className="container-xl">
          <div className="rounded-2xl border border-white/10 bg-sea-900 p-8 md:p-12">
            <div className="max-w-2xl space-y-4">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-cyan-500/15 px-3 py-1 text-xs font-semibold text-cyan-300">
                <Cpu className="h-3.5 w-3.5" /> Custom SaaS Deployment Architecture
              </span>
              <h2 className="text-3xl font-extrabold sm:text-4xl text-white">
                Deploying your own SaaS Service or Platform?
              </h2>
              <p className="text-graphite-300 text-sm md:text-base leading-relaxed">
                Whether you need a full multi-tenant architecture, automated subscription billing, OAuth authentication, or high-concurrency cloud setup — Digiinsaf handles end-to-end SaaS deployment.
              </p>
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Button to="/contact" variant="primary" size="lg">
                  Discuss SaaS Deployment <ArrowRight className="h-4 w-4" />
                </Button>
                <Link to="/services/saas-crm-development" className="text-xs font-bold text-cyan-300 hover:text-white transition-colors">
                  Learn about our SaaS & CRM Development Services →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
