import { useMutation, useQueryClient } from "@tanstack/react-query";

import { DesignTheme } from "@/themes/types";
import { BASE_URL } from "@/config/constants";

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
    body: JSON.stringify({ data: payload }),
  });
  const data = await response.json();

  if (data?.status !== "success") {
    throw new Error(JSON.stringify(data, null, 2) ?? "Failed to create theme");
  }
  return data;
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
