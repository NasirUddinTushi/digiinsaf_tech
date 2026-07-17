import { motion } from 'framer-motion';
import { ArrowRight, CalendarCheck, CheckCircle2 } from 'lucide-react';
import Button from './Button';
import siteConfig from '@/config/siteConfig';
import { fadeUpViewportWide } from '@/utils/motionVariants';

export default function CTASection({
  title = 'Have a Product Idea? Let us Build It Together.',
  description = 'Tell us about your project and we will get back to you within two business days.',
  primaryLabel = siteConfig.cta.primary,
  primaryTo = '/contact',
  secondaryLabel = siteConfig.cta.consultation,
  secondaryTo = '/contact?type=consultation',
}) {
  return (
    <section className="container-xl">
      <motion.div
        {...fadeUpViewportWide}
        className="relative overflow-hidden rounded-xl3 bg-ink-950 px-6 py-16 text-center shadow-elevation-lg sm:px-12 sm:py-20"
      >
        <div className="absolute inset-0 bg-grid-glow" aria-hidden="true" />
        <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent" aria-hidden="true" />
        <div className="relative mx-auto max-w-2xl">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">{title}</h2>
          <p className="mx-auto mt-4 max-w-xl text-body text-muted-ondark-strong">{description}</p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-caption font-medium text-muted-ondark-soft">
            {['Free consultation', 'Clear scope', 'No hidden cost'].map((item) => (
              <span key={item} className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-signal-green" />
                {item}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button to={primaryTo} variant="primary" size="lg">
              {primaryLabel}
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button to={secondaryTo} variant="outlineLight" size="lg">
              {secondaryLabel}
              <CalendarCheck className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
