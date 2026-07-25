import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, BookOpen, ArrowUpRight, Clock, Tag } from 'lucide-react';
import SEO from '@/components/common/SEO';
import PageHero from '@/components/common/PageHero';
import BlogCard from '@/components/cards/BlogCard';
import EmptyState from '@/components/common/EmptyState';
import NewsletterForm from '@/components/forms/NewsletterForm';
import { blogs, blogCategories } from '@/data/blogs';
import { fadeUpViewport } from '@/utils/motionVariants';

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [query, setQuery] = useState('');

  const featuredPost = blogs.find((post) => post.featured) || blogs[0];

  const filteredPosts = useMemo(() => {
    return blogs.filter((post) => {
      const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
      const matchesQuery = post.title.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesQuery && post.slug !== featuredPost.slug;
    });
  }, [activeCategory, query, featuredPost.slug]);

  return (
    <>
      <SEO title="Insights" description="Practical thinking on digital product strategy, engineering and design from the DigiInsaf team." />

      <PageHero
        tone="navy"
        eyebrow="Insights & Articles"
        title="Notes on building digital products well."
        description="Practical notes on planning, designing and building digital products well."
      />

      {/* Featured Post */}
      <section className="bg-paper pt-14 pb-8">
        <div className="container-xl">
          <motion.div {...fadeUpViewport}>
            <span className="text-xs font-bold uppercase tracking-wider text-sea-700 mb-4 block">Featured Article</span>
            <Link
              to={`/insights/${featuredPost.slug}`}
              className="group grid gap-0 overflow-hidden rounded-2xl border border-hairline bg-white shadow-elevation-md hover:shadow-elevation-lg transition-all duration-300 lg:grid-cols-[1fr_1.5fr]"
            >
              {/* Left: Category visual */}
              <div className="relative flex h-52 items-center justify-center overflow-hidden bg-gradient-to-br from-sea-900 to-sea-950 lg:h-auto">
                <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
                <div className="relative z-10 text-center p-8">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/20 border border-cyan-500/30">
                    <BookOpen className="h-8 w-8 text-cyan-300" />
                  </div>
                  <span className="inline-block rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-cyan-300">
                    {featuredPost.category}
                  </span>
                </div>
              </div>

              {/* Right: Content */}
              <div className="flex flex-col justify-center p-8 lg:p-10">
                <div className="flex items-center gap-3 text-xs text-charcoal-muted mb-3">
                  <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {featuredPost.readTime}</span>
                  <span>·</span>
                  <span>{new Date(featuredPost.publishedAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                </div>
                <h2 className="text-2xl font-extrabold text-charcoal group-hover:text-sea-700 transition-colors sm:text-3xl leading-snug mb-3">
                  {featuredPost.title}
                </h2>
                <p className="text-sm leading-relaxed text-charcoal-muted mb-6">{featuredPost.excerpt}</p>
                <span className="inline-flex items-center gap-1.5 text-sm font-bold text-sea-700 group-hover:text-sea-800 transition-colors">
                  Read Article <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="bg-paper py-10">
        <div className="container-xl">
          {/* Filter + Search */}
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap gap-2" role="group" aria-label="Filter articles">
              {blogCategories.map((category) => {
                const isActive = activeCategory === category;
                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActiveCategory(category)}
                    aria-pressed={isActive}
                    className={`relative rounded-full px-4 py-2 text-xs font-semibold transition-all ${
                      isActive ? 'text-white' : 'border border-hairline bg-white text-charcoal-muted hover:border-sea-300'
                    }`}
                  >
                    {isActive && (
                      <motion.div layoutId="blogCategoryIndicator" className="absolute inset-0 rounded-full bg-sea-950" transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }} />
                    )}
                    <span className="relative z-10 flex items-center gap-1"><Tag className="h-3 w-3" /> {category}</span>
                  </button>
                );
              })}
            </div>

            <label className="relative w-full sm:w-64">
              <span className="sr-only">Search articles</span>
              <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-charcoal-muted" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search articles…"
                className="w-full rounded-full border border-hairline bg-white py-2.5 pl-10 pr-4 text-sm text-charcoal placeholder:text-charcoal-muted focus:outline-none focus:ring-2 focus:ring-sea-400 focus:border-sea-400 transition-all"
              />
            </label>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div key={`${activeCategory}-${query}`} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }} transition={{ duration: 0.25 }}>
              {filteredPosts.length === 0 ? (
                <EmptyState icon="SearchX" title="No articles found" description="Try a different search term or category." />
              ) : (
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {filteredPosts.map((post, index) => (
                    <BlogCard key={post.slug} post={post} index={index} />
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-sea-950 py-20">
        <div className="container-xl">
          <div className="mx-auto max-w-xl text-center">
            <motion.div {...fadeUpViewport}>
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">Newsletter</span>
              <h2 className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">Occasional notes on shipping digital products well.</h2>
              <p className="mt-3 text-sm text-graphite-400">No spam. Just practical insights delivered to your inbox.</p>
              <div className="mt-8">
                <NewsletterForm />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
