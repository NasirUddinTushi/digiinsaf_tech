import { cn } from '@/utils/cn';

// Every tone now resolves to a dark surface (the site has a single fixed
// dark theme) — the names are kept only so existing call sites still read
// sensibly and so alternating sections keep some tonal variety.
const toneStyles = {
  light: 'bg-ink-900',
  mist: 'bg-ink-800',
  white: 'bg-ink-900',
  dark: 'bg-ink-950',
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
