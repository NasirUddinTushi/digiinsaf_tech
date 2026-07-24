import { motion } from 'framer-motion';
import {
  Code2,
  Globe,
  FileCode,
  Palette,
  Terminal,
  Server,
  Database,
  Cloud,
  Box,
  Layers,
  Cpu,
  Sparkles,
  Network,
  PenTool,
  Smartphone,
  Zap,
  ShieldCheck,
  Rocket,
  CreditCard,
} from 'lucide-react';

const ROW_1 = [
  { name: 'Python', icon: Terminal, color: 'text-yellow-400 bg-yellow-400/10 border-yellow-400/30' },
  { name: 'Django', icon: Server, color: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/30' },
  { name: 'AWS', icon: Cloud, color: 'text-amber-400 bg-amber-400/10 border-amber-400/30' },
  { name: 'Docker', icon: Box, color: 'text-cyan-400 bg-cyan-400/10 border-cyan-400/30' },
  { name: 'Kubernetes', icon: Layers, color: 'text-blue-400 bg-blue-400/10 border-blue-400/30' },
  { name: 'PostgreSQL', icon: Database, color: 'text-sky-400 bg-sky-400/10 border-sky-400/30' },
  { name: 'MongoDB', icon: Database, color: 'text-emerald-500 bg-emerald-500/10 border-emerald-500/30' },
  { name: 'GraphQL', icon: Network, color: 'text-pink-400 bg-pink-400/10 border-pink-400/30' },
  { name: 'React 19', icon: Code2, color: 'text-cyan-300 bg-cyan-300/10 border-cyan-300/30' },
  { name: 'Next.js', icon: Globe, color: 'text-white bg-white/10 border-white/30' },
  { name: 'TypeScript', icon: FileCode, color: 'text-blue-400 bg-blue-400/10 border-blue-400/30' },
  { name: 'Tailwind CSS', icon: Palette, color: 'text-cyan-400 bg-cyan-400/10 border-cyan-400/30' },
];

const ROW_2 = [
  { name: 'OpenAI API', icon: Sparkles, color: 'text-purple-400 bg-purple-400/10 border-purple-400/30' },
  { name: 'TensorFlow', icon: Cpu, color: 'text-orange-400 bg-orange-400/10 border-orange-400/30' },
  { name: 'Figma', icon: PenTool, color: 'text-pink-400 bg-pink-400/10 border-pink-400/30' },
  { name: 'Framer Motion', icon: Sparkles, color: 'text-blue-400 bg-blue-400/10 border-blue-400/30' },
  { name: 'React Native', icon: Smartphone, color: 'text-cyan-300 bg-cyan-300/10 border-cyan-300/30' },
  { name: 'iOS Swift', icon: Smartphone, color: 'text-orange-500 bg-orange-500/10 border-orange-500/30' },
  { name: 'Android Kotlin', icon: Smartphone, color: 'text-purple-400 bg-purple-400/10 border-purple-400/30' },
  { name: 'Cloudflare', icon: ShieldCheck, color: 'text-amber-500 bg-amber-500/10 border-amber-500/30' },
  { name: 'Vercel', icon: Rocket, color: 'text-white bg-white/10 border-white/30' },
  { name: 'Redis', icon: Zap, color: 'text-red-400 bg-red-400/10 border-red-400/30' },
  { name: 'Stripe', icon: CreditCard, color: 'text-indigo-400 bg-indigo-400/10 border-indigo-400/30' },
];

export default function TechStrip() {
  // Duplicate arrays for seamless 100% infinite loop
  const doubleRow1 = [...ROW_1, ...ROW_1, ...ROW_1];
  const doubleRow2 = [...ROW_2, ...ROW_2, ...ROW_2];

  return (
    <section className="relative bg-sea-950 py-20 overflow-hidden border-t border-b border-white/10">
      {/* Background ambient light & Mesh */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/3 w-[600px] h-[600px] rounded-full bg-cyan-600/10 blur-[160px] animate-mesh-drift" />
        <div
          className="absolute bottom-0 right-1/3 w-[500px] h-[500px] rounded-full bg-blue-700/10 blur-[140px] animate-mesh-drift"
          style={{ animationDelay: '-5s' }}
        />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
            backgroundSize: '55px 55px',
          }}
        />
        {/* Left & Right gradient fade masks */}
        <div className="absolute inset-y-0 left-0 w-24 sm:w-48 bg-gradient-to-r from-sea-950 to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 sm:w-48 bg-gradient-to-l from-sea-950 to-transparent z-20 pointer-events-none" />
      </div>

      <div className="relative z-10 space-y-12">
        {/* Section Header */}
        <div className="container-xl text-center space-y-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-cyan-300 backdrop-blur-md"
          >
            <Sparkles className="h-3.5 w-3.5" /> Core Arsenal
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Technologies We{' '}
            <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-blue-400 bg-clip-text text-transparent">
              Master
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xs sm:text-sm text-graphite-400 max-w-xl mx-auto leading-relaxed"
          >
            Battle-tested frameworks, ultra-fast backends, resilient cloud infrastructure, and enterprise AI engines.
          </motion.p>
        </div>

        {/* Marquee Rows Container */}
        <div className="space-y-4 py-2">
          {/* Row 1: Left Scroll */}
          <div className="flex overflow-hidden select-none">
            <motion.div
              animate={{ x: ['0%', '-33.333%'] }}
              transition={{
                repeat: Infinity,
                repeatType: 'loop',
                duration: 35,
                ease: 'linear',
              }}
              className="flex min-w-max gap-3 sm:gap-4 items-center pr-4"
            >
              {doubleRow1.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={`r1-${item.name}-${idx}`}
                    className="group flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-cyan-500/50 hover:bg-white/[0.08] hover:shadow-[0_0_20px_-4px_rgba(6,182,212,0.4)] cursor-pointer"
                  >
                    <span className={`flex h-6 w-6 items-center justify-center rounded-full border ${item.color}`}>
                      <Icon className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">
                      {item.name}
                    </span>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* Row 2: Right Scroll */}
          <div className="flex overflow-hidden select-none">
            <motion.div
              animate={{ x: ['-33.333%', '0%'] }}
              transition={{
                repeat: Infinity,
                repeatType: 'loop',
                duration: 38,
                ease: 'linear',
              }}
              className="flex min-w-max gap-3 sm:gap-4 items-center pr-4"
            >
              {doubleRow2.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={`r2-${item.name}-${idx}`}
                    className="group flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-cyan-500/50 hover:bg-white/[0.08] hover:shadow-[0_0_20px_-4px_rgba(6,182,212,0.4)] cursor-pointer"
                  >
                    <span className={`flex h-6 w-6 items-center justify-center rounded-full border ${item.color}`}>
                      <Icon className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">
                      {item.name}
                    </span>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
