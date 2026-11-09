import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import type { ReactNode } from "react";

// Fall back to the hatched placeholder when the photo isn't in /public at build time.
function photoIfExists(src: string): string | undefined {
  return fs.existsSync(path.join(process.cwd(), "public", src)) ? src : undefined;
}

type Product = {
  name: string;
  previous: number;
  remaining: number;
  returned: number;
  sold: number;
  amount: string;
  photo?: string;
};

export const PRODUCT: Product = {
  name: "Keripik Pisang Original 100 g",
  previous: 25,
  remaining: 6,
  returned: 2,
  sold: 17,
  amount: "Rp51.000",
  photo: photoIfExists("/landing/produk/original.webp"),
};

const STEPPER = {
  root: "flex items-center rounded-md border border-line-strong",
  button: "relative flex size-[30px] items-center justify-center text-base text-primary",
  value:
    "w-[30px] border-x border-line text-center font-mono text-[13px] leading-[30px] font-semibold tabular-nums",
};

function Stepper({ value }: { value: ReactNode }) {
  return (
    <span className={STEPPER.root}>
      <span className={STEPPER.button}>−</span>
      <span className={STEPPER.value}>{value}</span>
      <span className={STEPPER.button}>+</span>
    </span>
  );
}

function Row({ label, value }: { label: string; value: ReactNode }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-[11px] font-semibold">{label}</span>
      <Stepper value={value} />
    </div>
  );
}

export function ProductCard({ p }: { p: Product }) {
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
      <Row label="Retur/basi" value={p.returned} />
      <div className="flex justify-between rounded-md bg-primary-soft px-2 py-1.5 text-[11px] font-bold text-primary">
        <span>
          Terjual <span className="font-mono tabular-nums">{p.sold}</span>
        </span>
        <span className="font-mono tabular-nums">{p.amount}</span>
      </div>
    </div>
  );
}
