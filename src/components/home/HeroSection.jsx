import { useEffect, useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles, ShieldCheck, Star, Award, ChevronDown } from 'lucide-react';
import Button from '@/components/common/Button';

// Animated counter hook
function useCounter(target, duration = 2200, startOnMount = true) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!startOnMount || started) return;
    setStarted(true);
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, startOnMount, started]);

  return count;
}

const metrics = [
  { value: 40, suffix: '+', label: 'Digital Products Delivered', color: 'text-white' },
  { value: 98, suffix: '%', label: 'On-Time SLA Delivery', color: 'text-cyan-300' },
  { value: 3, suffix: ' Wks', label: 'Average MVP Launch Sprint', color: 'text-white' },
  { value: 12, suffix: '+', label: 'Countries Served Globally', color: 'text-cyan-300' },
];

const HEADLINE_WORDS = ['Custom', 'software,', 'web', 'platforms', 'and', 'AI', 'solutions', 'built', 'for'];

const DYNAMIC_PHRASES = [
  'scaling businesses.',
  'ambitious startups.',
  'enterprise growth.',
  'digital dominance.',
];

function MetricCard({ value, suffix, label, color, delay }) {
  const count = useCounter(value, 2200);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="group relative text-center"
    >
      <div className="absolute inset-0 rounded-xl bg-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
      <span className={`block text-3xl font-black sm:text-4xl ${color} tabular-nums`}>
        {count}{suffix}
      </span>
      <span className="text-xs text-graphite-400 mt-1 block leading-tight">{label}</span>
    </motion.div>
  );
}

export default function HeroSection() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 40, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 25 });

  useEffect(() => {
    const timer = setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % DYNAMIC_PHRASES.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left - rect.width / 2) / 30);
    mouseY.set((e.clientY - rect.top - rect.height / 2) / 30);
  };

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
  };

  return (
    <section
      className="relative overflow-hidden bg-sea-950 pb-16 pt-[clamp(48px,8vw,100px)] lg:pb-24"
      onMouseMove={handleMouseMove}
    >
      {/* High-Tech Cybernetic Background Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src="/images/tech_hero_bg.png"
          alt="High tech background"
          className="h-full w-full object-cover object-center opacity-25 mix-blend-luminosity scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-sea-950/90 via-sea-950/75 to-sea-950" />
      </div>

      {/* Animated Data Stream Lines */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0">
        <div
          className="absolute h-[1px] w-full"
          style={{
            top: '22%',
            background: 'linear-gradient(90deg, transparent, rgba(6, 182, 212, 0.25) 20%, rgba(56, 189, 248, 0.35) 50%, transparent)',
            animation: 'mesh-drift 12s infinite linear',
          }}
        />
        <div
          className="absolute h-[1px] w-full"
          style={{
            top: '55%',
            background: 'linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.25) 30%, rgba(6, 182, 212, 0.35) 60%, transparent)',
            animation: 'mesh-drift 16s infinite linear',
            animationDelay: '-4s',
          }}
        />
      </div>

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(99,179,237,1) 1px, transparent 1px), linear-gradient(90deg, rgba(99,179,237,1) 1px, transparent 1px)',
          backgroundSize: '65px 65px',
        }}
      />

      {/* Parallax Glowing Ambient Orbs */}
      <motion.div
        style={{ x: springX, y: springY }}
        className="pointer-events-none absolute left-1/2 top-0 z-0 h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-cyan-600/15 blur-[160px] animate-mesh-drift"
      />
      <motion.div
        style={{ x: useTransform(springX, (v) => -v), y: useTransform(springY, (v) => -v) }}
        className="pointer-events-none absolute right-1/4 top-1/3 z-0 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[140px]"
      />

      <div className="container-xl relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center flex flex-col items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Top Eyebrow Badge */}
          <motion.div variants={itemVariants}>
            <div className="inline-flex items-center gap-2.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-wider text-cyan-300 backdrop-blur-md shadow-lg shadow-cyan-500/5">
              <motion.span
                animate={{ rotate: [0, 20, -20, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                <Sparkles className="h-3.5 w-3.5 text-cyan-300" />
              </motion.span>
              <span>Welcome to the Future of <span className="font-bold text-white">Digiinsaf</span></span>
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-300" />
              </span>
            </div>
          </motion.div>

          {/* Main Centered Hero Headline */}
          <motion.h1
            variants={itemVariants}
            className="mt-6 text-balance text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.2] text-center max-w-4xl"
          >
            <span>Custom software, web platforms and AI solutions built for </span>
            <span className="relative inline-block overflow-hidden align-bottom px-1.5 py-0.5">
              <AnimatePresence mode="wait">
                <motion.span
                  key={DYNAMIC_PHRASES[phraseIndex]}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -24 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="inline-block whitespace-nowrap bg-gradient-to-r from-cyan-300 via-sky-300 to-blue-400 bg-clip-text text-transparent font-black"
                >
                  {DYNAMIC_PHRASES[phraseIndex]}
                </motion.span>
              </AnimatePresence>
              <motion.span
                className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-cyan-400 via-sky-300 to-transparent rounded-full shadow-[0_0_12px_rgba(34,211,238,0.8)]"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
            </span>
          </motion.h1>

          {/* Hero Subtitle */}
          <motion.p
            variants={itemVariants}
            className="mt-6 max-w-2xl text-center text-base text-graphite-300 sm:text-lg leading-relaxed"
          >
            We deliver bespoke software solutions that drive innovation and scale. Partner with Digiinsaf to transform your vision into powerful digital reality.
          </motion.p>

          {/* Centered Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
              <Button
                to="/contact"
                variant="primary"
                size="lg"
                className="shadow-neon-cyan px-8 py-4 text-base font-semibold transition-all duration-300 shadow-xl shadow-cyan-500/20"
              >
                <span className="flex items-center gap-2">
                  Start Your Journey
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="h-4 w-4" />
                  </motion.span>
                </span>
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
              <Button
                to="/work"
                variant="outlineLight"
                size="lg"
                className="px-8 py-4 text-base font-semibold border-white/20 hover:border-cyan-500/40 hover:bg-white/5 transition-all duration-300"
              >
                <span className="flex items-center gap-2">
                  Explore Portfolio
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Button>
            </motion.div>
          </motion.div>

          {/* Trust Badges & Rating Bar */}
          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs text-graphite-300"
          >
            <div className="flex items-center gap-1.5 text-amber-400 font-bold">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 + i * 0.1 }}
                  >
                    <Star className="h-3.5 w-3.5 fill-current" />
                  </motion.span>
                ))}
              </div>
              <span className="text-white ml-1">4.9/5 Client Rating</span>
            </div>
            <div className="flex items-center gap-2 border-l border-white/15 pl-6">
              <ShieldCheck className="h-4 w-4 text-cyan-400" />
              <span>ISO 27001 & GDPR Certified</span>
            </div>
            <div className="flex items-center gap-2 border-l border-white/15 pl-6">
              <Award className="h-4 w-4 text-cyan-400" />
              <span>Senior EU Engineers</span>
            </div>
          </motion.div>

          {/* Scroll to Explore Indicator */}
          <motion.div
            variants={itemVariants}
            className="mt-16 flex flex-col items-center gap-2 text-[10px] text-graphite-400 uppercase tracking-[0.25em] font-medium"
          >
            <span>Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1.5"
            >
              <div className="w-1 h-1.5 rounded-full bg-cyan-400" />
            </motion.div>
          </motion.div>

          {/* Animated Metrics Grid */}
          <motion.div
            variants={itemVariants}
            className="mt-12 w-full grid grid-cols-2 gap-6 border-t border-white/10 pt-10 sm:grid-cols-4"
          >
            {metrics.map((m, i) => (
              <MetricCard key={m.label} {...m} delay={0.8 + i * 0.1} />
            ))}
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
