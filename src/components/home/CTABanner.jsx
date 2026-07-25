import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Calendar, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CTABanner() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Full bleed gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-sea-950 via-sea-900 to-[#0a1628]" />

      {/* Animated mesh orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-cyan-500/10 blur-[120px] animate-mesh-drift" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-[100px] animate-mesh-drift" style={{ animationDelay: '-5s' }} />
        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }} />
        {/* Top edge glow */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
        {/* Bottom edge glow */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
      </div>

      <div className="container-xl relative z-10">
        <div className="max-w-4xl mx-auto text-center">

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-cyan-300 backdrop-blur-md mb-6"
          >
            <motion.span
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 2 }}
            >
              <Sparkles className="h-3.5 w-3.5" />
            </motion.span>
            Ready to Build Something Remarkable?
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl leading-tight"
          >
            See how far the right engineering partner can take{' '}
            <span className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-300 bg-clip-text text-transparent animate-gradient-shift">
              your business.
            </span>
          </motion.h2>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 text-base text-graphite-300 sm:text-lg leading-relaxed max-w-2xl mx-auto"
          >
            From idea to production in weeks — not months. Book a free 30-minute discovery call and get a clear plan for your project.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 text-sm font-bold text-white shadow-[0_0_40px_-8px_rgba(6,182,212,0.6)] hover:shadow-[0_0_60px_-8px_rgba(6,182,212,0.8)] transition-all animate-glow-pulse"
              >
                <Calendar className="h-4 w-4" />
                Book a Free Discovery Call
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="h-4 w-4" />
                </motion.span>
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-8 py-4 text-sm font-bold text-white backdrop-blur-md hover:border-white/40 hover:bg-white/10 transition-all"
              >
                <MessageCircle className="h-4 w-4" />
                Explore Our Services
              </Link>
            </motion.div>
          </motion.div>

          {/* Social proof under CTAs */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-graphite-400"
          >
            {[
              '✅ No commitment required',
              '⚡ Response within 24 hours',
              '🌍 EU-based team',
              '🔒 GDPR compliant',
            ].map((item) => (
              <span key={item}>{item}</span>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
