import SectionHeading from '@/components/common/SectionHeading';
import Button from '@/components/common/Button';
import BlogCard from '@/components/cards/BlogCard';
import Section from '@/components/common/Section';
import { blogs } from '@/data/blogs';

export default function BlogPreview() {
  return (
    <Section tone="surface">
      <div className="mb-10 flex flex-col justify-between gap-6 sm:mb-14 sm:flex-row sm:items-end">
        <SectionHeading
          eyebrow="Insights"
          title="Notes on building digital products well."
          description="Practical thinking on strategy, engineering and product decisions."
          tone="light"
        />
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {blogs.map((post, index) => (
          <BlogCard key={post.slug} post={post} index={index} />
        ))}
      </div>
      <div className="mt-12 flex justify-center">
        <Button to="/insights" variant="soft" size="lg">
          View All Insights
        </Button>
      </div>
    </Section>
  );
}
