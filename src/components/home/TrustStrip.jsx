import { MapPin, Star, ShieldCheck, Award } from 'lucide-react';
import { industries } from '@/data/industries';

export default function TrustStrip() {
  return (
    <section className="border-y border-white/10 bg-sea-950/90 py-5 backdrop-blur-md">
      <div className="container-xl flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        
        {/* Rating & Trust Badges */}
        <div className="flex flex-wrap items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-current" />
              ))}
            </div>
            <span className="text-xs font-bold text-white">4.9/5 Rating</span>
            <span className="text-[11px] text-graphite-400">on Clutch & Reviews</span>
          </div>

          <div className="hidden sm:flex items-center gap-1.5 border-l border-white/10 pl-6 text-xs text-graphite-300">
            <ShieldCheck className="h-4 w-4 text-cyan-400" />
            <span>ISO 27001 & GDPR Compliant</span>
          </div>

          <div className="hidden md:flex items-center gap-1.5 border-l border-white/10 pl-6 text-xs text-graphite-300">
            <Award className="h-4 w-4 text-cyan-400" />
            <span>Top Estonian Digital Studio</span>
          </div>
        </div>

        {/* Location & Global Reach */}
        <div className="flex items-center gap-2 text-xs font-medium text-graphite-300">
          <MapPin className="h-4 w-4 text-cyan-400" />
          <span>Tallinn, Estonia • Serving EU, UK & Global Clients</span>
        </div>

      </div>
    </section>
  );
}
