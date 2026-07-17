import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import SEO from '@/components/common/SEO';
import Breadcrumb from '@/components/common/Breadcrumb';
import SectionHeading from '@/components/common/SectionHeading';
import BlogCard from '@/components/cards/BlogCard';
import EmptyState from '@/components/common/EmptyState';
import NewsletterForm from '@/components/forms/NewsletterForm';
import { blogs, blogCategories } from '@/data/blogs';
import { cn } from '@/utils/cn';

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
      <SEO
        title="Insights"
        description="Practical thinking on digital product strategy, engineering and design from the Digiinsaf team."
      />

      <section className="theme-page-header bg-ink-950 pb-16 pt-10 sm:pb-24 sm:pt-14">
        <div className="container-xl">
          <Breadcrumb tone="dark" items={[{ label: 'Home', to: '/' }, { label: 'Insights' }]} />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mt-8 max-w-2xl"
          >
            <h1 className="text-4xl font-semibold text-white sm:text-5xl">Insights</h1>
            <p className="mt-5 text-lg text-mist-200/75">
              Practical notes on planning, designing and building digital products well.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="container-xl bg-ink-900 py-20 sm:py-24">
        <Link
          to={`/insights/${featuredPost.slug}`}
          className="focus-ring group grid gap-8 rounded-xl2 border border-white/10 bg-white/[0.04] p-8 transition-all hover:-translate-y-0.5 hover:shadow-card-dark lg:grid-cols-[1fr_1.2fr] lg:p-10"
        >
          <div className="flex h-48 items-center justify-center rounded-xl2 bg-gradient-to-br from-ink-800 to-violet-600 lg:h-full">
            <span className="text-xs font-semibold uppercase tracking-widest text-white/70">Featured — {featuredPost.category}</span>
          </div>
          <div className="flex flex-col justify-center">
            <p className="mb-2 text-xs text-graphite-400">
              {new Date(featuredPost.publishedAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })} · {featuredPost.readTime}
            </p>
            <h2 className="mb-3 text-2xl font-semibold text-white group-hover:text-cyan-400 sm:text-3xl">
              {featuredPost.title}
            </h2>
            <p className="text-graphite-500">{featuredPost.excerpt}</p>
          </div>
        </Link>
      </section>

      <section className="container-xl bg-ink-900 pb-20 sm:pb-28">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter articles by category">
            {blogCategories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                aria-pressed={activeCategory === category}
                className={cn(
                  'focus-ring rounded-full border px-4 py-2 text-sm font-medium transition-colors',
                  activeCategory === category
                    ? 'border-transparent bg-cyan-600 text-white'
                    : 'border-white/10 bg-white/[0.04] text-graphite-500 hover:border-white/20'
                )}
              >
                {category}
              </button>
            ))}
          </div>
          <label className="relative w-full sm:w-64">
            <span className="sr-only">Search articles</span>
            <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-graphite-400" />
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search articles"
              className="focus-ring w-full rounded-full border border-white/10 bg-white/[0.04] py-2.5 pl-10 pr-4 text-sm text-white placeholder:text-graphite-500"
            />
          </label>
        </div>

        {filteredPosts.length === 0 ? (
          <EmptyState icon="SearchX" title="No articles found" description="Try a different search term or category." />
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </section>

      <section className="bg-ink-950 py-20 sm:py-24">
        <div className="container-xl max-w-xl text-center">
          <SectionHeading
            eyebrow="Newsletter"
            title="Occasional notes on shipping digital products well."
            tone="dark"
            align="center"
            className="mb-8"
          />
          <NewsletterForm />
        </div>
      </section>
    </>
  );
}
