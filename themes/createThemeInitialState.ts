import { DesignTheme } from "@/themes/types";

export const createThemeInitialState: DesignTheme = {
  slug: "minimal",
  name: "",
  eyebrow: "",
  description: "",
  layout: "standard",
  classes: {
    page: "",
    decoration: "",
    hero: "",
    panel: "",
    inset: "",
    badge: "",
    heading: "",
    body: "",
    muted: "",
    metricValue: "",
    primaryButton: "",
    secondaryButton: "",
    input: "",
    accent: "",
  },
  designProfile: {
    about: "",
    suitedFor: [""],
    bestChoiceWhen: "",
    designPerspective: "",
    useCases: [""],
    interactionModel: "",
    implementationNotes: "",
    effort: {
      level: "Medium",
      explanation: "",
    },
    considerations: [""],
    palette: [
      {
        name: "",
        value: "#2563EB",
        role: "",
      },
    ],
  },
};
