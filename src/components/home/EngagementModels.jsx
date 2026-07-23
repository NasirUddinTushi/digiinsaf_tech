import { motion } from 'framer-motion';
import { Users, Target, Rocket, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const MODELS = [
  {
    icon: Rocket,
    title: 'Discovery & MVP Sprint',
    bestFor: 'Startups & New Ventures',
    description: 'Transform an idea or specification into a working prototype or production-ready MVP in 4–6 weeks.',
    features: ['Fixed Timeline & Budget', 'UX Wireframes & Interactive Prototype', 'Production-ready Core Feature Set', 'Scalable Cloud Infrastructure Setup'],
    cta: 'Start MVP Sprint',
    popular: false,
  },
  {
    icon: Users,
    title: 'Dedicated Engineering Team',
    bestFor: 'Growing Tech Scale-ups',
    description: 'Autonomous, full-stack design & software engineering team integrated directly into your workflow.',
    features: ['Senior React/Node/Python Engineers', 'Dedicated Technical PM & QA', 'Flexible Monthly Allocation', 'Direct Slack & Jira Integration'],
    cta: 'Hire Dedicated Team',
    popular: true,
  },
  {
    icon: Target,
    title: 'Fixed Scope Product Delivery',
    bestFor: 'Established Businesses & Enterprises',
    description: 'End-to-end product development with predefined deliverables, milestones, and guaranteed timeline.',
    features: ['Detailed Technical Architecture', 'Strict Milestone-based Deliverables', 'Guaranteed Quality Assurance', 'Post-Launch Support & SLA'],
    cta: 'Get Scope Estimate',
    popular: false,
  },
];

export default function EngagementModels() {
  return (
    <section className="relative py-16 bg-sea-950 text-white overflow-hidden">
      <div className="container-xl">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">Flexible Delivery Models</span>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl text-white">
            Tailored Engagement Models
          </h2>
          <p className="mt-3 text-sm text-graphite-400">
            Choose the collaboration model that fits your product stage, timeline, and growth strategy.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {MODELS.map((model, idx) => {
            const IconComp = model.icon;
            return (
              <motion.div
                key={model.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex flex-col justify-between rounded-xl2 border p-6 sm:p-8 backdrop-blur-xl transition-all duration-300 ${
                  model.popular
                    ? 'border-cyan-400 bg-sea-900/90 shadow-glow'
                    : 'border-white/10 bg-white/5 hover:border-cyan-400/50 hover:bg-white/10'
                }`}
              >
                {model.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-cyan-500 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-white shadow-md">
                    Most Popular
                  </span>
                )}

                <div>
                  <div className="flex items-center justify-between">
                    <span className={`flex h-12 w-12 items-center justify-center rounded-xl ${model.popular ? 'bg-cyan-500/20 text-cyan-300' : 'bg-white/10 text-cyan-400'}`}>
                      <IconComp className="h-6 w-6" />
                    </span>
                    <span className="text-[11px] font-semibold text-graphite-400 bg-white/5 px-2.5 py-1 rounded-full">
                      {model.bestFor}
                    </span>
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-white">{model.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-graphite-400">{model.description}</p>

                  <ul className="mt-6 space-y-2.5 text-xs text-graphite-300">
                    {model.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-4 border-t border-white/10">
                  <Link
                    to="/contact"
                    className={`flex items-center justify-center gap-2 rounded-xl py-3 text-xs font-bold transition-all ${
                      model.popular
                        ? 'bg-cyan-500 text-white hover:bg-cyan-400 shadow-glow'
                        : 'border border-white/20 bg-white/5 text-white hover:border-cyan-400 hover:text-cyan-300'
                    }`}
                  >
                    {model.cta} <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
