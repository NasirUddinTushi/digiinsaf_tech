import { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';

const variantStyles = {
  // Deep-navy-to-bright-blue diagonal gradient (ArnTech-inspired) for the
  // primary CTA, rather than a flat fill.
  primary:
    'btn-shine bg-cta-gradient text-white shadow-glow hover:-translate-y-0.5 hover:shadow-glow',
  secondary:
    'bg-white/10 text-white border border-white/[0.15] shadow-elevation-sm hover:border-cyan-400/40 hover:-translate-y-0.5 hover:shadow-glow',
  ghost: 'bg-white/[0.07] text-white border border-white/[0.15] hover:bg-white/[0.12] hover:border-white/30 hover:-translate-y-0.5',
  outlineLight: 'bg-transparent text-white border border-white/30 hover:bg-white/10 hover:border-cyan-300/70 hover:-translate-y-0.5 hover:shadow-glow',
  soft: 'bg-cyan-500/10 text-cyan-300 border border-cyan-400/25 hover:bg-cyan-500/[0.15] hover:-translate-y-0.5',
};

const sizeStyles = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-7 py-3.5 text-base',
};

const baseStyles =
  'focus-ring relative isolate inline-flex items-center justify-center gap-2 overflow-hidden rounded-full font-medium transition-all duration-300 whitespace-nowrap';

const Button = forwardRef(function Button(
  { as, to, href, variant = 'primary', size = 'md', className, children, ...rest },
  ref
) {
  const classes = cn(baseStyles, variantStyles[variant], sizeStyles[size], className);
  const Component = motion.button;

  if (to) {
    return (
      <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="inline-block">
        <Link to={to} className={classes} ref={ref} {...rest}>
          {children}
        </Link>
      </motion.div>
    );
  }

  if (href) {
    return (
      <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="inline-block">
        <a href={href} className={classes} ref={ref} {...rest}>
          {children}
        </a>
      </motion.div>
    );
  }

  return (
    <Component whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className={classes} ref={ref} {...rest}>
      {children}
    </Component>
  );
});

export default Button;
