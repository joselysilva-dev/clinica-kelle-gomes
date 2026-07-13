import { apiClient } from './api/client';
import type { AuthUser, LoginResponse } from '@/types/auth';

export type LoginPayload = {
  email: string;
  password: string;
};

export async function login(payload: LoginPayload) {
  const response = await apiClient.post('/auth/login', payload);
  return response.data;
}

export async function fetchCurrentUser(): Promise<AuthUser> {
  const response = await apiClient.get<AuthUser>('/auth/me');
  return response.data;
}

export async function refreshSession(): Promise<LoginResponse | null> {
  const refreshToken = localStorage.getItem('auth_refresh_token');
  if (!refreshToken) {
    return null;
  }

  const response = await apiClient.post<{ access_token: string }>('/auth/refresh', {
    refresh_token: refreshToken
  });

  const accessToken = response.data.access_token;
  localStorage.setItem('auth_token', accessToken);
  apiClient.defaults.headers.common.Authorization = `Bearer ${accessToken}`;

  return {
    access_token: accessToken,
    refresh_token: refreshToken,
    token_type: 'bearer'
  };
}
