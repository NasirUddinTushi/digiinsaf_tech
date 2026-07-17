import { useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '@/components/common/SEO';
import Breadcrumb from '@/components/common/Breadcrumb';
import SectionHeading from '@/components/common/SectionHeading';
import BlogCard from '@/components/cards/BlogCard';
import NewsletterForm from '@/components/forms/NewsletterForm';
import { getBlogBySlug, blogs } from '@/data/blogs';

export default function BlogArticle() {
  const { slug } = useParams();
  const post = getBlogBySlug(slug);

  if (!post) return <Navigate to="/insights" replace />;

  const relatedPosts = blogs.filter((item) => post.relatedPosts.includes(item.slug));

  return (
    <>
      <SEO title={post.title} description={post.excerpt} />

      <article>
        <section className="theme-page-header bg-ink-950 pb-16 pt-10 sm:pb-20 sm:pt-14">
          <div className="container-xl max-w-3xl">
            <Breadcrumb
              tone="dark"
              items={[{ label: 'Home', to: '/' }, { label: 'Insights', to: '/insights' }, { label: post.title }]}
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="mt-8"
            >
              <span className="dark-chip mb-4 inline-block rounded-full border border-white/[0.15] px-3.5 py-1.5 text-xs font-medium text-cyan-400">
                {post.category}
              </span>
              <h1 className="text-3xl font-semibold text-white sm:text-4xl">{post.title}</h1>
              <p className="mt-4 text-sm text-mist-200/60">
                {post.author} ·{' '}
                {new Date(post.publishedAt).toLocaleDateString('en-GB', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}{' '}
                · {post.readTime}
              </p>
            </motion.div>
          </div>
        </section>

        <section className="container-xl bg-ink-900 max-w-3xl py-16 sm:py-20">
          <div className="space-y-10">
            {post.content.map((block) => (
              <div key={block.heading}>
                <h2 className="mb-3 text-2xl font-semibold text-white">{block.heading}</h2>
                <p className="leading-relaxed text-graphite-500">{block.body}</p>
              </div>
            ))}
          </div>
        </section>
      </article>

      {relatedPosts.length > 0 && (
        <section className="bg-ink-800 py-20 sm:py-24">
          <div className="container-xl">
            <SectionHeading eyebrow="Keep reading" title="More insights you might like." className="mb-10" />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((related) => (
                <BlogCard key={related.slug} post={related} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="theme-dark-section bg-ink-950 py-20 sm:py-24">
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
