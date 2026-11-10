import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";
import { SHOP_LIST, type Shop } from "./content";

// Hero hooks for MatchDemo: data-shop-card / data-pick / data-ajukan animate the list,
// data-shop-map and data-view-* switch between the map and list views.

const PIN_SPOTS = [
  { x: 26, y: 30 },
  { x: 70, y: 22 },
  { x: 82, y: 66 },
  { x: 30, y: 74 },
];

function Icon({ children, className = "size-4" }: { children: ReactNode; className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`shrink-0 ${className}`}
    >
      {children}
    </svg>
  );
}

const NAV_ICONS: Record<string, ReactNode> = {
  Beranda: <path d="M4 11 12 4l8 7v8a1 1 0 0 1-1 1h-4v-6h-6v6H5a1 1 0 0 1-1-1z" />,
  "Bukti Nota": (
    <>
      <path d="M6 3h12v18l-3-2-3 2-3-2-3 2z" />
      <path d="M9 8h6M9 12h6" />
    </>
  ),
  "Toko Mitra": (
    <>
      <path d="M4 9h16l-1-5H5zM5 9v11h14V9" />
      <path d="M10 20v-5h4v5" />
    </>
  ),
  Tagihan: (
    <>
      <path d="M7 3h7l4 4v14H7z" />
      <path d="M10 11h5M10 15h5" />
    </>
  ),
  Produk: (
    <>
      <path d="m12 3 8 4.5v9L12 21l-8-4.5v-9z" />
      <path d="m4 7.5 8 4.5 8-4.5M12 12v9" />
    </>
  ),
};

function StatusLabel({ shop }: { shop: Shop }) {
  return shop.status === "partner" ? (
    <span className="rounded border border-line-strong bg-paper px-1.5 py-0.5 text-[9px] font-bold">
      {SHOP_LIST.partnerLabel}
    </span>
  ) : (
    <span className="text-[10px] text-ink-muted">{SHOP_LIST.openLabel}</span>
  );
}

export function ShopCard({
  shop,
  index = 0,
  pick = false,
  compact = false,
}: {
  shop: Shop;
  index?: number;
  pick?: boolean;
  compact?: boolean;
}) {
  const height = compact ? "h-7" : "h-8";
  return (
    <div
      data-shop-card={compact ? undefined : ""}
      data-pick={pick ? "" : undefined}
      style={compact ? undefined : ({ "--i": index } as CSSProperties)}
      className="relative flex shrink-0 flex-col gap-1.5 rounded-lg border border-line bg-surface p-2.5"
    >
      <div className="flex items-center justify-between gap-2">
        <span className="rounded bg-paper px-1.5 py-0.5 text-[9px] font-semibold text-ink-muted">
          {shop.category}
        </span>
        <StatusLabel shop={shop} />
      </div>
      <div className="flex min-w-0 flex-col">
        <span className="text-[13px] font-bold">{shop.name}</span>
        <span className="text-[10px] text-ink-subtle">{shop.address}</span>
      </div>
      {!compact && (
        <span className="rounded-md bg-paper px-2 py-1.5 text-[10px] leading-[14px] text-ink-muted">
          “{shop.note}”
        </span>
      )}
      <div className="flex gap-1.5 pt-0.5">
        <span
          className={`flex ${height} shrink-0 items-center rounded-md bg-paper px-2.5 text-[11px] font-semibold`}
        >
          {SHOP_LIST.whatsapp}
        </span>
        <span
          data-ajukan={pick ? "" : undefined}
          className={`relative flex ${height} flex-1 items-center justify-center rounded-md bg-primary px-2 text-[11px] font-bold whitespace-nowrap text-white`}
        >
          {SHOP_LIST.action}
        </span>
      </div>
    </div>
  );
}

function AppHeader() {
  const { app } = SHOP_LIST;
  return (
    <div className="flex items-center gap-2 border-b border-line bg-surface px-3 py-2">
      <span className="flex size-7 shrink-0 items-center justify-center rounded-md bg-ink text-xs font-bold text-white">
        {app.initial}
      </span>
      <div className="flex min-w-0 flex-1 flex-col">
        <span className="flex items-center gap-1 text-[11px] font-extrabold">
          {app.name}
          <span className="rounded bg-paper px-1 text-[8px] font-semibold text-ink-muted">
            {app.role}
          </span>
        </span>
        <span className="truncate text-[9px] text-ink-muted">{app.business}</span>
      </div>
      <span className="relative flex size-7 items-center justify-center rounded-md border border-line bg-paper">
        <Icon className="size-3.5">
          <path d="M6 16V11a6 6 0 0 1 12 0v5l1.5 2h-15zM10 20a2 2 0 0 0 4 0" />
        </Icon>
        <span className="absolute top-1 right-1 size-1.5 rounded-full bg-status-belum-lunas" />
      </span>
      <span className="flex size-7 items-center justify-center rounded-md border border-line bg-paper">
        <span className="flex size-5 items-center justify-center rounded bg-ink text-[9px] font-bold text-white">
          {app.avatar}
        </span>
      </span>
    </div>
  );
}

function ViewToggle() {
  return (
    <div className="relative grid w-[148px] grid-cols-2 rounded-md border border-line bg-paper p-0.5 text-[10px] font-semibold">
      <span
        data-view-indicator=""
        className="absolute inset-y-0.5 left-0.5 w-[calc(50%-2px)] translate-x-full rounded bg-surface shadow-[0_1px_2px_rgb(28_25_23/0.08)]"
      />
      <span data-view-tab="map" className="relative flex items-center justify-center gap-1 py-1 text-ink-muted">
        <Icon className="size-3">
          <path d="m3 6 6-2 6 2 6-2v14l-6 2-6-2-6 2zM9 4v14M15 6v14" />
        </Icon>
        {SHOP_LIST.views.map}
      </span>
      <span data-view-tab="list" className="relative flex items-center justify-center gap-1 py-1 text-ink">
        <Icon className="size-3">
          <path d="M8 6h12M8 12h12M8 18h12M4 6h.01M4 12h.01M4 18h.01" />
        </Icon>
        {SHOP_LIST.views.list}
      </span>
    </div>
  );
}

function MapView() {
  return (
    <div
      data-shop-map=""
      className="absolute inset-0 overflow-hidden rounded-lg border border-line bg-hatch-b"
    >
      <Image
        src="/landing/app/peta-toko.webp"
        alt=""
        width={314}
        height={268}
        sizes="276px"
        className="size-full object-cover"
      />
      {PIN_SPOTS.map((pin) => (
        <span
          key={`${pin.x}-${pin.y}`}
          style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
          className="absolute flex size-5 -translate-1/2 items-center justify-center rounded-full border-2 border-surface bg-primary text-white shadow-[0_1px_3px_rgb(28_25_23/0.3)]"
        >
          <Icon className="size-2.5">
            <path d="M4 9h16l-1-5H5zM5 9v11h14V9" />
          </Icon>
        </span>
      ))}
      <span className="absolute top-2 left-2 flex flex-col overflow-hidden rounded border border-line-strong bg-surface text-sm leading-none font-semibold">
        <span className="flex size-6 items-center justify-center border-b border-line">+</span>
        <span className="flex size-6 items-center justify-center">−</span>
      </span>
      <span className="absolute top-2 right-2 flex size-6 items-center justify-center rounded border border-line-strong bg-surface">
        <Icon className="size-3.5">
          <circle cx="12" cy="12" r="3" />
          <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
        </Icon>
      </span>
      <span className="absolute right-0 bottom-0 bg-surface/80 px-1 text-[7px] text-ink-muted">
        {SHOP_LIST.mapAttribution}
      </span>
    </div>
  );
}

function BottomNav() {
  return (
    <div className="grid grid-cols-5 border-t border-line bg-surface px-1 pt-1.5 pb-2.5">
      {SHOP_LIST.nav.map((item) => {
        const active = item === SHOP_LIST.activeNav;
        return (
          <span
            key={item}
            className={`flex flex-col items-center gap-0.5 text-[8px] ${
              active ? "font-bold text-ink" : "text-ink-muted"
            }`}
          >
            <Icon className="size-4">{NAV_ICONS[item]}</Icon>
            {item}
          </span>
        );
      })}
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
        <div className="flex justify-between bg-surface px-5 pt-2.5 pb-0.5 font-mono text-[10px] font-medium">
          <span>{SHOP_LIST.time}</span>
          <span>4G ▪▪▪▫</span>
        </div>
        <AppHeader />
        <div className="flex min-h-0 flex-1 flex-col gap-2 px-3 pt-3">
          <span className="self-start rounded border border-line bg-surface px-1.5 py-0.5 text-[9px] font-semibold">
            {SHOP_LIST.badge}
          </span>
          <div className="flex flex-col gap-0.5">
            <span className="text-[18px] leading-6 font-extrabold">{SHOP_LIST.title}</span>
            <span className="text-[10px] leading-[14px] text-ink-muted">{SHOP_LIST.subtitle}</span>
          </div>
          <ViewToggle />
          <div className="flex h-9 items-center gap-2 rounded-md border border-line-strong bg-surface px-2.5 text-[11px] text-ink-subtle">
            <Icon className="size-3.5">
              <circle cx="11" cy="11" r="6" />
              <path d="m16 16 4 4" />
            </Icon>
            <span className="truncate">{SHOP_LIST.search}</span>
          </div>
          <div className="flex gap-1.5 overflow-hidden">
            {SHOP_LIST.chips.map((chip) => (
              <span
                key={chip.label}
                className={`shrink-0 rounded-full border px-2.5 py-1 text-[10px] font-semibold ${
                  chip.active
                    ? "border-ink bg-ink text-white"
                    : "border-line-strong bg-surface text-ink-muted"
                }`}
              >
                {chip.label}
              </span>
            ))}
          </div>
          <div className="relative min-h-0 flex-1">
            <div className="flex h-full flex-col gap-2 overflow-hidden pt-0.5">
              {SHOP_LIST.shops.map((shop, i) => (
                <ShopCard key={shop.name} shop={shop} index={i} pick={i === 0} />
              ))}
            </div>
            <MapView />
          </div>
        </div>
        <BottomNav />
      </div>
    </div>
  );
}
