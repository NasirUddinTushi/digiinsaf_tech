import { forwardRef, useId } from 'react';
import { cn } from '@/utils/cn';

const Input = forwardRef(function Input(
  { label, error, hint, className, required, id, ...rest },
  ref
) {
  const generatedId = useId();
  const inputId = id || generatedId;

  return (
    <div className="w-full">
      {label && (
        <label htmlFor={inputId} className="mb-1.5 block text-sm font-medium text-charcoal">
          {label}
          {required && <span className="text-sea-700"> *</span>}
        </label>
      )}
      <input
        id={inputId}
        ref={ref}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${inputId}-error` : hint ? `${inputId}-hint` : undefined}
        className={cn(
          'focus-ring w-full rounded-xl2 border bg-white px-4 py-3 text-body-sm text-charcoal placeholder:text-charcoal-muted/60 transition-colors',
          error ? 'border-red-500/70' : 'border-hairline hover:border-sea-700/40',
          className
        )}
        {...rest}
      />
      {hint && !error && (
        <p id={`${inputId}-hint`} className="mt-1.5 text-caption text-charcoal-muted">
          {hint}
        </p>
      )}
      {error && (
        <p id={`${inputId}-error`} className="mt-1.5 text-caption text-red-600">
          {error}
        </p>
      )}
    </div>
  );
});

export default Input;
