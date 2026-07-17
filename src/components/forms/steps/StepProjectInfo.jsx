import Textarea from '@/components/common/Textarea';
import Input from '@/components/common/Input';
import { cn } from '@/utils/cn';

export default function StepProjectInfo({ register, watch, errors }) {
  const projectType = watch('projectType');

  return (
    <fieldset className="space-y-5">
      <legend className="mb-1 text-xl font-semibold text-white">Tell us about the project</legend>

      <div>
        <span className="mb-1.5 block text-sm font-medium text-white">
          Is this a new project or a redesign? <span className="text-cyan-400">*</span>
        </span>
        <div className="flex gap-3" role="radiogroup" aria-label="Project type">
          {[
            { value: 'new', label: 'New project' },
            { value: 'redesign', label: 'Redesign' },
          ].map((option) => (
            <label
              key={option.value}
              className={cn(
                'focus-within:ring-2 focus-within:ring-cyan-400 flex-1 cursor-pointer rounded-xl border px-4 py-3 text-center text-sm font-medium transition-colors',
                projectType === option.value
                  ? 'border-cyan-400 bg-cyan-500/10 text-white'
                  : 'border-white/15 bg-white/5 text-graphite-500 hover:border-white/30'
              )}
            >
              <input type="radio" value={option.value} className="sr-only" {...register('projectType')} />
              {option.label}
            </label>
          ))}
        </div>
        {errors.projectType && (
          <p role="alert" className="mt-1.5 text-xs text-red-500">
            {errors.projectType.message}
          </p>
        )}
      </div>

      <Textarea
        label="Short project description"
        required
        placeholder="What are you trying to build, and for whom?"
        error={errors.description?.message}
        {...register('description')}
      />

      <Textarea
        label="Required features"
        required
        rows={3}
        placeholder="List the key features or capabilities you need"
        error={errors.requiredFeatures?.message}
        {...register('requiredFeatures')}
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <Input
          label="Reference website"
          placeholder="https://example.com"
          hint="A site whose style or functionality you like"
          error={errors.referenceWebsite?.message}
          {...register('referenceWebsite')}
        />
        <Input
          label="Existing website URL"
          placeholder="https://yourcompany.com"
          hint="If this is a redesign or has an existing site"
          error={errors.existingWebsiteUrl?.message}
          {...register('existingWebsiteUrl')}
        />
      </div>
    </fieldset>
  );
}
