import { motion } from 'framer-motion';
import { MapPin, Star, ShieldCheck, Award, Globe } from 'lucide-react';

export default function TrustStrip() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="border-y border-white/10 bg-sea-950/90 py-4 backdrop-blur-md relative overflow-hidden"
    >
      {/* Animated shimmer */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent animate-[shimmer_3s_ease-in-out_infinite] pointer-events-none" />

      <div className="container-xl flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between relative z-10">

        {/* Rating & Trust Badges */}
        <div className="flex flex-wrap items-center gap-5">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2"
          >
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-current" />
              ))}
            </div>
            <span className="text-xs font-bold text-white">4.9/5</span>
            <span className="text-[11px] text-graphite-400">on Clutch & Reviews</span>
          </motion.div>

          <div className="hidden sm:flex items-center gap-1.5 border-l border-white/10 pl-5 text-xs text-graphite-300">
            <ShieldCheck className="h-4 w-4 text-cyan-400" />
            <span>ISO 27001 & GDPR</span>
          </div>

          <div className="hidden md:flex items-center gap-1.5 border-l border-white/10 pl-5 text-xs text-graphite-300">
            <Award className="h-4 w-4 text-cyan-400" />
            <span>Top Estonian Digital Studio</span>
          </div>

          <div className="hidden lg:flex items-center gap-1.5 border-l border-white/10 pl-5 text-xs text-graphite-300">
            {/* Live indicator */}
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <span>Available for New Projects</span>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center gap-2 text-xs font-medium text-graphite-300">
          <Globe className="h-4 w-4 text-cyan-400" />
          <span>Serving EU, UK & Global Clients</span>
        </div>
      </div>
    </motion.section>
  );
}
