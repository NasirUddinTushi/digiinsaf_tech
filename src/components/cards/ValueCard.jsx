import { motion } from 'framer-motion';
import IconBadge from '@/components/common/IconBadge';
import { fadeUpViewportStagger } from '@/utils/motionVariants';

export default function ValueCard({ value, index = 0 }) {
  return (
    <motion.div
      {...fadeUpViewportStagger(index)}
      className="surface-card-dark group p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/25"
    >
      <IconBadge name={value.icon} tone="cyanDark" className="mb-4" />
      <h3 className="mb-2 text-base font-semibold text-white">{value.title}</h3>
      <p className="text-body-sm leading-relaxed text-muted-ondark">{value.description}</p>
    </motion.div>
  );
}
