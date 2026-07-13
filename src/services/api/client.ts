import axios from 'axios';
import { env } from '@/config/env';

export const apiClient = axios.create({
  baseURL: env.apiUrl,
  timeout: 10000
});

apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('auth_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response?.status === 401 && !originalRequest?._retry) {
      originalRequest._retry = true;
      const refreshToken = localStorage.getItem('auth_refresh_token');
      if (!refreshToken) {
        return Promise.reject(error);
      }

      try {
        const refreshResponse = await axios.post<{ access_token: string }>(
          `${env.apiUrl}/auth/refresh`,
          { refresh_token: refreshToken }
        );
        const newAccessToken = refreshResponse.data.access_token;
        localStorage.setItem('auth_token', newAccessToken);
        apiClient.defaults.headers.common.Authorization = `Bearer ${newAccessToken}`;
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return apiClient(originalRequest);
      } catch {
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  }
);
