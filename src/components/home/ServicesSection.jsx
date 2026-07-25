import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, ChevronDown, Sparkles, Zap, Globe, Code2, Smartphone, BrainCircuit } from 'lucide-react';
import Section from '@/components/common/Section';
import { capabilityGroups } from '@/data/capabilityGroups';

const categoryIcons = [Code2, Globe, Smartphone, BrainCircuit, Zap, Sparkles];
// Single consistent accent — categories differentiate by icon/copy, not hue.
const categoryColor = { bg: 'bg-sea-50', icon: 'text-sea-700', border: 'border-sea-200', accent: 'bg-sea-700' };

export default function ServicesSection() {
  const [expandedIndex, setExpandedIndex] = useState(0);

  return (
    <Section tone="paper" className="relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-sea-50/80 to-transparent rounded-full pointer-events-none" />

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 relative z-10">

        {/* Left Column Sticky Header */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 lg:sticky lg:top-24 lg:self-start"
        >
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-sea-700 bg-sea-50 border border-hairline px-3 py-1 rounded-full">
            <Sparkles className="h-3 w-3" /> Capabilities & Services
          </span>
          <h2 className="mt-4 text-3xl font-extrabold text-charcoal sm:text-4xl leading-snug">
            End-to-end engineering tailored around your{' '}
            <span className="text-sea-700">business goals.</span>
          </h2>
          <p className="mt-4 text-sm text-charcoal-muted leading-relaxed">
            We scope each engagement around the exact outcome you need — from rapid MVP validation to enterprise web scaling and custom AI workflow automation.
          </p>

          {/* Mini stats */}
          <div className="mt-8 grid grid-cols-2 gap-4">
            {[
              { value: '40+', label: 'Projects Shipped' },
              { value: '5+', label: 'Service Areas' },
            ].map(({ value, label }) => (
              <div key={label} className="rounded-xl bg-sea-50 border border-hairline p-4">
                <span className="block text-2xl font-black text-sea-800">{value}</span>
                <span className="text-xs text-charcoal-muted mt-0.5 block">{label}</span>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-xl bg-sea-950 px-6 py-3.5 text-xs font-bold text-white transition-all hover:bg-sea-800 shadow-elevation-md hover:shadow-elevation-lg"
              >
                Explore Full Capabilities & Pricing <ArrowUpRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Column — Accordion */}
        <div className="space-y-3 lg:col-span-7">
          {capabilityGroups.map((group, idx) => {
            const isExpanded = expandedIndex === idx;
            const color = categoryColor;
            const IconComp = categoryIcons[idx % categoryIcons.length];

            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: idx * 0.07 }}
                viewport={{ once: true }}
                className={`group/card rounded-2xl border transition-all duration-300 overflow-hidden relative ${
                  isExpanded
                    ? `border-sea-300 bg-white shadow-elevation-md ring-1 ring-sea-200/50`
                    : 'border-hairline bg-white/70 hover:bg-white hover:border-sea-200 hover:shadow-elevation-md'
                }`}
              >
                {/* Accent top edge on hover/expand */}
                <div
                  className={`absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl bg-gradient-to-r from-transparent via-sea-600 to-transparent transition-opacity duration-300 ${
                    isExpanded ? 'opacity-100' : 'opacity-0 group-hover/card:opacity-60'
                  }`}
                />
                {/* Clickable Header */}
                <button
                  type="button"
                  onClick={() => setExpandedIndex(isExpanded ? -1 : idx)}
                  className="flex w-full items-center justify-between p-5 text-left focus:outline-none"
                >
                  <div className="flex items-center gap-4">
                    {/* Colored icon badge */}
                    <motion.span
                      whileHover={{ rotate: 5, scale: 1.05 }}
                      className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border ${color.bg} ${color.icon} ${color.border}`}
                    >
                      <IconComp className="h-5 w-5" />
                    </motion.span>
                    <div>
                      <span className="text-[11px] font-bold text-sea-700 uppercase tracking-wider">{group.category}</span>
                      <h3 className="text-base font-bold text-charcoal mt-0.5 leading-snug">{group.title}</h3>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {/* Arrow hint on hover */}
                    <motion.span
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: isExpanded ? 0 : undefined }}
                      className={`hidden sm:inline-flex text-[10px] font-semibold uppercase tracking-wider transition-opacity duration-200 ${isExpanded ? 'opacity-0' : 'opacity-0 group-hover/card:opacity-100'} text-sea-500`}
                    >
                      Explore
                    </motion.span>
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                      className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border transition-colors ${
                        isExpanded ? 'bg-sea-950 border-sea-950 text-white' : 'border-hairline bg-sea-50 text-sea-800 group-hover/card:bg-sea-100'
                      }`}
                    >
                      <ChevronDown className="h-4 w-4" />
                    </motion.div>
                  </div>
                </button>

                {/* Animated Expandable Body */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      {/* Colored top bar */}
                      <div className={`mx-5 h-0.5 rounded-full ${color.accent} opacity-30 mb-4`} />

                      <div className="px-5 pb-6">
                        <p className="text-sm leading-relaxed text-charcoal-muted">{group.description}</p>

                        <div className="mt-5">
                          <span className="text-[11px] font-bold uppercase tracking-wider text-sea-800">Available Deliverable Modules</span>
                          <div className="mt-3 flex flex-wrap gap-2">
                            {group.services.map((serviceSlug, si) => (
                              <motion.div
                                key={serviceSlug}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: si * 0.04 }}
                              >
                                <Link
                                  to={`/services/${serviceSlug}`}
                                  className={`inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-semibold transition-all hover:shadow-sm ${color.bg} ${color.border} ${color.icon} hover:scale-[1.03]`}
                                >
                                  <CheckCircle2 className="h-3.5 w-3.5" />
                                  <span className="capitalize">{serviceSlug.replace(/-/g, ' ')}</span>
                                </Link>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </Section>
  );
}
