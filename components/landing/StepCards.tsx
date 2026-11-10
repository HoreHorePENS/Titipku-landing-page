import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";
import { SHOP_LIST, STEP_CARDS, type StepCardId } from "./content";
import { ProductFormMock } from "./ProductFormMock";
import { ShopFormMock } from "./ShopFormMock";
import { ShopCard } from "./ShopListMock";

function StepCard({ label, i, children }: { label: string; i: number; children: ReactNode }) {
  return (
    <div
      role="img"
      aria-label={label}
      data-step-card=""
      style={{ "--i": i } as CSSProperties}
      className="h-full w-full max-w-[440px] min-w-0 sm:max-w-none"
    >
      <div
        aria-hidden="true"
        className="relative flex h-full min-w-0 flex-col justify-start gap-2 rounded-lg border border-line bg-paper p-3 [overflow-wrap:anywhere] select-none sm:p-4 xl:p-2.5"
      >
        {children}
      </div>
    </div>
  );
}

const [NEAREST_SHOP] = SHOP_LIST.shops;

/* =========================================================================
   PENITIP MOCKS
   ========================================================================= */

function MapStep() {
  return (
    <div className="flex w-full flex-col gap-2">
      <div className="relative h-24 w-full overflow-hidden rounded-md border border-line bg-hatch-b">
        <Image
          src="/landing/app/peta-sekitar.webp"
          alt=""
          width={314}
          height={268}
          sizes="(max-width: 640px) 100vw, 320px"
          className="size-full object-cover"
        />
        <span className="absolute top-1.5 left-1.5 flex flex-col overflow-hidden rounded border border-line-strong bg-surface text-xs leading-none font-semibold shadow-xs">
          <span className="flex size-4.5 items-center justify-center border-b border-line text-ink">+</span>
          <span className="flex size-4.5 items-center justify-center text-ink">−</span>
        </span>
        <span className="absolute top-1.5 right-1.5 flex size-4.5 items-center justify-center rounded border border-line-strong bg-surface shadow-xs">
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-2.5 text-ink"
          >
            <circle cx="12" cy="12" r="3" />
            <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
          </svg>
        </span>
        <span className="absolute right-0 bottom-0 rounded-tl bg-surface/85 px-1 py-0.5 text-[7px] leading-tight text-ink-muted">
          © OpenStreetMap contributors
        </span>
      </div>
      <ShopCard shop={NEAREST_SHOP} compact />
    </div>
  );
}

function ApplyModalMock() {
  const data = STEP_CARDS.apply;
  return (
    <div className="flex w-full flex-col gap-2 rounded-md border border-line bg-surface p-2.5 text-xs">
      <div className="flex flex-col gap-0.5 border-b border-line pb-1.5">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-ink">{data.title}</span>
          <span className="text-xs leading-none text-ink-subtle">✕</span>
        </div>
        <span className="text-[10px] text-ink-muted">{data.shop}</span>
        <span className="text-[9px] text-ink-subtle">{data.address}</span>
      </div>

      <div className="rounded-md border border-line bg-paper/60 p-2">
        <span className="block text-[9.5px] font-bold text-ink">{data.shopNeedsTitle}</span>
        <span className="block text-[8.5px] leading-tight text-ink-muted">{data.shopNeeds}</span>
      </div>

      <div className="flex flex-col gap-1">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-bold text-ink">{data.sectionTitle}</span>
          <span className="text-[9px] text-ink-muted">{data.selectedLabel}</span>
        </div>
        <div className="flex flex-col divide-y divide-line">
          {data.items.map((item) => (
            <div key={item.name} className="flex items-center justify-between py-1">
              <div className="flex min-w-0 flex-col pr-1">
                <span className="truncate text-[9.5px] font-semibold text-ink">{item.name}</span>
                <span className="text-[8px] text-ink-muted">Harga titip {item.price}</span>
              </div>
              <div className="flex shrink-0 items-center gap-1">
                <span className="flex size-4.5 items-center justify-center rounded border border-line-strong bg-surface text-[10px] font-semibold text-ink">
                  −
                </span>
                <span className="w-3.5 text-center font-mono text-[10px] font-semibold text-ink">
                  {item.qty}
                </span>
                <span className="flex size-4.5 items-center justify-center rounded bg-ink text-[10px] font-semibold text-white">
                  +
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-0.5">
        <span className="text-[8.5px] font-semibold text-ink-muted">{data.noteLabel}</span>
        <div className="rounded border border-line-strong bg-surface p-1.5 text-[8px] leading-tight text-ink-subtle">
          {data.notePlaceholder}
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-x-2 rounded-md border border-line bg-paper/80 px-2 py-1.5 text-[9px]">
        <span className="font-semibold text-ink">{data.summaryQty}</span>
        <span className="text-ink-muted">
          {data.summaryValueLabel} <strong className="font-bold text-ink">{data.summaryValue}</strong>
        </span>
      </div>

      <div className="flex items-center gap-1.5 pt-0.5">
        <span className="flex min-h-7 flex-1 items-center justify-center px-1 py-1 text-center leading-tight rounded-md border border-line-strong bg-surface text-[10px] font-semibold text-ink">
          {data.cancel}
        </span>
        <span className="flex min-h-7 flex-1 items-center justify-center px-1 py-1 text-center leading-tight rounded-md bg-primary text-[10px] font-bold text-white">
          {data.submit}
        </span>
      </div>
    </div>
  );
}

function NotificationMock() {
  const data = STEP_CARDS.deliver;
  return (
    <div className="flex w-full flex-col gap-2 rounded-md border border-line bg-surface p-2.5 text-xs">
      <span className="text-xs font-bold text-ink">{data.title}</span>
      <div className="flex flex-col divide-y divide-line">
        {data.items.map((item, idx) => (
          <div key={idx} className={`flex flex-col gap-1.5 ${idx > 0 ? "pt-2" : "pb-2"}`}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-2">
              <span className="text-[11px] font-bold text-ink">{item.title}</span>
              <span className="text-[9px] text-ink-muted">{item.time}</span>
            </div>
            <p className="text-[10px] leading-tight text-ink-muted">{item.message}</p>
            <span className="self-start rounded-md border border-line-strong bg-surface px-2.5 py-1 text-[10px] font-semibold text-ink shadow-2xs">
              {item.action}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function InvoiceMock() {
  const data = STEP_CARDS.monitor;
  return (
    <div className="flex w-full flex-col gap-2 rounded-md border border-line bg-surface p-2.5 text-xs">
      <div className="flex flex-col gap-1 border-b border-line pb-1.5">
        <div className="flex items-center justify-between">
          <span className="text-[12px] font-bold text-ink">{data.invoiceNo}</span>
          <span className="text-xs leading-none text-ink-subtle">✕</span>
        </div>
        <div>
          <span className="rounded bg-status-belum-lunas/10 px-1.5 py-0.5 text-[9px] font-extrabold text-status-belum-lunas">
            {data.statusBadge}
          </span>
        </div>
        <span className="text-[9px] leading-tight text-ink-muted">{data.meta}</span>
      </div>

      <div className="flex flex-wrap justify-between gap-x-2 gap-y-1 rounded-md border border-line bg-paper/60 p-1.5 text-[9px]">
        <div className="flex flex-col">
          <span className="text-ink-muted">Diterima oleh:</span>
          <span className="font-bold text-ink">{data.receivedBy}</span>
        </div>
        <div className="flex flex-col text-right">
          <span className="text-ink-muted">Mitra / Pemilik:</span>
          <span className="font-bold text-ink">{data.partner}</span>
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <span className="text-[8.5px] font-bold tracking-wider text-ink-subtle uppercase">
          {data.sectionTitle}
        </span>
        <div className="overflow-hidden rounded border border-line bg-surface">
          <table className="w-full border-collapse text-[9px]">
            <thead>
              <tr className="border-b border-line bg-paper/50 text-[8px] font-bold tracking-wider text-ink-subtle uppercase">
                <th className="px-2 py-1 text-left font-bold">PRODUK</th>
                <th className="px-1.5 py-1 text-right font-bold whitespace-nowrap">TERJUAL</th>
                <th className="px-2 py-1 text-right font-bold whitespace-nowrap">SUBTOTAL</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {data.items.map((item) => (
                <tr key={item.variant}>
                  <td className="px-2 py-1 text-left">
                    <div className="flex flex-col min-w-0">
                      <span className="font-semibold leading-tight text-ink">{item.variant}</span>
                      <span className="text-[8px] leading-tight text-ink-muted">{item.desc}</span>
                    </div>
                  </td>
                  <td className="px-1.5 py-1 text-right font-mono font-bold text-ink whitespace-nowrap align-middle">
                    {item.sold}
                  </td>
                  <td className="px-2 py-1 text-right font-mono font-semibold text-ink whitespace-nowrap align-middle">
                    {item.subtotal}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex flex-col gap-0.5 rounded-md border border-line bg-paper/60 p-2 text-[9px]">
        <div className="flex flex-wrap items-baseline justify-between gap-x-2">
          <span className="font-bold text-ink">{data.totalLabel}</span>
          <span className="font-mono text-[11px] font-extrabold text-primary">{data.totalValue}</span>
        </div>
        <div className="flex flex-wrap items-baseline justify-between gap-x-2 text-ink-muted">
          <span>{data.paidLabel}</span>
          <span className="font-mono font-semibold text-ink">{data.paidValue}</span>
        </div>
        <div className="flex flex-wrap items-baseline justify-between gap-x-2 border-t border-line/60 pt-0.5">
          <span className="font-semibold text-ink">{data.remainingLabel}</span>
          <span className="font-mono text-[10px] font-bold text-status-belum-lunas">
            {data.remainingValue}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-1.5 pt-0.5">
        <span className="flex h-7 items-center justify-center gap-1 rounded-md bg-[#cbfbf0] text-[10px] font-bold text-[#0f766e]">
          {data.whatsapp}
        </span>
        <span className="flex h-7 items-center justify-center gap-1 rounded-md bg-primary text-[10px] font-bold text-white">
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-3 shrink-0"
          >
            <path d="M6 9V2h12v7M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
            <path d="M6 14h12v8H6z" />
          </svg>
          <span className="truncate">{data.exportPdf}</span>
        </span>
      </div>
    </div>
  );
}

/* =========================================================================
   WARUNG MOCKS
   ========================================================================= */

function ShopStatusMock() {
  const data = STEP_CARDS.accepts;
  return (
    <div className="flex w-full flex-col gap-2.5 rounded-md border border-line bg-surface p-3 text-xs">
      <div className="flex items-start gap-2.5">
        <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-ink text-white">
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-4">
            <rect width="20" height="14" x="2" y="3" rx="2" />
            <line x1="2" x2="22" y1="10" y2="10" />
          </svg>
        </span>
        <div className="flex min-w-0 flex-1 flex-col gap-1">
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-[12px] font-bold text-ink">{data.shopName}</span>
            <span className="rounded-full bg-paper px-1.5 py-0.5 text-[8.5px] font-semibold text-ink-muted">
              {data.category}
            </span>
          </div>
          <div>
            <span className="inline-flex items-center gap-1 rounded-full border border-status-lunas/30 bg-status-lunas/10 px-2 py-0.5 text-[8.5px] font-bold text-status-lunas">
              <span className="size-1.5 rounded-full bg-status-lunas" />
              {data.statusBadge}
            </span>
          </div>
          <p className="text-[9px] leading-tight text-ink-muted">{data.address}</p>
          <span className="font-mono text-[8px] text-ink-subtle">{data.coords}</span>
        </div>
      </div>

      <div className="pt-0.5">
        <span className="inline-flex min-h-7 items-center justify-center py-1 text-center leading-tight rounded-md border border-line-strong bg-surface px-2.5 text-[9.5px] font-semibold text-ink shadow-2xs">
          {data.action}
        </span>
      </div>
    </div>
  );
}

function ReviewCardMock() {
  const data = STEP_CARDS.review;
  return (
    <div className="flex w-full flex-col gap-2 rounded-md border border-line bg-surface p-2.5 text-xs">
      <div className="flex items-center gap-1 border-b border-line overflow-hidden pb-1.5 text-[8.5px]">
        <span className="rounded-full border border-line bg-paper px-1.5 py-0.5 text-ink-muted whitespace-nowrap">
          Semua 1
        </span>
        <span className="flex items-center gap-1 rounded-full bg-ink px-2 py-0.5 font-bold text-white whitespace-nowrap">
          <span>Menunggu Approval</span>
          <span className="flex size-3.5 items-center justify-center rounded-full bg-[#f59e0b] text-[7.5px] font-extrabold text-ink">
            1
          </span>
        </span>
        <span className="rounded-full border border-line bg-paper px-1.5 py-0.5 text-ink-muted whitespace-nowrap">
          Disetujui / Aktif
        </span>
      </div>

      <div className="flex flex-col gap-1.5 rounded border border-line bg-paper/40 p-2">
        <div className="flex items-start justify-between gap-1">
          <span className="text-[11px] font-bold text-ink leading-tight">{data.title}</span>
          <span className="rounded-full border border-status-sebagian/30 bg-status-sebagian/10 px-1.5 py-0.5 text-[8px] font-bold text-status-sebagian whitespace-nowrap">
            {data.statusBadge}
          </span>
        </div>

        <span className="text-[9px] text-ink-muted">{data.meta}</span>

        <div className="rounded border border-line/60 bg-surface px-2 py-1 text-[9.5px] font-semibold text-ink">
          {data.summary}
        </div>

        <div className="flex items-center gap-1.5 pt-1">
          <span className="flex h-6 flex-1 items-center justify-center rounded border border-line-strong bg-surface text-[9.5px] font-semibold text-ink">
            {data.reject}
          </span>
          <span className="flex h-6 flex-1 items-center justify-center rounded bg-primary text-[9.5px] font-bold text-white">
            {data.accept}
          </span>
          <span className="flex h-6 flex-1 items-center justify-center rounded border border-line-strong bg-surface text-[9.5px] font-semibold text-ink">
            {data.detail}
          </span>
        </div>
      </div>
    </div>
  );
}

function ConsignmentDetailMock() {
  const data = STEP_CARDS.sell;
  return (
    <div className="flex w-full flex-col gap-2 rounded-md border border-line bg-surface p-2.5 text-xs">
      <div className="flex flex-col gap-0.5 border-b border-line pb-1.5">
        <div className="flex items-center justify-between">
          <span className="text-[11.5px] font-bold text-ink">{data.partner}</span>
          <span className="text-xs leading-none text-ink-subtle">✕</span>
        </div>
        <span className="text-[9px] text-ink-muted">{data.meta}</span>
      </div>

      <div className="@container">
        <div className="grid gap-1.5 text-[8.5px] @min-[13rem]:grid-cols-2">
          <div className="min-w-0 rounded border border-line bg-paper/60 p-1.5">
            <span className="block text-ink-muted">Pemilik</span>
            <span className="block font-bold break-words text-ink">{data.owner}</span>
          </div>
          <div className="min-w-0 rounded border border-line bg-paper/60 p-1.5">
            <span className="block text-ink-muted">Alamat</span>
            <span className="block font-semibold break-words text-ink">{data.address}</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <span className="text-[9.5px] font-bold text-ink">{data.sectionTitle}</span>
        <div className="flex flex-col gap-1 rounded border border-line bg-paper/40 p-1.5">
          {data.items.map((item) => (
            <div key={item.name} className="flex items-center justify-between gap-1.5 text-[8.5px]">
              <div className="flex min-w-0 items-center gap-1.5">
                <span className="flex size-6 shrink-0 items-center justify-center rounded bg-ink/10 text-[7px] font-bold text-ink">
                  100g
                </span>
                <div className="flex min-w-0 flex-col">
                  <span className="truncate font-semibold text-ink leading-tight">{item.name}</span>
                  <span className="text-[7.5px] text-ink-muted">{item.details}</span>
                </div>
              </div>
              <span className="shrink-0 font-mono font-bold text-ink">{item.price}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-x-2 rounded border border-line bg-paper/80 px-2 py-1 text-[9px]">
        <span className="text-ink-muted">{data.totalLabel}</span>
        <span className="font-mono font-bold text-ink">{data.totalValue}</span>
      </div>

      <div className="grid grid-cols-[auto_1fr] gap-1.5 pt-0.5">
        <span className="flex h-7 items-center justify-center gap-1 rounded border border-line-strong bg-surface px-2.5 text-[9.5px] font-semibold text-ink shadow-2xs">
          WhatsApp
        </span>
        <span className="flex min-h-7 items-center justify-center px-1 py-1 text-center leading-tight rounded bg-primary text-[9.5px] font-bold text-white">
          {data.action}
        </span>
      </div>
    </div>
  );
}

function IssueInvoiceMock() {
  const data = STEP_CARDS.share;
  return (
    <div className="flex w-full flex-col gap-2 rounded-md border border-line bg-surface p-2.5 text-xs">
      <div className="flex flex-col gap-0.5 border-b border-line pb-1.5">
        <div className="flex items-center justify-between">
          <span className="text-[11.5px] font-bold text-ink">{data.title}</span>
          <span className="text-xs leading-none text-ink-subtle">✕</span>
        </div>
        <span className="text-[8.5px] leading-tight text-ink-muted">{data.subtitle}</span>
      </div>

      <div className="flex flex-col gap-1 rounded border border-line bg-paper/60 p-2 text-[9px]">
        <div className="flex flex-wrap items-baseline justify-between gap-x-2">
          <span className="text-ink-muted">Mitra Penitip:</span>
          <span className="min-w-0 truncate font-bold text-ink">{data.partner}</span>
        </div>
        <div className="flex flex-wrap items-baseline justify-between gap-x-2">
          <span className="text-ink-muted">Total Barang Terjual:</span>
          <span className="font-mono font-bold text-ink">{data.sold}</span>
        </div>
        <div className="flex flex-wrap items-baseline justify-between gap-x-2">
          <span className="text-ink-muted">Total Barang Retur:</span>
          <span className="font-mono font-bold text-status-belum-lunas">{data.returned}</span>
        </div>
        <div className="flex flex-wrap items-baseline justify-between gap-x-2 border-t border-line/60 pt-1">
          <span className="font-bold text-ink">Total Modal / Tagihan Terjual:</span>
          <span className="font-mono text-[11px] font-extrabold text-primary">{data.total}</span>
        </div>
      </div>

      <div className="flex flex-col gap-0.5 text-[8.5px]">
        <span className="font-semibold text-ink-muted">{data.statusLabel}</span>
        <div className="flex items-center justify-between gap-2 rounded border border-line-strong bg-surface px-2 py-1 text-[9px] font-medium text-ink">
          <span className="min-w-0">{data.statusValue}</span>
          <span className="text-ink-subtle">▾</span>
        </div>
      </div>

      <div className="flex flex-col gap-0.5 text-[8.5px]">
        <span className="font-semibold text-ink-muted">{data.methodLabel}</span>
        <div className="flex items-center justify-between gap-2 rounded border border-line-strong bg-surface px-2 py-1 text-[9px] font-medium text-ink">
          <span className="min-w-0">{data.methodValue}</span>
          <span className="text-ink-subtle">▾</span>
        </div>
      </div>

      <div className="flex items-center gap-1.5 pt-0.5">
        <span className="flex min-h-7 items-center justify-center py-1 text-center leading-tight rounded border border-line-strong bg-surface px-2 text-[9px] font-semibold text-ink">
          {data.back}
        </span>
        <span className="flex min-h-7 flex-1 items-center justify-center px-1 py-1 text-center leading-tight rounded bg-primary text-[9.5px] font-bold text-white">
          {data.submit}
        </span>
      </div>
    </div>
  );
}

const BODY: Record<StepCardId, ReactNode> = {
  product: <ProductFormMock />,
  search: <MapStep />,
  apply: <ApplyModalMock />,
  deliver: <NotificationMock />,
  monitor: <InvoiceMock />,

  shop: <ShopFormMock />,
  accepts: <ShopStatusMock />,
  review: <ReviewCardMock />,
  sell: <ConsignmentDetailMock />,
  share: <IssueInvoiceMock />,
};

export function StepVisual({ id, i }: { id: StepCardId; i: number }) {
  return (
    <StepCard label={STEP_CARDS[id].label} i={i}>
      {BODY[id]}
    </StepCard>
  );
}
