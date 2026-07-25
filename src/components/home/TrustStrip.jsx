import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Star, ShieldCheck, Award, Globe, Package, Users, BarChart3 } from 'lucide-react';

function CountUp({ target, suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}{suffix}
    </span>
  );
}

const stats = [
  { icon: Package, value: 40, suffix: '+', label: 'Products Delivered' },
  { icon: BarChart3, value: 98, suffix: '%', label: 'Client SLA' },
  { icon: Globe, value: 12, suffix: '+', label: 'Countries Served' },
  { icon: Users, value: 50, suffix: '+', label: 'Engineers' },
];

export default function TrustStrip() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="border-y border-white/10 bg-sea-950/90 py-6 backdrop-blur-md relative overflow-hidden"
    >
      {/* Animated shimmer */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent animate-[shimmer_3s_ease-in-out_infinite] pointer-events-none" />

      <div className="container-xl relative z-10">

        {/* Top row: trust badges */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-5">
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
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span>Available for New Projects</span>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-medium text-graphite-300">
            <Globe className="h-4 w-4 text-cyan-400" />
            <span>Serving EU, UK & Global Clients</span>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-5" />

        {/* Animated count-up stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {stats.map(({ icon: Icon, value, suffix, label }, idx) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-3"
            >
              <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400">
                <Icon className="h-4.5 w-4.5" />
              </div>
              <div>
                <div className="text-lg font-black text-white leading-none">
                  <CountUp target={value} suffix={suffix} />
                </div>
                <div className="text-[11px] text-graphite-400 mt-0.5">{label}</div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </motion.section>
  );
}
