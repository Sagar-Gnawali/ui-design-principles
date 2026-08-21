import type { CSSProperties } from "react";

import type { DesignTheme } from "@/themes/types";
import { DeleteIcon } from "lucide-react";
import { ErrorInterface, useDeleteTheme } from "@/app/services/theme.mutation";
import { useQueryClient } from "@tanstack/react-query";

type DesignPatternSectionProps = {
  theme: DesignTheme;
  index: number;
};

const checkerboardStyle: CSSProperties = {
  backgroundColor: "#ffffff",
  backgroundImage: `
    linear-gradient(45deg, #e5e7eb 25%, transparent 25%),
    linear-gradient(-45deg, #e5e7eb 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, #e5e7eb 75%),
    linear-gradient(-45deg, transparent 75%, #e5e7eb 75%)
  `,
  backgroundPosition: "0 0, 0 8px, 8px -8px, -8px 0",
  backgroundSize: "16px 16px",
};

export default function DesignPatternSection({
  theme,
  index,
}: DesignPatternSectionProps) {
  const styles = theme.classes;
  const profile = theme.designProfile;

  const overview = [
    {
      title: "About the design",
      content: profile.about,
    },
    {
      title: "When it is the right choice",
      content: profile.bestChoiceWhen,
    },
    {
      title: "UI and UX perspective",
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
      id={theme.slug}
      aria-labelledby={`${theme.slug}-heading`}
      className={`relative scroll-mt-24 overflow-hidden py-12 sm:py-16 lg:py-20 ${styles.page}`}
    >
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 ${styles.decoration}`}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className={styles.hero}>
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-start">
            <div className="max-w-4xl">
              <div className="flex flex-wrap items-center gap-3">
                <span className={styles.badge}>
                  Design pattern {String(index + 1).padStart(2, "0")}
                </span>

                <span className={styles.badge}>
                  {profile.effort.level} implementation effort
                </span>
              </div>

              <h2
                id={`${theme.slug}-heading`}
                className={`mt-6 text-4xl sm:text-5xl lg:text-6xl ${styles.heading}`}
              >
                {theme.name}
              </h2>

              <p
                className={`mt-5 max-w-3xl text-base leading-8 sm:text-lg ${styles.body}`}
              >
                {theme.description}
              </p>
            </div>

            <div className={`${buttonBase} `}>
              <a
                href={`/designs/${theme.slug}`}
                className={`${buttonBase} ${styles.primaryButton}`}
              >
                Open live design
              </a>
              <DeleteSlug slug={theme.slug} />
            </div>
          </div>
        </header>

        <div className="mt-6 grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
          <article className={styles.panel}>
            <div className="flex flex-col justify-between gap-4 sm:flex-row">
              <div>
                <span className={styles.badge}>Live component preview</span>

                <h3 className={`mt-5 text-2xl ${styles.heading}`}>
                  How {theme.name} feels in practice
                </h3>

                <p
                  className={`mt-3 max-w-2xl text-sm leading-7 ${styles.body}`}
                >
                  This preview uses the same design tokens and component styles
                  as the dedicated theme page.
                </p>
              </div>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                {
                  label: "Engagement",
                  value: "84%",
                },
                {
                  label: "Active users",
                  value: "12.8K",
                },
                {
                  label: "Completion",
                  value: "92%",
                },
              ].map((metric) => (
                <div key={metric.label} className={styles.inset}>
                  <p className={`text-sm ${styles.muted}`}>{metric.label}</p>

                  <p className={`mt-2 text-2xl ${styles.metricValue}`}>
                    {metric.value}
                  </p>
                </div>
              ))}
            </div>

            <div className={`mt-4 ${styles.inset}`}>
              <label
                htmlFor={`${theme.slug}-example-email`}
                className={`text-sm font-medium ${styles.body}`}
              >
                Email address
              </label>

              <div className="mt-3 flex flex-col gap-3 sm:flex-row">
                <input
                  id={`${theme.slug}-example-email`}
                  type="email"
                  placeholder="designer@example.com"
                  className={`min-h-11 min-w-0 flex-1 px-4 outline-none transition focus-visible:ring-2 ${styles.input}`}
                />

                <button
                  type="button"
                  className={`${buttonBase} ${styles.primaryButton}`}
                >
                  Join workspace
                </button>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-3">
              <button
                type="button"
                className={`${buttonBase} ${styles.primaryButton}`}
              >
                Primary action
              </button>

              <button
                type="button"
                className={`${buttonBase} ${styles.secondaryButton}`}
              >
                Secondary action
              </button>
            </div>
          </article>

          <article className={styles.panel}>
            <span className={styles.badge}>Exact colour system</span>

            <h3 className={`mt-5 text-2xl ${styles.heading}`}>
              Palette and purpose
            </h3>

            <p className={`mt-3 text-sm leading-7 ${styles.body}`}>
              Each colour has a defined role. This helps the interface remain
              consistent instead of choosing colours independently for every
              component.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {profile.palette.map((colour) => (
                <div key={colour.name} className={styles.inset}>
                  <div
                    className="overflow-hidden rounded-xl border border-black/10 p-1"
                    style={checkerboardStyle}
                  >
                    <div
                      className="h-20 rounded-lg border border-black/10"
                      style={{
                        background: colour.value,
                      }}
                    />
                  </div>

                  <h4 className={`mt-4 font-semibold ${styles.body}`}>
                    {colour.name}
                  </h4>

                  <code
                    className={`mt-1 block break-all text-xs ${styles.muted}`}
                  >
                    {colour.value}
                  </code>

                  <p className={`mt-2 text-sm leading-6 ${styles.muted}`}>
                    {colour.role}
                  </p>
                </div>
              ))}
            </div>
          </article>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          {overview.map((item) => (
            <article key={item.title} className={styles.panel}>
              <h3 className={`text-xl ${styles.heading}`}>{item.title}</h3>

              <p className={`mt-4 leading-8 ${styles.body}`}>{item.content}</p>
            </article>
          ))}

          <article className={styles.panel}>
            <h3 className={`text-xl ${styles.heading}`}>
              Implementation effort
            </h3>

            <div className={`mt-4 ${styles.inset}`}>
              <p className={`text-3xl ${styles.metricValue}`}>
                {profile.effort.level}
              </p>

              <p className={`mt-3 leading-7 ${styles.body}`}>
                {profile.effort.explanation}
              </p>
            </div>
          </article>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          <ProfileList
            title="Best suited for"
            items={profile.suitedFor}
            theme={theme}
          />

          <ProfileList
            title="Real-world use cases"
            items={profile.useCases}
            theme={theme}
          />

          <ProfileList
            title="Design considerations"
            items={profile.considerations}
            theme={theme}
          />
        </div>
      </div>
    </section>
  );
}

type ProfileListProps = {
  title: string;
  items: string[];
  theme: DesignTheme;
};

function ProfileList({ title, items, theme }: ProfileListProps) {
  const styles = theme.classes;

  return (
    <article className={styles.panel}>
      <h3 className={`text-xl ${styles.heading}`}>{title}</h3>

      <ul className="mt-5 space-y-4">
        {items.map((item) => (
          <li
            key={item}
            className={`flex items-start gap-3 text-sm leading-7 ${styles.body}`}
          >
            <span
              aria-hidden="true"
              className={`mt-2.5 h-2 w-2 shrink-0 rounded-full ${styles.accent}`}
            />

            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export const DeleteSlug = (slug: { slug: string }) => {
  const { mutateAsync, isPending } = useDeleteTheme();
  const queryClient = useQueryClient();
  if (isPending) {
    return <p>Deleteng</p>;
  }
  const handleDelete = async () => {
    alert(`are you sure want to delete this ${slug.slug}?`);

    try {
      const res = await mutateAsync(slug.slug);
      if (res.status === "success") {
        queryClient.invalidateQueries({
          queryKey: ["themes"],
        });
      }
    } catch (err) {
      const e = err as ErrorInterface;
    }
  };
  return (
    <>
      <div onClick={handleDelete}>
        <DeleteIcon size={25} color="red" className="ml-4 cursor-pointer" />
      </div>
    </>
  );
};
