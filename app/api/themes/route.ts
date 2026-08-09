import themeData from "@/data/payload.json";
import { DesignTheme } from "@/themes/types";

const themes = themeData as DesignTheme[];

export async function GET() {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });

  return Response.json({
    data: themes,
    total: themes.length,
  });
}
