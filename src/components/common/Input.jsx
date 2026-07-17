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
        <label htmlFor={inputId} className="mb-1.5 block text-sm font-medium text-white">
          {label}
          {required && <span className="text-cyan-400"> *</span>}
        </label>
      )}
      <input
        id={inputId}
        ref={ref}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${inputId}-error` : hint ? `${inputId}-hint` : undefined}
        className={cn(
          'focus-ring w-full rounded-xl2 border bg-white/5 px-4 py-3 text-body-sm text-white placeholder:text-graphite-600 transition-colors',
          error ? 'border-signal-red/70' : 'border-white/15 hover:border-cyan-400/40',
          className
        )}
        {...rest}
      />
      {hint && !error && (
        <p id={`${inputId}-hint`} className="mt-1.5 text-caption text-graphite-500">
          {hint}
        </p>
      )}
      {error && (
        <p id={`${inputId}-error`} className="mt-1.5 text-caption text-signal-red">
          {error}
        </p>
      )}
    </div>
  );
});

export default Input;
