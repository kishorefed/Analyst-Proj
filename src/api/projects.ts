import { apiClient } from './client';

/** Request body for create project (Step 2) */
export interface CreateProjectRequest {
  projectName: string;
  clientName: string;
  domain: string;
  projectType: string;
  timeline: string;
  budgetRange: string;
  priority: string;
  engagementType: string;
  brief: string;
}

export interface CreateProjectResponse {
  success: true;
  message?: string;
  data: {
    projectId: number;
    projectName?: string;
    clientName?: string;
    domain?: string;
    createdAt?: string;
  };
}

/** Single stakeholder for add-stakeholders API */
export interface StakeholderPayload {
  fullName: string;
  email: string;
  role: string;
}

/** Request body for add stakeholders (Step 3) */
export interface AddStakeholdersRequest {
  projectId: number;
  stakeholders: StakeholderPayload[];
}

export interface AddStakeholdersResponse {
  success: true;
  message?: string;
  data?: unknown;
}

/** Request body for launch AI session */
export interface LaunchSessionRequest {
  projectId: number;
  leadBaName: string;
  leadBaEmail: string;
  sessionLanguage: string;
  aiStyle: string;
  sessionNotes: string;
}

export interface LaunchSessionResponse {
  success: true;
  message?: string;
  data?: unknown;
}

export async function createProject(
  payload: CreateProjectRequest
): Promise<CreateProjectResponse> {
  const { data } = await apiClient.post<CreateProjectResponse>(
    '/api/projects',
    payload
  );
  return data;
}

export async function addStakeholders(
  payload: AddStakeholdersRequest
): Promise<AddStakeholdersResponse> {
  const { data } = await apiClient.post<AddStakeholdersResponse>(
    '/api/projects/stakeholders',
    payload
  );
  return data;
}

export async function launchSession(
  payload: LaunchSessionRequest
): Promise<LaunchSessionResponse> {
  const { data } = await apiClient.post<LaunchSessionResponse>(
    '/api/projects/launch',
    payload
  );
  return data;
}
