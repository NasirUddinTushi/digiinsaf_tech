import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';
import { fadeUpViewportWide } from '@/utils/motionVariants';
import Badge from './Badge';
import Breadcrumb from './Breadcrumb';
import Container from './Container';

// Compact page-level header for secondary pages (Services, About, Work,
// Contact, etc.) — not a full-screen hero, just enough room for a
// breadcrumb, an eyebrow, a title and one supporting sentence before the
// page gets into content. Light (paper) by default — dark is reserved for
// the homepage hero, Selected Work and CTA moments, per the brand brief.
//
// `backgroundImage` is optional and only used where a real, contextually
// relevant photo exists (e.g. the Tallinn skyline on the About page) — not
// applied by default across every page, since reusing the same photo as a
// generic backdrop everywhere would read as filler, not editorial.
export default function PageHero({
  breadcrumbItems,
  eyebrow,
  title,
  description,
  tone = 'paper',
  align = 'left',
  backgroundImage,
  imageAlt,
  children,
  className,
}) {
  const onDark = tone === 'navy' || Boolean(backgroundImage);

  return (
    <section
      className={cn(
        'relative overflow-hidden pt-28 pb-14 sm:pt-36 sm:pb-16',
        onDark ? 'bg-sea-950' : 'bg-paper',
        className
      )}
    >
      {backgroundImage && (
        <>
          <img
            src={backgroundImage}
            alt={imageAlt || ''}
            aria-hidden={!imageAlt}
            loading="eager"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(100deg, rgba(7,26,43,0.94) 0%, rgba(7,26,43,0.88) 38%, rgba(7,26,43,0.55) 70%, rgba(7,26,43,0.35) 100%)',
            }}
          />
        </>
      )}
      <Container className="relative">
        {breadcrumbItems && (
          <Breadcrumb tone={onDark ? 'dark' : 'light'} items={breadcrumbItems} />
        )}
        <motion.div
          {...fadeUpViewportWide}
          className={cn('max-w-3xl', breadcrumbItems ? 'mt-6' : '', align === 'center' && 'mx-auto text-center')}
        >
          {eyebrow && (
            <Badge tone={onDark ? 'brandOnDark' : 'brand'} className="mb-4">
              {eyebrow}
            </Badge>
          )}
          <h1 className={cn('text-4xl leading-tight sm:text-h1', onDark ? 'text-white' : 'text-charcoal')}>{title}</h1>
          {description && (
            <p className={cn('mt-5 max-w-2xl text-body-lg leading-relaxed', onDark ? 'text-white/70' : 'text-charcoal-muted')}>
              {description}
            </p>
          )}
          {children}
        </motion.div>
      </Container>
    </section>
  );
}
