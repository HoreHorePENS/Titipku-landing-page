"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Animasi hero: cari warung → ajukan titip → disetujui.
 *
 * Mulai saat mockup HP ±50% terlihat. Satu siklus (ms sejak siklus mulai):
 *   0          reset: kartu warung & kartu permintaan memudar, cap hilang
 *   500–1650   daftar warung muncul satu per satu (jeda 250 ms)
 *   2000       Warung Bu Sri dipilih (bingkai teal), tombol "Ajukan titip" diketuk
 *   2800       kartu permintaan muncul di HP warung, status "Menunggu"
 *   4000       tombol "Terima" diketuk
 *   4300       status → "Disetujui", cap DISETUJUI distempel (350 ms)
 *   4650–8650  ditahan 4 detik, lalu siklus berikutnya
 * Maksimal 3 siklus, lalu berhenti di keadaan akhir.
 *
 * Komponen ini hanya mengatur atribut data-m-* di pembungkus; tampilannya
 * diatur CSS (globals.css, "Hero: cari warung"). Server render / JS mati /
 * prefers-reduced-motion: tanpa atribut → mockup tampil di keadaan akhir.
 */

const T = { list: 500, select: 2000, req: 2800, accept: 4000, stamp: 4300, cycle: 8650 };
const MAX_CYCLES = 3;

type Flags = { list: boolean; select: boolean; req: boolean; accept: boolean; stamp: boolean };

const flagsAt = (t: number): Flags => ({
  list: t >= T.list,
  select: t >= T.select,
  req: t >= T.req,
  accept: t >= T.accept,
  stamp: t >= T.stamp,
});

const same = (a: Flags, b: Flags) =>
  a.list === b.list &&
  a.select === b.select &&
  a.req === b.req &&
  a.accept === b.accept &&
  a.stamp === b.stamp;

export function MatchDemo({ children }: { children: ReactNode }) {
  const [flags, setFlags] = useState<Flags | null>(null);
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
      const next = flagsAt(t);
      setFlags((prev) => (prev && same(prev, next) ? prev : next));
      // Siklus terakhir: berhenti setelah cap selesai distempel.
      if (cycle >= MAX_CYCLES - 1 && t >= T.stamp + 350) return;
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
    // Dua mockup (desktop & mobile); yang tersembunyi tidak pernah "terlihat".
    root.querySelectorAll("[data-shop-phone]").forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
  }, []);

  const onOff = (v: boolean) => (v ? "on" : "off");
  const attrs = flags
    ? {
        "data-m-list": onOff(flags.list),
        "data-m-select": onOff(flags.select),
        "data-m-req": onOff(flags.req),
        "data-m-accept": onOff(flags.accept),
        "data-m-stamp": onOff(flags.stamp),
      }
    : {};

  return (
    <div ref={rootRef} data-match="" {...attrs}>
      {children}
    </div>
  );
}
