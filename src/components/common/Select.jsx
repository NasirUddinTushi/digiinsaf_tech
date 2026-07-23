import { forwardRef, useId } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/utils/cn';

const Select = forwardRef(function Select(
  { label, error, hint, className, required, id, options = [], placeholder, ...rest },
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
      <div className="relative">
        <select
          id={inputId}
          ref={ref}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${inputId}-error` : hint ? `${inputId}-hint` : undefined}
          className={cn(
            'focus-ring w-full appearance-none rounded-xl2 border bg-white px-4 py-3 pr-10 text-body-sm text-charcoal transition-colors',
            error ? 'border-red-500/70' : 'border-hairline hover:border-sea-700/40',
            className
          )}
          defaultValue=""
          {...rest}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-charcoal-muted" />
      </div>
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

export default Select;
