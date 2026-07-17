// Shared framer-motion variants. Consolidates the fade-up-on-scroll object
// that was previously redefined inline in 7+ components (SectionHeading,
// AboutPreview, ClientCollaboration, CTASection, ServiceCard, ProjectCard,
// ProcessTimeline) with slightly different durations/margins each time —
// one place to read the current motion language, and one place to tune it.

export const fadeUpViewport = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, ease: 'easeOut' },
};

// Wider viewport margin for large hero-like blocks that should finish
// entering before they reach the vertical center of the screen.
export const fadeUpViewportWide = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6, ease: 'easeOut' },
};

// Slide-in-from-left, used by horizontal/timeline-style layouts.
export const fadeInLeftViewport = {
  initial: { opacity: 0, x: -16 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.5, ease: 'easeOut' },
};

// Per-item stagger for grids of cards, keyed by index so neighboring cards
// don't all animate in perfect unison.
export function fadeUpViewportStagger(index = 0, step = 0.08, cycle = 3) {
  return {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-60px' },
    transition: { duration: 0.5, delay: (index % cycle) * step, ease: 'easeOut' },
  };
}

export const scaleIn = {
  initial: { opacity: 0, scale: 0.96 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.96 },
  transition: { duration: 0.3, ease: 'easeOut' },
};
