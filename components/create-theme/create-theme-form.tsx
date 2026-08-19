"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import {
  BookOpen,
  Code2,
  LayoutDashboard,
  Palette,
  Plus,
  Trash2,
} from "lucide-react";

import { DesignTheme } from "@/themes/types";
import { ErrorInterface, useCreateTheme } from "@/app/services/theme.mutation";
import FormSection from "./form-selection";
import FormField from "./form-field";
import ArrayField from "./array";
import { createThemeInitialState } from "@/themes/createThemeInitialState";

export default function CreateThemeForm() {
  const router = useRouter();

  const [form, setForm] = useState<DesignTheme>(createThemeInitialState);

  const { isPending, mutateAsync, isError, error } = useCreateTheme();
  function updateRoot(
    key: keyof Pick<
      DesignTheme,
      "name" | "slug" | "eyebrow" | "description" | "layout"
    >,
    value: string,
  ) {
    setForm((current) => ({
      ...current,
      [key]: value,
    }));
  }

  function updateClass(key: keyof DesignTheme["classes"], value: string) {
    setForm((current) => ({
      ...current,

      classes: {
        ...current.classes,
        [key]: value,
      },
    }));
  }

  function updateProfile(
    key:
      | "about"
      | "bestChoiceWhen"
      | "designPerspective"
      | "interactionModel"
      | "implementationNotes",
    value: string,
  ) {
    setForm((current) => ({
      ...current,
      designProfile: {
        ...current.designProfile,
        [key]: value,
      },
    }));
  }

  function updateArray(
    key: "suitedFor" | "useCases" | "considerations",
    index: number,
    value: string,
  ) {
    setForm((current) => {
      const values = [...current.designProfile[key]];
      values[index] = value;
      return {
        ...current,
        designProfile: {
          ...current.designProfile,
          [key]: values,
        },
      };
    });
  }

  function addArrayItem(key: "suitedFor" | "useCases" | "considerations") {
    setForm((current) => ({
      ...current,

      designProfile: {
        ...current.designProfile,

        [key]: [...current.designProfile[key], ""],
      },
    }));
  }

  function removeArrayItem(
    key: "suitedFor" | "useCases" | "considerations",
    index: number,
  ) {
    setForm((current) => ({
      ...current,

      designProfile: {
        ...current.designProfile,
        [key]: current.designProfile[key].filter(
          (_, itemIndex) => itemIndex !== index,
        ),
      },
    }));
  }

  function updatePalette(index: number, key: string, value: string) {
    setForm((current) => {
      const palette = [...current.designProfile.palette];
      palette[index] = {
        ...palette[index],
        [key]: value,
      };
      return {
        ...current,
        designProfile: {
          ...current.designProfile,
          palette,
        },
      };
    });
  }

  function addPalette() {
    setForm((current) => ({
      ...current,
      designProfile: {
        ...current.designProfile,
        palette: [
          ...current.designProfile.palette,
          {
            name: "",
            value: "#2563EB",
            role: "",
          },
        ],
      },
    }));
  }

  function removePalette(index: number) {
    setForm((current) => ({
      ...current,

      designProfile: {
        ...current.designProfile,

        palette: current.designProfile.palette.filter(
          (_, itemIndex) => itemIndex !== index,
        ),
      },
    }));
  }

  function createSlug(name: string) {
    return name
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "");
  }

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    try {
      //Todo Call API here
      const res = await mutateAsync(form);
      console.log("resposne from api >>>", res, error);

      //   router.push(`/designs/${createdTheme.slug}`);
    } catch (er) {
      const apiError = er as ErrorInterface;
      console.log("error and data in on Error >>>", apiError.error);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <FormSection
        title="Theme information"
        description="Define the identity and general purpose of your design."
        icon={<LayoutDashboard size={20} />}
      >
        <div className="grid gap-5 md:grid-cols-2">
          <FormField
            label="Theme name"
            required
            value={form.name}
            placeholder="Aurora"
            onChange={(value) => {
              updateRoot("name", value);

              updateRoot("slug", createSlug(value));
            }}
          />

          <FormField
            label="Slug"
            required
            value={form.slug}
            placeholder="aurora"
            onChange={(value) => updateRoot("slug", value)}
          />

          <FormField
            label="Eyebrow"
            value={form.eyebrow}
            placeholder="Spatial interface"
            onChange={(value) => updateRoot("eyebrow", value)}
          />

          <FormField
            label="Layout"
            value={form.layout}
            placeholder="aurora"
            onChange={(value) => updateRoot("layout", value)}
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-800">
            Descriptionss
          </label>

          <textarea
            rows={4}
            value={form.description}
            onChange={(event) => updateRoot("description", event.target.value)}
            placeholder="Describe the theme..."
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
          />
        </div>
      </FormSection>

      <FormSection
        title="Design profile"
        description="Explain the design from a UI, UX and frontend engineering perspective."
        icon={<BookOpen size={20} />}
      >
        <ProfileTextarea
          label="What it is"
          value={form.designProfile.about}
          onChange={(value) => updateProfile("about", value)}
        />

        <ProfileTextarea
          label="Best choice when"
          value={form.designProfile.bestChoiceWhen}
          onChange={(value) => updateProfile("bestChoiceWhen", value)}
        />

        <ProfileTextarea
          label="Design perspective"
          value={form.designProfile.designPerspective}
          onChange={(value) => updateProfile("designPerspective", value)}
        />

        <ProfileTextarea
          label="Interaction model"
          value={form.designProfile.interactionModel}
          onChange={(value) => updateProfile("interactionModel", value)}
        />

        <ProfileTextarea
          label="Implementation notes"
          value={form.designProfile.implementationNotes}
          onChange={(value) => updateProfile("implementationNotes", value)}
        />
      </FormSection>

      <FormSection
        title="Usage guidance"
        description="Describe where this theme should and should not be used."
      >
        <ArrayField
          label="Suited for"
          values={form.designProfile.suitedFor}
          placeholder="Analytics dashboards"
          onChange={(index, value) => updateArray("suitedFor", index, value)}
          onAdd={() => addArrayItem("suitedFor")}
          onRemove={(index) => removeArrayItem("suitedFor", index)}
        />

        <ArrayField
          label="Use cases"
          values={form.designProfile.useCases}
          placeholder="Revenue dashboard..."
          onChange={(index, value) => updateArray("useCases", index, value)}
          onAdd={() => addArrayItem("useCases")}
          onRemove={(index) => removeArrayItem("useCases", index)}
        />

        <ArrayField
          label="Considerations"
          values={form.designProfile.considerations}
          placeholder="Maintain a logical mobile reading order"
          onChange={(index, value) =>
            updateArray("considerations", index, value)
          }
          onAdd={() => addArrayItem("considerations")}
          onRemove={(index) => removeArrayItem("considerations", index)}
        />
      </FormSection>

      <FormSection
        title="Implementation effort"
        description="Estimate the frontend engineering effort."
      >
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-800">
            Effort level
          </label>

          <select
            value={form.designProfile.effort.level}
            onChange={(event) =>
              setForm((current) => ({
                ...current,
                designProfile: {
                  ...current.designProfile,
                  effort: {
                    ...current.designProfile.effort,
                    level: event.target
                      .value as DesignTheme["designProfile"]["effort"]["level"],
                  },
                },
              }))
            }
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
          >
            <option value="Low">Low</option>

            <option value="Medium">Medium</option>

            <option value="High">High</option>

            <option value="Very High">Very High</option>
          </select>
        </div>

        <ProfileTextarea
          label="Explanation"
          value={form.designProfile.effort.explanation}
          onChange={(value) =>
            setForm((current) => ({
              ...current,

              designProfile: {
                ...current.designProfile,

                effort: {
                  ...current.designProfile.effort,

                  explanation: value,
                },
              },
            }))
          }
        />
      </FormSection>

      <FormSection
        title="Color palette"
        description="Define the semantic colors of the theme."
        icon={<Palette size={20} />}
      >
        {form.designProfile.palette.map((color, index) => (
          <div
            key={index}
            className="grid gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 md:grid-cols-[1fr_180px_2fr_auto]"
          >
            <FormField
              label="Name"
              value={color.name}
              placeholder="Accent blue"
              onChange={(value) => updatePalette(index, "name", value)}
            />

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-800">
                Color
              </label>

              <div className="flex items-center gap-2">
                <input
                  type="color"
                  value={color.value}
                  onChange={(event) =>
                    updatePalette(index, color.value, event.target.value)
                  }
                  className="h-12 w-14 cursor-pointer rounded-lg border border-slate-300"
                />

                <input
                  value={color.value}
                  onChange={(event) =>
                    updatePalette(index, color.value, event.target.value)
                  }
                  className="min-w-0 flex-1 rounded-xl border border-slate-300 px-3 py-3 font-mono text-sm"
                />
              </div>
            </div>

            <FormField
              label="Role"
              value={color.role}
              placeholder="Navigation and active states"
              onChange={(value) => updatePalette(index, "role", value)}
            />
            <button
              type="button"
              onClick={() => removePalette(index)}
              className="mt-7 h-11 rounded-xl p-3 text-slate-400 hover:bg-red-50 hover:text-red-500"
            >
              <Trash2 size={18} />
            </button>
          </div>
        ))}

        <button
          type="button"
          onClick={addPalette}
          className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-4 py-2 text-sm font-medium hover:bg-slate-50"
        >
          <Plus size={16} />
          Add color
        </button>
      </FormSection>

      <FormSection
        title="Advanced styling"
        description="Tailwind utility classes used by DesignShowcase."
        icon={<Code2 size={20} />}
      >
        <div className="grid gap-5 md:grid-cols-2">
          {(
            Object.keys(form.classes) as Array<keyof DesignTheme["classes"]>
          ).map((key) => (
            <FormField
              key={key}
              label={formatLabel(key)}
              value={form.classes[key]}
              mono
              placeholder="Tailwind CSS classes..."
              onChange={(value) => updateClass(key, value)}
            />
          ))}
        </div>
      </FormSection>
      <FormSection
        title="Payload preview"
        description="This is exactly what will be sent to your API."
      >
        <pre className="overflow-auto rounded-2xl bg-slate-950 p-5 text-sm leading-6 text-slate-200">
          {JSON.stringify({ data: form }, null, 2)}
        </pre>
      </FormSection>

      {isError && (
        <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
          {error?.message}
        </div>
      )}

      <div className="sticky bottom-4 z-20 flex justify-end gap-3 rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-lg backdrop-blur">
        <button
          type="button"
          onClick={() => router.back()}
          className="rounded-xl border border-slate-300 px-5 py-3 font-medium text-slate-700 hover:bg-slate-100"
        >
          Cancel
        </button>

        <button
          type="submit"
          disabled={isPending}
          className="rounded-xl cursor-pointer bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isPending ? "Creating..." : "Create theme"}
        </button>
      </div>
    </form>
  );
}

function ProfileTextarea({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-slate-800">
        {label}
      </label>

      <textarea
        rows={4}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="w-full resize-y rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
      />
    </div>
  );
}

function formatLabel(value: string) {
  return value
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (char) => char.toUpperCase());
}
