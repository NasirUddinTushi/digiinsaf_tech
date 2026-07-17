import { AlertTriangle } from 'lucide-react';
import Button from './Button';

export default function ErrorState({
  title = 'Something went wrong',
  message = 'Please try again in a moment.',
  onRetry,
}) {
  return (
    <div role="alert" className="flex flex-col items-center gap-3 rounded-xl2 border border-signal-red/30 bg-signal-red/10 px-6 py-10 text-center">
      <AlertTriangle className="h-6 w-6 text-signal-red" aria-hidden="true" />
      <p className="font-medium text-white">{title}</p>
      <p className="text-sm text-graphite-500">{message}</p>
      {onRetry && (
        <Button variant="secondary" size="md" onClick={onRetry} className="mt-2">
          Try again
        </Button>
      )}
    </div>
  );
}
