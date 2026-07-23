import { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';

// Restrained system (redesign) — flat fills, no gradients/shine-sweep/glow.
// Variant names are unchanged from the old dark-only system so no call site
// needs touching; only what each name renders has changed:
//   primary      solid brand blue — the strong CTA on light (paper/white) sections
//   secondary    solid white/charcoal — the strong CTA on dark navy sections
//   outlineLight lower-emphasis CTA on dark navy sections
//   ghost        tertiary action on dark navy sections
//   soft         tertiary action on light sections
const variantStyles = {
  primary: 'bg-sea-700 text-white hover:bg-sea-800',
  secondary: 'bg-white text-sea-950 hover:bg-sea-50',
  ghost: 'bg-white/[0.06] text-white border border-white/20 hover:bg-white/[0.12] hover:border-white/35',
  outlineLight: 'bg-transparent text-white border border-white/35 hover:bg-white/10 hover:border-white/60',
  soft: 'bg-sea-50 text-sea-700 border border-sea-100 hover:bg-sea-100',
};

const sizeStyles = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-7 py-3.5 text-base',
};

const baseStyles =
  'group focus-ring relative isolate inline-flex items-center justify-center gap-2 overflow-hidden rounded-full font-semibold transition-colors duration-200 whitespace-nowrap';

const Button = forwardRef(function Button(
  { as, to, href, variant = 'primary', size = 'md', className, children, ...rest },
  ref
) {
  const classes = cn(baseStyles, variantStyles[variant], sizeStyles[size], className);
  const Component = motion.button;

  if (to) {
    return (
      <motion.div whileHover={{ y: -1 }} whileTap={{ scale: 0.98 }} className="inline-block">
        <Link to={to} className={classes} ref={ref} {...rest}>
          {children}
        </Link>
      </motion.div>
    );
  }

  if (href) {
    return (
      <motion.div whileHover={{ y: -1 }} whileTap={{ scale: 0.98 }} className="inline-block">
        <a href={href} className={classes} ref={ref} {...rest}>
          {children}
        </a>
      </motion.div>
    );
  }

  return (
    <Component whileHover={{ y: -1 }} whileTap={{ scale: 0.98 }} className={classes} ref={ref} {...rest}>
      {children}
    </Component>
  );
});

export default Button;
