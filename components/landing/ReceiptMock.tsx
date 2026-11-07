import type { CSSProperties } from "react";
import { DemoStamp } from "./motion/VisitDemo";

/**
 * Potongan nota kertas statis bercap status pembayaran.
 * - "full": versi desktop (rincian item, 290 px).
 * - "compact": versi mobile (hanya total, 170 px).
 */

export type PaymentStatus = "LUNAS" | "SEBAGIAN" | "BELUM LUNAS";

const STATUS_CLASS: Record<PaymentStatus, string> = {
  LUNAS: "border-status-lunas text-status-lunas",
  SEBAGIAN: "border-status-sebagian text-status-sebagian",
  "BELUM LUNAS": "border-status-belum-lunas text-status-belum-lunas",
};

const ITEMS = [
  { label: "Pisang Original × 17", amount: "51.000" },
  { label: "Pisang Balado × 16", amount: "56.000" },
  { label: "Singkong Pedas × 9", amount: "36.000" },
];

const RECEIPT = {
  seller: "Keripik Pisang Rina",
  number: "TJ-20261027-014",
  date: "27 Okt 2026",
  previousDebt: "40.000",
  total: "Rp183.000",
};

type Props = {
  variant?: "full" | "compact";
  status?: PaymentStatus;
};

/* Cap memakai <DemoStamp>: di dalam <VisitDemo> (hero) cap distempel setelah
   demo hitung selesai; di tempat lain tampil statis. */

export function ReceiptMock({ variant = "full", status = "BELUM LUNAS" }: Props) {
  const compact = variant === "compact";
  const label = `Nota ${RECEIPT.number} dari ${RECEIPT.seller}, total ${RECEIPT.total}, berstatus ${status.toLowerCase()}.`;
  const edge = (
    compact ? { "--edge-w": "10px", "--edge-h": "6px" } : {}
  ) as CSSProperties;

  return (
    <div role="img" aria-label={label} className={compact ? "w-[170px]" : "w-[290px]"}>
      <div aria-hidden="true" className="select-none">
        <div className="receipt-edge-top" style={edge} />
        {compact ? (
          <div className="flex flex-col gap-1.5 bg-surface p-3">
            <span className="text-xs font-extrabold">{RECEIPT.seller}</span>
            <span className="font-mono text-[9px] text-ink-subtle">{RECEIPT.number}</span>
            <div className="border-t border-dashed border-line-dashed" />
            <div className="flex items-baseline justify-between">
              <span className="text-[11px] font-bold">Total</span>
              <span className="font-mono text-sm font-semibold tabular-nums">
                {RECEIPT.total}
              </span>
            </div>
            <DemoStamp
              className={`-rotate-4 self-start rounded border-[1.5px] px-[7px] py-[3px] text-[9px] font-extrabold tracking-[0.1em] ${STATUS_CLASS[status]}`}
            >
              {status}
            </DemoStamp>
          </div>
        ) : (
          <div className="flex flex-col gap-2.5 bg-surface px-5 py-[18px]">
            <div className="flex flex-col gap-0.5">
              <span className="text-[15px] font-extrabold">{RECEIPT.seller}</span>
              <span className="font-mono text-[11px] text-ink-subtle">
                {RECEIPT.number} · {RECEIPT.date}
              </span>
            </div>
            <div className="border-t border-dashed border-line-dashed" />
            <div className="flex flex-col gap-[5px] text-xs">
              {ITEMS.map((item) => (
                <div key={item.label} className="flex justify-between">
                  <span>{item.label}</span>
                  <span className="font-mono tabular-nums">{item.amount}</span>
                </div>
              ))}
              <div className="flex justify-between text-ink-subtle">
                <span>Sisa utang sebelumnya</span>
                <span className="font-mono tabular-nums">{RECEIPT.previousDebt}</span>
              </div>
            </div>
            <div className="border-t border-dashed border-line-dashed" />
            <div className="flex items-baseline justify-between">
              <span className="text-[13px] font-bold">Total</span>
              <span className="font-mono text-xl font-semibold tabular-nums">
                {RECEIPT.total}
              </span>
            </div>
            <DemoStamp
              className={`mt-1 -rotate-4 self-start rounded border-[1.5px] px-2.5 py-1 text-xs font-extrabold tracking-[0.12em] ${STATUS_CLASS[status]}`}
            >
              {status}
            </DemoStamp>
          </div>
        )}
        <div className="receipt-edge-bottom" style={edge} />
      </div>
    </div>
  );
}
