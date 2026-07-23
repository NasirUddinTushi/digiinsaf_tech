import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CheckCircle2, Loader2 } from 'lucide-react';
import Input from '@/components/common/Input';
import Textarea from '@/components/common/Textarea';
import Button from '@/components/common/Button';
import { contactMessageSchema } from '@/utils/validationSchemas';
import { submitContactMessage } from '@/services/inquiryService';

export default function ContactForm() {
  const [status, setStatus] = useState('idle');
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(contactMessageSchema) });

  const onSubmit = async (data) => {
    setStatus('loading');
    try {
      await submitContactMessage(data);
      setStatus('success');
      reset();
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div role="status" className="flex flex-col items-center gap-3 rounded-xl2 border border-hairline bg-white p-8 text-center shadow-elevation-sm">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-signal-green/10 text-signal-green">
          <CheckCircle2 className="h-6 w-6" />
        </span>
        <h3 className="text-lg font-semibold text-charcoal">Message sent</h3>
        <p className="text-sm text-charcoal-muted">Thanks for reaching out — we will reply within two business days.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5 rounded-xl2 border border-hairline bg-white p-6 shadow-elevation-sm sm:p-8">
      <Input label="Full name" required placeholder="Jane Doe" error={errors.fullName?.message} {...register('fullName')} />
      <Input label="Email" type="email" required placeholder="jane@company.com" error={errors.email?.message} {...register('email')} />
      <Textarea
        label="Message"
        required
        rows={5}
        placeholder="Tell us a little about what you need"
        error={errors.message?.message}
        {...register('message')}
      />
      {status === 'error' && <p role="alert" className="text-sm text-red-600">Something went wrong. Please try again.</p>}
      <Button type="submit" variant="primary" size="lg" disabled={status === 'loading'} className="w-full">
        {status === 'loading' && <Loader2 className="h-4 w-4 animate-spin" />}
        Send Message
      </Button>
    </form>
  );
}
