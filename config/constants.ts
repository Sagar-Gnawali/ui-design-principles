import { ThemeSlug } from "./designs";

export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const HTTP_METHODS = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  PATCH: "PATCH",
  DELETE: "DELETE",
  CONNECT: "CONNECT",
  OPTIONS: "OPTIONS",
  TRACE: "TRACE",
  HEAD: "HEAD",
};

export const THEME_KEYS = {
  all: ["themes"] as const,
  detail: (slug: ThemeSlug) => ["themes", slug] as const,
  sidebarthemelist: ["sidebar-theme-lists"] as const,
};
