import type { CSSProperties, ReactNode } from "react";
import { SHOP_LIST, STEP_CARDS, type StepCardId } from "./content";
import { PRODUCT, ProductCard } from "./ProductCard";
import { RequestCardMock } from "./RequestCardMock";
import { ShopCard, ShopSearch } from "./ShopListMock";

function StepCard({ label, i, children }: { label: string; i: number; children: ReactNode }) {
  return (
    <div
      role="img"
      aria-label={label}
      data-step-card=""
      style={{ "--i": i } as CSSProperties}
      className="h-full max-w-[440px] min-w-0 xl:max-w-none"
    >
      <div
        aria-hidden="true"
        className="relative flex h-full flex-col justify-center gap-2 rounded-lg border border-line bg-paper p-3 select-none md:p-4"
      >
        {children}
      </div>
    </div>
  );
}

function Mono({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <span className={`shrink-0 font-mono tabular-nums ${className}`}>{children}</span>;
}

function Line({ label, value, strong = false }: { label: string; value: string; strong?: boolean }) {
  return (
    <div className={`flex items-baseline justify-between gap-3 ${strong ? "" : "text-ink-muted"}`}>
      <span className={strong ? "font-bold text-ink" : ""}>{label}</span>
      <Mono className={strong ? "text-base font-semibold text-ink" : ""}>{value}</Mono>
    </div>
  );
}

const [BU_SRI, KANTIN] = SHOP_LIST.shops;

const PANEL = "flex flex-col gap-2.5 rounded-md border border-line bg-surface p-3.5 text-[13px]";

const BODY: Record<StepCardId, ReactNode> = {
  search: (
    <>
      <ShopSearch />
      <ShopCard shop={BU_SRI} />
      <ShopCard shop={KANTIN} />
    </>
  ),
  apply: (
    <div className={PANEL}>
      <span className="font-bold">{STEP_CARDS.apply.title}</span>
      {STEP_CARDS.apply.items.map((item) => (
        <Line key={item.name} label={item.name} value={item.qty} />
      ))}
      <div className="border-t border-dashed border-line-dashed" />
      <Line label={STEP_CARDS.apply.totalLabel} value={STEP_CARDS.apply.total} strong />
      <span className="flex h-9 items-center justify-center rounded-md bg-primary text-xs font-bold text-white">
        {STEP_CARDS.apply.sent}
      </span>
    </div>
  ),
  deliver: (
    <>
      <RequestCardMock variant="compact" device={false} />
      <span className="text-xs font-semibold text-primary">{STEP_CARDS.deliver.note}</span>
    </>
  ),
  monitor: <ProductCard p={PRODUCT} />,

  register: (
    <div className={PANEL}>
      <div className="flex flex-col">
        <span className="font-bold">{STEP_CARDS.register.name}</span>
        <span className="text-xs text-ink-subtle">{STEP_CARDS.register.area}</span>
      </div>
      <div className="flex flex-wrap gap-1.5">
        {STEP_CARDS.register.accepts.map((t) => (
          <span
            key={t}
            className="rounded-full border border-primary bg-primary-soft px-2.5 py-1 text-[11px] font-semibold text-primary"
          >
            {t}
          </span>
        ))}
      </div>
      <div className="flex items-center justify-between border-t border-line pt-2.5">
        <span className="font-semibold">{STEP_CARDS.register.toggle}</span>
        <span className="flex h-5 w-9 items-center justify-end rounded-full bg-primary p-0.5">
          <span className="size-4 rounded-full bg-surface" />
        </span>
      </div>
    </div>
  ),
  review: <RequestCardMock variant="compact" status="pending" device={false} />,
  sell: (
    <div className={PANEL}>
      <span className="font-bold">{STEP_CARDS.sell.title}</span>
      {STEP_CARDS.sell.items.map((item) => (
        <div key={item.name} className="flex items-baseline justify-between gap-3">
          <span>{item.name}</span>
          <span className="text-xs text-ink-muted">
            {STEP_CARDS.sell.soldLabel}{" "}
            <Mono className="text-[13px] font-semibold text-ink">{item.sold}</Mono>
          </span>
        </div>
      ))}
    </div>
  ),
  share: (
    <div className={PANEL}>
      {STEP_CARDS.share.rows.map((row) => (
        <Line key={row.label} label={row.label} value={row.value} />
      ))}
      <div className="border-t border-dashed border-line-dashed" />
      <span className="font-bold">{STEP_CARDS.share.note}</span>
    </div>
  ),
};

export function StepVisual({ id, i }: { id: StepCardId; i: number }) {
  return (
    <StepCard label={STEP_CARDS[id].label} i={i}>
      {BODY[id]}
    </StepCard>
  );
}
