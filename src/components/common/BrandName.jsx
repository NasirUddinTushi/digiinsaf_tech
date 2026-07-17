import { cn } from '@/utils/cn';
import Logo from './Logo';
import siteConfig from '@/config/siteConfig';

const logoSizes = {
  sm: 'h-11 w-11',
  md: 'h-14 w-14',
  lg: 'h-20 w-20',
};

const nameSizes = {
  sm: 'text-base',
  md: 'text-xl',
  lg: 'text-3xl',
};

const taglineSizes = {
  sm: 'text-[10px]',
  md: 'text-xs',
  lg: 'text-sm',
};

// Icon-left, name-over-tagline lockup — replaces the earlier single-line
// stylised wordmark with a plainer two-line brand block (logo mark, then
// the brand name with its tagline stacked underneath).
export default function BrandName({ size = 'sm', className }) {
  return (
    <span className={cn('inline-flex flex-shrink-0 items-center gap-2.5', className)}>
      <Logo className={logoSizes[size]} />
      <span className="flex flex-col leading-tight">
        <span className={cn('notranslate font-heading font-bold text-white', nameSizes[size])} translate="no">
          {siteConfig.brand.name}
        </span>
        <span className={cn('hidden font-medium text-cyan-300 lg:block', taglineSizes[size])}>{siteConfig.brand.tagline}</span>
      </span>
    </span>
  );
}
