import { AUDIENCE } from "./content";
import { container } from "./ui";

export function AudienceStrip() {
  return (
    <section
      id="untuk-siapa"
      aria-labelledby="untuk-siapa-title"
      className="border-t border-line bg-surface"
    >
      <div className={`${container} flex flex-col gap-5 py-8 md:gap-6 md:py-10`}>
        <h2
          id="untuk-siapa-title"
          data-reveal=""
          className="text-lg leading-6 font-extrabold md:text-xl md:leading-7"
        >
          {AUDIENCE.title}
        </h2>
        <div className="grid gap-3 md:grid-cols-2 md:gap-6">
          {AUDIENCE.groups.map((group) => (
            <div
              key={group.title}
              data-reveal=""
              className="flex flex-col gap-3 rounded-lg border border-line bg-paper p-4 md:p-5"
            >
              <div className="flex flex-col gap-0.5">
                <h3 className="text-base font-bold md:text-[17px]">{group.title}</h3>
                <p className="text-sm leading-[21px] text-ink-muted">{group.desc}</p>
              </div>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-line-strong bg-surface px-3 py-1.5 text-sm font-semibold"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
