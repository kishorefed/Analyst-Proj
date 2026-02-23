import { apiClient } from './client';

/** Request body for sign up */
export interface SignUpRequest {
  email: string;
  password: string;
  fullName: string;
  company?: string;
}

/** User object returned by the API */
export interface SignUpUser {
  id: number;
  email: string;
  fullName: string;
  company: string;
}

/** Successful sign up response */
export interface SignUpResponse {
  success: true;
  message: string;
  data: {
    token: string;
    user: SignUpUser;
  };
}

/** API error response (e.g. 400, 409) */
export interface ApiErrorResponse {
  success?: false;
  message?: string;
  errors?: Record<string, string[]>;
}

/** Request body for sign in */
export interface SignInRequest {
  email: string;
  password: string;
}

/** User object returned by sign in (no company) */
export interface SignInUser {
  id: number;
  email: string;
  fullName: string;
}

/** Successful sign in response */
export interface SignInResponse {
  success: true;
  message: string;
  data: {
    token: string;
    user: SignInUser;
  };
}

export async function signUp(
  payload: SignUpRequest
): Promise<SignUpResponse> {
  const { data } = await apiClient.post<SignUpResponse>('/api/auth/signup', {
    email: payload.email.trim(),
    password: payload.password,
    fullName: payload.fullName.trim(),
    ...(payload.company?.trim() ? { company: payload.company.trim() } : {}),
  });
  return data;
}

export async function signIn(payload: SignInRequest): Promise<SignInResponse> {
  const { data } = await apiClient.post<SignInResponse>('/api/auth/signin', {
    email: payload.email.trim(),
    password: payload.password,
  });
  return data;
}
