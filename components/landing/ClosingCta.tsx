import { CLOSING_CTA } from "./content";
import { RoleCtas } from "./RoleCtas";
import { container } from "./ui";

export function ClosingCta() {
  return (
    <section aria-labelledby="cta-title" className="border-t border-line">
      <div
        className={`${container} flex flex-col gap-3.5 py-10 md:gap-6 md:py-[72px] xl:flex-row xl:items-center xl:justify-between xl:gap-10`}
      >
        <h2
          id="cta-title"
          data-reveal=""
          className="max-w-[640px] text-2xl leading-[30px] font-extrabold text-balance md:text-[32px] md:leading-10 md:tracking-[-0.02em]"
        >
          {CLOSING_CTA.title}
        </h2>
        {/* Fixed width on xl: a size container can't take its width from its content. */}
        <div data-reveal="" className="xl:w-[38rem] xl:shrink-0">
          <RoleCtas />
        </div>
      </div>
    </section>
  );
}
