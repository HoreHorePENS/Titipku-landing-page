"use client";

import { useRef, useState, type KeyboardEvent, type ReactNode } from "react";

// WAI-ARIA tabs: roving tabindex, arrow/Home/End keys, activation follows focus.
export function RoleTabs({
  idPrefix,
  label,
  tabs,
  panels,
}: {
  idPrefix: string;
  label: string;
  tabs: readonly { id: string; label: string }[];
  panels: ReactNode[];
}) {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const panelRefs = useRef<(HTMLDivElement | null)[]>([]);

  const select = (index: number, focus = false) => {
    if (focus) tabRefs.current[index]?.focus();
    if (index === active) return;
    setActive(index);
    const steps = panelRefs.current[index]?.querySelector<HTMLElement>("[data-steps]");
    if (!steps || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    steps.dataset.steps = "hidden";
    // Wait two frames so the panel paints hidden before the timeline plays.
    requestAnimationFrame(() => requestAnimationFrame(() => (steps.dataset.steps = "play")));
  };

  const onKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    const last = tabs.length - 1;
    const next =
      event.key === "ArrowRight"
        ? active === last ? 0 : active + 1
        : event.key === "ArrowLeft"
          ? active === 0 ? last : active - 1
          : event.key === "Home"
            ? 0
            : event.key === "End"
              ? last
              : null;
    if (next === null) return;
    event.preventDefault();
    select(next, true);
  };

  const tabId = (i: number) => `${idPrefix}-tab-${tabs[i].id}`;
  const panelId = (i: number) => `${idPrefix}-panel-${tabs[i].id}`;

  return (
    <div className="flex flex-col gap-8 md:gap-12">
      <noscript>
        <style>{`[data-role-tabs]{display:none!important}[data-role-panel]{display:block!important}[data-role-heading]{display:block!important}`}</style>
      </noscript>
      <div
        role="tablist"
        aria-label={label}
        data-role-tabs=""
        className="inline-flex self-start rounded-lg border border-line-strong bg-paper p-1"
      >
        {tabs.map((tab, i) => {
          const selected = i === active;
          return (
            <button
              key={tab.id}
              ref={(el) => {
                tabRefs.current[i] = el;
              }}
              type="button"
              role="tab"
              id={tabId(i)}
              aria-selected={selected}
              aria-controls={panelId(i)}
              tabIndex={selected ? 0 : -1}
              onClick={() => select(i)}
              onKeyDown={onKeyDown}
              className={`min-h-11 rounded-md px-5 text-[15px] font-bold transition-colors duration-150 ${
                selected ? "bg-primary text-white" : "text-ink-muted hover:text-ink"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {panels.map((panel, i) => (
        <div
          key={tabs[i].id}
          ref={(el) => {
            panelRefs.current[i] = el;
          }}
          role="tabpanel"
          id={panelId(i)}
          aria-labelledby={tabId(i)}
          tabIndex={0}
          data-role-panel=""
          // A class, not the hidden attribute: Tailwind makes [hidden] !important in a
          // cascade layer, which the <noscript> override can't beat.
          className={`rounded-lg focus-visible:outline-offset-4 ${i === active ? "" : "hidden"}`}
        >
          {/* Only shown without JS, when the tablist is hidden. */}
          <h3 data-role-heading="" className="mb-6 hidden text-xl font-extrabold">
            {tabs[i].label}
          </h3>
          {panel}
        </div>
      ))}
    </div>
  );
}
