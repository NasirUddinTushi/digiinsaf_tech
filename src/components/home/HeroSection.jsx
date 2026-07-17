import { motion } from 'framer-motion';
import {
  ArrowRight,
  CalendarCheck,
  CheckCircle2,
  Code2,
  Cpu,
  Gauge,
  FileCheck,
  Globe2,
  Layers3,
  MessageSquareText,
  ShieldCheck,
  Sparkles,
  TrendingUp,
} from 'lucide-react';
import Button from '@/components/common/Button';
import Badge from '@/components/common/Badge';

const trustIndicators = [
  { icon: Globe2, label: 'Europe-ready delivery' },
  { icon: FileCheck, label: 'NDA available' },
  { icon: ShieldCheck, label: 'Security-first build' },
];

const stats = [
  { value: '12+', label: 'service areas' },
  { value: '2 days', label: 'typical reply' },
  { value: '100%', label: 'responsive UI' },
];

const buildSteps = [
  { icon: MessageSquareText, label: 'Discovery', text: 'Scope, goals and launch priorities' },
  { icon: Layers3, label: 'Design system', text: 'Reusable UI built for real content' },
  { icon: Code2, label: 'Development', text: 'Fast, secure and maintainable product' },
];

const orbitItems = [
  { icon: Sparkles, label: 'AI', className: 'left-4 top-7' },
  { icon: ShieldCheck, label: 'Security', className: 'right-4 top-10' },
  { icon: Cpu, label: 'Automation', className: 'bottom-10 left-7' },
  { icon: TrendingUp, label: 'Growth', className: 'bottom-7 right-6' },
];

const heroTitleWords = 'Modern websites, apps and AI workflows that feel sharp from day one.'.split(' ');

const titleContainerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.045, delayChildren: 0.1 } },
};

const titleWordVariants = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
};

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-ink-950 pb-16 pt-14 sm:pb-24 sm:pt-20">
      <div className="pointer-events-none absolute inset-0 bg-hero-grid" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink-950 via-ink-900/[0.7] to-transparent" aria-hidden="true" />
      <motion.div
        aria-hidden="true"
        className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent"
        initial={{ opacity: 0, scaleX: 0.4 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 1.1, ease: 'easeOut' }}
      />

      <div className="container-xl relative grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-12">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <Badge tone="neutralDark" uppercase={false} className="mb-5">
              <Globe2 className="h-3.5 w-3.5 text-cyan-300" />
              Estonia-based digital product studio
            </Badge>
          </motion.div>

          <motion.h1
            variants={titleContainerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-3xl text-4xl font-semibold leading-[1.04] text-white sm:text-5xl lg:text-6xl"
          >
            {heroTitleWords.map((word, index) => (
              <motion.span key={`${word}-${index}`} variants={titleWordVariants} className="mr-[0.28em] inline-block last:mr-0">
                {word}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.95, ease: 'easeOut' }}
            className="mt-6 max-w-2xl text-body leading-relaxed text-muted-ondark sm:text-body-lg"
          >
            Digiinsaf helps startups and growing businesses turn ideas into secure, scalable and
            user-friendly digital products with clear design, clean engineering and practical automation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.15, ease: 'easeOut' }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <Button to="/contact" variant="primary" size="lg">
              Start Your Project
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button to="/contact?type=consultation" variant="ghost" size="lg">
              Book Free Consultation
              <CalendarCheck className="h-4 w-4" />
            </Button>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.52, ease: 'easeOut' }}
            className="mt-8 grid gap-3 sm:grid-cols-3"
          >
            {stats.map((stat) => (
              <li
                key={stat.label}
                className="group rounded-2xl border border-white/10 bg-white/[0.045] px-4 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-300/[0.35] hover:bg-white/[0.075]"
              >
                <strong className="block font-heading text-2xl font-semibold text-white">{stat.value}</strong>
                <span className="text-caption font-medium text-muted-ondark-soft transition-colors group-hover:text-cyan-100/70">
                  {stat.label}
                </span>
              </li>
            ))}
          </motion.ul>

          <motion.ul
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.62, ease: 'easeOut' }}
            className="mt-7 flex flex-wrap gap-x-5 gap-y-2.5"
          >
            {trustIndicators.map(({ icon: TrustIcon, label }) => (
              <li key={label} className="flex items-center gap-1.5 text-caption font-medium text-muted-ondark-soft">
                <TrustIcon className="h-3.5 w-3.5 flex-shrink-0 text-cyan-300" />
                {label}
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 28, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.12 }}
          className="relative mx-auto w-full max-w-xl"
        >
          <div className="pointer-events-none absolute inset-3 rounded-[2rem] border border-cyan-300/20 bg-cyan-400/[0.03] animate-pulse-ring" aria-hidden="true" />
          <div className="pointer-events-none absolute -inset-2 rounded-[2.15rem] border border-cyan-300/10 bg-gradient-to-br from-cyan-300/10 via-transparent to-violet-300/10" aria-hidden="true" />
          <div className="relative overflow-hidden rounded-xl3 border border-cyan-200/[0.12] bg-ink-800/[0.9] p-4 shadow-elevation-lg backdrop-blur-2xl sm:p-5">
            <div className="pointer-events-none absolute inset-0 bg-dashboard-sheen" aria-hidden="true" />
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-signal-red/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-signal-green/80" />
              </div>
              <span className="rounded-full border border-cyan-300/25 bg-cyan-300/10 px-3 py-1 text-caption font-medium text-cyan-100">
                Live product sprint
              </span>
            </div>

            <div className="relative grid gap-4 pt-5 lg:grid-cols-[0.92fr_1.08fr]">
              <div className="space-y-4">
                <div className="rounded-2xl border border-white/10 bg-ink-700/[0.75] p-4 shadow-card-dark">
                  <div className="flex items-center gap-2 text-caption font-medium text-cyan-200">
                    <Sparkles className="h-4 w-4" />
                    Project health
                  </div>
                  <div className="mt-4 h-2 rounded-full bg-white/10">
                    <motion.div
                      className="h-full rounded-full bg-cta-gradient"
                      initial={{ width: '22%' }}
                      animate={{ width: '84%' }}
                      transition={{ duration: 1.2, ease: 'easeOut', delay: 0.4 }}
                    />
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-2">
                    {['UX', 'Code', 'SEO', 'Security'].map((item) => (
                      <span key={item} className="rounded-xl bg-white/[0.06] px-3 py-2 text-caption font-medium text-mist-100/80">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-ink-700/[0.7] p-4">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 text-caption font-medium text-muted-ondark-soft">
                      <Gauge className="h-3.5 w-3.5 text-cyan-200" />
                      Launch readiness
                    </span>
                    <span className="text-caption font-semibold text-signal-green">92%</span>
                  </div>
                  <div className="space-y-2">
                    {['Responsive pages', 'Contact flow', 'Analytics'].map((item) => (
                      <div key={item} className="flex items-center gap-2 text-caption font-medium text-mist-100/75">
                        <CheckCircle2 className="h-3.5 w-3.5 text-signal-green" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-ink-700/[0.75] p-4">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <p className="text-caption font-medium text-muted-ondark-soft">Delivery flow</p>
                    <h2 className="mt-1 text-lg font-semibold text-white">From idea to launch</h2>
                  </div>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-300/[0.15] text-cyan-200">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>

                <div className="space-y-3">
                  {buildSteps.map(({ icon: StepIcon, label, text }, index) => (
                    <motion.div
                      key={label}
                      className="flex gap-3 rounded-2xl border border-white/10 bg-ink-950/[0.45] p-3"
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.45, delay: 0.35 + index * 0.12, ease: 'easeOut' }}
                    >
                      <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-cyan-300/[0.12] text-cyan-200">
                        <StepIcon className="h-4 w-4" />
                      </span>
                      <span>
                        <span className="block text-sm font-semibold text-white">{label}</span>
                        <span className="mt-0.5 block text-xs leading-relaxed text-muted-ondark-soft">{text}</span>
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {orbitItems.map(({ icon: ItemIcon, label, className }, index) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55 + index * 0.1 }}
              className={`absolute ${className} hidden items-center gap-2 rounded-full border border-white/10 bg-ink-900/80 px-3 py-2 text-caption font-medium text-white shadow-card-dark backdrop-blur-xl sm:flex`}
            >
              <ItemIcon className="h-3.5 w-3.5 text-cyan-300" />
              {label}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
