import Icon from './Icon';

export default function EmptyState({ icon = 'Inbox', title, description }) {
  return (
    <div className="flex flex-col items-center gap-3 rounded-xl2 border border-dashed border-hairline px-6 py-14 text-center">
      <Icon name={icon} className="h-8 w-8 text-charcoal-muted" />
      <p className="font-medium text-charcoal">{title}</p>
      {description && <p className="max-w-sm text-sm text-charcoal-muted">{description}</p>}
    </div>
  );
}
