import { budgetOptions, timelineOptions } from '@/data/quoteOptions';
import { cn } from '@/utils/cn';

function OptionGroup({ label, name, options, register, watch, error }) {
  const selected = watch(name);

  return (
    <div>
      <span className="mb-2 block text-sm font-medium text-white">
        {label} <span className="text-cyan-400">*</span>
      </span>
      <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2" role="radiogroup" aria-label={label}>
        {options.map((option) => (
          <label
            key={option.value}
            className={cn(
              'focus-within:ring-2 focus-within:ring-cyan-400 cursor-pointer rounded-xl border px-4 py-3 text-sm font-medium transition-colors',
              selected === option.value
                ? 'border-cyan-400 bg-cyan-500/10 text-white'
                : 'border-white/15 bg-white/5 text-graphite-500 hover:border-white/30'
            )}
          >
            <input type="radio" value={option.value} className="sr-only" {...register(name)} />
            {option.label}
          </label>
        ))}
      </div>
      {error && (
        <p role="alert" className="mt-1.5 text-xs text-red-500">
          {error.message}
        </p>
      )}
    </div>
  );
}

export default function StepBudgetTimeline({ register, watch, errors }) {
  return (
    <fieldset className="space-y-8">
      <legend className="mb-1 text-xl font-semibold text-white">Budget and timeline</legend>
      <OptionGroup
        label="Estimated budget (EUR)"
        name="budget"
        options={budgetOptions}
        register={register}
        watch={watch}
        error={errors.budget}
      />
      <OptionGroup
        label="Preferred timeline"
        name="timeline"
        options={timelineOptions}
        register={register}
        watch={watch}
        error={errors.timeline}
      />
    </fieldset>
  );
}
