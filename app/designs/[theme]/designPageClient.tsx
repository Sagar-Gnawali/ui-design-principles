"use client";

import { useTheme } from "@/app/services/theme.queries";
import DesignShowcase from "@/components/designs/designShowcase";
import { ThemeSlug } from "@/config/designs";

type Props = {
  theme: ThemeSlug;
};

export default function DesignPageClient({ theme }: Props) {
  const { data, isPending, isError, error } = useTheme(theme);

  if (isPending) {
    return <div>Loading design...</div>;
  }

  if (isError) {
    return (
      <div>
        Failed to load design:
        {error.message}
      </div>
    );
  }

  if (!data) {
    return null;
  }

  return <DesignShowcase theme={data} />;
}
