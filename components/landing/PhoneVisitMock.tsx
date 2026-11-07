/**
 * Mockup HP statis berisi layar "Catat Kunjungan" (data contoh Warung Bu Sri,
 * 27 Okt). Ukuran asli 316 × 636 px; atur skala lewat pembungkus.
 * Seluruh isi bersifat dekoratif untuk pembaca layar; deskripsinya diberikan
 * lewat `label`.
 */

import fs from "node:fs";
import path from "node:path";
import Image from "next/image";

/**
 * Foto produk dari /public. Foto hanya dipakai jika file-nya ada saat build;
 * jika belum ada, tetap tampil kotak placeholder berarsir.
 * TODO(foto): tambahkan public/landing/produk/original.jpg dan balado.jpg.
 */
function photoIfExists(src: string): string | undefined {
  return fs.existsSync(path.join(process.cwd(), "public", src)) ? src : undefined;
}

type Product = {
  name: string;
  previous: number;
  remaining: number;
  returned?: number;
  sold: number;
  amount: string;
  newStock?: number;
  suggestion?: string;
  photo?: string;
};

export const PRODUCTS: Product[] = [
  {
    name: "Keripik Pisang Original 100 g",
    previous: 25,
    remaining: 6,
    returned: 2,
    sold: 17,
    amount: "Rp51.000",
    newStock: 18,
    suggestion: "Saran: 18 (laku ±3/hari)",
    photo: photoIfExists("/landing/produk/original.jpg"),
  },
  {
    name: "Keripik Pisang Balado 100 g",
    previous: 20,
    remaining: 4,
    sold: 16,
    amount: "Rp56.000",
    photo: photoIfExists("/landing/produk/balado.jpg"),
  },
];

const DEFAULT_LABEL =
  "Layar Catat Kunjungan Titipku untuk Warung Bu Sri, Rungkut: Keripik Pisang Original sisa 6, retur 2, terjual 17 senilai Rp51.000; Keripik Pisang Balado terjual 16 senilai Rp56.000; tagihan Rp143.000.";

function Stepper({ value }: { value: number }) {
  return (
    <span className="flex items-center rounded-md border border-line-strong">
      <span className="flex size-[30px] items-center justify-center text-base text-primary">
        −
      </span>
      <span className="w-[30px] border-x border-line text-center font-mono text-[13px] leading-[30px] font-semibold tabular-nums">
        {value}
      </span>
      <span className="flex size-[30px] items-center justify-center text-base text-primary">
        +
      </span>
    </span>
  );
}

function Row({ label, value }: { label: string; value: number }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-[11px] font-semibold">{label}</span>
      <Stepper value={value} />
    </div>
  );
}

/**
 * Kartu produk layar Catat Kunjungan. `compact` menghilangkan baris
 * "Titip baru" dan saran (dipakai di kartu langkah "Cara kerja").
 */
export function ProductCard({ p, compact = false }: { p: Product; compact?: boolean }) {
  return (
    <div className="flex flex-col gap-2 rounded-lg border border-line bg-surface p-2.5">
      <div className="flex items-center gap-2">
        {p.photo ? (
          <Image
            src={p.photo}
            alt={p.name}
            width={34}
            height={34}
            className="size-[34px] shrink-0 rounded-md object-cover"
          />
        ) : (
          <div className="hatch-xs size-[34px] shrink-0 rounded-md" />
        )}
        <div className="flex flex-col">
          <span className="text-xs font-bold">{p.name}</span>
          <span className="text-[10px] text-ink-subtle">
            Titipan sebelumnya{" "}
            <span className="font-mono text-ink tabular-nums">{p.previous}</span>
          </span>
        </div>
      </div>
      <Row label="Sisa di rak" value={p.remaining} />
      {p.returned !== undefined && <Row label="Retur/basi" value={p.returned} />}
      <div className="flex justify-between rounded-md bg-primary-soft px-2 py-1.5 text-[11px] font-bold text-primary">
        <span>
          Terjual <span className="font-mono tabular-nums">{p.sold}</span>
        </span>
        <span className="font-mono tabular-nums">{p.amount}</span>
      </div>
      {!compact && p.newStock !== undefined && <Row label="Titip baru" value={p.newStock} />}
      {!compact && p.suggestion && (
        <span className="text-[10px] font-semibold text-primary underline">
          {p.suggestion}
        </span>
      )}
    </div>
  );
}

export function PhoneVisitMock({ label = DEFAULT_LABEL }: { label?: string }) {
  return (
    <div role="img" aria-label={label} className="h-[636px] w-[316px]">
      <div
        aria-hidden="true"
        className="flex h-[620px] w-[300px] flex-col overflow-hidden rounded-[36px] border-8 border-ink bg-paper font-sans text-ink box-content select-none"
      >
        <div className="flex justify-between px-5 pt-2.5 pb-0.5 font-mono text-[10px] font-medium">
          <span>10.31</span>
          <span>4G ▪▪▫▫</span>
        </div>
        <div className="flex flex-col gap-px border-b border-line bg-surface px-3.5 pt-2 pb-2.5">
          <span className="text-[15px] font-extrabold">Warung Bu Sri · Rungkut</span>
          <span className="text-[11px] text-ink-subtle">Kunjungan terakhir 20 Okt</span>
        </div>
        <div className="flex flex-1 flex-col gap-2.5 overflow-hidden p-2.5">
          {PRODUCTS.map((p) => (
            <ProductCard key={p.name} p={p} />
          ))}
        </div>
        <div className="flex items-center justify-between border-t border-line bg-surface px-3 pt-2.5 pb-3.5">
          <div className="flex flex-col">
            <span className="text-[10px] text-ink-subtle">Tagihan</span>
            <span className="font-mono text-base font-semibold tabular-nums">
              Rp143.000
            </span>
          </div>
          <span className="flex h-[38px] items-center rounded-md bg-primary px-5 text-[13px] font-bold text-white">
            Lanjut
          </span>
        </div>
      </div>
    </div>
  );
}
