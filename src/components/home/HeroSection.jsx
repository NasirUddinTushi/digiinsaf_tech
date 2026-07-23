import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, ShieldCheck, Globe, Zap, Star, Award, CheckCircle2 } from 'lucide-react';
import Button from '@/components/common/Button';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-sea-950 pb-20 pt-[clamp(44px,8vw,96px)] lg:pb-28">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/services-team-working.jpg"
          alt="DigiInsaf digital product studio team"
          className="h-full w-full object-cover object-center opacity-25"
        />
        {/* Dark Gradient Overlay for Maximum Text Contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-sea-950 via-sea-950/90 to-sea-950/75" />
        <div className="absolute inset-0 bg-gradient-to-b from-sea-950/60 via-transparent to-sea-950" />
      </div>

      {/* Ambient Pulsing Glow Backgrounds */}
      <div className="pointer-events-none absolute -left-28 top-0 z-0 h-[600px] w-[600px] rounded-full bg-cyan-600/15 blur-[140px] animate-mesh-drift" />
      <div className="pointer-events-none absolute -right-28 top-1/4 z-0 h-[550px] w-[550px] rounded-full bg-sea-600/15 blur-[140px] animate-mesh-drift" style={{ animationDelay: '-6s' }} />

      <div className="container-xl relative z-10">
        <div className="max-w-4xl">
          
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            {/* Top Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-cyan-300 backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5 text-cyan-300" />
              <span>Estonia-Based Digital Product Studio</span>
            </div>

            {/* Main Hero Headline */}
            <h1 className="mt-6 text-balance text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-[4.25rem] leading-[1.08]">
              Custom software, web platforms and AI solutions built for <span className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-cyan-100 bg-clip-text text-transparent">scaling businesses.</span>
            </h1>

            {/* Hero Subtitle */}
            <p className="mt-6 max-w-2xl text-base text-graphite-300 sm:text-lg leading-relaxed">
              DigiInsaf helps ambitious startups, SMEs, and scale-ups engineer reliable, high-performance web applications, mobile platforms, and automated workflow systems from Estonia to global markets.
            </p>

            {/* Hero Action Buttons */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button to="/contact" variant="primary" size="lg" className="shadow-neon-cyan sm:w-auto">
                Start Your Project <ArrowRight className="h-4 w-4" />
              </Button>
              <Button to="/services" variant="outlineLight" size="lg" className="sm:w-auto">
                Calculate Instant Estimate
              </Button>
            </div>

            {/* Trust Badges Bar */}
            <div className="mt-10 flex flex-wrap items-center gap-6 text-xs text-graphite-300">
              <div className="flex items-center gap-1.5 text-amber-400 font-bold">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-current" />
                  ))}
                </div>
                <span className="text-white ml-1">4.9/5 Rating</span>
              </div>
              <div className="flex items-center gap-2 border-l border-white/15 pl-6">
                <ShieldCheck className="h-4 w-4 text-cyan-400" />
                <span>ISO 27001 & GDPR Compliant</span>
              </div>
              <div className="flex items-center gap-2 border-l border-white/15 pl-6">
                <Award className="h-4 w-4 text-cyan-400" />
                <span>100% In-House Senior EU Engineers</span>
              </div>
            </div>

            {/* Metrics Bar */}
            <div className="mt-12 grid grid-cols-2 gap-6 border-t border-white/10 pt-8 sm:grid-cols-4">
              <div>
                <span className="block text-3xl font-black text-white sm:text-4xl">40+</span>
                <span className="text-xs text-graphite-400 mt-1 block">Digital Products Delivered</span>
              </div>
              <div>
                <span className="block text-3xl font-black text-cyan-300 sm:text-4xl">98%</span>
                <span className="text-xs text-graphite-400 mt-1 block">On-Time SLA Delivery</span>
              </div>
              <div>
                <span className="block text-3xl font-black text-white sm:text-4xl">3 Weeks</span>
                <span className="text-xs text-graphite-400 mt-1 block">Average MVP Launch Sprint</span>
              </div>
              <div>
                <span className="block text-3xl font-black text-cyan-300 sm:text-4xl">Tallinn</span>
                <span className="text-xs text-graphite-400 mt-1 block">Estonia EU Tech Hub</span>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
