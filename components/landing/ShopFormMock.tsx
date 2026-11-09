import { STEP_CARDS } from "./content";
import { FORM_PANEL, FORM_SUBMIT, FormField } from "./FormField";
import { MapSnippet } from "./MapSnippet";

const FORM = STEP_CARDS.shop;

export function ShopFormMock() {
  return (
    <div className={FORM_PANEL}>
      <MapSnippet className="h-12" />
      <FormField {...FORM.name} />
      <FormField {...FORM.address} />
      <span className={FORM_SUBMIT}>{FORM.submit}</span>
    </div>
  );
}
