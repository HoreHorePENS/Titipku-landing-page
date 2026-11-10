import type { ReactNode } from "react";

type Tone = "basi" | "belum-bayar" | "retur";

const TONE: Record<Tone, string> = {
  basi: "border-status-sebagian",
  "belum-bayar": "border-status-belum-lunas",
  retur: "border-status-sebagian",
};

function Num({ children }: { children: ReactNode }) {
  return <span className="font-mono tabular-nums">{children}</span>;
}

const ALERTS: { tone: Tone; text: ReactNode }[] = [
  {
    tone: "basi",
    text: (
      <>
        <Num>6</Num> bungkus di Warung Bu Sri kedaluwarsa dalam <Num>3</Num> hari
      </>
    ),
  },
  {
    tone: "belum-bayar",
    text: (
      <>
        Nota Warung Bu Sri belum lunas
      </>
    ),
  },
  { tone: "retur", text: "Toko Kelontong Pak Joko: 1 bungkus retur" },
];

const LABEL =
  "Ringkasan pemilik: uang masih di warung Rp132.500 di 2 warung, penjualan November Rp264.500. Perlu perhatian: 6 bungkus di Warung Bu Sri kedaluwarsa dalam 3 hari; nota Warung Bu Sri belum lunas; Toko Kelontong Pak Joko 1 bungkus retur.";

export function DashboardMock() {
  return (
    <div role="img" aria-label={LABEL} className="w-full max-w-[520px]">
      <div
        aria-hidden="true"
        className="flex flex-col gap-5 rounded-lg border border-line bg-surface p-5 select-none md:p-6"
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="flex flex-col gap-1">
            <span className="text-xs font-semibold text-ink-subtle">
              Uang masih di warung
            </span>
            <span className="font-mono text-2xl font-semibold tabular-nums md:text-[28px]">
              Rp132.500
            </span>
            <span className="text-[13px] text-ink-muted">
              <Num>2</Num> warung
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-xs font-semibold text-ink-subtle">Penjualan November</span>
            <span className="font-mono text-2xl font-semibold tabular-nums md:text-[28px]">
              Rp264.500
            </span>
          </div>
        </div>

        <div className="flex flex-col">
          <span className="pb-2 text-xs font-bold tracking-[0.05em] text-ink-subtle uppercase">
            Perlu perhatian
          </span>
          <ul className="flex flex-col gap-2">
            {ALERTS.map((alert, i) => (
              <li key={i} className={`border-l-2 py-1 pl-3 text-sm ${TONE[alert.tone]}`}>
                {alert.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
