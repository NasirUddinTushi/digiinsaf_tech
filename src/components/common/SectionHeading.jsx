import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';
import { fadeUpViewportWide } from '@/utils/motionVariants';
import Badge from './Badge';

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  // Default stays 'dark' (white text) — the vast majority of call sites
  // across not-yet-migrated pages call this with no `tone` prop at all and
  // rely on the old always-dark rendering. Redesigned components pass
  // tone="light" explicitly to opt into the new paper/white treatment.
  tone = 'dark',
  className,
}) {
  const onDark = tone !== 'light';

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
        <Badge tone={onDark ? 'brandOnDark' : 'brand'} className="mb-4">
          {eyebrow}
        </Badge>
      )}
      <h2 className={cn('text-3xl leading-tight sm:text-h2', onDark ? 'text-white' : 'text-charcoal')}>{title}</h2>
      {description && (
        <p className={cn('mt-4 max-w-xl text-body-lg leading-relaxed', onDark ? 'text-white/70' : 'text-charcoal-muted')}>
          {description}
        </p>
      )}
    </motion.div>
  );
}
