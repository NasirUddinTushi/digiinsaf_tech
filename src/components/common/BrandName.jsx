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
// the brand name with its tagline stacked underneath). `onDark` controls
// text color so the same lockup works on the transparent-over-hero navbar
// state and on solid light/dark surfaces.
export default function BrandName({ size = 'sm', onDark = true, className }) {
  return (
    <span className={cn('inline-flex flex-shrink-0 items-center gap-2.5', className)}>
      <Logo className={logoSizes[size]} />
      <span className="flex flex-col leading-tight">
        <span
          className={cn('notranslate font-heading font-bold', onDark ? 'text-white' : 'text-charcoal', nameSizes[size])}
          translate="no"
        >
          {siteConfig.brand.name}
        </span>
        <span className={cn('hidden font-medium lg:block', onDark ? 'text-sea-400' : 'text-sea-700', taglineSizes[size])}>
          {siteConfig.brand.tagline}
        </span>
      </span>
    </span>
  );
}
