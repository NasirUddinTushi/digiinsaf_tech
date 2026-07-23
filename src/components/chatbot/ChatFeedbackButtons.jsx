import { ThumbsUp, ThumbsDown, Check } from 'lucide-react';
import { cn } from '@/utils/cn';

export default function ChatFeedbackButtons({ feedback, onRate }) {
  if (feedback) {
    return (
      <p className="mt-2 flex items-center gap-1.5 text-xs text-charcoal-muted">
        <Check className="h-3.5 w-3.5" /> Thanks for the feedback
      </p>
    );
  }

  return (
    <div className="mt-2 flex items-center gap-1.5">
      <span className="text-xs text-charcoal-muted">Was this helpful?</span>
      <button
        type="button"
        onClick={() => onRate('helpful')}
        aria-label="Mark as helpful"
        className={cn('focus-ring rounded-full p-1 text-charcoal-muted transition-colors hover:bg-sea-50 hover:text-signal-green')}
      >
        <ThumbsUp className="h-3.5 w-3.5" />
      </button>
      <button
        type="button"
        onClick={() => onRate('not-helpful')}
        aria-label="Mark as not helpful"
        className="focus-ring rounded-full p-1 text-charcoal-muted transition-colors hover:bg-sea-50 hover:text-signal-red"
      >
        <ThumbsDown className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}
