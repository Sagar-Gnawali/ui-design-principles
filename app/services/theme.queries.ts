import { queryOptions, useQuery } from "@tanstack/react-query";

import { getSideBarThemes, getTheme, getThemes } from "./theme.api";
import { ThemeSlug } from "@/config/designs";
import { THEME_KEYS } from "@/config/constants";

export const themesQueryOptions = queryOptions({
  queryKey: THEME_KEYS.all,
  queryFn: getThemes,
});
export const sideBarThemeQueryOptions = queryOptions({
  queryKey: THEME_KEYS.sidebarthemelist,
  queryFn: getSideBarThemes,
});
export function themeQueryOptions(slug: ThemeSlug) {
  return queryOptions({
    queryKey: THEME_KEYS.detail(slug),
    queryFn: () => getTheme(slug),
  });
}

export function useThemes() {
  return useQuery(themesQueryOptions);
}
export function useTheme(slug: ThemeSlug) {
  return useQuery(themeQueryOptions(slug));
}

export function useSideBarTheme() {
  return useQuery(sideBarThemeQueryOptions);
}
