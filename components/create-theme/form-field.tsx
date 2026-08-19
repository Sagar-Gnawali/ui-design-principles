type FormFieldProps = {
  label: string;
  value: string;
  placeholder?: string;
  type?: "text" | "color";
  mono?: boolean;
  required?: boolean;
  onChange: (value: string) => void;
};

export default function FormField({
  label,
  value,
  placeholder,
  type = "text",
  mono = false,
  required = false,
  onChange,
}: FormFieldProps) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-slate-800">
        {label}

        {required && <span className="ml-1 text-red-500">*</span>}
      </label>

      <input
        type={type}
        value={value}
        required={required}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
        className={`w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition
          placeholder:text-slate-400
          focus:border-blue-500
          focus:ring-4
          focus:ring-blue-100
          ${mono ? "font-mono text-sm" : ""}
        `}
      />
    </div>
  );
}
