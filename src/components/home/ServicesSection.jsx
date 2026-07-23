import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, ChevronDown, Sparkles } from 'lucide-react';
import Section from '@/components/common/Section';
import { capabilityGroups } from '@/data/capabilityGroups';

export default function ServicesSection() {
  const [expandedIndex, setExpandedIndex] = useState(0);

  return (
    <Section tone="paper" className="relative overflow-hidden">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        
        {/* Left Column Sticky Header */}
        <div className="lg:col-span-5 lg:sticky lg:top-24 lg:self-start">
          <span className="text-xs font-bold uppercase tracking-wider text-sea-700">Capabilities & Services</span>
          <h2 className="mt-3 text-3xl font-extrabold text-charcoal sm:text-4xl leading-snug">
            End-to-end engineering tailored around your business goals.
          </h2>
          <p className="mt-4 text-body text-charcoal-muted leading-relaxed">
            We scope each engagement around the exact outcome you need — from rapid MVP validation to enterprise web scaling and custom AI workflow automation.
          </p>

          <div className="mt-8">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-xl bg-sea-950 px-6 py-3.5 text-xs font-bold text-white transition-all hover:bg-sea-800 shadow-elevation-md hover:scale-[1.02]"
            >
              Explore Full Capabilities & Pricing <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Right Column Expandable Accordion Rows */}
        <div className="space-y-4 lg:col-span-7">
          {capabilityGroups.map((group, idx) => {
            const isExpanded = expandedIndex === idx;
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                viewport={{ once: true }}
                className={`rounded-2xl border transition-all duration-300 ${
                  isExpanded
                    ? 'border-sea-700 bg-white shadow-elevation-md'
                    : 'border-hairline bg-white/60 hover:bg-white hover:border-sea-300'
                }`}
              >
                {/* Clickable Header */}
                <button
                  type="button"
                  onClick={() => setExpandedIndex(isExpanded ? -1 : idx)}
                  className="flex w-full items-center justify-between p-6 text-left focus:outline-none"
                >
                  <div className="flex items-center gap-4">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-sea-50 text-xs font-extrabold text-sea-700 border border-hairline">
                      0{idx + 1}
                    </span>
                    <div>
                      <span className="text-caption font-bold text-sea-700 uppercase tracking-wider">{group.category}</span>
                      <h3 className="text-xl font-bold text-charcoal mt-0.5">{group.title}</h3>
                    </div>
                  </div>
                  <div className={`flex h-8 w-8 items-center justify-center rounded-full border border-hairline bg-sea-50 text-sea-800 transition-transform duration-300 ${isExpanded ? 'rotate-180 bg-sea-950 text-white' : ''}`}>
                    <ChevronDown className="h-4 w-4" />
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
                      className="overflow-hidden border-t border-hairline px-6 pb-6 pt-4"
                    >
                      <p className="text-body-sm leading-relaxed text-charcoal-muted">{group.description}</p>

                      <div className="mt-5">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-sea-800">Available Deliverable Modules</span>
                        <div className="mt-2.5 flex flex-wrap gap-2">
                          {group.services.map((serviceSlug) => (
                            <Link
                              key={serviceSlug}
                              to={`/services/${serviceSlug}`}
                              className="inline-flex items-center gap-1.5 rounded-lg border border-hairline bg-sea-50/80 px-3 py-1.5 text-xs font-semibold text-charcoal hover:border-sea-700 hover:text-sea-700 transition-colors"
                            >
                              <CheckCircle2 className="h-3.5 w-3.5 text-sea-700" />
                              <span className="capitalize">{serviceSlug.replace(/-/g, ' ')}</span>
                            </Link>
                          ))}
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
