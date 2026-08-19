type SummaryMetricProps = {
  value: string;
  label: string;
};

export const SummaryMetric = ({ value, label }: SummaryMetricProps) => {
  return (
    <article className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
      <p className="text-3xl font-bold tracking-tight text-white">{value}</p>

      <p className="mt-2 text-sm text-slate-400">{label}</p>
    </article>
  );
};
