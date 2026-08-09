import { ThemeSlug } from "@/config/designs";
import { DesignTheme } from "@/themes/types";

type ThemesResponse = {
  data: DesignTheme[];
  total: number;
};

type ThemeResponse = {
  data: DesignTheme;
};

export async function getThemes(): Promise<DesignTheme[]> {
  const response = await fetch("/api/themes");
  if (!response.ok) {
    throw new Error("Failed to fetch design themes");
  }
  const result: ThemesResponse = await response.json();
  return result.data;
}

export async function getTheme(slug: ThemeSlug): Promise<DesignTheme> {
  const response = await fetch(`/api/themes/${slug}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch theme: ${slug}`);
  }
  const result: ThemeResponse = await response.json();
  return result.data;
}
