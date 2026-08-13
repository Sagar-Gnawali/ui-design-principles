import { ReactNode } from "react";

type FormSectionProps = {
  title: string;
  description?: string;
  children: ReactNode;
  icon?: ReactNode;
};

export default function FormSection({
  title,
  description,
  children,
  icon,
}: FormSectionProps) {
  return (
    <section className="border border-slate-200 bg-white p-6 shadow-sm lg:p-8">
      <div className="mb-7 flex items-start gap-4">
        {icon && (
          <div className="rounded-xl bg-blue-50 p-2.5 text-blue-600">
            {icon}
          </div>
        )}

        <div>
          <h2 className="text-xl font-bold tracking-tight text-slate-950">
            {title}
          </h2>

          {description && (
            <p className="mt-1 text-sm leading-6 text-slate-500">
              {description}
            </p>
          )}
        </div>
      </div>

      <div className="space-y-5">{children}</div>
    </section>
  );
}
