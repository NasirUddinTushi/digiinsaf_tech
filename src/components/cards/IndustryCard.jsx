import { motion } from 'framer-motion';
import Icon from '@/components/common/Icon';
import { fadeUpViewportStagger } from '@/utils/motionVariants';

export default function IndustryCard({ industry, index = 0 }) {
  return (
    <motion.div
      {...fadeUpViewportStagger(index, 0.06, 6)}
      className="surface-card group flex flex-col items-center gap-3 px-4 py-7 text-center hover:-translate-y-0.5 hover:border-white/25"
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-violet-500/10 text-violet-400 transition-all duration-300 group-hover:scale-110 group-hover:bg-cta-gradient group-hover:text-white">
        <Icon name={industry.icon} className="h-5 w-5" />
      </div>
      <span className="text-body-sm font-medium text-white">{industry.name}</span>
    </motion.div>
  );
}
