import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  ExternalLink,
  ArrowUpRight,
  Folder,
  ChevronLeft,
  ChevronRight,
  Globe2,
  TrendingUp,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects, projectCategories } from '@/data/projects';

const AUTOPLAY_DURATION = 5000; // 5 seconds per slide

export default function WorkSection() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  const filteredProjects = projects.filter((p) =>
    activeCategory === 'all' ? true : p.categories?.includes(activeCategory)
  );

  useEffect(() => {
    setCurrentIndex(0);
  }, [activeCategory]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % filteredProjects.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
  };

  useEffect(() => {
    if (isPaused) return undefined;
    const timer = setInterval(handleNext, AUTOPLAY_DURATION);
    return () => clearInterval(timer);
  }, [currentIndex, isPaused, filteredProjects.length]);

  const currentProject = filteredProjects[currentIndex] || filteredProjects[0];

  const slideVariants = {
    enter: (dir) => ({ x: dir > 0 ? '60px' : '-60px', opacity: 0 }),
    center: {
      x: 0,
      opacity: 1,
      transition: { x: { type: 'spring', stiffness: 300, damping: 30 }, opacity: { duration: 0.3 } },
    },
    exit: (dir) => ({
      x: dir < 0 ? '60px' : '-60px',
      opacity: 0,
      transition: { duration: 0.2 },
    }),
  };

  return (
    <section className="relative bg-sea-950 py-14 sm:py-20">
      <div className="container-xl relative z-10 max-w-6xl space-y-6">
        {/* Header */}
        <div className="flex flex-col gap-4 border-b border-white/10 pb-5 lg:flex-row lg:items-center lg:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-lg"
          >
            <div className="mb-2 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-cyan-300">
              <Folder className="h-3 w-3" />
              Selected Portfolio Showcase
            </div>
            <h2 className="text-xl font-extrabold leading-tight tracking-tight text-white sm:text-2xl lg:text-3xl">
              Featured work &amp; digital products.
            </h2>
          </motion.div>

          <div className="flex flex-wrap items-center gap-2.5">
            <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold text-white">
              <span className="text-cyan-300">{String(currentIndex + 1).padStart(2, '0')}</span>
              {' / '}
              {String(filteredProjects.length).padStart(2, '0')}
            </div>

            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous project"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:border-white/35 hover:bg-white/10"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next project"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:border-white/35 hover:bg-white/10"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap gap-2">
          {projectCategories.map((cat) => {
            const isSelected = activeCategory === cat.key;
            return (
              <button
                key={cat.key}
                type="button"
                onClick={() => setActiveCategory(cat.key)}
                className={`relative rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                  isSelected
                    ? 'bg-white text-sea-950'
                    : 'border border-white/10 bg-white/5 text-graphite-400 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Main slide */}
        {currentProject && (
          <div
            className="relative min-h-[320px] sm:min-h-[360px]"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentProject.slug}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="overflow-hidden rounded-2xl border border-white/10 bg-sea-900/60"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 lg:items-stretch">
                  {/* Preview */}
                  <div className="relative flex flex-col border-b border-white/10 bg-black/30 lg:col-span-7 lg:border-b-0 lg:border-r">
                    <div className="flex items-center justify-between border-b border-white/10 px-4 py-2.5">
                      <div className="flex items-center gap-1.5">
                        <div className="h-2 w-2 rounded-full bg-white/20" />
                        <div className="h-2 w-2 rounded-full bg-white/20" />
                        <div className="h-2 w-2 rounded-full bg-white/20" />
                      </div>
                      <span className="max-w-[220px] truncate font-mono text-[10px] text-white/50">
                        {currentProject.liveUrl?.replace('https://', '').replace(/\/$/, '') || currentProject.slug}
                      </span>
                      <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2 py-0.5 text-[9px] font-semibold text-emerald-400">
                        Live
                      </span>
                    </div>

                    <div className="relative min-h-[200px] flex-1 overflow-hidden sm:min-h-[260px]">
                      {currentProject.image ? (
                        <img
                          src={currentProject.image}
                          alt={currentProject.title}
                          className="h-full w-full object-cover object-top"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center bg-sea-900/50 p-8">
                          <TrendingUp className="h-12 w-12 text-cyan-500/30" />
                        </div>
                      )}
                      {currentProject.country && (
                        <div className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-full border border-white/10 bg-sea-950/90 px-2.5 py-1 text-[10px] font-semibold text-white">
                          <Globe2 className="h-3 w-3 text-cyan-400" />
                          {currentProject.country}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Details */}
                  <div className="flex flex-col justify-between gap-4 p-5 sm:p-6 lg:col-span-5">
                    <div className="space-y-3">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-cyan-300">
                          {currentProject.industry}
                        </span>
                        {currentProject.timeline && (
                          <span className="text-[10px] font-medium text-graphite-400">
                            {currentProject.timeline}
                          </span>
                        )}
                      </div>

                      <div>
                        <h3 className="text-lg font-bold leading-tight text-white sm:text-xl">
                          {currentProject.title}
                        </h3>
                        <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-graphite-300">
                          {currentProject.summary}
                        </p>
                      </div>

                      {currentProject.techStack && (
                        <div>
                          <h4 className="mb-1 text-[9px] font-bold uppercase tracking-wider text-graphite-400">
                            Tech Stack
                          </h4>
                          <div className="flex flex-wrap gap-1">
                            {currentProject.techStack.map((tech) => (
                              <span
                                key={tech}
                                className="rounded border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] font-medium text-cyan-200/90"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {currentProject.outcome && (
                        <div className="rounded-lg border border-white/10 bg-white/[0.03] p-3">
                          <span className="mb-0.5 block text-[11px] font-bold text-cyan-300">
                            Impact &amp; Outcome
                          </span>
                          <p className="line-clamp-2 text-[11px] leading-tight text-graphite-300">
                            {currentProject.outcome}
                          </p>
                        </div>
                      )}
                    </div>

                    <div className="flex items-center gap-2 border-t border-white/10 pt-3">
                      {currentProject.liveUrl && (
                        <a
                          href={currentProject.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 px-3.5 py-1.5 text-xs font-semibold text-white transition-colors hover:border-white/35"
                        >
                          Live Product <ExternalLink className="h-3 w-3" />
                        </a>
                      )}
                      <Link
                        to={`/work/${currentProject.slug}`}
                        className="inline-flex items-center gap-1.5 rounded-lg bg-white px-4 py-1.5 text-xs font-bold text-sea-950 transition-colors hover:bg-cyan-100"
                      >
                        Case Study <ArrowUpRight className="h-3 w-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        )}

        {/* Dots */}
        <div className="flex items-center justify-center gap-1.5">
          {filteredProjects.map((proj, idx) => (
            <button
              key={proj.slug}
              type="button"
              onClick={() => {
                setDirection(idx > currentIndex ? 1 : -1);
                setCurrentIndex(idx);
              }}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === currentIndex ? 'w-6 bg-cyan-400' : 'w-1.5 bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
        </div>

        <div className="flex justify-center pt-1">
          <Link
            to="/work"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-2.5 text-xs font-bold text-white transition-colors hover:border-white/35 hover:bg-white/5"
          >
            Explore All Case Studies &amp; Work
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
