import { motion } from 'framer-motion';
import { ArrowRight, Calendar, MessageCircle, CheckCircle2, Clock, Globe2, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { fadeUpViewport } from '@/utils/motionVariants';

const trustPoints = [
  { icon: CheckCircle2, label: 'No commitment required' },
  { icon: Clock, label: 'Response within 24 hours' },
  { icon: Globe2, label: 'EU-based team' },
  { icon: ShieldCheck, label: 'GDPR-aligned practices' },
];

export default function CTABanner() {
  return (
    <section className="relative overflow-hidden bg-sea-950 py-24">
      <div className="absolute left-1/2 top-1/2 h-[520px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-600/10 blur-[140px]" />

      <div className="container-xl relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div {...fadeUpViewport}>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-cyan-200">
              Ready to Build Something Remarkable?
            </span>
          </motion.div>

          <motion.h2
            {...fadeUpViewport}
            className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            See how far the right engineering partner can take{' '}
            <span className="text-cyan-300">your business.</span>
          </motion.h2>

          <motion.p
            {...fadeUpViewport}
            className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-graphite-300 sm:text-lg"
          >
            From idea to production in weeks — not months. Book a free 30-minute discovery call
            and get a clear plan for your project.
          </motion.p>

          <motion.div
            {...fadeUpViewport}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2.5 rounded-xl bg-cyan-500 px-8 py-4 text-sm font-bold text-sea-950 transition-colors hover:bg-cyan-400"
            >
              <Calendar className="h-4 w-4" />
              Book a Free Discovery Call
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-8 py-4 text-sm font-bold text-white transition-colors hover:border-white/40 hover:bg-white/10"
            >
              <MessageCircle className="h-4 w-4" />
              Explore Our Services
            </Link>
          </motion.div>

          <motion.div
            {...fadeUpViewport}
            className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-graphite-400"
          >
            {trustPoints.map(({ icon: Icon, label }) => (
              <span key={label} className="flex items-center gap-1.5">
                <Icon className="h-3.5 w-3.5 text-cyan-400" />
                {label}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
