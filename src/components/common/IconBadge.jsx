import { cn } from '@/utils/cn';
import Icon from './Icon';

const sizeStyles = {
  sm: 'h-9 w-9 rounded-lg',
  md: 'h-11 w-11 rounded-xl',
  lg: 'h-12 w-12 rounded-xl',
};

const iconSizeStyles = {
  sm: 'h-4 w-4',
  md: 'h-5 w-5',
  lg: 'h-6 w-6',
};

const toneStyles = {
  cyanLight: 'bg-white/10 text-cyan-400',
  cyanDark: 'bg-white/10 text-cyan-400',
  violetLight: 'bg-white/10 text-violet-400',
  violetDark: 'bg-white/10 text-violet-400',
};

// The "icon inside a tinted rounded tile" pattern, previously duplicated
// with slightly different sizes/colors across ValueCard, ServiceCard,
// IndustryCard, AboutPreview and EngagementModels.
export default function IconBadge({ name, tone = 'cyanLight', size = 'md', className }) {
  return (
    <div
      className={cn(
        'inline-flex flex-shrink-0 items-center justify-center transition-all duration-300 group-hover:scale-110',
        sizeStyles[size],
        toneStyles[tone],
        className
      )}
    >
      <Icon name={name} className={iconSizeStyles[size]} />
    </div>
  );
}
