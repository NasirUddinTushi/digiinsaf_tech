import { motion } from 'framer-motion';
import IconBadge from '@/components/common/IconBadge';
import { fadeUpViewportStagger } from '@/utils/motionVariants';

export default function ValueCard({ value, index = 0 }) {
  return (
    <motion.div
      {...fadeUpViewportStagger(index)}
      className="rounded-2xl border border-hairline bg-white p-6 transition-shadow duration-300 hover:shadow-elevation-sm"
    >
      <IconBadge name={value.icon} tone="brand" className="mb-4" />
      <h3 className="mb-2 text-base font-semibold text-charcoal">{value.title}</h3>
      <p className="text-body-sm leading-relaxed text-charcoal-muted">{value.description}</p>
    </motion.div>
  );
}
