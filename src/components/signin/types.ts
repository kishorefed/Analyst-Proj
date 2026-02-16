export interface StakeholderRow {
  id: number;
  name: string;
  role: string;
  email: string;
}

export interface SignInFormState {
  email: string;
  password: string;
  clientName: string;
  projectName: string;
  domain: string;
  projectType: string;
  budget: string;
  timeline: string;
  engagement: string;
  priority: string;
  brief: string;
  stakeholders: StakeholderRow[];
  leadBaName: string;
  leadBaEmail: string;
  sessionLanguage: string;
  aiStyle: string;
  preSessionNotes: string;
}
