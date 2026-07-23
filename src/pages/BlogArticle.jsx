import { useParams, Navigate } from 'react-router-dom';
import SEO from '@/components/common/SEO';
import PageHero from '@/components/common/PageHero';
import SectionHeading from '@/components/common/SectionHeading';
import Section from '@/components/common/Section';
import Badge from '@/components/common/Badge';
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
        <PageHero
          breadcrumbItems={[{ label: 'Home', to: '/' }, { label: 'Insights', to: '/insights' }, { label: post.title }]}
          backgroundImage="/images/blog-writing.jpg"
          imageAlt="A person writing in a notebook next to a laptop"
        >
          <Badge tone="brandOnDark" className="mb-4">
            {post.category}
          </Badge>
          <h1 className="text-3xl leading-tight text-white sm:text-h1">{post.title}</h1>
          <p className="mt-4 text-body-sm text-white/70">
            {post.author} ·{' '}
            {new Date(post.publishedAt).toLocaleDateString('en-GB', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}{' '}
            · {post.readTime}
          </p>
        </PageHero>

        <Section tone="surface" spacing="tight" containerClassName="max-w-3xl">
          <div className="space-y-10">
            {post.content.map((block) => (
              <div key={block.heading}>
                <h2 className="mb-3 text-2xl font-semibold text-charcoal">{block.heading}</h2>
                <p className="leading-relaxed text-charcoal-muted">{block.body}</p>
              </div>
            ))}
          </div>
        </Section>
      </article>

      {relatedPosts.length > 0 && (
        <Section tone="paper">
          <SectionHeading eyebrow="Keep reading" title="More insights you might like." tone="light" className="mb-10" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relatedPosts.map((related) => (
              <BlogCard key={related.slug} post={related} />
            ))}
          </div>
        </Section>
      )}

      <Section tone="navy">
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
