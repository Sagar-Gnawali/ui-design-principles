import themeData from "@/data/payload.json";
import { DesignTheme } from "@/themes/types";

const themes = themeData as DesignTheme[];

type Context = {
  params: Promise<{
    slug: string;
  }>;
};

export async function GET(_request: Request, context: Context) {
  const { slug } = await context.params;

  const theme = themes.find((theme) => theme.slug === slug);
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });

  if (!theme) {
    return Response.json(
      {
        error: "Theme not found",
      },
      {
        status: 404,
      },
    );
  }

  return Response.json({
    data: theme,
    total: theme ? 1 : 0,
  });
}
