import { cn } from '@/utils/cn';

const sizeStyles = {
  sm: 'h-11 w-11',
  md: 'h-14 w-14',
  lg: 'h-20 w-20',
};

// Brand mark — the approved glossy "D" artwork (public/logo.png), background
// removed (true alpha transparency, not a blend-mode trick) so it sits
// cleanly on any surface: navbar, footer, splash, chatbot header.
export default function Logo({ size = 'sm', className }) {
  return (
    <img
      src="/logo.png"
      alt=""
      aria-hidden="true"
      className={cn('flex-shrink-0 object-contain', sizeStyles[size], className)}
    />
  );
}
