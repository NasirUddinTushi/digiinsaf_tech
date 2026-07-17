// Conversation flow definitions for the chatbot's guided journeys.
// Each flow asks one question at a time, driven by src/hooks/useChatbotFlow.js.
//
// Contact-method options are re-used from src/data/quoteOptions.js (the same
// source of truth as the full quote form on /contact) so the two can never
// disagree on that field. Project-type/budget/timeline options here are
// deliberately chatbot-specific — a shorter, chat-friendly set distinct from
// the more detailed /contact form — per the chatbot's own spec.
import { contactMethodOptions } from './quoteOptions';

export const projectTypeOptions = [
  { value: 'business-website', label: 'Business Website' },
  { value: 'web-application', label: 'Web Application' },
  { value: 'mobile-application', label: 'Mobile Application' },
  { value: 'saas-platform', label: 'SaaS Platform' },
  { value: 'ecommerce-platform', label: 'E-commerce Platform' },
  { value: 'ai-solution', label: 'AI Solution' },
  { value: 'ui-ux-design', label: 'UI/UX Design' },
  { value: 'other', label: 'Other' },
];

export const projectStatusOptions = [
  { value: 'new', label: 'New Project' },
  { value: 'redesign', label: 'Redesign' },
  { value: 'existing-improvement', label: 'Existing Project Improvement' },
  { value: 'not-sure', label: 'Not Sure' },
];

export const featureOptions = [
  { value: 'user-authentication', label: 'User Authentication' },
  { value: 'admin-dashboard', label: 'Admin Dashboard' },
  { value: 'payment-integration', label: 'Payment Integration' },
  { value: 'booking-system', label: 'Booking System' },
  { value: 'ai-chatbot', label: 'AI Chatbot' },
  { value: 'multi-language-support', label: 'Multi-language Support' },
  { value: 'api-integration', label: 'API Integration' },
  { value: 'subscription-system', label: 'Subscription System' },
  { value: 'ecommerce', label: 'E-commerce' },
  { value: 'other', label: 'Other' },
];

export const chatbotBudgetOptions = [
  { value: 'under-2500', label: 'Under €2,500' },
  { value: '2500-5000', label: '€2,500–€5,000' },
  { value: '5000-10000', label: '€5,000–€10,000' },
  { value: '10000-20000', label: '€10,000–€20,000' },
  { value: '20000-plus', label: '€20,000+' },
  { value: 'not-decided', label: 'Not Decided Yet' },
];

export const chatbotTimelineOptions = [
  { value: 'asap', label: 'As Soon as Possible' },
  { value: 'within-1-month', label: 'Within 1 Month' },
  { value: 'within-2-3-months', label: 'Within 2–3 Months' },
  { value: 'within-3-6-months', label: 'Within 3–6 Months' },
  { value: 'flexible', label: 'Flexible' },
  { value: 'not-decided', label: 'Not Decided' },
];

// inputType: 'text' | 'choice' | 'multi-choice' | 'consent'
export const projectInquiryFlow = {
  id: 'project-inquiry',
  title: 'Start a Project',
  steps: [
    { field: 'projectType', prompt: 'What would you like us to build?', inputType: 'choice', options: projectTypeOptions, required: true },
    { field: 'projectStatus', prompt: 'Is this a new project or an existing product?', inputType: 'choice', options: projectStatusOptions, required: true },
    { field: 'projectDescription', prompt: 'Please briefly describe your project idea.', inputType: 'text', required: true },
    {
      field: 'selectedFeatures',
      prompt: 'Which features do you need? Choose any that apply, or type your own.',
      inputType: 'multi-choice',
      options: featureOptions,
      required: false,
    },
    { field: 'budgetRange', prompt: 'What is your estimated budget?', inputType: 'choice', options: chatbotBudgetOptions, required: true },
    { field: 'expectedTimeline', prompt: 'When would you like to start?', inputType: 'choice', options: chatbotTimelineOptions, required: true },
    { field: 'fullName', prompt: 'What’s your full name?', inputType: 'text', required: true },
    { field: 'email', prompt: 'What’s your business email?', inputType: 'text', required: true },
    { field: 'companyName', prompt: 'What’s your company name? (Optional — type "skip" to leave blank.)', inputType: 'text', required: false },
    { field: 'phone', prompt: 'Phone or WhatsApp number? (Optional — type "skip" to leave blank.)', inputType: 'text', required: false },
    { field: 'country', prompt: 'Which country are you based in?', inputType: 'text', required: true },
    { field: 'preferredContactMethod', prompt: 'What is your preferred contact method?', inputType: 'choice', options: contactMethodOptions, required: true },
  ],
  // Shown after the last step above, before submission — see
  // src/hooks/useChatbotFlow.js and src/components/chatbot/ProjectSummary.jsx.
  // Clicking "Submit Request" is the consent action; the privacy note is
  // displayed on the same card per the Security & Privacy requirements.
  showSummaryBeforeSubmit: true,
};

// "Get a Quote" uses the exact same qualification flow as "Start a Project"
// (see chatbotFlows.js -> useChatbotFlow), just introduced with a pricing
// disclaimer first — no separate step list needed.
export const quoteFlow = { ...projectInquiryFlow, id: 'quote-request', title: 'Get a Quote' };

export const consultationRequestFlow = {
  id: 'consultation-request',
  title: 'Book a Consultation',
  steps: [
    { field: 'fullName', prompt: 'What’s your full name?', inputType: 'text', required: true },
    { field: 'email', prompt: 'What’s your email address?', inputType: 'text', required: true },
    { field: 'company', prompt: 'What’s your company name? (Optional — type "skip" to leave blank.)', inputType: 'text', required: false },
    { field: 'preferredDate', prompt: 'What date would you prefer for the call?', inputType: 'text', required: true },
    { field: 'preferredTime', prompt: 'What time works best?', inputType: 'text', required: true },
    { field: 'timezone', prompt: 'Which time zone are you in?', inputType: 'text', required: true },
    { field: 'topic', prompt: 'What is the main topic you’d like to discuss?', inputType: 'text', required: true },
    { field: 'message', prompt: 'Any additional details? (Optional — type "skip" to leave blank.)', inputType: 'text', required: false },
  ],
  showSummaryBeforeSubmit: true,
};

export const humanHandoverFlow = {
  id: 'human-handover',
  title: 'Talk to the Team',
  steps: [
    { field: 'fullName', prompt: 'What’s your full name?', inputType: 'text', required: true },
    { field: 'email', prompt: 'What’s your email address?', inputType: 'text', required: true },
    { field: 'phone', prompt: 'Phone number? (Optional — type "skip" to leave blank.)', inputType: 'text', required: false },
    { field: 'summary', prompt: 'What’s your question, or a short summary of your project?', inputType: 'text', required: true },
    { field: 'preferredContactMethod', prompt: 'How should the team reach you?', inputType: 'choice', options: contactMethodOptions, required: true },
  ],
  showSummaryBeforeSubmit: true,
};

export const chatbotFlows = {
  [projectInquiryFlow.id]: projectInquiryFlow,
  [quoteFlow.id]: quoteFlow,
  [consultationRequestFlow.id]: consultationRequestFlow,
  [humanHandoverFlow.id]: humanHandoverFlow,
};

export default chatbotFlows;
