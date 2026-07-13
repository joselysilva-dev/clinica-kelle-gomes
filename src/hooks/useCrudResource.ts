import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { createResource, deleteResource, listResource, updateResource } from '@/services/resources';

export function useCrudResource<TItem extends { id: number }, TPayload extends Record<string, unknown>>(endpoint: string) {
  const queryClient = useQueryClient();

  const itemsQuery = useQuery({
    queryKey: [endpoint],
    queryFn: () => listResource<TItem>(endpoint)
  });

  const refresh = async () => {
    await queryClient.invalidateQueries({ queryKey: [endpoint] });
  };

  const createMutation = useMutation({
    mutationFn: (payload: TPayload) => createResource<TPayload, TItem>(endpoint, payload),
    onSuccess: refresh
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, payload }: { id: number; payload: Partial<TPayload> }) => updateResource<Partial<TPayload>, TItem>(endpoint, id, payload),
    onSuccess: refresh
  });

  const deleteMutation = useMutation({
    mutationFn: (id: number) => deleteResource(endpoint, id),
    onSuccess: refresh
  });

  return {
    items: itemsQuery.data ?? [],
    isLoading: itemsQuery.isLoading,
    createItem: createMutation.mutateAsync,
    updateItem: updateMutation.mutateAsync,
    deleteItem: deleteMutation.mutateAsync,
    isSaving: createMutation.isPending || updateMutation.isPending || deleteMutation.isPending
  };
}
