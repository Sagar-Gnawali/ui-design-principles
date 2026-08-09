import { queryOptions, useQuery } from "@tanstack/react-query";

import { getTheme, getThemes } from "./theme.api";
import { ThemeSlug } from "@/config/designs";

export const themeKeys = {
  all: ["themes"] as const,

  detail: (slug: ThemeSlug) => ["themes", slug] as const,
};

export const themesQueryOptions = queryOptions({
  queryKey: themeKeys.all,
  queryFn: getThemes,
  staleTime: 10 * 60 * 1000,
});

export function themeQueryOptions(slug: ThemeSlug) {
  return queryOptions({
    queryKey: themeKeys.detail(slug),
    queryFn: () => getTheme(slug),
    staleTime: 10 * 60 * 1000,
  });
}

export function useThemes() {
  return useQuery(themesQueryOptions);
}
export function useTheme(slug: ThemeSlug) {
  return useQuery(themeQueryOptions(slug));
}
