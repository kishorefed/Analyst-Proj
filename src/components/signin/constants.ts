export const STEPS = [
  { id: 1, label: 'Sign In' },
  { id: 2, label: 'Project Setup' },
  { id: 3, label: 'Stakeholders' },
] as const;

export const ROLES = [
  'Product Owner',
  'Technical Lead',
  'Business Owner',
  'QA Lead',
  'UX Designer',
  'Client Representative',
  'Project Manager',
  'Finance Stakeholder',
  'Department Head',
  'End User Champion',
] as const;

export const TYPE_ICONS: Record<string, string> = {
  mobile: '📱',
  web: '🌐',
  api: '⚙️',
  integration: '🔗',
  data: '📊',
  migration: '🔄',
  portal: '🏢',
  erp: '💼',
};

export const DOMAINS = [
  { value: 'Healthcare', icon: '🏥' },
  { value: 'Finance', icon: '💰' },
  { value: 'Retail', icon: '🛒' },
  { value: 'Education', icon: '🎓' },
  { value: 'Logistics', icon: '🚚' },
  { value: 'Banking', icon: '🏦' },
  { value: 'Real Estate', icon: '🏗️' },
  { value: 'Other', icon: '⚙️' },
] as const;

export const TIMELINES = ['1 Month', '3 Months', '6 Months', '12 Months', '12 Months+', 'TBD'] as const;

export const PROJECT_TYPES = [
  { value: '', label: '— Select type —' },
  { value: 'mobile', label: 'Mobile Application' },
  { value: 'web', label: 'Web Application' },
  { value: 'api', label: 'API / Backend System' },
  { value: 'integration', label: 'System Integration' },
  { value: 'data', label: 'Data / Analytics Platform' },
  { value: 'migration', label: 'Legacy Migration' },
  { value: 'portal', label: 'Client / Customer Portal' },
  { value: 'erp', label: 'ERP / CRM Module' },
] as const;

export const BUDGET_OPTIONS = [
  '— Select range —',
  'Under ₹10 Lakhs',
  '₹10 – 50 Lakhs',
  '₹50 Lakhs – 1 Crore',
  '₹1 – 5 Crore',
  '₹5 Crore+',
  'Not Disclosed',
];

export const ENGAGEMENT_OPTIONS = [
  '— Select —',
  'Fixed Price',
  'Time & Material',
  'Dedicated Team',
  'Consulting / Advisory',
];

export const LAUNCH_MESSAGES = [
  'Authenticating workspace…',
  'Loading domain template…',
  'Initialising AI conversation engine…',
  'Connecting to Claude Sonnet 4…',
  'Preparing context…',
  'Calibrating requirement extraction models…',
  '🟢 Ready! Launching session…',
];
