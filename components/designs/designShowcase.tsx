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
  const profile = theme.designProfile;
  const profileOverview = [
    {
      title: "What it is",
      content: profile.about,
    },
    {
      title: "Best choice when",
      content: profile.bestChoiceWhen,
    },
    {
      title: "Design perspective",
      content: profile.designPerspective,
    },
    {
      title: "Interaction model",
      content: profile.interactionModel,
    },
    {
      title: "Frontend implementation",
      content: profile.implementationNotes,
    },
  ];
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
        <section
          aria-labelledby={`${theme.slug}-design-analysis`}
          className="mt-6"
        >
          <div className={styles.panel}>
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-start">
              <div className="max-w-3xl">
                <span className={styles.badge}>Design guidance</span>

                <h2
                  id={`${theme.slug}-design-analysis`}
                  className={`mt-5 text-2xl sm:text-3xl ${styles.heading}`}
                >
                  Understanding {theme.name}
                </h2>
                <p className={`mt-3 leading-7 ${styles.body}`}>
                  A practical evaluation of where this design language works,
                  how users experience it, and what frontend teams should
                  consider before implementing it.
                </p>
              </div>
              <div className={styles.inset}>
                <p
                  className={`text-xs font-semibold uppercase tracking-[0.16em] ${styles.muted}`}
                >
                  Implementation effort
                </p>

                <p className={`mt-2 text-xl ${styles.metricValue}`}>
                  {profile.effort.level}
                </p>

                <p
                  className={`mt-2 max-w-sm text-sm leading-6 ${styles.muted}`}
                >
                  {profile.effort.explanation}
                </p>
              </div>
            </div>
            <div className="mt-8 grid gap-4 lg:grid-cols-2">
              {profileOverview.map((item) => (
                <article key={item.title} className={styles.inset}>
                  <h3 className={`text-base ${styles.heading}`}>
                    {item.title}
                  </h3>

                  <p className={`mt-3 text-sm leading-7 ${styles.body}`}>
                    {item.content}
                  </p>
                </article>
              ))}
            </div>
            <div className="mt-6 grid gap-6 lg:grid-cols-3">
              <article className={styles.inset}>
                <h3 className={`text-lg ${styles.heading}`}>Best suited for</h3>
                <ul className="mt-4 space-y-3">
                  {profile.suitedFor.map((item) => (
                    <li
                      key={item}
                      className={`flex items-start gap-3 text-sm leading-6 ${styles.body}`}
                    >
                      <span
                        aria-hidden="true"
                        className={`mt-2 h-2 w-2 shrink-0 rounded-full ${styles.accent}`}
                      />

                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>

              <article className={styles.inset}>
                <h3 className={`text-lg ${styles.heading}`}>
                  Real-world use cases
                </h3>

                <ul className="mt-4 space-y-3">
                  {profile.useCases.map((item) => (
                    <li
                      key={item}
                      className={`flex items-start gap-3 text-sm leading-6 ${styles.body}`}
                    >
                      <span
                        aria-hidden="true"
                        className={`mt-2 h-2 w-2 shrink-0 rounded-full ${styles.accent}`}
                      />

                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>

              <article className={styles.inset}>
                <h3 className={`text-lg ${styles.heading}`}>
                  Important considerations
                </h3>

                <ul className="mt-4 space-y-3">
                  {profile.considerations.map((item) => (
                    <li
                      key={item}
                      className={`flex items-start gap-3 text-sm leading-6 ${styles.body}`}
                    >
                      <span
                        aria-hidden="true"
                        className={`mt-2 h-2 w-2 shrink-0 rounded-full ${styles.accent}`}
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
        </section>

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
