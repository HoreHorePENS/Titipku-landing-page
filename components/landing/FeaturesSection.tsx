import { FEATURES } from "./content";
import { ShopListMock } from "./ShopListMock";
import { container, Copy, SectionTitle } from "./ui";

export function FeaturesSection() {
  const { main } = FEATURES;
  return (
    <section id="fitur" aria-labelledby="fitur-title" className="border-t border-line">
      <div className={`${container} flex flex-col gap-3 py-12 md:gap-8 md:py-20`}>
        <SectionTitle id="fitur-title" className="mb-2 md:mb-0">
          {FEATURES.title}
        </SectionTitle>

        <div className="grid gap-3 md:gap-5 xl:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]">
          <article className="flex flex-col gap-2 rounded-lg border border-line bg-surface p-5 md:grid md:grid-cols-[minmax(0,1fr)_316px] md:gap-8 md:p-9">
            <div className="flex flex-col gap-2 md:gap-3.5">
              <h3 className="text-[22px] font-extrabold md:text-[28px] md:leading-[34px]">
                {main.title}
              </h3>
              <p className="text-[15px] leading-[23px] text-ink-muted md:text-base md:leading-[25px]">
                <Copy mobile={main.mobile} desktop={main.desktop} />
              </p>
              <ul className="flex flex-col gap-2.5 pt-2.5 text-[15px] max-md:hidden">
                {main.checks.map((item) => (
                  <li key={item} className="border-t border-line pt-2.5">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="max-md:hidden">
              <ShopListMock />
            </div>
          </article>

          <ul className="grid gap-3 md:grid-cols-3 md:gap-5 xl:grid-cols-1 xl:grid-rows-3">
            {FEATURES.small.map((f) => (
              <li
                key={f.title}
                className="flex flex-col gap-1 border-t border-line-strong pt-3 md:gap-2 md:pt-5"
              >
                <h3 className="text-[15px] font-bold md:text-lg">{f.title}</h3>
                <p className="text-[13px] text-ink-muted md:text-[15px] md:leading-[23px]">
                  <Copy mobile={f.mobile} desktop={f.desktop} />
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
