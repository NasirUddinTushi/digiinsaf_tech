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
import { fadeUpViewport } from '@/utils/motionVariants';

const ROW_1 = [
  { name: 'Python', icon: Terminal },
  { name: 'Django', icon: Server },
  { name: 'AWS', icon: Cloud },
  { name: 'Docker', icon: Box },
  { name: 'Kubernetes', icon: Layers },
  { name: 'PostgreSQL', icon: Database },
  { name: 'MongoDB', icon: Database },
  { name: 'GraphQL', icon: Network },
  { name: 'React 19', icon: Code2 },
  { name: 'Next.js', icon: Globe },
  { name: 'TypeScript', icon: FileCode },
  { name: 'Tailwind CSS', icon: Palette },
];

const ROW_2 = [
  { name: 'OpenAI API', icon: Sparkles },
  { name: 'TensorFlow', icon: Cpu },
  { name: 'Figma', icon: PenTool },
  { name: 'Framer Motion', icon: Sparkles },
  { name: 'React Native', icon: Smartphone },
  { name: 'iOS Swift', icon: Smartphone },
  { name: 'Android Kotlin', icon: Smartphone },
  { name: 'Cloudflare', icon: ShieldCheck },
  { name: 'Vercel', icon: Rocket },
  { name: 'Redis', icon: Zap },
  { name: 'Stripe', icon: CreditCard },
];

export default function TechStrip() {
  const doubleRow1 = [...ROW_1, ...ROW_1];
  const doubleRow2 = [...ROW_2, ...ROW_2];

  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-sea-950 py-20">
      <div className="absolute inset-y-0 left-0 z-20 w-24 bg-gradient-to-r from-sea-950 to-transparent sm:w-48" />
      <div className="absolute inset-y-0 right-0 z-20 w-24 bg-gradient-to-l from-sea-950 to-transparent sm:w-48" />

      <div className="relative z-10 space-y-12">
        <motion.div {...fadeUpViewport} className="container-xl space-y-3 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
            Core Arsenal
          </div>
          <h2 className="text-3xl font-black tracking-tight text-white sm:text-5xl">
            Technologies We <span className="text-cyan-300">Master</span>
          </h2>
          <p className="mx-auto max-w-xl text-xs leading-relaxed text-graphite-400 sm:text-sm">
            Battle-tested frameworks, resilient cloud infrastructure, and AI-ready tooling.
          </p>
        </motion.div>

        <div className="space-y-4 py-2">
          <div className="flex overflow-hidden select-none">
            <div
              className="flex min-w-max animate-[marquee_35s_linear_infinite] items-center gap-3 pr-4 sm:gap-4"
              style={{ animationDirection: 'reverse' }}
            >
              {doubleRow1.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={`r1-${item.name}-${idx}`}
                    className="flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 transition-colors hover:border-white/25"
                  >
                    <Icon className="h-4 w-4 text-cyan-300" />
                    <span className="text-xs font-semibold text-white sm:text-sm">{item.name}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex overflow-hidden select-none">
            <div className="flex min-w-max animate-[marquee_38s_linear_infinite] items-center gap-3 pr-4 sm:gap-4">
              {doubleRow2.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={`r2-${item.name}-${idx}`}
                    className="flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 transition-colors hover:border-white/25"
                  >
                    <Icon className="h-4 w-4 text-cyan-300" />
                    <span className="text-xs font-semibold text-white sm:text-sm">{item.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
