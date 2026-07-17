// Chatbot-specific validation. Kept separate from the general
// src/utils/validationSchemas.js so the chatbot feature is self-contained
// and can be lifted out (or replaced) without touching the rest of the site.
import { z } from 'zod';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isValidEmail(value) {
  return typeof value === 'string' && EMAIL_PATTERN.test(value.trim());
}

export function isNonEmpty(value) {
  return typeof value === 'string' ? value.trim().length > 0 : Boolean(value);
}

/**
 * Field-level validation used by ChatbotFormStep while a flow is in
 * progress — lets the chatbot reject a bad answer immediately instead of
 * waiting for final submission.
 */
export function validateStepAnswer(step, value) {
  if (!step.required) return { valid: true };

  if (!isNonEmpty(value)) {
    return { valid: false, message: 'This one is required to continue — could you answer it?' };
  }

  if (step.field === 'email' && !isValidEmail(value)) {
    return { valid: false, message: 'That doesn’t look like a valid email address — could you double-check it?' };
  }

  return { valid: true };
}

// Payload shape — see src/data/chatbotFlows.js -> projectInquiryFlow / quoteFlow.
export const chatbotProjectInquirySchema = z.object({
  fullName: z.string().trim().min(2, 'Enter your full name'),
  email: z.string().trim().min(1, 'Email is required').email('Enter a valid email address'),
  phone: z.string().trim().optional(),
  companyName: z.string().trim().optional(),
  country: z.string().trim().min(1, 'Enter your country'),
  projectType: z.string().min(1, 'Please select a project type'),
  projectStatus: z.string().min(1, 'Please select an option'),
  projectDescription: z.string().trim().min(5, 'Please describe your project in a little more detail'),
  selectedFeatures: z.array(z.string()).optional().default([]),
  budgetRange: z.string().min(1, 'Please select a budget range'),
  expectedTimeline: z.string().min(1, 'Please select a timeline'),
  preferredContactMethod: z.string().min(1, 'Please select a preferred contact method'),
  source: z.literal('website_chatbot'),
  conversationId: z.string().min(1),
  consentAccepted: z.literal(true, { errorMap: () => ({ message: 'Please confirm before submitting' }) }),
  createdAt: z.string().min(1),
});

// Payload shape — see src/data/chatbotFlows.js -> consultationRequestFlow.
export const chatbotConsultationSchema = z.object({
  fullName: z.string().trim().min(2, 'Enter your full name'),
  email: z.string().trim().min(1, 'Email is required').email('Enter a valid email address'),
  company: z.string().trim().optional(),
  preferredDate: z.string().trim().min(1, 'Let us know a preferred date'),
  preferredTime: z.string().trim().min(1, 'Let us know a preferred time'),
  timezone: z.string().trim().min(1, 'Let us know your time zone'),
  topic: z.string().trim().min(3, 'Tell us a little about what you would like to discuss'),
  message: z.string().trim().optional(),
  source: z.literal('website_chatbot'),
  conversationId: z.string().min(1),
  consentAccepted: z.literal(true, { errorMap: () => ({ message: 'Please confirm before submitting' }) }),
  createdAt: z.string().min(1),
});

// Payload shape — see src/data/chatbotFlows.js -> humanHandoverFlow.
export const chatbotHandoverSchema = z.object({
  fullName: z.string().trim().min(2, 'Enter your full name'),
  email: z.string().trim().min(1, 'Email is required').email('Enter a valid email address'),
  phone: z.string().trim().optional(),
  summary: z.string().trim().min(3, 'Tell us a little about your question'),
  preferredContactMethod: z.string().min(1, 'Please select a preferred contact method'),
  source: z.literal('website_chatbot'),
  conversationId: z.string().min(1),
  consentAccepted: z.literal(true, { errorMap: () => ({ message: 'Please confirm before submitting' }) }),
  createdAt: z.string().min(1),
});

export const FLOW_SCHEMAS = {
  'project-inquiry': chatbotProjectInquirySchema,
  'quote-request': chatbotProjectInquirySchema,
  'consultation-request': chatbotConsultationSchema,
  'human-handover': chatbotHandoverSchema,
};
