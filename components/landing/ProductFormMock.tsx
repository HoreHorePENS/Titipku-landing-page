import Image from "next/image";
import { STEP_CARDS } from "./content";
import { FORM_PANEL, FormField } from "./FormField";
import { PRODUCT } from "./ProductCard";

const FORM = STEP_CARDS.product;
const SMALL_BUTTON = "flex h-6 items-center rounded-md border px-1.5 text-[9px] font-semibold";

export function ProductFormMock() {
  const [change, ...rest] = FORM.photo.actions;
  const remove = rest[rest.length - 1];
  return (
    <div className={FORM_PANEL}>
      <span className="text-xs font-extrabold">{FORM.title}</span>
      <span className="text-[10px] text-ink-muted">{FORM.photo.label}</span>
      <div className="flex items-start gap-2">
        {PRODUCT.photo ? (
          <Image
            src={PRODUCT.photo}
            alt=""
            width={44}
            height={44}
            className="size-11 shrink-0 rounded-md object-cover"
          />
        ) : (
          <div className="hatch-xs size-11 shrink-0 rounded-md" />
        )}
        <div className="flex flex-wrap gap-1">
          <span className={`${SMALL_BUTTON} border-ink bg-ink text-white`}>{change}</span>
          {rest.slice(0, -1).map((action) => (
            <span key={action} className={`${SMALL_BUTTON} border-line-strong bg-surface`}>
              {action}
            </span>
          ))}
          <span className={`${SMALL_BUTTON} border-line-strong bg-surface text-status-belum-lunas`}>
            {remove}
          </span>
        </div>
      </div>
      {FORM.fields.map((field) => (
        <FormField key={field.label} {...field} />
      ))}
      <div className="flex items-center justify-between gap-2 rounded-md border border-line bg-paper px-2 py-1.5">
        <span className="text-[11px] font-semibold">{FORM.active}</span>
        <span className="flex h-4 w-7 shrink-0 items-center justify-end rounded-full bg-primary p-0.5">
          <span className="size-3 rounded-full bg-surface" />
        </span>
      </div>
      <div className="mt-0.5 flex justify-end gap-1.5">
        <span className="flex h-8 items-center rounded-md border border-line-strong bg-surface px-3 text-[11px] font-semibold">
          {FORM.cancel}
        </span>
        <span className="flex h-8 items-center rounded-md bg-primary px-3 text-[11px] font-bold text-white">
          {FORM.submit}
        </span>
      </div>
    </div>
  );
}
