import { motion } from 'framer-motion';
import { ArrowUpRight, Bot, Code2, Layers3, ShieldCheck } from 'lucide-react';
import { fadeUpViewportStagger } from '@/utils/motionVariants';

const impactItems = [
  {
    icon: Layers3,
    title: 'Product strategy',
    text: 'Turn rough ideas into clear scope, flows and launch priorities.',
  },
  {
    icon: Code2,
    title: 'Modern build',
    text: 'Fast interfaces, clean code and scalable architecture from day one.',
  },
  {
    icon: Bot,
    title: 'AI automation',
    text: 'Practical assistants, workflow automation and data-powered features.',
  },
  {
    icon: ShieldCheck,
    title: 'Secure delivery',
    text: 'Privacy-aware process, scoped access and reliable handover.',
  },
];

export default function HomeImpactStrip() {
  return (
    <section className="relative overflow-hidden border-y border-cyan-200/10 bg-ink-900 py-7">
      <div className="pointer-events-none absolute inset-0 bg-precision-lines opacity-45" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/[0.45] to-transparent" aria-hidden="true" />
      <div className="container-xl relative grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {impactItems.map(({ icon: Icon, title, text }, index) => (
          <motion.div
            key={title}
            {...fadeUpViewportStagger(index, 0.06, 4)}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-ink-800/[0.88] p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/[0.35] hover:bg-ink-800"
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="mb-4 flex items-center justify-between">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-300/25 bg-cyan-300/[0.12] text-cyan-200">
                <Icon className="h-5 w-5" />
              </span>
              <ArrowUpRight className="h-4 w-4 text-mist-200/[0.35] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan-200" />
            </div>
            <h2 className="text-base font-semibold text-white">{title}</h2>
            <p className="mt-2 text-body-sm leading-relaxed text-mist-200/[0.78]">{text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
