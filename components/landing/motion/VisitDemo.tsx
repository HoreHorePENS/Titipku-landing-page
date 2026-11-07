"use client";

import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { STEPPER } from "./stepperStyles";

/**
 * Demo hitung otomatis di mockup HP (hero).
 *
 * Mulai saat mockup ±50% terlihat. Satu siklus (ms sejak siklus mulai):
 *   0–300      reset halus (angka meredup, cap memudar, nilai kembali ke awal)
 *   600–1800   Sisa di rak 25 → 6   (tombol − "diketuk", angka disorot)
 *   1800–2300  Retur/basi 0 → 2     (tombol + "diketuk")
 *   2300–3100  Terjual 0 → 17, Rp0 → Rp51.000, tagihan Rp92.000 → Rp143.000
 *   3100       cap BELUM LUNAS distempel (350 ms)
 *   3450–7450  ditahan 4 detik, lalu siklus berikutnya
 * Maksimal 3 siklus, lalu berhenti di nilai akhir.
 *
 * Server render / JS mati: state awal = nilai akhir (phase "static").
 * prefers-reduced-motion: demo tidak dijalankan sama sekali.
 */

const PREVIOUS = 25; // titipan sebelumnya (Original)
const FINAL = { remaining: 6, returned: 2, sold: 17 };
const PRICE = 3000; // Rp51.000 / 17
const OTHER_ITEMS = 92000; // Balado Rp56.000 + Singkong Pedas Rp36.000

const T = {
  resetValues: 150,
  resetEnd: 300,
  remaining: [600, 1800],
  returned: [1800, 2300],
  sold: [2300, 3100],
  stamp: 3100,
  cycle: 7450, // 3100 + 350 (cap) + 4000 (tahan)
} as const;
const MAX_CYCLES = 3;

type Phase = "static" | "reset" | "pre" | "remaining" | "returned" | "sold" | "hold";
type DemoState = {
  remaining: number;
  returned: number;
  sold: number;
  phase: Phase;
  stamp: "none" | "wait" | "in";
};

const STATIC: DemoState = { ...FINAL, phase: "static", stamp: "none" };

const DemoContext = createContext<DemoState | null>(null);

const easeInOut = (t: number) => (t < 0.5 ? 2 * t * t : 1 - (-2 * t + 2) ** 2 / 2);
const lerp = (t: number, [a, b]: readonly [number, number], from: number, to: number) =>
  Math.round(from + (to - from) * easeInOut(Math.min(1, Math.max(0, (t - a) / (b - a)))));

function stateAt(t: number): DemoState {
  let phase: Phase = "hold";
  if (t < T.resetEnd) phase = "reset";
  else if (t < T.remaining[0]) phase = "pre";
  else if (t < T.remaining[1]) phase = "remaining";
  else if (t < T.returned[1]) phase = "returned";
  else if (t < T.sold[1]) phase = "sold";
  // 150 ms pertama: angka masih nilai akhir (sedang meredup), baru lalu di-reset.
  if (t < T.resetValues) {
    return { ...FINAL, phase, stamp: "wait" };
  }
  return {
    remaining: lerp(t, T.remaining, PREVIOUS, FINAL.remaining),
    returned: lerp(t, T.returned, 0, FINAL.returned),
    sold: lerp(t, T.sold, 0, FINAL.sold),
    phase,
    stamp: t >= T.stamp ? "in" : "wait",
  };
}

export function VisitDemo({ children }: { children: ReactNode }) {
  const [state, setState] = useState<DemoState>(STATIC);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;

    let raf = 0;
    let start = 0;
    const run = (now: number) => {
      if (!start) start = now;
      const elapsed = now - start;
      const cycle = Math.floor(elapsed / T.cycle);
      const t = elapsed - cycle * T.cycle;
      const last = cycle >= MAX_CYCLES - 1;
      const next = stateAt(t);
      setState((prev) =>
        prev.remaining === next.remaining &&
        prev.returned === next.returned &&
        prev.sold === next.sold &&
        prev.phase === next.phase &&
        prev.stamp === next.stamp
          ? prev
          : next,
      );
      // Siklus terakhir: berhenti setelah cap selesai distempel.
      if (last && t >= T.stamp + 350) return;
      raf = requestAnimationFrame(run);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          observer.disconnect();
          raf = requestAnimationFrame(run);
        }
      },
      { threshold: 0.5 },
    );
    root.querySelectorAll("[data-demo-phone]").forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <DemoContext.Provider value={state}>
      <div ref={rootRef}>{children}</div>
    </DemoContext.Provider>
  );
}

/** Format rupiah tanpa bergantung pada locale runtime: 51000 → "Rp51.000". */
export function rupiah(n: number): string {
  return "Rp" + String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

type Field = "remaining" | "returned" | "sold" | "amount" | "total";

const FIELD_PHASE: Record<Field, Phase> = {
  remaining: "remaining",
  returned: "returned",
  sold: "sold",
  amount: "sold",
  total: "sold",
};

function text(s: DemoState, field: Field): string {
  switch (field) {
    case "remaining":
      return String(s.remaining);
    case "returned":
      return String(s.returned);
    case "sold":
      return String(s.sold);
    case "amount":
      return rupiah(s.sold * PRICE);
    case "total":
      return rupiah(OTHER_ITEMS + s.sold * PRICE);
  }
}

function useField(field: Field) {
  const s = useContext(DemoContext) ?? STATIC;
  const active = s.phase === FIELD_PHASE[field];
  return {
    s,
    text: text(s, field),
    attrs:
      s.phase === "static"
        ? {}
        : { "data-hl": active ? "on" : "off", "data-dim": s.phase === "reset" ? "" : undefined },
  };
}

/** Angka yang ikut demo (disorot saat berubah). Di luar <VisitDemo>: nilai akhir. */
export function DemoNumber({ field }: { field: Field }) {
  const { text: value, attrs } = useField(field);
  return <span {...attrs}>{value}</span>;
}

/** Stepper (− angka +) yang ikut demo; tombol terkait tampak diketuk. */
export function DemoStepper({ field }: { field: "remaining" | "returned" }) {
  const { s, text: value, attrs } = useField(field);
  const active = s.phase === FIELD_PHASE[field];
  // Ganti nilai a/b setiap angka berubah supaya animasi "ketuk" diputar ulang.
  const press = active ? (Number(value) % 2 ? "a" : "b") : undefined;
  const pressMinus = field === "remaining" ? press : undefined;
  const pressPlus = field === "returned" ? press : undefined;
  return (
    <span className={STEPPER.root}>
      <span data-press={pressMinus} className={STEPPER.button}>
        −
      </span>
      <span {...attrs} data-hl-fill="" className={STEPPER.value}>
        {value}
      </span>
      <span data-press={pressPlus} className={STEPPER.button}>
        +
      </span>
    </span>
  );
}

/** Cap nota: distempel setelah tagihan selesai dihitung, ikut diulang. */
export function DemoStamp({ className, children }: { className: string; children: ReactNode }) {
  const s = useContext(DemoContext);
  const stamp = !s || s.stamp === "none" ? undefined : s.stamp;
  return (
    <span data-stamp={stamp} className={className}>
      {children}
    </span>
  );
}
