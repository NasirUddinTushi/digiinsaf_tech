import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { fadeUpViewport } from '@/utils/motionVariants';
import Icon from '@/components/common/Icon';
import Badge from '@/components/common/Badge';
import { cn } from '@/utils/cn';

// One row of the homepage's "Selected services" section — a capability
// group (not a single service), presented as an alternating editorial row
// rather than one of many identical icon cards.
export default function ServiceFeature({ index = 0, category, title, description, capabilities, icon, to }) {
  const reversed = index % 2 === 1;

  return (
    <motion.div
      {...fadeUpViewport}
      className={cn(
        'grid gap-8 border-t border-hairline py-12 first:border-t-0 first:pt-0 lg:grid-cols-12 lg:items-center lg:gap-12'
      )}
    >
      <div className={cn('lg:col-span-7', reversed && 'lg:order-2')}>
        <Badge tone="brand" className="mb-4">
          {category}
        </Badge>
        <h3 className="max-w-lg text-2xl font-semibold leading-snug text-charcoal sm:text-h3">{title}</h3>
        <p className="mt-4 max-w-lg text-body leading-relaxed text-charcoal-muted">{description}</p>
        <Link
          to={to}
          className="focus-ring group mt-6 inline-flex items-center gap-1.5 text-body-sm font-semibold text-sea-700 hover:text-sea-800"
        >
          View service
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>

      <div className={cn('lg:col-span-5', reversed && 'lg:order-1')}>
        <div className="flex h-full flex-col justify-between gap-8 rounded-2xl border border-hairline bg-sea-50 p-7">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-sea-700 shadow-elevation-sm">
            <Icon name={icon} className="h-5 w-5" />
          </span>
          <ul className="grid gap-2.5">
            {capabilities.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-body-sm text-charcoal-muted">
                <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-sea-700" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
