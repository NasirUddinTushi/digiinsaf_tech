import { Link } from 'react-router-dom';
import { ShieldCheck, MapPin, Users, ArrowUpRight } from 'lucide-react';
import Section from '@/components/common/Section';

export default function AboutPreview() {
  return (
    <Section tone="paper" className="border-t border-hairline">
      <div className="rounded-xl3 border border-hairline bg-white p-8 sm:p-12 text-charcoal shadow-elevation-sm">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
          
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-hairline bg-sea-50 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-sea-700">
              <MapPin className="h-3.5 w-3.5" /> Tallinn, Estonia Studio
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-charcoal sm:text-4xl leading-tight">
              European Engineering Standards Meets Rapid Digital Product Delivery.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-charcoal-muted">
              DigiInsaf is an Estonia-based digital product studio serving startups and scale-ups across Europe and globally. We combine business strategy, user experience design, and scalable full-stack engineering to build web applications, SaaS platforms, and AI systems ready for growth.
            </p>

            <div className="mt-6 flex flex-wrap gap-4 text-xs font-semibold text-sea-800">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-sea-700" /> Zero Tech Debt Commitment
              </span>
              <span className="flex items-center gap-1.5">
                <Users className="h-4 w-4 text-sea-700" /> 100% Senior Development Team
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-center rounded-xl2 border border-hairline bg-sea-50/60 p-6">
            <div className="space-y-4">
              <div className="flex justify-between border-b border-hairline pb-3 text-xs">
                <span className="font-semibold text-charcoal-muted">Headquarters</span>
                <span className="font-bold text-charcoal">Tallinn, Estonia (EU)</span>
              </div>
              <div className="flex justify-between border-b border-hairline pb-3 text-xs">
                <span className="font-semibold text-charcoal-muted">Working Model</span>
                <span className="font-bold text-charcoal">Remote-First • CET / EST / GMT</span>
              </div>
              <div className="flex justify-between border-b border-hairline pb-3 text-xs">
                <span className="font-semibold text-charcoal-muted">Communication</span>
                <span className="font-bold text-charcoal">Daily Slack + Jira + Bi-weekly Demos</span>
              </div>
            </div>

            <div className="mt-6">
              <Link
                to="/about"
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-sea-950 px-4 py-3 text-xs font-bold text-white transition-all hover:bg-sea-800"
              >
                Learn More About Our Team <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </Section>
  );
}
