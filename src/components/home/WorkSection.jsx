import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  ExternalLink,
  ArrowUpRight,
  Sparkles,
  Folder,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  Globe2,
  Play,
  Pause,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects, projectCategories } from '@/data/projects';

const categoryEmojis = {
  all: '🗂️',
  web: '🌐',
  ecommerce: '🛒',
  saas: '⚙️',
  services: '🔧',
};

const AUTOPLAY_DURATION = 5000; // 5 seconds per slide

export default function WorkSection() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const [isManualPause, setIsManualPause] = useState(false);

  const filteredProjects = projects.filter((p) =>
    activeCategory === 'all' ? true : p.categories?.includes(activeCategory)
  );

  // Reset index when category changes
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

  // Autoplay Timer Effect
  useEffect(() => {
    if (isPaused || isManualPause) return undefined;

    const timer = setInterval(() => {
      handleNext();
    }, AUTOPLAY_DURATION);

    return () => clearInterval(timer);
  }, [currentIndex, isPaused, isManualPause, filteredProjects.length]);

  const currentProject = filteredProjects[currentIndex] || filteredProjects[0];

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.96,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.35 },
        scale: { duration: 0.35 },
      },
    },
    exit: (dir) => ({
      x: dir < 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.96,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.25 },
        scale: { duration: 0.25 },
      },
    }),
  };

  return (
    <section className="relative bg-sea-950 py-10 sm:py-14 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] rounded-full bg-cyan-600/10 blur-[120px] animate-mesh-drift" />
        <div
          className="absolute bottom-0 right-1/4 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] rounded-full bg-blue-700/10 blur-[100px] animate-mesh-drift"
          style={{ animationDelay: '-7s' }}
        />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="container-xl relative z-10 space-y-4 sm:space-y-5 px-4 sm:px-6 max-w-6xl">
        {/* Header with Navigation Controls */}
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between border-b border-white/10 pb-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-lg"
          >
            <div className="inline-flex items-center gap-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-cyan-300 backdrop-blur-md mb-2">
              <Folder className="h-3 w-3" />
              Selected Portfolio Showcase
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight text-white leading-tight">
              Featured work &{' '}
              <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-blue-400 bg-clip-text text-transparent">
                digital products.
              </span>
            </h2>
          </motion.div>

          {/* Navigation Controls, Play/Pause & Counter */}
          <div className="flex flex-wrap items-center justify-between sm:justify-start gap-2.5">
            {/* Auto-Slide Indicator / Pause Toggle */}
            <button
              type="button"
              onClick={() => setIsManualPause((prev) => !prev)}
              aria-label={isManualPause ? 'Resume Auto-Slide' : 'Pause Auto-Slide'}
              className="flex items-center gap-1.5 font-mono text-[10px] font-semibold text-cyan-300 bg-cyan-500/10 border border-cyan-500/30 rounded-full px-3 py-1 hover:bg-cyan-500/20 transition-all"
            >
              {isManualPause || isPaused ? (
                <>
                  <Play className="h-2.5 w-2.5 text-cyan-400 fill-cyan-400" />
                  <span>Auto-Slide Paused</span>
                </>
              ) : (
                <>
                  <Pause className="h-2.5 w-2.5 text-cyan-400" />
                  <span className="flex items-center gap-1">
                    Auto-Slide <span className="relative flex h-1.5 w-1.5"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" /><span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-cyan-400" /></span>
                  </span>
                </>
              )}
            </button>

            {/* Slide Counter */}
            <div className="font-mono text-[11px] font-semibold text-white bg-white/5 border border-white/10 rounded-full px-3 py-1">
              <span className="text-cyan-300 font-bold">
                {String(currentIndex + 1).padStart(2, '0')}
              </span>{' '}
              / {String(filteredProjects.length).padStart(2, '0')}
            </div>

            {/* Next / Prev Slider Buttons */}
            <div className="flex items-center gap-1.5">
              <motion.button
                type="button"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
                onClick={handlePrev}
                aria-label="Previous Project"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white backdrop-blur transition-colors hover:border-cyan-500/50 hover:bg-cyan-500/20 hover:text-cyan-300"
              >
                <ChevronLeft className="h-4 w-4" />
              </motion.button>

              <motion.button
                type="button"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
                onClick={handleNext}
                aria-label="Next Project"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-cyan-500/40 bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-neon-cyan transition-all hover:shadow-[0_0_20px_-4px_rgba(6,182,212,0.7)]"
              >
                <ChevronRight className="h-4 w-4" />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-1.5 overflow-x-auto pb-1 no-scrollbar">
          {projectCategories.map((cat) => {
            const isSelected = activeCategory === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`relative rounded-full px-3 py-1.5 text-xs font-semibold transition-all whitespace-nowrap ${
                  isSelected
                    ? 'text-white'
                    : 'text-graphite-400 hover:text-white border border-white/10 hover:border-white/20 bg-white/5'
                }`}
              >
                {isSelected && (
                  <motion.div
                    layoutId="workCategoryIndicator"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 shadow-[0_0_15px_-4px_rgba(6,182,212,0.5)]"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-1.5">
                  <span>{categoryEmojis[cat.key]}</span>
                  {cat.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Compact Main Slider Display Card */}
        {currentProject && (
          <div
            className="relative min-h-[320px] sm:min-h-[360px]"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
          >
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={`${currentProject.slug}-${currentIndex}`}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = Math.abs(offset.x) * velocity.x;
                  if (offset.x < -60 || swipe < -500) {
                    handleNext();
                  } else if (offset.x > 60 || swipe > 500) {
                    handlePrev();
                  }
                }}
                className="group relative overflow-hidden rounded-xl border border-white/10 bg-sea-900/60 backdrop-blur-xl hover:border-cyan-500/40 transition-all duration-400 shadow-elevation-md cursor-grab active:cursor-grabbing"
              >
                {/* 5-second Auto-Slide Progress Bar */}
                {!isPaused && !isManualPause && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-white/10 z-30">
                    <motion.div
                      key={`progress-${currentIndex}`}
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: AUTOPLAY_DURATION / 1000, ease: 'linear' }}
                      className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 origin-left"
                    />
                  </div>
                )}

                <div className="grid grid-cols-1 lg:grid-cols-12 lg:items-stretch min-h-[320px]">
                  {/* Left Column: Browser Mockup Preview */}
                  <div className="lg:col-span-7 relative overflow-hidden border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col bg-black/40">
                    {/* Browser chrome header bar */}
                    <div className="flex items-center justify-between bg-sea-950/90 backdrop-blur px-3.5 py-2 border-b border-white/10">
                      <div className="flex items-center gap-1.5">
                        <div className="h-2 w-2 rounded-full bg-red-500/80" />
                        <div className="h-2 w-2 rounded-full bg-yellow-500/80" />
                        <div className="h-2 w-2 rounded-full bg-green-500/80" />
                      </div>
                      <span className="font-mono text-[10px] text-white/60 truncate max-w-[180px] sm:max-w-[240px]">
                        {currentProject.liveUrl?.replace('https://', '').replace(/\/$/, '') || currentProject.slug}
                      </span>
                      <span className="flex items-center gap-1 text-[9px] font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                        <span className="relative flex h-1.5 w-1.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
                        </span>
                        Live
                      </span>
                    </div>

                    {/* Image Preview Container */}
                    <div className="relative flex-1 min-h-[180px] sm:min-h-[240px] max-h-[280px] overflow-hidden group">
                      {currentProject.image ? (
                        <>
                          <img
                            src={currentProject.image}
                            alt={currentProject.title}
                            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-sea-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-500" />
                        </>
                      ) : (
                        <div className="flex h-full items-center justify-center bg-sea-900/50 p-8">
                          <TrendingUp className="h-12 w-12 text-cyan-500/40" />
                        </div>
                      )}

                      {/* Floating Location Badge */}
                      {currentProject.country && (
                        <div className="absolute bottom-2.5 left-2.5 z-10 flex items-center gap-1 rounded-full bg-sea-950/90 border border-white/10 px-2.5 py-0.5 text-[10px] font-semibold text-white backdrop-blur-md">
                          <Globe2 className="h-3 w-3 text-cyan-400" />
                          {currentProject.country}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Right Column: Details & Outcome */}
                  <div className="lg:col-span-5 flex flex-col justify-between p-4 sm:p-6 space-y-4">
                    <div className="space-y-3">
                      {/* Industry badge & Timeline */}
                      <div className="flex items-center justify-between gap-2 flex-wrap">
                        <span className="inline-flex items-center gap-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-cyan-300">
                          {currentProject.industry}
                        </span>
                        {currentProject.timeline && (
                          <span className="text-[10px] font-medium text-graphite-400">
                            ⏱️ {currentProject.timeline}
                          </span>
                        )}
                      </div>

                      {/* Title & Summary */}
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-white leading-tight group-hover:text-cyan-200 transition-colors">
                          {currentProject.title}
                        </h3>
                        <p className="mt-1.5 text-xs leading-relaxed text-graphite-300 line-clamp-2">
                          {currentProject.summary}
                        </p>
                      </div>

                      {/* Tech Stack Pills */}
                      {currentProject.techStack && (
                        <div>
                          <h4 className="text-[9px] font-bold uppercase tracking-wider text-graphite-400 mb-1">
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

                      {/* Impact Box */}
                      {currentProject.outcome && (
                        <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-3 backdrop-blur-md">
                          <span className="flex items-center gap-1 text-[11px] font-bold text-emerald-400 mb-0.5">
                            <Sparkles className="h-3 w-3" /> Impact & Outcome
                          </span>
                          <p className="text-[11px] text-emerald-200/90 leading-tight line-clamp-2">
                            {currentProject.outcome}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-3 border-t border-white/10 flex items-center gap-2">
                      {currentProject.liveUrl && (
                        <motion.a
                          href={currentProject.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          whileHover={{ scale: 1.04 }}
                          whileTap={{ scale: 0.96 }}
                          className="inline-flex items-center gap-1.5 rounded-lg border border-white/20 bg-white/5 px-3.5 py-1.5 text-xs font-semibold text-white hover:border-white/40 hover:bg-white/10 transition-all"
                        >
                          Live Product <ExternalLink className="h-3 w-3 text-cyan-400" />
                        </motion.a>
                      )}
                      <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
                        <Link
                          to={`/work/${currentProject.slug}`}
                          className="inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 px-4 py-1.5 text-xs font-bold text-white shadow-neon-cyan hover:shadow-[0_0_20px_-4px_rgba(6,182,212,0.6)] transition-all"
                        >
                          Case Study <ArrowUpRight className="h-3 w-3" />
                        </Link>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        )}

        {/* Pagination Dots Indicator */}
        <div className="flex items-center justify-center gap-1.5 pt-1">
          {filteredProjects.map((proj, idx) => (
            <button
              key={proj.slug}
              type="button"
              onClick={() => {
                setDirection(idx > currentIndex ? 1 : -1);
                setCurrentIndex(idx);
              }}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === currentIndex
                  ? 'w-6 bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.9)]'
                  : 'w-2 bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
        </div>

        {/* Footer CTA */}
        <div className="flex items-center justify-center gap-4 pt-1">
          <Link
            to="/work"
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 px-6 py-2.5 text-xs font-bold text-white shadow-neon-cyan hover:shadow-[0_0_30px_-4px_rgba(6,182,212,0.7)] transition-all"
          >
            Explore All Case Studies & Work
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
