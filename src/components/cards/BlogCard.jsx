import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Clock, Tag } from 'lucide-react';
import { fadeUpViewportStagger } from '@/utils/motionVariants';

const categoryColors = {
  'Product Strategy': 'bg-blue-50 text-blue-700 border-blue-200',
  'Engineering': 'bg-emerald-50 text-emerald-700 border-emerald-200',
  'Design': 'bg-violet-50 text-violet-700 border-violet-200',
  'AI & Automation': 'bg-amber-50 text-amber-700 border-amber-200',
  'Default': 'bg-sea-50 text-sea-700 border-sea-200',
};

export default function BlogCard({ post, index = 0 }) {
  const colorClass = categoryColors[post.category] || categoryColors['Default'];

  return (
    <motion.article
      {...fadeUpViewportStagger(index)}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-hairline bg-white shadow-elevation-sm hover:shadow-elevation-md hover:border-sea-200 transition-all duration-300"
    >
      {/* Top visual strip */}
      <div className="relative flex h-36 items-center justify-center overflow-hidden bg-gradient-to-br from-sea-900 to-sea-950 border-b border-hairline">
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '25px 25px' }} />
        {/* Ambient glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <span className={`relative z-10 inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider ${colorClass}`}>
          <Tag className="h-3 w-3" />
          {post.category}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        {/* Meta */}
        <div className="flex items-center gap-3 text-[11px] text-charcoal-muted mb-3">
          <span className="flex items-center gap-1">
            <Clock className="h-3 w-3" /> {post.readTime}
          </span>
          <span>·</span>
          <span>
            {new Date(post.publishedAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
          </span>
        </div>

        <h3 className="mb-2 text-base font-bold leading-snug text-charcoal group-hover:text-sea-700 transition-colors">
          {post.title}
        </h3>
        <p className="mb-5 flex-1 text-xs leading-relaxed text-charcoal-muted line-clamp-3">{post.excerpt}</p>

        <Link
          to={`/insights/${post.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-sea-700 hover:text-sea-800 transition-colors group/link mt-auto"
        >
          Read Article
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
        </Link>
      </div>
    </motion.article>
  );
}
