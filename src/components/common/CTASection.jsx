import { ArrowRight, ShieldCheck, Mail } from 'lucide-react';
import Button from './Button';
import siteConfig from '@/config/siteConfig';

export default function CTASection({
  title = 'Ready to Build Your Next Digital Product?',
  description = 'Tell us about your product idea, timeline, or engineering bottleneck. Our CTO and design leads will help outline the optimal path forward.',
  primaryLabel = 'Book Discovery Call',
  primaryTo = '/contact',
}) {
  return (
    <section className="relative overflow-hidden bg-sea-950 py-20">
      <div className="container-xl relative z-10">
        <div className="mx-auto max-w-4xl rounded-xl3 border border-white/10 bg-sea-900/60 p-8 text-center sm:p-14">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-cyan-200">
            Start Your Project Journey
          </span>

          <h2 className="mt-4 text-3xl font-extrabold text-white sm:text-5xl leading-tight">
            {title}
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base text-graphite-300 leading-relaxed">
            {description}
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button to={primaryTo} variant="primary" size="lg" className="sm:w-auto">
              {primaryLabel} <ArrowRight className="h-4 w-4" />
            </Button>
            <Button to="/services" variant="outlineLight" size="lg" className="sm:w-auto">
              Calculate Instant Estimate
            </Button>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4 border-t border-white/10 pt-6 text-xs text-graphite-400">
            <span className="flex items-center gap-1.5 text-white">
              <ShieldCheck className="h-4 w-4 text-signal-green" /> Free 30-Min CTO Consultation
            </span>
            <span>•</span>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="flex items-center gap-1 text-cyan-300 hover:underline"
            >
              <Mail className="h-3.5 w-3.5" /> {siteConfig.contact.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
