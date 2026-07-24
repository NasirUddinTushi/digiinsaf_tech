import { motion } from 'framer-motion';
import { ShieldCheck, MapPin, Users, ArrowUpRight, TrendingUp, Clock, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import Section from '@/components/common/Section';

const stats = [
  { icon: TrendingUp, label: 'Headquarters', value: 'Tallinn, Estonia (EU)' },
  { icon: Clock, label: 'Working Model', value: 'Remote-First • CET / EST / GMT' },
  { icon: Globe, label: 'Communication', value: 'Daily Slack + Jira + Bi-weekly Demos' },
];

export default function AboutPreview() {
  return (
    <Section tone="paper" className="border-t border-hairline overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="rounded-xl3 border border-hairline bg-white p-8 sm:p-12 text-charcoal shadow-elevation-sm relative overflow-hidden"
      >
        {/* Decorative background gradient */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-sea-50 to-transparent rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        
        <div className="grid gap-8 lg:grid-cols-12 lg:items-center relative z-10">

          <div className="lg:col-span-7">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-1.5 rounded-full border border-hairline bg-sea-50 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-sea-700"
            >
              <MapPin className="h-3.5 w-3.5" /> Tallinn, Estonia Studio
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-4 text-3xl font-extrabold tracking-tight text-charcoal sm:text-4xl leading-tight"
            >
              European Engineering Standards Meets{' '}
              <span className="text-sea-700">Rapid Digital Product Delivery.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 text-sm leading-relaxed text-charcoal-muted"
            >
              DigiInsaf is an Estonia-based digital product studio serving startups and scale-ups across Europe and globally. We combine business strategy, user experience design, and scalable full-stack engineering to build web applications, SaaS platforms, and AI systems ready for growth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 flex flex-wrap gap-4 text-xs font-semibold text-sea-800"
            >
              {[
                { icon: ShieldCheck, label: 'Zero Tech Debt Commitment' },
                { icon: Users, label: '100% Senior Development Team' },
              ].map(({ icon: Icon, label }) => (
                <motion.span
                  key={label}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-1.5 bg-sea-50 border border-hairline px-3 py-1.5 rounded-full"
                >
                  <Icon className="h-4 w-4 text-sea-700" /> {label}
                </motion.span>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col justify-center rounded-xl2 border border-hairline bg-sea-50/60 p-6 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-sea-50/80 to-transparent pointer-events-none" />
            <div className="space-y-0 relative z-10">
              {stats.map(({ icon: Icon, label, value }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                  className="flex items-center justify-between border-b border-hairline py-3.5 text-xs last:border-0 group"
                >
                  <div className="flex items-center gap-2 font-semibold text-charcoal-muted">
                    <Icon className="h-3.5 w-3.5 text-sea-700 group-hover:scale-110 transition-transform" />
                    {label}
                  </div>
                  <span className="font-bold text-charcoal text-right max-w-[55%]">{value}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="mt-6 relative z-10"
            >
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  to="/about"
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-sea-950 px-4 py-3 text-xs font-bold text-white transition-all hover:bg-sea-800 hover:shadow-elevation-md"
                >
                  Learn More About Our Team <ArrowUpRight className="h-4 w-4" />
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

        </div>
      </motion.div>
    </Section>
  );
}
