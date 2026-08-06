import type { ThemeSlug } from "@/config/designs";

export type DesignTheme = {
  slug: ThemeSlug;
  name: string;
  eyebrow: string;
  description: string;
  layout: "bento" | "standard";
  classes: {
    page: string;
    decoration: string;
    hero: string;
    panel: string;
    inset: string;

    badge: string;
    heading: string;
    body: string;
    muted: string;
    metricValue: string;

    primaryButton: string;
    secondaryButton: string;
    input: string;
    accent: string;
  };
};
