import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';
import { fadeUpViewportWide } from '@/utils/motionVariants';
import Badge from './Badge';

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className,
}) {
  return (
    <motion.div
      {...fadeUpViewportWide}
      className={cn(
        'max-w-2xl',
        align === 'center' && 'mx-auto text-center',
        className
      )}
    >
      {eyebrow && (
        <Badge tone="cyanDark" className="mb-3">
          {eyebrow}
        </Badge>
      )}
      <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">{title}</h2>
      {description && (
        <p className="mt-4 text-body leading-relaxed text-muted-ondark-strong sm:text-body-lg">{description}</p>
      )}
    </motion.div>
  );
}
