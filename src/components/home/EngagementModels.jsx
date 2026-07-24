import { motion } from 'framer-motion';
import { Users, Target, Rocket, ArrowUpRight, CheckCircle2 } from 'lucide-react';
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
    gradient: 'from-blue-600 to-cyan-500',
    glow: 'shadow-[0_0_40px_-8px_rgba(6,182,212,0.3)]',
  },
  {
    icon: Users,
    title: 'Dedicated Engineering Team',
    bestFor: 'Growing Tech Scale-ups',
    description: 'Autonomous, full-stack design & software engineering team integrated directly into your workflow.',
    features: ['Senior React/Node/Python Engineers', 'Dedicated Technical PM & QA', 'Flexible Monthly Allocation', 'Direct Slack & Jira Integration'],
    cta: 'Hire Dedicated Team',
    popular: true,
    gradient: 'from-cyan-500 to-teal-400',
    glow: 'shadow-[0_0_60px_-8px_rgba(6,182,212,0.5)]',
  },
  {
    icon: Target,
    title: 'Fixed Scope Product Delivery',
    bestFor: 'Established Businesses & Enterprises',
    description: 'End-to-end product development with predefined deliverables, milestones, and guaranteed timeline.',
    features: ['Detailed Technical Architecture', 'Strict Milestone-based Deliverables', 'Guaranteed Quality Assurance', 'Post-Launch Support & SLA'],
    cta: 'Get Scope Estimate',
    popular: false,
    gradient: 'from-violet-600 to-purple-500',
    glow: 'shadow-[0_0_40px_-8px_rgba(139,92,246,0.3)]',
  },
];

export default function EngagementModels() {
  return (
    <section className="relative py-20 bg-sea-950 text-white overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-cyan-600/10 blur-[120px] animate-mesh-drift" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-purple-600/10 blur-[120px] animate-mesh-drift" style={{ animationDelay: '-4s' }} />
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />
      </div>

      <div className="container-xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">Flexible Delivery Models</span>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl text-white">
            Tailored Engagement Models
          </h2>
          <p className="mt-3 text-sm text-graphite-400">
            Choose the collaboration model that fits your product stage, timeline, and growth strategy.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {MODELS.map((model, idx) => {
            const IconComp = model.icon;
            return (
              <motion.div
                key={model.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, transition: { duration: 0.25 } }}
                className={`relative flex flex-col justify-between rounded-2xl border p-7 backdrop-blur-xl transition-all duration-300 ${
                  model.popular
                    ? `border-cyan-400/60 bg-sea-900/90 ${model.glow}`
                    : 'border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/8'
                }`}
              >
                {/* Popular badge */}
                {model.popular && (
                  <motion.span
                    initial={{ opacity: 0, scale: 0.8, y: -5 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-500 to-teal-400 px-4 py-1 text-[10px] font-extrabold uppercase tracking-wider text-white shadow-lg"
                  >
                    ⭐ Most Popular
                  </motion.span>
                )}

                {/* Top gradient accent */}
                <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${model.gradient} opacity-60 rounded-t-2xl`} />

                <div>
                  <div className="flex items-start justify-between">
                    <motion.span
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${model.gradient} shadow-lg`}
                    >
                      <IconComp className="h-6 w-6 text-white" />
                    </motion.span>
                    <span className="text-[11px] font-semibold text-graphite-400 bg-white/5 border border-white/10 px-2.5 py-1 rounded-full max-w-[55%] text-right leading-tight">
                      {model.bestFor}
                    </span>
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-white">{model.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-graphite-400">{model.description}</p>

                  <ul className="mt-6 space-y-2.5">
                    {model.features.map((feat, fi) => (
                      <motion.li
                        key={feat}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + idx * 0.1 + fi * 0.05 }}
                        className="flex items-center gap-2 text-xs text-graphite-300"
                      >
                        <CheckCircle2 className={`h-3.5 w-3.5 shrink-0 ${model.popular ? 'text-cyan-400' : 'text-graphite-500'}`} />
                        <span>{feat}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-5 border-t border-white/10">
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Link
                      to="/contact"
                      className={`flex items-center justify-center gap-2 rounded-xl py-3.5 text-xs font-bold transition-all ${
                        model.popular
                          ? `bg-gradient-to-r ${model.gradient} text-white hover:opacity-90 shadow-lg`
                          : 'border border-white/20 bg-white/5 text-white hover:border-white/40 hover:bg-white/10'
                      }`}
                    >
                      {model.cta} <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
