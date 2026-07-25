import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ShieldCheck, Users, FileCheck2 } from 'lucide-react';
import Button from '@/components/common/Button';

const DYNAMIC_PHRASES = [
  'scaling businesses.',
  'ambitious startups.',
  'enterprise growth.',
  'growing teams.',
];

const trustPoints = [
  { icon: Users, label: 'Senior, EU-based engineers' },
  { icon: ShieldCheck, label: 'GDPR-aligned practices' },
  { icon: FileCheck2, label: 'Fixed-scope & dedicated-team options' },
];

export default function HeroSection() {
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % DYNAMIC_PHRASES.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
  };

  return (
    <section className="relative overflow-hidden bg-sea-950 pb-16 pt-[clamp(48px,8vw,100px)] lg:pb-24">
      {/* Static, restrained backdrop — faint grid + a single soft tint, no drift/parallax */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(191,220,232,1) 1px, transparent 1px), linear-gradient(90deg, rgba(191,220,232,1) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />
        <div className="absolute left-1/2 top-0 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-cyan-600/10 blur-[140px]" />
      </div>

      <div className="container-xl relative z-10">
        <motion.div
          className="mx-auto flex max-w-4xl flex-col items-center text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-cyan-200">
              Digital Product Studio · Tallinn, Estonia
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="mt-6 max-w-4xl text-balance text-3xl font-extrabold leading-[1.2] tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            <span>Custom software, web platforms and AI solutions built for </span>
            <span className="relative inline-block overflow-hidden align-bottom">
              <AnimatePresence mode="wait">
                <motion.span
                  key={DYNAMIC_PHRASES[phraseIndex]}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="inline-block whitespace-nowrap text-cyan-300"
                >
                  {DYNAMIC_PHRASES[phraseIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-6 max-w-2xl text-center text-base leading-relaxed text-graphite-300 sm:text-lg"
          >
            We deliver bespoke software solutions that drive innovation and scale. Partner
            with Digiinsaf to transform your vision into powerful digital reality.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <Button to="/contact" variant="primary" size="lg" className="px-8">
              <span className="flex items-center gap-2">
                Start Your Journey
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Button>
            <Button to="/work" variant="outlineLight" size="lg" className="px-8">
              <span className="flex items-center gap-2">
                Explore Portfolio
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 border-t border-white/10 pt-8 text-xs text-graphite-300"
          >
            {trustPoints.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2">
                <Icon className="h-4 w-4 text-cyan-400" />
                <span>{label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
