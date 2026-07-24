import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, Zap, Code2, Globe, Smartphone, BrainCircuit, Sparkles } from 'lucide-react';
import SEO from '@/components/common/SEO';
import FAQAccordion from '@/components/common/FAQAccordion';
import CTASection from '@/components/common/CTASection';
import ProjectCard from '@/components/cards/ProjectCard';
import EngagementModels from '@/components/home/EngagementModels';
import ProcessSection from '@/components/home/ProcessSection';
import TechStrip from '@/components/home/TechStrip';
import { capabilityGroups } from '@/data/capabilityGroups';
import { getServiceBySlug } from '@/data/services';
import { faqs } from '@/data/faqs';
import { getProjectBySlug } from '@/data/projects';

const relatedWorkSlugs = ['happy-home-tex', 'fawz-cleaning-and-gardening'];

const groupConfig = [
  { icon: Code2, color: 'from-blue-500 to-cyan-500', bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200' },
  { icon: Globe, color: 'from-violet-500 to-purple-500', bg: 'bg-violet-50', text: 'text-violet-700', border: 'border-violet-200' },
  { icon: Smartphone, color: 'from-emerald-500 to-teal-500', bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-200' },
  { icon: BrainCircuit, color: 'from-amber-500 to-orange-500', bg: 'bg-amber-50', text: 'text-amber-700', border: 'border-amber-200' },
];

export default function Services() {
  const relatedWork = relatedWorkSlugs.map(getProjectBySlug);

  return (
    <>
      <SEO
        title="Services & Scope Calculator"
        description="UI/UX design, web and software development, mobile app development, and AI and business automation from DigiInsaf."
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-sea-950 pt-[clamp(64px,10vw,120px)] pb-16">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-cyan-600/10 blur-[140px] animate-mesh-drift" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-blue-700/8 blur-[120px] animate-mesh-drift" style={{ animationDelay: '-5s' }} />
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '55px 55px' }} />
        </div>
        <div className="container-xl relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-cyan-300 mb-5">
              <Sparkles className="h-3.5 w-3.5" /> Services
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl leading-tight">
              Services covering the full{' '}
              <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                digital product lifecycle.
              </span>
            </h1>
            <p className="mt-5 text-base text-graphite-300 sm:text-lg leading-relaxed max-w-2xl">
              Every engagement starts from the business outcome, not a fixed package. Below are the four capabilities we work in, and where they apply.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Capability Groups */}
      <section className="bg-[#f8f7f3] py-16">
        <div className="container-xl space-y-8">
          {capabilityGroups.map((group, index) => {
            const groupServices = group.services.map(getServiceBySlug).filter(Boolean);
            const signs = groupServices.map((service) => service.problems[0]).slice(0, 4);
            const cfg = groupConfig[index % groupConfig.length];
            const IconComp = cfg.icon;

            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative overflow-hidden rounded-2xl border border-hairline bg-white shadow-elevation-sm hover:shadow-elevation-md transition-all duration-300"
              >
                {/* Colored top accent */}
                <div className={`h-1 bg-gradient-to-r ${cfg.color} w-full`} />

                <div className="grid gap-8 p-8 lg:grid-cols-12">
                  {/* Left: Group info */}
                  <div className="lg:col-span-4">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${cfg.bg} ${cfg.text}`}>
                        <IconComp className="h-5 w-5" />
                      </div>
                      <span className={`rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-wider ${cfg.bg} ${cfg.text} ${cfg.border}`}>
                        {group.category}
                      </span>
                    </div>
                    <h2 className="text-xl font-extrabold leading-snug text-charcoal sm:text-2xl">{group.title}</h2>
                    <p className="mt-3 text-sm leading-relaxed text-charcoal-muted">{group.description}</p>
                  </div>

                  {/* Middle: Signs */}
                  <div className="lg:col-span-4">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-charcoal-muted mb-4">Signs you need this</h3>
                    <ul className="space-y-2.5">
                      {signs.map((problem) => (
                        <li key={problem} className="flex items-start gap-2.5 text-sm text-charcoal-muted">
                          <CheckCircle2 className={`mt-0.5 h-4 w-4 shrink-0 ${cfg.text}`} />
                          {problem}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right: Services */}
                  <div className="lg:col-span-4">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-charcoal-muted mb-4">Individual services</h3>
                    <ul className="grid gap-2">
                      {groupServices.map((service) => (
                        <li key={service.slug}>
                          <motion.div whileHover={{ x: 4, transition: { duration: 0.15 } }}>
                            <Link
                              to={`/services/${service.slug}`}
                              className={`group flex items-center justify-between gap-3 rounded-xl border px-4 py-3 transition-all hover:shadow-elevation-sm ${cfg.bg} ${cfg.border} hover:border-opacity-100`}
                            >
                              <span className={`text-sm font-semibold ${cfg.text}`}>{service.name}</span>
                              <ArrowUpRight className={`h-4 w-4 shrink-0 ${cfg.text} transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5`} />
                            </Link>
                          </motion.div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      <TechStrip />
      <EngagementModels />
      <ProcessSection />

      {/* Related Work */}
      <section className="bg-[#f8f7f3] py-16">
        <div className="container-xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-sea-700">Selected Related Work</span>
            <h2 className="mt-2 text-3xl font-extrabold text-charcoal sm:text-4xl">Services applied to real projects.</h2>
          </motion.div>
          <div className="grid gap-6 sm:grid-cols-2">
            {relatedWork.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} variant="compact" />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16 border-b border-hairline">
        <div className="container-xl mx-auto max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-sea-700">FAQ</span>
            <h2 className="mt-2 text-3xl font-extrabold text-charcoal sm:text-4xl">Common questions about our services.</h2>
          </motion.div>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CTASection />
    </>
  );
}
