import { ThemeSlug } from "@/config/designs";
import { DesignTheme } from "@/themes/types";
import { httpCall } from "./_interceptor";
import { BASE_URL } from "@/config/constants";

export async function getThemes(): Promise<DesignTheme[]> {
  const response = await httpCall<{ data: DesignTheme[] }>({
    endpoint: `${BASE_URL}/themes`,
  });
  if (!response.ok) {
    throw new Error("Failed to fetch design themes");
  }
  return response.data.data;
}

export async function getTheme(slug: ThemeSlug): Promise<DesignTheme> {
  const res = await httpCall<{ data: DesignTheme }>({
    endpoint: `${BASE_URL}/themes/${slug}`,
  });
  // const response = await fetch(`/api/themes/${slug}`); need to clean this once everthing is pushed or tested in the prod
  if (!res.ok) {
    throw new Error(`Failed to fetch theme: ${slug}`);
  }
  // const result: ThemeResponse = res.data;
  // return result.data;
  return res.data.data;
}

export async function getSideBarThemes(): Promise<string[]> {
  const response = await httpCall<{ data: string[] }>({
    endpoint: `${BASE_URL}/themes/slugs`,
  });
  if (!response.ok) {
    throw new Error("Failed to fetch design themes");
  }
  return response?.data?.data;
}
