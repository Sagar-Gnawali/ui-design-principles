import {
  Circle,
  Droplets,
  LayoutGrid,
  Monitor,
  Palette,
  Sparkles,
} from "lucide-react";

export const DESIGN_PAGES = [
  {
    slug: "bento",
    name: "Bento",
    href: "/designs/bento",
    icon: LayoutGrid,
    description: "Structured, modular and dashboard-focused.",
  },
  {
    slug: "claymorphism",
    name: "Claymorphism",
    href: "/designs/claymorphism",
    icon: Circle,
    description: "Soft, playful and dimensional.",
  },
  {
    slug: "cyberpunk",
    name: "Cyberpunk",
    href: "/designs/cyberpunk",
    icon: Sparkles,
    description: "Futuristic, high-contrast and neon.",
  },
  {
    slug: "glassmorphism",
    name: "Glassmorphism",
    href: "/designs/glassmorphism",
    icon: Monitor,
    description: "Transparent, blurred and layered.",
  },
  {
    slug: "liquid-glass",
    name: "Liquid Glass",
    href: "/designs/liquid-glass",
    icon: Droplets,
    description: "Fluid, luminous and immersive.",
  },
  {
    slug: "minimal",
    name: "Minimal",
    href: "/designs/minimal",
    icon: Palette,
    description: "Simple, restrained and content-focused.",
  },
  {
    slug: "neumorphism",
    name: "Neumorphism",
    href: "/designs/neumorphism",
    icon: Circle,
    description: "Soft surfaces created with light and shadow.",
  },
] as const;

export type ThemeSlug = (typeof DESIGN_PAGES)[number]["slug"];

export function isThemeSlug(value: string): value is ThemeSlug {
  return DESIGN_PAGES.some((design) => design.slug === value);
}
export function getAvailableDesignPages(apiThemes: string[] | undefined) {
  if (!apiThemes) return [];
  const availableThemes = new Set(
    apiThemes.map((theme) => theme.trim().toLowerCase()),
  );
  return DESIGN_PAGES.filter((page) =>
    availableThemes.has(page.slug.toLowerCase()),
  );
}
