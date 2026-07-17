import { cn } from '@/utils/cn';

// "Light" tones are kept as aliases of their dark counterpart — the site
// has a single fixed dark theme now, so there's no light surface left for
// the light variants to be designed against.
const toneStyles = {
  neutralLight: 'border-white/[0.15] bg-white/5 text-mist-200/80',
  neutralDark: 'border-white/[0.15] bg-white/5 text-mist-200/80',
  cyanLight: 'border-cyan-400/30 bg-cyan-400/10 text-cyan-400',
  cyanDark: 'border-cyan-400/30 bg-cyan-400/10 text-cyan-400',
  violetLight: 'border-violet-400/30 bg-violet-400/10 text-violet-400',
  violetDark: 'border-violet-400/30 bg-violet-400/10 text-violet-400',
  amber: 'border-signal-amber/30 bg-signal-amber/10 text-signal-amber',
};

// Small pill/label primitive — replaces the ad hoc <span> tags previously
// hand-styled per usage (eyebrow tags, "Demo project" flags, category tags,
// tech-stack chips). Set uppercase={false} for chips holding proper nouns
// (e.g. "React", "Node.js") that shouldn't be shouty.
export default function Badge({ tone = 'neutralLight', uppercase = true, className, children }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-caption font-medium tracking-wider',
        uppercase && 'uppercase',
        toneStyles[tone],
        className
      )}
    >
      {children}
    </span>
  );
}
