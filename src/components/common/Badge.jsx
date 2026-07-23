import { cn } from '@/utils/cn';

// Flat bordered label, no glow ring. `brand`/`neutral` are for light (paper/
// white) sections; the `OnDark` pair is for the navy hero/work/CTA sections.
const toneStyles = {
  brand: 'border-sea-100 bg-sea-50 text-sea-700',
  neutral: 'border-hairline bg-white text-charcoal-muted',
  brandOnDark: 'border-white/20 bg-white/10 text-white',
  neutralOnDark: 'border-white/15 bg-white/5 text-white/70',
};

// Small pill/label primitive — eyebrow tags, category tags, tech-stack
// chips. Set uppercase={false} for chips holding proper nouns (e.g. "React")
// that shouldn't be shouty.
export default function Badge({ tone = 'brand', uppercase = true, className, children }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-caption font-semibold tracking-wider',
        uppercase && 'uppercase',
        toneStyles[tone],
        className
      )}
    >
      {children}
    </span>
  );
}
