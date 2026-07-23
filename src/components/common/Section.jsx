import { cn } from '@/utils/cn';

// `light`/`mist`/`white`/`dark` are the original dark-only tones — left
// exactly as they were so pages not yet migrated to the redesign are
// visually unaffected. `paper`/`tint`/`surface`/`navy` are the new
// restrained system's tones, used by the redesigned homepage.
const toneStyles = {
  light: 'bg-ink-900',
  mist: 'bg-ink-800',
  white: 'bg-ink-900',
  dark: 'bg-ink-950',
  paper: 'bg-paper text-charcoal',
  tint: 'bg-sea-50 text-charcoal',
  surface: 'bg-white text-charcoal',
  navy: 'bg-sea-950 text-white',
};

const spacingStyles = {
  tight: 'py-14 sm:py-20',
  default: 'py-20 sm:py-28',
  loose: 'py-24 sm:py-32',
};

// Layout primitive replacing the repeated
// <section className="bg-X py-20 sm:py-28"><div className="container-xl">…
// shell duplicated across nearly every page/home section. Purely
// structural — it wraps children, it doesn't know what's inside them.
export default function Section({
  tone = 'light',
  spacing = 'default',
  as: Tag = 'section',
  className,
  containerClassName,
  children,
  ...rest
}) {
  return (
    <Tag className={cn(toneStyles[tone], spacingStyles[spacing], className)} {...rest}>
      <div className={cn('container-xl', containerClassName)}>{children}</div>
    </Tag>
  );
}
