import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, CheckCircle2, Loader2 } from 'lucide-react';
import Button from '@/components/common/Button';
import { quoteInquirySchema, quoteStepFields } from '@/utils/validationSchemas';
import { submitProjectInquiry } from '@/services/inquiryService';
import StepService from './steps/StepService';
import StepProjectInfo from './steps/StepProjectInfo';
import StepBudgetTimeline from './steps/StepBudgetTimeline';
import StepContactDetails from './steps/StepContactDetails';

const steps = [
  { id: 1, label: 'Service' },
  { id: 2, label: 'Project' },
  { id: 3, label: 'Budget & Timeline' },
  { id: 4, label: 'Contact Details' },
];

export default function MultiStepQuoteForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [status, setStatus] = useState('idle');

  const {
    register,
    handleSubmit,
    trigger,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(quoteInquirySchema),
    mode: 'onBlur',
    defaultValues: {
      service: '',
      projectType: undefined,
      description: '',
      requiredFeatures: '',
      referenceWebsite: '',
      existingWebsiteUrl: '',
      budget: '',
      timeline: '',
      fullName: '',
      businessEmail: '',
      phone: '',
      companyName: '',
      country: '',
      preferredContactMethod: '',
      consent: false,
    },
  });

  const goNext = async () => {
    const isValid = await trigger(quoteStepFields[currentStep]);
    if (isValid) setCurrentStep((step) => Math.min(step + 1, steps.length));
  };

  const goBack = () => setCurrentStep((step) => Math.max(step - 1, 1));

  const onSubmit = async (data) => {
    setStatus('loading');
    try {
      await submitProjectInquiry(data);
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div role="status" className="flex flex-col items-center gap-4 rounded-xl2 border border-hairline bg-white p-10 text-center shadow-elevation-sm">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-signal-green/10 text-signal-green">
          <CheckCircle2 className="h-7 w-7" />
        </span>
        <h3 className="text-xl font-semibold text-charcoal">Thanks — your request is in.</h3>
        <p className="max-w-sm text-sm text-charcoal-muted">
          We will review your project details and get back to you within two business days at the
          email address you provided.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-xl2 border border-hairline bg-white p-6 shadow-elevation-sm sm:p-8">
      <ol className="mb-8 flex items-center gap-2" aria-label="Form progress">
        {steps.map((step) => (
          <li key={step.id} className="flex-1">
            <div
              className={`h-1.5 rounded-full transition-colors ${
                step.id <= currentStep ? 'bg-sea-700' : 'bg-sea-50'
              }`}
            />
            <span
              className={`mt-2 hidden text-xs font-medium sm:block ${
                step.id === currentStep ? 'text-charcoal' : 'text-charcoal-muted'
              }`}
            >
              {step.label}
            </span>
          </li>
        ))}
      </ol>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -16 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            {currentStep === 1 && <StepService register={register} watch={watch} errors={errors} />}
            {currentStep === 2 && <StepProjectInfo register={register} watch={watch} errors={errors} />}
            {currentStep === 3 && <StepBudgetTimeline register={register} watch={watch} errors={errors} />}
            {currentStep === 4 && <StepContactDetails register={register} errors={errors} />}
          </motion.div>
        </AnimatePresence>

        {status === 'error' && (
          <p role="alert" className="mt-4 text-sm text-red-600">
            Something went wrong sending your request. Please try again.
          </p>
        )}

        <div className="mt-8 flex items-center justify-between">
          <Button
            type="button"
            variant="secondary"
            size="md"
            onClick={goBack}
            className={currentStep === 1 ? 'invisible' : ''}
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </Button>

          {currentStep < steps.length ? (
            <Button type="button" variant="primary" size="md" onClick={goNext}>
              Next
              <ArrowRight className="h-4 w-4" />
            </Button>
          ) : (
            <Button type="submit" variant="primary" size="md" disabled={status === 'loading'}>
              {status === 'loading' && <Loader2 className="h-4 w-4 animate-spin" />}
              Submit Request
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}
