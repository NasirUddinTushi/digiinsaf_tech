import { motion } from 'framer-motion';
import { HelpCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import FAQAccordion from '@/components/common/FAQAccordion';
import { getFeaturedFaqs } from '@/data/faqs';

const featuredFaqs = getFeaturedFaqs();

export default function HomeFAQ() {
  return (
    <section className="bg-paper py-20 border-t border-hairline">
      <div className="container-xl">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          {/* Left Column Header */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-4"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-sea-700/20 bg-sea-50 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-sea-700">
              <HelpCircle className="h-3.5 w-3.5" />
              Frequently Asked Questions
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-charcoal sm:text-4xl leading-tight">
              Everything you need to know about{' '}
              <span className="text-sea-700">working with Digiinsaf.</span>
            </h2>
            <p className="text-sm leading-relaxed text-charcoal-muted">
              Here are clear answers about our scope, MVP sprints, tech stack, and post-launch support routines.
            </p>

            <div className="pt-4 space-y-3">
              <div className="rounded-xl border border-hairline bg-white p-5 shadow-elevation-sm">
                <h4 className="text-sm font-bold text-charcoal">Have a custom question?</h4>
                <p className="mt-1 text-xs text-charcoal-muted">
                  Our engineering team is ready to discuss your specific technical requirements.
                </p>
                <Link
                  to="/contact"
                  className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-sea-700 hover:text-sea-900 transition-colors"
                >
                  Talk with Technical Lead <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Right Column Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-7"
          >
            <FAQAccordion items={featuredFaqs} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
