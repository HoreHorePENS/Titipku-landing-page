"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

// Toggles data-m-* flags; globals.css animates them. With no JS or reduced motion
// no flags are set, so the mockups simply show their final state.

// The map view shows until `list`; the list view then takes over for the rest of the cycle.
const TIMING = { list: 2600, select: 4100, req: 4900, accept: 6100, stamp: 6400, cycle: 10750 };
const MAX_CYCLES = 3;
const STAMP_MS = 350;

type Flags = { list: boolean; select: boolean; req: boolean; accept: boolean; stamp: boolean };

const flagsAt = (t: number): Flags => ({
  list: t >= TIMING.list,
  select: t >= TIMING.select,
  req: t >= TIMING.req,
  accept: t >= TIMING.accept,
  stamp: t >= TIMING.stamp,
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
      const cycle = Math.floor(elapsed / TIMING.cycle);
      const t = elapsed - cycle * TIMING.cycle;
      const next = flagsAt(t);
      setFlags((prev) => (prev && same(prev, next) ? prev : next));
      if (cycle >= MAX_CYCLES - 1 && t >= TIMING.stamp + STAMP_MS) return;
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
    // Desktop and mobile mockups; the hidden one never intersects.
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
