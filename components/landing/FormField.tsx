export function FormField({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex min-w-0 flex-wrap items-baseline gap-x-1.5 rounded-md border border-line-strong bg-surface px-2 py-1">
      <span className="text-[10px] text-ink-muted">{label}</span>
      <span className="text-xs font-semibold">{value}</span>
    </div>
  );
}

export const FORM_PANEL = "flex flex-col gap-1.5 rounded-md border border-line bg-surface p-2.5 sm:p-3";
export const FORM_SUBMIT =
  "mt-0.5 flex h-8 items-center justify-center rounded-md bg-primary text-[11px] font-bold text-white";
