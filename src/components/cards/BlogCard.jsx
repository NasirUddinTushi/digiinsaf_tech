import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { fadeUpViewportStagger } from '@/utils/motionVariants';

export default function BlogCard({ post, index = 0 }) {
  return (
    <motion.article
      {...fadeUpViewportStagger(index)}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-hairline bg-white shadow-elevation-sm transition-shadow duration-300 hover:shadow-elevation-md"
    >
      <div className="flex h-32 items-center border-b border-hairline bg-sea-50 px-6">
        <span className="text-caption font-semibold uppercase tracking-widest text-sea-700">{post.category}</span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="mb-2 text-caption text-charcoal-muted">
          {new Date(post.publishedAt).toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
          })}{' '}
          · {post.readTime}
        </p>
        <h3 className="mb-2 text-lg font-semibold leading-snug text-charcoal">{post.title}</h3>
        <p className="mb-5 flex-1 text-body-sm leading-relaxed text-charcoal-muted">{post.excerpt}</p>
        <Link
          to={`/insights/${post.slug}`}
          className="focus-ring inline-flex w-fit items-center gap-1.5 rounded text-body-sm font-semibold text-sea-700 transition-colors group-hover:text-sea-800"
        >
          Read Article
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </motion.article>
  );
}
