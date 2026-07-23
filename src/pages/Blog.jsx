import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import SEO from '@/components/common/SEO';
import PageHero from '@/components/common/PageHero';
import SectionHeading from '@/components/common/SectionHeading';
import Section from '@/components/common/Section';
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
        description="Practical thinking on digital product strategy, engineering and design from the DigiInsaf team."
      />

      <PageHero
        breadcrumbItems={[{ label: 'Home', to: '/' }, { label: 'Insights' }]}
        eyebrow="Insights"
        title="Insights"
        description="Practical notes on planning, designing and building digital products well."
        tone="navy"
        backgroundImage="/images/blog-writing.jpg"
        imageAlt="A person writing in a notebook next to a laptop"
      />

      <Section tone="surface" spacing="tight">
        <Link
          to={`/insights/${featuredPost.slug}`}
          className="focus-ring group grid gap-8 rounded-2xl border border-hairline bg-white p-8 transition-shadow hover:shadow-elevation-md lg:grid-cols-[1fr_1.2fr] lg:p-10"
        >
          <div className="flex h-48 items-center justify-center rounded-xl2 border border-hairline bg-sea-50 lg:h-full">
            <span className="text-caption font-semibold uppercase tracking-widest text-sea-700">
              Featured — {featuredPost.category}
            </span>
          </div>
          <div className="flex flex-col justify-center">
            <p className="mb-2 text-caption text-charcoal-muted">
              {new Date(featuredPost.publishedAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })} · {featuredPost.readTime}
            </p>
            <h2 className="mb-3 text-2xl font-semibold text-charcoal group-hover:text-sea-700 sm:text-3xl">
              {featuredPost.title}
            </h2>
            <p className="text-charcoal-muted">{featuredPost.excerpt}</p>
          </div>
        </Link>
      </Section>

      <Section tone="surface" spacing="tight">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter articles by category">
            {blogCategories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                aria-pressed={activeCategory === category}
                className={cn(
                  'focus-ring rounded-full border px-4 py-2 text-body-sm font-medium transition-colors',
                  activeCategory === category
                    ? 'border-sea-700 bg-sea-700 text-white'
                    : 'border-hairline bg-white text-charcoal-muted hover:border-sea-700/40'
                )}
              >
                {category}
              </button>
            ))}
          </div>
          <label className="relative w-full sm:w-64">
            <span className="sr-only">Search articles</span>
            <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-charcoal-muted" />
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search articles"
              className="focus-ring w-full rounded-full border border-hairline bg-white py-2.5 pl-10 pr-4 text-body-sm text-charcoal placeholder:text-charcoal-muted"
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
      </Section>

      <Section tone="navy" spacing="tight">
        <div className="mx-auto max-w-xl text-center">
          <SectionHeading
            eyebrow="Newsletter"
            title="Occasional notes on shipping digital products well."
            tone="dark"
            align="center"
            className="mb-8"
          />
          <NewsletterForm />
        </div>
      </Section>
    </>
  );
}
