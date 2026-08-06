import type { ThemeSlug } from "@/config/designs";

export type ImplementationEffort = "Low" | "Medium" | "High";

export type DesignProfile = {
  about: string;
  suitedFor: string[];
  bestChoiceWhen: string;
  designPerspective: string;
  useCases: string[];
  interactionModel: string;
  implementationNotes: string;
  effort: {
    level: ImplementationEffort;
    explanation: string;
  };
  considerations: string[];
};

export type DesignTheme = {
  slug: ThemeSlug;
  name: string;
  eyebrow: string;
  description: string;
  designProfile: DesignProfile;
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
