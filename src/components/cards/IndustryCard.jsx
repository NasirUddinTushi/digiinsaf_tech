import { motion } from 'framer-motion';
import Icon from '@/components/common/Icon';
import { fadeUpViewportStagger } from '@/utils/motionVariants';

export default function IndustryCard({ industry, index = 0 }) {
  return (
    <motion.div
      {...fadeUpViewportStagger(index, 0.06, 6)}
      className="group flex flex-col items-center gap-3 rounded-2xl border border-hairline bg-white px-4 py-7 text-center transition-shadow duration-300 hover:shadow-elevation-sm"
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-sea-50 text-sea-700 transition-transform duration-300 group-hover:scale-110">
        <Icon name={industry.icon} className="h-5 w-5" />
      </div>
      <span className="text-body-sm font-medium text-charcoal">{industry.name}</span>
    </motion.div>
  );
}
