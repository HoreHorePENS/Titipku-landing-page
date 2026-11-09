"use client";

import { useEffect } from "react";

// The server HTML is the final state. JS only hides elements still below the fold,
// so nothing flashes and content survives a failed JS load.

const STAGGER_MS = 100;
const FAQ_CLOSE_MS = 150;

export function MotionController() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Delay closing so the answer can fade out first.
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
      { threshold: 0.2 },
    );

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
