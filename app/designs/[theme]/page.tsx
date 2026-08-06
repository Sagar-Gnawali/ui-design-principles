import type { Metadata } from "next";
import { notFound } from "next/navigation";

import DesignShowcase from "@/components/designs/designShowcase";
import { DESIGN_PAGES, isThemeSlug } from "@/config/designs";
import { themes } from "@/themes";

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

  const selectedTheme = themes[theme];

  return <DesignShowcase theme={selectedTheme} />;
}
