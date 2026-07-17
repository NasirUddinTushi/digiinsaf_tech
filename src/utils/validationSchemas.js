import { z } from 'zod';

const optionalUrl = z
  .string()
  .trim()
  .optional()
  .refine((value) => !value || /^https?:\/\/.+\..+/i.test(value), {
    message: 'Enter a valid URL starting with http:// or https://',
  });

export const quoteInquirySchema = z.object({
  service: z.string().min(1, 'Please select a service'),
  projectType: z.enum(['new', 'redesign'], { errorMap: () => ({ message: 'Please choose an option' }) }),
  description: z
    .string()
    .trim()
    .min(20, 'Please provide at least 20 characters describing your project'),
  requiredFeatures: z.string().trim().min(1, 'Please list at least one required feature'),
  referenceWebsite: optionalUrl,
  existingWebsiteUrl: optionalUrl,
  budget: z.string().min(1, 'Please select a budget range'),
  timeline: z.string().min(1, 'Please select a timeline'),
  fullName: z.string().trim().min(2, 'Enter your full name'),
  businessEmail: z.string().trim().min(1, 'Business email is required').email('Enter a valid email address'),
  phone: z.string().trim().optional(),
  companyName: z.string().trim().optional(),
  country: z.string().trim().min(1, 'Enter your country'),
  preferredContactMethod: z.string().min(1, 'Select a preferred contact method'),
  consent: z.literal(true, {
    errorMap: () => ({ message: 'Please confirm before submitting' }),
  }),
});

export const quoteStepFields = {
  1: ['service'],
  2: ['projectType', 'description', 'requiredFeatures', 'referenceWebsite', 'existingWebsiteUrl'],
  3: ['budget', 'timeline'],
  4: ['fullName', 'businessEmail', 'phone', 'companyName', 'country', 'preferredContactMethod', 'consent'],
};

export const contactMessageSchema = z.object({
  fullName: z.string().trim().min(2, 'Enter your full name'),
  email: z.string().trim().min(1, 'Email is required').email('Enter a valid email address'),
  message: z.string().trim().min(10, 'Message should be at least 10 characters'),
});

// Chatbot validation (schemas + field-level validators) lives in
// src/utils/chatbotValidation.js, kept separate so the chatbot feature is
// self-contained.
