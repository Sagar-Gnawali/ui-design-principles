import type { DesignTheme } from "@/themes/types";

type DesignShowcaseProps = {
  theme: DesignTheme;
};

const metrics = [
  {
    label: "Active users",
    value: "12.8K",
    change: "+18.4%",
  },
  {
    label: "Conversion",
    value: "8.42%",
    change: "+2.1%",
  },
  {
    label: "Revenue",
    value: "£42.6K",
    change: "+12.7%",
  },
];

const activity = [
  {
    title: "Design system updated",
    time: "12 minutes ago",
  },
  {
    title: "New component published",
    time: "1 hour ago",
  },
  {
    title: "Accessibility review completed",
    time: "Yesterday",
  },
];

const chartValues = [38, 56, 42, 72, 60, 88, 74, 95, 82, 100];

export default function DesignShowcase({ theme }: DesignShowcaseProps) {
  const styles = theme.classes;

  const buttonBase =
    "inline-flex min-h-11 items-center justify-center px-5 py-2.5 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";

  return (
    <section
      className={`relative min-h-dvh overflow-hidden p-4 sm:p-6 lg:p-10 ${styles.page}`}
    >
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 ${styles.decoration}`}
      />

      <div className="relative mx-auto max-w-7xl">
        <header className={styles.hero}>
          <div className="grid items-center gap-10 lg:grid-cols-[1.4fr_0.6fr]">
            <div>
              <span className={styles.badge}>{theme.eyebrow}</span>

              <h1
                className={`mt-6 text-4xl sm:text-5xl lg:text-7xl ${styles.heading}`}
              >
                {theme.name}
              </h1>

              <p
                className={`mt-5 max-w-2xl text-base leading-8 sm:text-lg ${styles.body}`}
              >
                {theme.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  type="button"
                  className={`${buttonBase} ${styles.primaryButton}`}
                >
                  Explore design
                </button>

                <button
                  type="button"
                  className={`${buttonBase} ${styles.secondaryButton}`}
                >
                  View components
                </button>
              </div>
            </div>

            <div className={styles.inset}>
              <p
                className={`text-xs font-semibold uppercase tracking-[0.16em] ${styles.muted}`}
              >
                Theme preview
              </p>

              <label
                htmlFor={`${theme.slug}-email`}
                className={`mt-5 block text-sm font-medium ${styles.body}`}
              >
                Email address
              </label>

              <input
                id={`${theme.slug}-email`}
                type="email"
                placeholder="you@example.com"
                className={`mt-2 min-h-11 w-full px-4 outline-none transition focus-visible:ring-2 ${styles.input}`}
              />

              <button
                type="button"
                className={`mt-4 w-full ${buttonBase} ${styles.primaryButton}`}
              >
                Join workspace
              </button>
            </div>
          </div>
        </header>

        <div
          className={`mt-6 grid gap-6 ${
            theme.layout === "bento"
              ? "md:grid-cols-3"
              : "sm:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {metrics.map((metric) => (
            <article key={metric.label} className={styles.panel}>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className={`text-sm ${styles.muted}`}>{metric.label}</p>

                  <p className={`mt-3 text-3xl ${styles.metricValue}`}>
                    {metric.value}
                  </p>
                </div>

                <span className={styles.badge}>{metric.change}</span>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1.35fr_0.65fr]">
          <article className={styles.panel}>
            <div className="flex items-center justify-between">
              <div>
                <h2 className={`text-xl ${styles.heading}`}>Performance</h2>

                <p className={`mt-1 text-sm ${styles.muted}`}>
                  Activity across the last ten periods
                </p>
              </div>

              <span className={styles.badge}>Live</span>
            </div>

            <div
              className={`mt-8 flex h-64 items-end gap-2 sm:gap-4 ${styles.inset}`}
            >
              {chartValues.map((value, index) => (
                <div
                  key={`${value}-${index}`}
                  className="flex h-full flex-1 items-end"
                >
                  <div
                    className={`w-full min-w-2 transition-all duration-300 ${styles.accent}`}
                    style={{
                      height: `${value}%`,
                    }}
                    title={`${value}%`}
                  />
                </div>
              ))}
            </div>
          </article>

          <article className={styles.panel}>
            <h2 className={`text-xl ${styles.heading}`}>Recent activity</h2>

            <div className="mt-6 space-y-3">
              {activity.map((item) => (
                <div key={item.title} className={styles.inset}>
                  <p className={`font-medium ${styles.body}`}>{item.title}</p>

                  <p className={`mt-1 text-sm ${styles.muted}`}>{item.time}</p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
