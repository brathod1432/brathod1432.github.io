"use client";

import { useEffect } from "react";

/**
 * Pointer-driven micro-interactions, all from one rAF-throttled listener:
 *  - `.tilt-card`      3D tilt toward the cursor
 *  - `[data-magnetic]` buttons drift toward the cursor when it is near
 *  - `[data-parallax]` layers shift opposite the cursor (value = strength)
 * Mouse/trackpad only; skipped for touch and reduced motion. Renders nothing.
 */
export function PointerEffects() {
  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;

    let raf = 0;
    let last: PointerEvent | null = null;
    let tilted: HTMLElement | null = null;

    const resetTilt = (el: HTMLElement) => {
      el.style.transform = "";
      el.style.transition = "";
    };

    const run = () => {
      raf = 0;
      const e = last;
      if (!e) return;

      // Parallax layers
      const px = e.clientX / window.innerWidth - 0.5;
      const py = e.clientY / window.innerHeight - 0.5;
      document.querySelectorAll<HTMLElement>("[data-parallax]").forEach((el) => {
        const k = parseFloat(el.dataset.parallax || "10");
        el.style.transform = `translate3d(${(-px * k * 2).toFixed(1)}px,${(-py * k * 2).toFixed(1)}px,0)`;
      });

      // Magnetic buttons
      document.querySelectorAll<HTMLElement>("[data-magnetic]").forEach((el) => {
        const r = el.getBoundingClientRect();
        const dx = e.clientX - (r.left + r.width / 2);
        const dy = e.clientY - (r.top + r.height / 2);
        const reach = Math.max(r.width, r.height) * 0.9;
        if (Math.hypot(dx, dy) < reach) {
          el.style.transition = "transform 120ms ease-out";
          el.style.transform = `translate3d(${(dx * 0.25).toFixed(1)}px,${(dy * 0.3).toFixed(1)}px,0) scale(1.04)`;
          el.dataset.magActive = "1";
        } else if (el.dataset.magActive) {
          el.style.transform = "";
          el.style.transition = "";
          delete el.dataset.magActive;
        }
      });

      // Card tilt
      const card = (e.target as HTMLElement | null)?.closest?.<HTMLElement>(".tilt-card") ?? null;
      if (tilted && tilted !== card) resetTilt(tilted);
      if (card) {
        const r = card.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        card.style.transition =
          "transform 90ms ease-out, border-color .3s, background-color .3s, box-shadow .3s";
        card.style.transform = `perspective(900px) translateY(-6px) rotateX(${(-y * 7).toFixed(2)}deg) rotateY(${(x * 9).toFixed(2)}deg)`;
        tilted = card;
      } else {
        tilted = null;
      }
    };

    const onMove = (e: PointerEvent) => {
      last = e;
      if (!raf) raf = requestAnimationFrame(run);
    };
    const onLeave = () => {
      if (tilted) resetTilt(tilted);
      tilted = null;
      document.querySelectorAll<HTMLElement>("[data-magnetic]").forEach((el) => {
        el.style.transform = "";
        el.style.transition = "";
        delete el.dataset.magActive;
      });
      document.querySelectorAll<HTMLElement>("[data-parallax]").forEach((el) => {
        el.style.transform = "";
      });
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return null;
}
