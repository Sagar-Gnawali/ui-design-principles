import { useMutation, useQueryClient } from "@tanstack/react-query";

import { DesignTheme } from "@/themes/types";
import { BASE_URL } from "@/config/constants";
import { httpCall } from "./_interceptor";

export type ErrorInterface = {
  statusCode: null;
  status: string;
  error: string;
};
async function createTheme(payload: DesignTheme): Promise<DesignTheme> {
  const response = await fetch(`${BASE_URL}/themes`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  const data = await response.json();

  if (data?.status !== "success") {
    throw new Error(JSON.stringify(data, null, 2) ?? "Failed to create theme");
  }
  return data;
}
export async function deleteTheme(
  slug: string,
): Promise<{ statusCode: number; status: string; data: string }> {
  const response = await httpCall<{
    statusCode: number;
    status: string;
    data: string;
  }>({
    endpoint: `${BASE_URL}/themes/${slug}`,
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch delete theme");
  }
  return response.data;
}
export function useCreateTheme() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createTheme,
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["themes"],
      });
    },
  });
}

export function useDeleteTheme() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteTheme,
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["remove-theme"],
      });
    },
  });
}
