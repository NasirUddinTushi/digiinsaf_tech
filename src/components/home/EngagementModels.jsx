import { motion } from 'framer-motion';
import { Users, Target, Rocket, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { fadeUpViewport, fadeUpViewportStagger, hoverLift } from '@/utils/motionVariants';

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
    <section className="relative bg-sea-950 py-20 text-white">
      <div className="container-xl relative z-10">
        <motion.div {...fadeUpViewport} className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">Flexible Delivery Models</span>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
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
                {...fadeUpViewportStagger(idx)}
                whileHover={hoverLift}
                className={`relative flex flex-col justify-between rounded-2xl border p-7 transition-colors duration-300 ${
                  model.popular
                    ? 'border-cyan-400/50 bg-sea-900 shadow-elevation-lg'
                    : 'border-white/10 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.05]'
                }`}
              >
                {model.popular && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-cyan-500 px-4 py-1 text-[10px] font-extrabold uppercase tracking-wider text-sea-950">
                    Most Popular
                  </span>
                )}

                <div>
                  <div className="flex items-start justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-300">
                      <IconComp className="h-6 w-6" />
                    </span>
                    <span className="max-w-[55%] rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-right text-[11px] font-semibold leading-tight text-graphite-400">
                      {model.bestFor}
                    </span>
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-white">{model.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-graphite-400">{model.description}</p>

                  <ul className="mt-6 space-y-2.5">
                    {model.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-2 text-xs text-graphite-300">
                        <CheckCircle2 className={`h-3.5 w-3.5 shrink-0 ${model.popular ? 'text-cyan-400' : 'text-graphite-500'}`} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 border-t border-white/10 pt-5">
                  <Link
                    to="/contact"
                    className={`flex items-center justify-center gap-2 rounded-xl py-3.5 text-xs font-bold transition-colors ${
                      model.popular
                        ? 'bg-cyan-500 text-sea-950 hover:bg-cyan-400'
                        : 'border border-white/20 bg-white/5 text-white hover:border-white/40 hover:bg-white/10'
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
