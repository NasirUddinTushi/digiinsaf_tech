import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Icon from '@/components/common/Icon';
import { fadeUpViewportStagger } from '@/utils/motionVariants';

export default function ServiceCard({ service, index = 0 }) {
  return (
    <motion.article
      {...fadeUpViewportStagger(index)}
      whileHover={{ y: -7 }}
      transition={{ type: 'spring', stiffness: 260, damping: 22 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-[1.25rem] border border-white/10 bg-white/[0.06] p-6 shadow-card-dark backdrop-blur-xl transition-all duration-300 hover:border-cyan-300/[0.35] hover:bg-white/[0.085]"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-300/[0.13] via-transparent to-violet-300/[0.08] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-200 transition-all duration-300 group-hover:scale-105 group-hover:border-cyan-300/[0.45] group-hover:bg-cyan-300/[0.15]">
        <Icon name={service.icon} className="h-5 w-5" />
      </div>

      <h3 className="relative mb-2 text-lg font-semibold text-white">{service.name}</h3>
      <p className="relative mb-6 flex-1 text-body-sm leading-relaxed text-mist-200/[0.78]">
        {service.shortDescription}
      </p>
      <Link
        to={`/services/${service.slug}`}
        className="focus-ring relative inline-flex w-fit items-center gap-1.5 rounded-full border border-white/[0.12] bg-white/[0.06] px-3.5 py-2 text-caption font-semibold text-white transition-all duration-300 hover:border-cyan-300/[0.45] hover:bg-cyan-300/[0.12] hover:text-cyan-100"
      >
        Explore Service
        <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </Link>
    </motion.article>
  );
}
