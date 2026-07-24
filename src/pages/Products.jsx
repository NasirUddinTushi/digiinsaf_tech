import { motion } from 'framer-motion';
import { Sparkles, ExternalLink, ShieldCheck, Zap, Layers, Cpu, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '@/components/common/SEO';
import Button from '@/components/common/Button';
import Icon from '@/components/common/Icon';
import CTASection from '@/components/common/CTASection';
import { products } from '@/data/products';

export default function Products() {
  return (
    <>
      <SEO
        title="In-House SaaS Products & Active Deployments"
        description="Explore live SaaS applications, cloud workflow platforms, and AI enterprise automation systems deployed by Digiinsaf."
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-sea-950 pt-[clamp(64px,10vw,120px)] pb-16">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-cyan-600/10 blur-[140px] animate-mesh-drift" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-blue-700/8 blur-[120px] animate-mesh-drift" style={{ animationDelay: '-5s' }} />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
              backgroundSize: '55px 55px',
            }}
          />
        </div>

        <div className="container-xl relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-cyan-300 mb-5">
              <Sparkles className="h-3.5 w-3.5" /> In-House SaaS Products
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl leading-tight">
              SaaS solutions built for{' '}
              <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-blue-400 bg-clip-text text-transparent">
                speed, scale & intelligence.
              </span>
            </h1>
            <p className="mt-5 text-base text-graphite-300 sm:text-lg leading-relaxed max-w-2xl">
              Here you can view our actively deployed SaaS platforms, cloud software tools, and enterprise automation engines. Place your own SaaS service deployment here when ready!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Products Grid */}
      <section className="py-16 bg-sea-900/30 border-t border-b border-hairline">
        <div className="container-xl space-y-16">
          {products.map((product, idx) => (
            <motion.div
              key={product.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="rounded-2xl border border-white/10 bg-sea-950/80 p-6 md:p-10 backdrop-blur-xl shadow-elevation-lg relative overflow-hidden"
            >
              {/* Decorative accent light */}
              <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-cyan-500/10 blur-[90px] pointer-events-none" />

              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8">
                <div className="space-y-4 max-w-2xl">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-cyan-500/20 px-3 py-1 text-xs font-semibold text-cyan-300 border border-cyan-500/30">
                      <Sparkles className="h-3 w-3" /> {product.status}
                    </span>
                    <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-graphite-300">
                      {product.category}
                    </span>
                    <span className="rounded-full bg-sea-800 px-3 py-1 text-xs font-medium text-sea-200">
                      Deployed: {product.deploymentDate}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/20 text-cyan-300">
                      <Icon name={product.icon} className="h-6 w-6" />
                    </div>
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">{product.name}</h2>
                      <p className="text-sm font-medium text-cyan-400">{product.tagline}</p>
                    </div>
                  </div>

                  <p className="text-graphite-300 leading-relaxed">{product.heroDescription}</p>

                  {/* Highlights list */}
                  <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {product.highlights.map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs font-medium text-white/90">
                        <CheckCircle2 className="h-4 w-4 text-cyan-400 flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Box / Action */}
                <div className="w-full lg:w-80 flex flex-col justify-between rounded-xl border border-white/10 bg-white/[0.03] p-5">
                  <div className="space-y-3">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400">Deployment Info</h4>
                    <div className="text-xs space-y-1.5 text-graphite-300">
                      <p className="flex justify-between">
                        <span>Environment:</span>
                        <span className="font-semibold text-white">Production Cloud</span>
                      </p>
                      <p className="flex justify-between">
                        <span>Status:</span>
                        <span className="font-semibold text-cyan-300">{product.status}</span>
                      </p>
                      <p className="flex justify-between">
                        <span>Target Access:</span>
                        <span className="font-semibold text-white">Public / Enterprise</span>
                      </p>
                    </div>

                    <div className="pt-3 border-t border-white/10">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-graphite-400 mb-2">Tech Stack</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {product.techStack.map((tech) => (
                          <span key={tech} className="rounded bg-white/5 border border-white/10 px-2 py-0.5 text-[11px] text-graphite-300">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 space-y-2.5">
                    {product.liveUrl && (
                      <a
                        href={product.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 px-4 py-2.5 text-xs font-bold text-sea-950 transition-colors shadow-neon-cyan"
                      >
                        Launch SaaS Service <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    )}
                    <Link
                      to="/contact"
                      className="w-full inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 px-4 py-2.5 text-xs font-semibold text-white transition-colors"
                    >
                      Request Deployment Access
                    </Link>
                  </div>
                </div>
              </div>

              {/* Key Features grid */}
              {product.features && product.features.length > 0 && (
                <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {product.features.map((feat, i) => (
                    <div key={i} className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
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
          <div className="rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-sea-900 via-sea-950 to-cyan-950/40 p-8 md:p-12 relative overflow-hidden">
            <div className="max-w-2xl space-y-4 relative z-10">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-cyan-500/20 px-3 py-1 text-xs font-semibold text-cyan-300">
                <Cpu className="h-3.5 w-3.5" /> Custom SaaS Deployment Architecture
              </span>
              <h2 className="text-3xl font-extrabold sm:text-4xl text-white">
                Deploying your own SaaS Service or Platform?
              </h2>
              <p className="text-graphite-300 text-sm md:text-base leading-relaxed">
                Whether you need a full multi-tenant architecture, automated subscription billing, OAuth authentication, or high-concurrency cloud setup — Digiinsaf handles end-to-end SaaS deployment.
              </p>
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Button to="/contact" variant="primary" size="lg" className="shadow-neon-cyan">
                  Discuss SaaS Deployment <ArrowRight className="ml-2 h-4 w-4" />
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
