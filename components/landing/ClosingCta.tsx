import { CLOSING_CTA, HERO, LINKS } from "./content";
import { ButtonLink, container } from "./ui";

export function ClosingCta() {
  return (
    <section aria-labelledby="cta-title" className="border-t border-line">
      <div
        className={`${container} flex flex-col gap-3.5 py-10 md:gap-6 md:py-[72px] lg:flex-row lg:items-center lg:justify-between lg:gap-10`}
      >
        <h2
          id="cta-title"
          data-reveal=""
          className="max-w-[640px] text-2xl leading-[30px] font-extrabold text-balance md:text-[32px] md:leading-10 md:tracking-[-0.02em]"
        >
          {CLOSING_CTA.title}
        </h2>
        <div data-reveal="" className="flex flex-col gap-2 md:flex-row md:gap-3">
          <ButtonLink href={LINKS.daftarPenitip}>{HERO.ctaPenitip}</ButtonLink>
          <ButtonLink href={LINKS.daftarWarung} variant="secondary">
            {HERO.ctaWarung}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
