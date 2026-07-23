import { Paperclip } from 'lucide-react';
import Input from '@/components/common/Input';
import Select from '@/components/common/Select';
import { contactMethodOptions } from '@/data/quoteOptions';

export default function StepContactDetails({ register, errors }) {
  return (
    <fieldset className="space-y-5">
      <legend className="mb-1 text-xl font-semibold text-charcoal">How can we reach you?</legend>

      <div className="grid gap-5 sm:grid-cols-2">
        <Input label="Full name" required placeholder="Jane Doe" error={errors.fullName?.message} {...register('fullName')} />
        <Input
          label="Business email"
          type="email"
          required
          placeholder="jane@company.com"
          error={errors.businessEmail?.message}
          {...register('businessEmail')}
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Input label="Phone or WhatsApp" type="tel" placeholder="+372 000 0000" error={errors.phone?.message} {...register('phone')} />
        <Input label="Company name" placeholder="Company Ltd." error={errors.companyName?.message} {...register('companyName')} />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Input label="Country" required placeholder="Estonia" error={errors.country?.message} {...register('country')} />
        <Select
          label="Preferred contact method"
          required
          placeholder="Select an option"
          options={contactMethodOptions}
          error={errors.preferredContactMethod?.message}
          {...register('preferredContactMethod')}
        />
      </div>

      <div>
        <span className="mb-1.5 block text-sm font-medium text-charcoal">Attachment (optional)</span>
        <div className="flex items-center gap-3 rounded-xl border border-dashed border-hairline px-4 py-4 text-sm text-charcoal-muted">
          <Paperclip className="h-4 w-4 flex-shrink-0" />
          File upload will be available once the backend is connected. For now, feel free to email
          any files directly after submitting this form.
        </div>
      </div>

      <label className="flex items-start gap-3 rounded-xl border border-hairline bg-paper p-4">
        <input
          type="checkbox"
          className="focus-ring mt-0.5 h-4 w-4 flex-shrink-0 rounded border-hairline text-sea-700"
          {...register('consent')}
        />
        <span className="text-sm text-charcoal-muted">
          I agree to be contacted about my project and understand my information will be handled as
          described in the{' '}
          <a href="/privacy-policy" className="focus-ring rounded font-medium text-sea-700 underline">
            Privacy Policy
          </a>
          .
        </span>
      </label>
      {errors.consent && (
        <p role="alert" className="text-xs text-red-600">
          {errors.consent.message}
        </p>
      )}
    </fieldset>
  );
}
