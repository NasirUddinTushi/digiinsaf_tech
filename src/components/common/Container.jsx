import { cn } from '@/utils/cn';

// Thin max-width wrapper for markup that sits outside `Section` (e.g. inside
// `PageHero`, or when a component needs the container without a section's
// background/padding). Mirrors the `.container-xl` shell Section already
// applies, exposed as a component for those cases.
export default function Container({ as: Tag = 'div', className, children, ...rest }) {
  return (
    <Tag className={cn('container-xl', className)} {...rest}>
      {children}
    </Tag>
  );
}
