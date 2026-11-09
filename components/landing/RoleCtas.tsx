import { HERO, LINKS } from "./content";
import { ButtonLink } from "./ui";

// A container query (not a viewport breakpoint) decides when the pair fits side by
// side, because the same pair sits in columns of different widths.
export function RoleCtas() {
  return (
    <div className="@container">
      <div className="grid gap-3 @min-[38rem]:w-max @min-[38rem]:auto-cols-fr @min-[38rem]:grid-flow-col">
        <ButtonLink href={LINKS.daftarPenitip} size="xl">
          {HERO.ctaPenitip}
        </ButtonLink>
        <ButtonLink href={LINKS.daftarWarung} variant="secondary" size="xl">
          {HERO.ctaWarung}
        </ButtonLink>
      </div>
    </div>
  );
}
