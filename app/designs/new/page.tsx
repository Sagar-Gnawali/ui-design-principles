// import CreateThemeForm from "@/components/designs/create-theme/CreateThemeForm";

import CreateThemeForm from "@/components/create-theme/create-theme-form";

export default function CreateThemePage() {
  return (
    <main className="min-h-screen bg-[#f3f4f6] p-6 lg:p-10">
      <div className="mx-auto max-w-6xl">
        <header className="mb-8">
          <span className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
            Theme builder
          </span>

          <h1 className="mt-4 text-4xl font-bold tracking-[-0.04em] text-slate-950">
            Create a new theme
          </h1>

          <p className="mt-3 max-w-2xl text-lg leading-7 text-slate-600">
            Build a reusable UI theme and document its visual language, UX
            behaviour and implementation guidance.
          </p>
        </header>
        <CreateThemeForm />
      </div>
    </main>
  );
}
