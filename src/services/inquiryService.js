// Project inquiry / quote request submission.
//
// No backend exists yet, so `submitProjectInquiry` and `submitContactMessage`
// resolve with a mocked success response after a short simulated delay.
// When a backend is available:
//   1. Set VITE_API_BASE_URL in your environment.
//   2. Replace the mock branch below with the `apiRequest(...)` call that is
//      already wired up (left commented for a fast swap).
//   3. Keep the payload shapes below stable so the form components do not
//      need to change.

import { apiRequest } from './apiClient';

const SIMULATED_DELAY_MS = 900;

/**
 * Expected payload for a multi-step "Get a Quote" submission.
 * {
 *   service: string,            // selected service key, e.g. "web-development"
 *   projectType: string,        // "new" | "redesign"
 *   description: string,
 *   requiredFeatures: string,
 *   referenceWebsite?: string,
 *   existingWebsiteUrl?: string,
 *   budget: string,             // one of the defined EUR ranges
 *   timeline: string,
 *   fullName: string,
 *   businessEmail: string,
 *   phone?: string,
 *   companyName?: string,
 *   country: string,
 *   preferredContactMethod: string,
 *   consent: boolean,
 * }
 */
export async function submitProjectInquiry(payload) {
  if (!import.meta.env.VITE_API_BASE_URL) {
    await new Promise((resolve) => setTimeout(resolve, SIMULATED_DELAY_MS));
    return { success: true, referenceId: `DEMO-${Date.now()}`, mocked: true };
  }

  return apiRequest('/inquiries', { method: 'POST', body: payload });
}

/**
 * Expected payload for the general contact form.
 * { fullName: string, email: string, message: string }
 */
export async function submitContactMessage(payload) {
  if (!import.meta.env.VITE_API_BASE_URL) {
    await new Promise((resolve) => setTimeout(resolve, SIMULATED_DELAY_MS));
    return { success: true, mocked: true };
  }

  return apiRequest('/contact', { method: 'POST', body: payload });
}

/**
 * Expected payload: { email: string }
 */
export async function submitNewsletterSignup(payload) {
  if (!import.meta.env.VITE_API_BASE_URL) {
    await new Promise((resolve) => setTimeout(resolve, SIMULATED_DELAY_MS));
    return { success: true, mocked: true };
  }

  return apiRequest('/newsletter', { method: 'POST', body: payload });
}
