import type { CSSProperties } from "react";
import { HOW_IT_WORKS, type Step } from "./content";
import { RoleTabs } from "./motion/RoleTabs";
import { StepVisual } from "./StepCards";
import { container, SectionTitle } from "./ui";

// ≥1280px: one row of five; subgrid gives every title block the same height so the
// cards start on one line and share a height. 640–1279px: text left, card right.
function StepList({ steps }: { steps: readonly Step[] }) {
  return (
    <ol
      data-steps=""
      className="relative flex flex-col xl:grid xl:grid-cols-5 xl:grid-rows-[auto_auto_1fr] xl:gap-x-5 xl:before:absolute xl:before:top-[27px] xl:before:right-[calc(20%-44px)] xl:before:left-7 xl:before:border-t-[1.5px] xl:before:border-dashed xl:before:border-primary xl:before:content-['']"
    >
      {steps.map((step, i) => {
        const last = i === steps.length - 1;
        return (
          <li
            key={step.title}
            className="relative flex gap-4 xl:row-span-3 xl:grid xl:grid-rows-subgrid xl:gap-4"
          >
            <div className="flex flex-col items-center xl:block">
              <span
                aria-hidden="true"
                className="relative z-10 flex size-10 shrink-0 items-center justify-center rounded-full border-[1.5px] border-primary bg-surface font-mono font-semibold text-primary xl:size-14 xl:text-xl"
              >
                {i + 1}
              </span>
              {!last && (
                <span
                  aria-hidden="true"
                  data-step-line=""
                  style={{ "--i": i } as CSSProperties}
                  className="flex-1 border-l-[1.5px] border-dashed border-primary xl:hidden"
                />
              )}
            </div>
            <div
              className={`flex min-w-0 flex-1 flex-col gap-4 pt-2 sm:grid sm:grid-cols-[minmax(0,1fr)_minmax(0,300px)] sm:items-start sm:gap-6 lg:grid-cols-[minmax(0,1fr)_340px] xl:contents ${last ? "" : "pb-10"}`}
            >
              <div className="flex flex-col gap-1 md:gap-2">
                <h3 className="text-[17px] font-bold md:text-xl xl:text-lg">{step.title}</h3>
                <p className="text-sm leading-[21px] text-ink-muted md:text-[15px] md:leading-[23px]">
                  {step.desc}
                </p>
              </div>
              <StepVisual id={step.card} i={i} />
            </div>
          </li>
        );
      })}
    </ol>
  );
}

export function HowItWorksSection() {
  return (
    <section
      id="cara-kerja"
      aria-labelledby="cara-kerja-title"
      className="border-t border-line bg-surface"
    >
      <div className={`${container} flex flex-col gap-6 py-12 md:gap-8 md:py-20`}>
        <div className="flex flex-col gap-2 md:gap-3">
          <SectionTitle id="cara-kerja-title">{HOW_IT_WORKS.title}</SectionTitle>
          <p className="max-w-[640px] text-[15px] leading-[23px] text-ink-muted md:text-lg md:leading-7">
            {HOW_IT_WORKS.subtitle}
          </p>
        </div>

        <RoleTabs
          idPrefix="cara-kerja"
          label={HOW_IT_WORKS.tabsLabel}
          tabs={HOW_IT_WORKS.tracks.map((t) => ({ id: t.id, label: t.tab }))}
          panels={HOW_IT_WORKS.tracks.map((t) => (
            <StepList key={t.id} steps={t.steps} />
          ))}
        />
      </div>
    </section>
  );
}
