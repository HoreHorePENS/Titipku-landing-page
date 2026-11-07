"use client";

import { useEffect } from "react";

/**
 * Animasi masuk & interaksi kecil landing page (tanpa library).
 *
 * - [data-reveal]: muncul halus saat pertama kali terlihat (sekali saja).
 * - [data-steps]: linimasa section "Cara kerja" (garis → kartu 1, 2, 3 →
 *   indikator mengetik → gelembung WhatsApp). Detailnya di globals.css.
 * - details[data-faq]: transisi saat accordion ditutup.
 *
 * Prinsip: HTML server selalu menampilkan keadaan akhir. Elemen baru
 * disembunyikan oleh JS setelah hidrasi, dan hanya jika masih di bawah layar,
 * jadi tidak ada kedipan dan konten tetap terlihat bila JS gagal dimuat.
 * Dengan prefers-reduced-motion, tidak ada yang disembunyikan/dianimasikan.
 */

const STAGGER_MS = 70; // jeda antar item yang muncul bersamaan (maks. 80 ms)
const FAQ_CLOSE_MS = 150;

export function MotionController() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // FAQ: tunda penutupan sebentar supaya isi jawaban sempat memudar.
    const onClick = (event: MouseEvent) => {
      const summary = (event.target as Element | null)?.closest("details[data-faq] > summary");
      if (!summary || reduce) return;
      const details = summary.parentElement as HTMLDetailsElement;
      if (!details.open) return;
      event.preventDefault();
      if (details.dataset.closing) return;
      details.dataset.closing = "true";
      window.setTimeout(() => {
        details.open = false;
        delete details.dataset.closing;
      }, FAQ_CLOSE_MS);
    };
    document.addEventListener("click", onClick);

    if (reduce || !("IntersectionObserver" in window)) {
      return () => document.removeEventListener("click", onClick);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        visible.forEach((entry, i) => {
          const el = entry.target as HTMLElement;
          observer.unobserve(el);
          if (el.dataset.steps !== undefined) {
            el.dataset.steps = "play";
          } else {
            el.style.setProperty("--reveal-delay", `${Math.min(i, 4) * STAGGER_MS}ms`);
            el.dataset.reveal = "shown";
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 },
    );

    // Hanya elemen yang belum terlihat yang disiapkan untuk animasi.
    const belowFold = (el: Element) => el.getBoundingClientRect().top > window.innerHeight;
    document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => {
      if (!belowFold(el)) return;
      el.dataset.reveal = "hidden";
      observer.observe(el);
    });
    document.querySelectorAll<HTMLElement>("[data-steps]").forEach((el) => {
      if (!belowFold(el)) return;
      el.dataset.steps = "hidden";
      observer.observe(el);
    });

    return () => {
      document.removeEventListener("click", onClick);
      observer.disconnect();
    };
  }, []);

  return null;
}
