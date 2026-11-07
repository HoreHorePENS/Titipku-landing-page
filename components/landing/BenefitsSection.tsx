import { BENEFITS } from "./content";
import { DashboardMock } from "./DashboardMock";
import { RequestCardMock } from "./RequestCardMock";
import { container, SectionTitle } from "./ui";

const VISUALS = [<DashboardMock key="penitip" />, <RequestCardMock key="warung" />];

export function BenefitsSection() {
  return (
    <section id="manfaat" aria-labelledby="manfaat-title" className="border-t border-line">
      <div className={`${container} flex flex-col gap-8 py-12 md:gap-12 md:py-20`}>
        <SectionTitle id="manfaat-title" reveal>
          {BENEFITS.title}
        </SectionTitle>

        <div className="grid gap-12 md:grid-cols-2 md:gap-10 xl:gap-20">
          {BENEFITS.columns.map((col, i) => (
            <div key={col.role} data-reveal="" className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <p className="text-xs font-bold tracking-[0.06em] text-primary uppercase md:text-[13px]">
                  {col.role}
                </p>
                <h3 className="text-xl leading-7 font-bold md:text-2xl md:leading-8">{col.title}</h3>
                <ul className="flex max-w-[520px] flex-col gap-2 pt-1 text-[15px] leading-[23px] text-ink-muted md:text-base md:leading-[25px]">
                  {col.points.map((point) => (
                    <li key={point} className="flex gap-2.5">
                      <span aria-hidden="true" className="font-bold text-primary">
                        ✓
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
              {VISUALS[i]}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
