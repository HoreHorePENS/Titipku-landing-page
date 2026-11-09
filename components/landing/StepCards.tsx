import type { CSSProperties, ReactNode } from "react";
import { SHOP_LIST, STEP_CARDS, type StepCardId } from "./content";
import { MapSnippet } from "./MapSnippet";
import { PRODUCT, ProductCard } from "./ProductCard";
import { ProductFormMock } from "./ProductFormMock";
import { RequestCardMock } from "./RequestCardMock";
import { ShopFormMock } from "./ShopFormMock";
import { ShopCard } from "./ShopListMock";

function StepCard({ label, i, children }: { label: string; i: number; children: ReactNode }) {
  return (
    <div
      role="img"
      aria-label={label}
      data-step-card=""
      style={{ "--i": i } as CSSProperties}
      className="h-full max-w-[440px] min-w-0 sm:max-w-none"
    >
      <div
        aria-hidden="true"
        className="relative flex h-full flex-col justify-center gap-2 rounded-lg border border-line bg-paper p-3 select-none sm:p-4 xl:p-2.5"
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
    <div className={`flex items-baseline justify-between gap-2 ${strong ? "" : "text-ink-muted"}`}>
      <span className={strong ? "font-bold text-ink" : ""}>{label}</span>
      <Mono className={strong ? "text-sm font-semibold text-ink" : ""}>{value}</Mono>
    </div>
  );
}

const [BU_SRI] = SHOP_LIST.shops;

const PANEL = "flex flex-col gap-2 rounded-md border border-line bg-surface p-2.5 text-xs sm:p-3";
const DIVIDER = <div className="border-t border-dashed border-line-dashed" />;

const BODY: Record<StepCardId, ReactNode> = {
  product: <ProductFormMock />,
  search: (
    <>
      <MapSnippet nearby label={SHOP_LIST.search} className="h-20" />
      <ShopCard shop={BU_SRI} compact />
    </>
  ),
  apply: (
    <div className={PANEL}>
      <span className="font-bold">{STEP_CARDS.apply.title}</span>
      {STEP_CARDS.apply.items.map((item) => (
        <Line key={item.name} label={item.name} value={item.qty} />
      ))}
      {DIVIDER}
      <Line label={STEP_CARDS.apply.totalLabel} value={STEP_CARDS.apply.total} strong />
      <span className="flex h-8 items-center justify-center rounded-md bg-primary text-[11px] font-bold text-white">
        {STEP_CARDS.apply.sent}
      </span>
    </div>
  ),
  deliver: (
    <>
      <RequestCardMock variant="compact" device={false} actions={false} fluid />
      <span className="text-xs font-semibold text-primary">{STEP_CARDS.deliver.note}</span>
    </>
  ),
  monitor: <ProductCard p={PRODUCT} />,

  shop: <ShopFormMock />,
  accepts: (
    <div className={PANEL}>
      <span className="font-bold">{STEP_CARDS.accepts.title}</span>
      <div className="flex flex-wrap gap-1.5">
        {STEP_CARDS.accepts.options.map((option) => (
          <span
            key={option.label}
            className={`rounded-full border px-2.5 py-1 text-[11px] font-semibold ${
              option.on
                ? "border-primary bg-primary-soft text-primary"
                : "border-line-strong text-ink-muted"
            }`}
          >
            {option.label}
          </span>
        ))}
      </div>
      <div className="flex items-center justify-between gap-2 border-t border-line pt-2">
        <span className="font-semibold">{STEP_CARDS.accepts.toggle}</span>
        <span className="flex h-5 w-9 shrink-0 items-center justify-end rounded-full bg-primary p-0.5">
          <span className="size-4 rounded-full bg-surface" />
        </span>
      </div>
    </div>
  ),
  review: <RequestCardMock variant="compact" status="pending" fluid />,
  sell: (
    <div className={PANEL}>
      <span className="font-bold">{STEP_CARDS.sell.title}</span>
      {STEP_CARDS.sell.items.map((item) => (
        <div key={item.name} className="flex items-baseline justify-between gap-2">
          <span>{item.name}</span>
          <span className="text-[11px] text-ink-muted">
            {STEP_CARDS.sell.soldLabel} <Mono className="text-xs font-semibold text-ink">{item.sold}</Mono>
          </span>
        </div>
      ))}
      {DIVIDER}
      <Line label={STEP_CARDS.sell.total.label} value={STEP_CARDS.sell.total.value} strong />
    </div>
  ),
  share: (
    <div className={PANEL}>
      <span className="font-bold">{STEP_CARDS.share.title}</span>
      {STEP_CARDS.share.rows.map((row) => (
        <Line key={row.label} label={row.label} value={row.value} />
      ))}
      <span className="rounded-md bg-primary-soft px-2.5 py-2 font-bold text-primary">
        {STEP_CARDS.share.note}
      </span>
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
