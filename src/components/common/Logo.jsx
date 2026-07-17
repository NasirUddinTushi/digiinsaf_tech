import { cn } from '@/utils/cn';

const sizeStyles = {
  sm: 'h-11 w-11',
  md: 'h-14 w-14',
  lg: 'h-20 w-20',
};

// Brand mark — a "D" monogram drawn directly as SVG (two overlapping
// rounded strokes, echoing the approved reference art) rather than a raster
// image, so it's crisp at every size and needs no background-removal hack.
export default function Logo({ size = 'sm', className }) {
  return (
    <span
      className={cn(
        'inline-flex flex-shrink-0 items-center justify-center rounded-xl bg-ink-900/80 ring-1 ring-inset ring-white/[0.06]',
        sizeStyles[size],
        className
      )}
    >
      <svg viewBox="0 0 100 100" className="h-[70%] w-[70%]" aria-hidden="true">
        <defs>
          <linearGradient id="logoDMark" x1="10%" y1="0%" x2="95%" y2="100%">
            <stop offset="0%" stopColor="#85C2E9" />
            <stop offset="100%" stopColor="#2E7DBA" />
          </linearGradient>
        </defs>
        <path
          d="M30,16 L30,84 C60,84 78,68 78,50 C78,32 60,16 30,16"
          fill="none"
          stroke="url(#logoDMark)"
          strokeWidth="12"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M40,31 C57,31 65,40 65,50 C65,60 57,69 40,69"
          fill="none"
          stroke="#EEF7FC"
          strokeOpacity="0.4"
          strokeWidth="5"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}
