import Image from "next/image";
import { STEP_CARDS } from "./content";
import { FORM_PANEL, FORM_SUBMIT, FormField } from "./FormField";
import { PRODUCT } from "./ProductCard";

const FORM = STEP_CARDS.product;

export function ProductFormMock() {
  return (
    <div className={FORM_PANEL}>
      <div className="flex items-center gap-2">
        {PRODUCT.photo ? (
          <Image
            src={PRODUCT.photo}
            alt=""
            width={40}
            height={40}
            className="size-10 shrink-0 rounded-md object-cover"
          />
        ) : (
          <div className="hatch-xs size-10 shrink-0 rounded-md" />
        )}
        <div className="min-w-0 flex-1">
          <FormField {...FORM.name} />
        </div>
      </div>
      {FORM.details.map((field) => (
        <FormField key={field.label} {...field} />
      ))}
      <span className={FORM_SUBMIT}>{FORM.submit}</span>
    </div>
  );
}
