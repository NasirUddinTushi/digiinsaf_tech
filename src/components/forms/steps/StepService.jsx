import { serviceOptions } from '@/data/quoteOptions';
import { cn } from '@/utils/cn';

export default function StepService({ register, watch, errors }) {
  const selected = watch('service');

  return (
    <fieldset>
      <legend className="mb-1 text-xl font-semibold text-charcoal">What do you need help with?</legend>
      <p className="mb-6 text-sm text-charcoal-muted">Choose the service closest to your project.</p>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3" role="radiogroup" aria-label="Service">
        {serviceOptions.map((option) => (
          <label
            key={option.value}
            className={cn(
              'focus-within:ring-2 focus-within:ring-sea-700 cursor-pointer rounded-xl border px-4 py-3.5 text-center text-sm font-medium transition-colors',
              selected === option.value
                ? 'border-sea-700 bg-sea-50 text-charcoal'
                : 'border-hairline bg-white text-charcoal-muted hover:border-sea-700/40'
            )}
          >
            <input type="radio" value={option.value} className="sr-only" {...register('service')} />
            {option.label}
          </label>
        ))}
      </div>
      {errors.service && (
        <p role="alert" className="mt-3 text-xs text-red-600">
          {errors.service.message}
        </p>
      )}
    </fieldset>
  );
}
