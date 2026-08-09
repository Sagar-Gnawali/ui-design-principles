import DesignPatternSection from "@/components/designs/designPatternSelection";
import { DESIGN_PAGES } from "@/config/designs";
import { themeData } from "@/themes";
import { DesignTheme } from "@/themes/types";

export default function AboutPage() {
  const orderedThemes: DesignTheme[] = themeData.filter((it1) => {
    return DESIGN_PAGES.some((it2) => it2.name === it1.name);
  });
  return (
    <main className="min-w-0 bg-slate-950">
      <section className="border-b border-slate-800 bg-slate-950 px-4 py-16 text-white sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <span className="inline-flex rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-1.5 text-sm font-medium text-blue-300">
            DesignHub documentation
          </span>

          <h1 className="mt-6 max-w-5xl text-4xl font-bold tracking-[-0.05em] sm:text-6xl lg:text-7xl">
            Understanding modern interface design patterns
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
            This page evaluates each visual style from a practical UI, UX,
            product design, accessibility, and frontend engineering perspective.
            Every section uses the real theme configuration, allowing you to
            study both the principle and its implementation.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <SummaryMetric
              value={String(orderedThemes.length)}
              label="Design systems"
            />

            <SummaryMetric value="1" label="Shared component architecture" />

            <SummaryMetric value="100%" label="Theme-driven implementation" />
          </div>
        </div>
      </section>

      <nav
        aria-label="Design pattern navigation"
        className="sticky top-0 z-40 border-b border-slate-800 bg-slate-950/90 px-4 py-4 backdrop-blur-xl sm:px-6 lg:px-8"
      >
        <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto">
          {orderedThemes.map((theme) => {
            const accent =
              theme.designProfile.palette.find((colour) =>
                colour.name.toLowerCase().includes("accent"),
              ) ??
              theme.designProfile.palette.find((colour) =>
                colour.name.toLowerCase().includes("action"),
              ) ??
              theme.designProfile.palette[0];

            return (
              <a
                key={theme.slug}
                href={`#${theme.slug}`}
                className="inline-flex shrink-0 items-center gap-2 rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm font-medium text-slate-300 transition hover:border-slate-500 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                <span
                  aria-hidden="true"
                  className="h-2.5 w-2.5 rounded-full border border-white/20"
                  style={{
                    background: accent.value,
                  }}
                />

                {theme.name}
              </a>
            );
          })}
        </div>
      </nav>

      {orderedThemes.map((theme, index) => (
        <DesignPatternSection key={theme.slug} theme={theme} index={index} />
      ))}
    </main>
  );
}

type SummaryMetricProps = {
  value: string;
  label: string;
};

function SummaryMetric({ value, label }: SummaryMetricProps) {
  return (
    <article className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
      <p className="text-3xl font-bold tracking-tight text-white">{value}</p>

      <p className="mt-2 text-sm text-slate-400">{label}</p>
    </article>
  );
}
