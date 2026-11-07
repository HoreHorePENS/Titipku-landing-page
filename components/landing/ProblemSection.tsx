import { PROBLEM } from "./content";
import { NotebookSketch } from "./NotebookSketch";
import { ShopListMock } from "./ShopListMock";
import { container, Copy, SectionTitle } from "./ui";

export function ProblemSection() {
  return (
    <section id="masalah" aria-labelledby="masalah-title" className="border-t border-line">
      <div className={`${container} flex flex-col gap-5 py-12 md:gap-10 md:py-20`}>
        <SectionTitle id="masalah-title" className="max-w-[720px]" reveal>
          {PROBLEM.title}
        </SectionTitle>

        <div data-reveal="" className="grid grid-cols-2 gap-2 md:gap-0 md:overflow-hidden md:rounded-lg md:border md:border-line md:bg-surface">
          <div className="flex flex-col gap-1.5 md:gap-3.5 md:border-r md:border-line md:p-7">
            <h3 className="text-[11px] font-bold tracking-[0.05em] text-ink-muted uppercase md:text-ink-subtle md:text-[13px]">
              <Copy mobile={PROBLEM.before.mobile} desktop={PROBLEM.before.desktop} />
            </h3>
            <NotebookSketch caption={PROBLEM.notebookCaption} />
          </div>
          <div className="flex flex-col gap-1.5 md:gap-3.5 md:bg-paper md:p-7">
            <h3 className="text-[11px] font-bold tracking-[0.05em] text-primary uppercase md:text-[13px]">
              <Copy mobile={PROBLEM.after.mobile} desktop={PROBLEM.after.desktop} />
            </h3>
            <div className="relative h-[240px] overflow-hidden rounded-md border border-line bg-surface md:h-[440px] md:rounded-none md:border-0 md:bg-transparent">
              <div className="absolute top-1.5 left-1.5 origin-top-left scale-[0.52] md:top-0 md:left-1/2 md:origin-top md:-translate-x-1/2 md:scale-[0.85] lg:scale-100">
                <ShopListMock />
              </div>
            </div>
          </div>
        </div>

        <ul className="grid gap-3.5 md:grid-cols-3 md:gap-10">
          {PROBLEM.points.map((point) => (
            <li
              key={point.title}
              data-reveal=""
              className="flex flex-col gap-1 border-t-2 border-ink pt-2.5 md:gap-1.5 md:pt-3.5"
            >
              <h3 className="text-base font-bold md:text-[17px]">{point.title}</h3>
              <p className="text-sm leading-[21px] text-ink-muted md:text-[15px] md:leading-[23px]">
                <Copy mobile={point.mobile} desktop={point.desktop} />
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
