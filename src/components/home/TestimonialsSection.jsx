import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    quote:
      'DigiInsaf delivered a complex e-commerce platform ahead of schedule. Their engineering rigor and attention to user experience exceeded every expectation we had.',
    name: 'Sarah Mitchell',
    title: 'CTO',
    company: 'NexaRetail Solutions',
    rating: 5,
  },
  {
    quote:
      'We needed a partner who could move fast without sacrificing quality. DigiInsaf rebuilt our SaaS dashboard in 8 weeks — cutting load time by 70% and tripling user engagement.',
    name: 'James Rahman',
    title: 'Product Lead',
    company: 'CloudSync Analytics',
    rating: 5,
  },
  {
    quote:
      'Their AI workflow automation saved our operations team 25+ hours per week. The ROI was visible within the first month of deployment.',
    name: 'Dr. Fatima Al-Hassan',
    title: 'Operations Director',
    company: 'MediBridge Health',
    rating: 5,
  },
  {
    quote:
      'From discovery workshop to production launch, the DigiInsaf team was transparent, responsive and deeply technical. They understand not just code — but business context.',
    name: 'Thomas Eriksen',
    title: 'Founder & CEO',
    company: 'Nordic PropTech',
    rating: 5,
  },
  {
    quote:
      'We evaluated five agencies before choosing DigiInsaf. Best decision we made — they shipped a mobile-first platform that our 50K+ users love.',
    name: 'Ananya Gupta',
    title: 'VP of Engineering',
    company: 'UrbanStack',
    rating: 5,
  },
];

const AUTOPLAY_MS = 6000;

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [current]);

  const goTo = (idx) => {
    setDirection(idx > current ? 1 : -1);
    setCurrent(idx);
  };

  const goNext = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const goPrev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const item = testimonials[current];

  const slideVariants = {
    enter: (d) => ({ x: d > 0 ? 80 : -80, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d) => ({ x: d > 0 ? -80 : 80, opacity: 0 }),
  };

  return (
    <section className="relative py-24 overflow-hidden bg-sea-950">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
        {/* Subtle radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-cyan-500/[0.04] blur-[120px]" />
      </div>

      <div className="container-xl relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-cyan-300 bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 rounded-full">
            <Star className="h-3 w-3 fill-current" /> Client Testimonials
          </span>
          <h2 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl leading-snug">
            Trusted by clients{' '}
            <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
              worldwide
            </span>
          </h2>
        </motion.div>

        {/* Testimonial Card */}
        <div className="max-w-3xl mx-auto">
          <div className="relative min-h-[280px] sm:min-h-[240px]">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="absolute inset-0"
              >
                <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-md p-8 sm:p-10">
                  {/* Quote icon */}
                  <Quote className="h-8 w-8 text-cyan-500/40 mb-4" />

                  {/* Quote text */}
                  <p className="text-base sm:text-lg text-white/90 leading-relaxed font-light italic">
                    &ldquo;{item.quote}&rdquo;
                  </p>

                  {/* Divider */}
                  <div className="mt-6 mb-5 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                  {/* Author */}
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-center gap-3">
                      {/* Avatar placeholder with initials */}
                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 text-sm font-bold text-white">
                        {item.name
                          .split(' ')
                          .map((n) => n[0])
                          .join('')}
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white">{item.name}</div>
                        <div className="text-xs text-graphite-400">
                          {item.title}, {item.company}
                        </div>
                      </div>
                    </div>

                    {/* Stars */}
                    <div className="flex gap-0.5">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-5 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={goPrev}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </motion.button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goTo(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === current
                      ? 'w-6 bg-cyan-400'
                      : 'w-2 bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={goNext}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
