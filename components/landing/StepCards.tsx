import type { ReactNode } from "react";
import { PRODUCTS, ProductCard } from "./PhoneVisitMock";

/**
 * Kartu visual mini untuk tiap langkah "Cara kerja" (komponen statis).
 * Isi kartu dekoratif untuk pembaca layar; angka pentingnya diringkas di
 * `aria-label`. Tinggi ketiga kartu disamakan oleh grid di HowItWorksSection.
 */
function StepCard({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div role="img" aria-label={label} className="h-full max-w-[440px] min-w-0 lg:max-w-none">
      <div
        aria-hidden="true"
        className="flex h-full flex-col justify-center rounded-lg border border-line bg-paper p-3 select-none md:p-4"
      >
        {children}
      </div>
    </div>
  );
}

function Mono({ children }: { children: ReactNode }) {
  return <span className="shrink-0 font-mono tabular-nums">{children}</span>;
}

/** Langkah 1: potongan kartu produk dari layar Catat Kunjungan. */
export function CountStepCard() {
  return (
    <StepCard label="Contoh: Keripik Pisang Original, sisa di rak 6, retur 2, terjual 17 senilai Rp51.000.">
      <ProductCard p={PRODUCTS[0]} compact />
    </StepCard>
  );
}

/** Langkah 2: blok bergaya kuitansi. */
export function BillStepCard() {
  return (
    <StepCard label="Contoh: tagihan kunjungan ini Rp143.000 ditambah sisa utang sebelumnya Rp40.000, total harus dibayar Rp183.000.">
      <div className="flex flex-col gap-2.5 rounded-md border border-line bg-surface p-3.5 text-[13px]">
        <div className="flex items-baseline justify-between gap-3">
          <span>Tagihan kunjungan ini</span>
          <Mono>Rp143.000</Mono>
        </div>
        <div className="flex items-baseline justify-between gap-3 text-ink-muted">
          <span>Sisa utang sebelumnya</span>
          <Mono>Rp40.000</Mono>
        </div>
        <div className="border-t border-dashed border-line-dashed" />
        <div className="flex items-baseline justify-between gap-3">
          <span className="font-bold">Total harus dibayar</span>
          <span className="shrink-0 font-mono text-lg font-semibold tabular-nums">Rp183.000</span>
        </div>
      </div>
    </StepCard>
  );
}

/** Langkah 3: gelembung chat bergaya WhatsApp (tanpa logo). */
export function NotaStepCard() {
  return (
    <StepCard label="Contoh pesan WhatsApp ke Bu Sri berisi nota titipan 27 Okt 2026 dengan tagihan Rp143.000 dan tautan nota, terkirim pukul 10.42.">
      <div className="ml-auto flex max-w-[92%] flex-col gap-1.5 rounded-lg rounded-tr-sm bg-chat-bubble px-3 py-2.5 text-[13px] leading-[19px]">
        <p>
          Halo Bu Sri, berikut nota titipan Keripik Pisang Rina <Mono>27</Mono> Okt{" "}
          <Mono>2026</Mono>. Tagihan <Mono>Rp143.000</Mono>.
        </p>
        <span className="font-semibold break-all text-primary underline">titipku.app/nota/q8Zt3…</span>
        <span className="self-end font-mono text-[11px] text-ink-muted">10.42 ✓✓</span>
      </div>
    </StepCard>
  );
}
