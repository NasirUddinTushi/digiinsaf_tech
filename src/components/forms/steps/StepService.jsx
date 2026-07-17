import { serviceOptions } from '@/data/quoteOptions';
import { cn } from '@/utils/cn';

export default function StepService({ register, watch, errors }) {
  const selected = watch('service');

  return (
    <fieldset>
      <legend className="mb-1 text-xl font-semibold text-white">What do you need help with?</legend>
      <p className="mb-6 text-sm text-graphite-500">Choose the service closest to your project.</p>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3" role="radiogroup" aria-label="Service">
        {serviceOptions.map((option) => (
          <label
            key={option.value}
            className={cn(
              'focus-within:ring-2 focus-within:ring-cyan-400 cursor-pointer rounded-xl border px-4 py-3.5 text-center text-sm font-medium transition-colors',
              selected === option.value
                ? 'border-cyan-400 bg-cyan-500/10 text-white'
                : 'border-white/15 bg-white/5 text-graphite-500 hover:border-white/30'
            )}
          >
            <input type="radio" value={option.value} className="sr-only" {...register('service')} />
            {option.label}
          </label>
        ))}
      </div>
      {errors.service && (
        <p role="alert" className="mt-3 text-xs text-red-500">
          {errors.service.message}
        </p>
      )}
    </fieldset>
  );
}
