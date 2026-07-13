import { apiClient } from '@/services/api/client';

export async function listResource<T>(endpoint: string): Promise<T[]> {
  const response = await apiClient.get<T[]>(endpoint);
  return response.data;
}

export async function createResource<TPayload, TResponse>(endpoint: string, payload: TPayload): Promise<TResponse> {
  const response = await apiClient.post<TResponse>(endpoint, payload);
  return response.data;
}

export async function updateResource<TPayload, TResponse>(endpoint: string, id: number, payload: TPayload): Promise<TResponse> {
  const response = await apiClient.put<TResponse>(`${endpoint}/${id}`, payload);
  return response.data;
}

export async function deleteResource(endpoint: string, id: number): Promise<void> {
  await apiClient.delete(`${endpoint}/${id}`);
}
