"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

/**
 * Demo hitung otomatis di hero (sekali, ±2,5 detik):
 * Sisa di rak (Original) 25 → 6, lalu Retur/basi 0 → 2. Terjual, nominal, dan
 * tagihan dihitung dari angka itu, persis seperti aplikasinya. Setelah selesai,
 * cap "BELUM LUNAS" di nota distempel.
 *
 * Server render & JS mati: state awal = nilai akhir (phase "static"), jadi
 * angka akhir langsung tampil. prefers-reduced-motion: demo tidak dijalankan.
 */

const PREVIOUS = 25; // titipan sebelumnya (Original)
const FINAL_REMAINING = 6;
const FINAL_RETURNED = 2;
const PRICE = 3000; // Rp51.000 / 17
const OTHER_ITEMS = 92000; // Balado Rp56.000 + Singkong Pedas Rp36.000 → tagihan Rp143.000

// Linimasa (ms sejak hidrasi)
const T_REMAINING = [300, 1500] as const;
const T_RETURNED = [1700, 2200] as const;
const T_DONE = 2300;

type Phase = "static" | "running" | "done";
type DemoState = { remaining: number; returned: number; phase: Phase };

const FINAL: DemoState = {
  remaining: FINAL_REMAINING,
  returned: FINAL_RETURNED,
  phase: "static",
};

const DemoContext = createContext<DemoState | null>(null);

const easeOut = (t: number) => 1 - (1 - t) ** 3;
const progress = (t: number, [a, b]: readonly [number, number]) =>
  easeOut(Math.min(1, Math.max(0, (t - a) / (b - a))));

export function VisitDemo({ children }: { children: ReactNode }) {
  const [state, setState] = useState<DemoState>(FINAL);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = now - start;
      const remaining = Math.round(
        PREVIOUS - (PREVIOUS - FINAL_REMAINING) * progress(t, T_REMAINING),
      );
      const returned = Math.round(FINAL_RETURNED * progress(t, T_RETURNED));
      const phase: Phase = t >= T_DONE ? "done" : "running";
      setState((prev) =>
        prev.remaining === remaining && prev.returned === returned && prev.phase === phase
          ? prev
          : { remaining, returned, phase },
      );
      if (phase !== "done") raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return <DemoContext.Provider value={state}>{children}</DemoContext.Provider>;
}

/** Format rupiah tanpa bergantung pada locale runtime: 51000 → "Rp51.000". */
export function rupiah(n: number): string {
  return "Rp" + String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

type Field = "remaining" | "returned" | "sold" | "amount" | "total";

function valueOf(s: DemoState, field: Field): string {
  const sold = PREVIOUS - s.remaining - s.returned;
  const amount = sold * PRICE;
  switch (field) {
    case "remaining":
      return String(s.remaining);
    case "returned":
      return String(s.returned);
    case "sold":
      return String(sold);
    case "amount":
      return rupiah(amount);
    case "total":
      return rupiah(OTHER_ITEMS + amount);
  }
}

/** Angka yang ikut demo. Di luar <VisitDemo> menampilkan nilai akhir. */
export function DemoValue({ field }: { field: Field }) {
  const state = useContext(DemoContext) ?? FINAL;
  return <>{valueOf(state, field)}</>;
}

/** Cap nota yang distempel setelah demo selesai. */
export function DemoStamp({
  className,
  children,
}: {
  className: string;
  children: ReactNode;
}) {
  const state = useContext(DemoContext);
  const stamp =
    !state || state.phase === "static" ? undefined : state.phase === "running" ? "wait" : "in";
  return (
    <span data-stamp={stamp} className={className}>
      {children}
    </span>
  );
}
