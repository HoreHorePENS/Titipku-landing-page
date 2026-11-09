import type { CSSProperties } from "react";
import { SHOP_LIST, type Shop } from "./content";

// data-shop-card, data-pick and data-ajukan are animated by MatchDemo in the hero.

const OPEN_BADGE = "bg-primary-soft text-primary";
const FULL_BADGE = "bg-canvas/60 text-ink-muted";

export function ShopCard({
  shop,
  index = 0,
  pick = false,
}: {
  shop: Shop;
  index?: number;
  pick?: boolean;
}) {
  return (
    <div
      data-shop-card=""
      data-pick={pick ? "" : undefined}
      style={{ "--i": index } as CSSProperties}
      className="relative flex flex-col gap-1.5 rounded-lg border border-line bg-surface p-2.5"
    >
      <div className="flex items-start justify-between gap-2">
        <div className="flex min-w-0 flex-col">
          <span className="truncate text-[13px] font-bold">{shop.name}</span>
          <span className="text-[10px] text-ink-subtle">{shop.area}, {SHOP_LIST.city}</span>
        </div>
        <span
          className={`shrink-0 rounded px-1.5 py-0.5 text-[10px] font-bold ${shop.open ? OPEN_BADGE : FULL_BADGE}`}
        >
          {shop.open ? SHOP_LIST.openLabel : SHOP_LIST.fullLabel}
        </span>
      </div>
      <div className="flex items-center justify-between gap-2">
        <span className="min-w-0 text-[10px] text-ink-muted">
          {SHOP_LIST.acceptsPrefix}: {shop.accepts}
        </span>
        <span
          data-ajukan={pick ? "" : undefined}
          className={`relative flex h-7 shrink-0 items-center rounded-md px-2.5 text-[11px] font-bold ${
            shop.open ? "bg-primary text-white" : "border border-line text-ink-subtle"
          }`}
        >
          {SHOP_LIST.action}
        </span>
      </div>
    </div>
  );
}

export function ShopSearch() {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex h-9 items-center gap-2 rounded-md border border-line-strong bg-surface px-2.5 text-xs">
        <svg aria-hidden="true" viewBox="0 0 16 16" className="size-3.5 shrink-0 text-ink-subtle">
          <circle cx="7" cy="7" r="4.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
          <path d="m10.5 10.5 3 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
        <span className="font-semibold">{SHOP_LIST.search}</span>
      </div>
      <div className="flex gap-1.5">
        {SHOP_LIST.chips.map((chip) => (
          <span
            key={chip.label}
            className={`rounded-full border px-2.5 py-1 text-[10px] font-semibold ${
              chip.active
                ? "border-primary bg-primary-soft text-primary"
                : "border-line-strong bg-surface text-ink-muted"
            }`}
          >
            {chip.label}
          </span>
        ))}
      </div>
    </div>
  );
}

export function ShopListMock() {
  return (
    <div role="img" aria-label={SHOP_LIST.label} data-shop-phone="" className="h-[636px] w-[316px]">
      <div
        aria-hidden="true"
        className="box-content flex h-[620px] w-[300px] flex-col overflow-hidden rounded-[36px] border-8 border-ink bg-paper font-sans text-ink select-none"
      >
        <div className="flex justify-between px-5 pt-2.5 pb-0.5 font-mono text-[10px] font-medium">
          <span>{SHOP_LIST.time}</span>
          <span>4G ▪▪▪▫</span>
        </div>
        <div className="flex flex-col gap-2.5 border-b border-line bg-surface px-3.5 pt-2 pb-3">
          <span className="text-[15px] font-extrabold">{SHOP_LIST.title}</span>
          <ShopSearch />
        </div>
        <div className="flex flex-1 flex-col gap-2 overflow-hidden p-2.5">
          {SHOP_LIST.shops.map((shop, i) => (
            <ShopCard key={shop.name} shop={shop} index={i} pick={i === 0} />
          ))}
        </div>
      </div>
    </div>
  );
}
