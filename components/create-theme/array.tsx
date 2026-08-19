import { Plus, Trash2 } from "lucide-react";

type ArrayFieldProps = {
  label: string;
  values: string[];
  placeholder?: string;
  onChange: (index: number, value: string) => void;
  onAdd: () => void;
  onRemove: (index: number) => void;
};

export default function ArrayField({
  label,
  values,
  placeholder,
  onChange,
  onAdd,
  onRemove,
}: ArrayFieldProps) {
  return (
    <div>
      <label className="mb-3 block text-sm font-medium text-slate-800">
        {label}
      </label>

      <div className="space-y-3">
        {values.map((value, index) => (
          <div key={index} className="flex gap-2">
            <input
              value={value}
              placeholder={placeholder}
              onChange={(event) => onChange(index, event.target.value)}
              className="flex-1 rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
            />

            <button
              type="button"
              onClick={() => onRemove(index)}
              disabled={values.length === 1}
              className="rounded-xl border border-slate-200 px-3 text-slate-400 transition hover:border-red-200 hover:bg-red-50 hover:text-red-600 disabled:cursor-not-allowed disabled:opacity-30"
            >
              <Trash2 size={18} />
            </button>
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={onAdd}
        className="mt-3 inline-flex cursor-pointer items-center gap-2 text-sm font-medium text-blue-600 transition hover:text-blue-700"
      >
        <Plus size={16} />
        Add another
      </button>
    </div>
  );
}
