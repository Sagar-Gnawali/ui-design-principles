import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { DESIGN_PAGES, isThemeSlug, ThemeSlug } from "@/config/designs";
import { themes } from "@/themes";

import DesignPageClient from "./designPageClient";
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

  // check this from API first (future improvements)
  if (!theme) {
    notFound();
  }
  return <DesignPageClient theme={theme as ThemeSlug} />;
}
