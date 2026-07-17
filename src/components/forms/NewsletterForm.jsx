import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Check, Loader2 } from 'lucide-react';
import { submitNewsletterSignup } from '@/services/inquiryService';

const schema = z.object({
  email: z.string().min(1, 'Email is required').email('Enter a valid email address'),
});

export default function NewsletterForm() {
  const [status, setStatus] = useState('idle');
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = async (data) => {
    setStatus('loading');
    try {
      await submitNewsletterSignup(data);
      setStatus('success');
      reset();
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <p className="flex items-center gap-2 text-sm text-signal-green">
        <Check className="h-4 w-4" /> Subscribed — thank you.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-2 sm:flex-row sm:gap-2">
      <div className="flex-1">
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="newsletter-email"
          type="email"
          placeholder="you@company.com"
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? 'newsletter-email-error' : undefined}
          className="focus-ring w-full rounded-full border border-white/[0.15] bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-mist-200/40"
          {...register('email')}
        />
        {errors.email && (
          <p id="newsletter-email-error" className="mt-1.5 text-xs text-red-400">
            {errors.email.message}
          </p>
        )}
      </div>
      <button
        type="submit"
        disabled={status === 'loading'}
        className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-cta-gradient px-5 py-2.5 text-sm font-medium text-white disabled:opacity-70"
      >
        {status === 'loading' && <Loader2 className="h-4 w-4 animate-spin" />}
        Subscribe
      </button>
    </form>
  );
}
