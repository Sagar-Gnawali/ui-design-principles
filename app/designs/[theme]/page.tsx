import type { Metadata } from "next";
import { notFound } from "next/navigation";

import DesignShowcase from "@/components/designs/designShowcase";
import { DESIGN_PAGES, isThemeSlug } from "@/config/designs";
import { themes } from "@/themes";
import payload from "../../../data/payload.json" with { type: "json" };

import { DesignTheme } from "@/themes/types";
type DesignPageProps = {
  params: Promise<{
    theme: string;
  }>;
};

export function generateStaticParams() {
  return DESIGN_PAGES.map((design) => ({
    theme: design.slug,
  }));
}

export async function generateMetadata({
  params,
}: DesignPageProps): Promise<Metadata> {
  const { theme } = await params;

  if (!isThemeSlug(theme)) {
    return {
      title: "Design not found | DesignHub",
    };
  }

  const selectedTheme = themes[theme];

  return {
    title: `${selectedTheme.name} | DesignHub`,
    description: selectedTheme.description,
  };
}

export default async function DesignPage({ params }: DesignPageProps) {
  const { theme } = await params;

  if (!isThemeSlug(theme)) {
    notFound();
  }

  // Call from API or read from center Redux toolkit or statement management tools
  const selectedThemes: DesignTheme | undefined = (
    payload as DesignTheme[]
  ).find((it) => it.slug === theme);

  if (!selectedThemes) return notFound();

  return (
    <>
      <DesignShowcase theme={selectedThemes} />
    </>
  );
}
