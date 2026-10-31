"use client";

import { useEffect, useRef } from "react";

const INTERACTIVE =
  'a,button,summary,input,textarea,select,label,[role="button"],.glow-card';

/**
 * Fine-pointer (mouse/trackpad) cursor follower: a dot that tracks the cursor
 * exactly plus a softly lagging ring that swells over interactive elements and
 * shrinks on press. Clicks emit a ripple. The native cursor is left visible,
 * so nothing is hidden from users. Disabled on touch and for reduced motion.
 */
export function CursorFx() {
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ring = ringRef.current;
    const dot = dotRef.current;
    if (!fine || reduced || !ring || !dot) return;

    let tx = 0;
    let ty = 0;
    let rx = 0;
    let ry = 0;
    let raf = 0;
    let seen = false;

    const loop = () => {
      rx += (tx - rx) * 0.18;
      ry += (ty - ry) * 0.18;
      ring.style.transform = `translate3d(${rx}px,${ry}px,0) translate(-50%,-50%)`;
      if (Math.abs(tx - rx) < 0.1 && Math.abs(ty - ry) < 0.1) {
        raf = 0;
        return;
      }
      raf = requestAnimationFrame(loop);
    };

    const onMove = (e: PointerEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      dot.style.transform = `translate3d(${tx}px,${ty}px,0) translate(-50%,-50%)`;
      if (!seen) {
        seen = true;
        rx = tx;
        ry = ty;
      }
      ring.classList.add("is-visible");
      dot.classList.add("is-visible");
      const t = (e.target as Element | null)?.closest?.(INTERACTIVE);
      ring.classList.toggle("is-hover", Boolean(t));
      if (!raf) raf = requestAnimationFrame(loop);
    };

    const onDown = (e: PointerEvent) => {
      ring.classList.add("is-down");
      const r = document.createElement("div");
      r.className = "click-ripple";
      r.style.left = `${e.clientX}px`;
      r.style.top = `${e.clientY}px`;
      r.addEventListener("animationend", () => r.remove());
      document.body.appendChild(r);
    };
    const onUp = () => ring.classList.remove("is-down");
    const onLeave = () => {
      ring.classList.remove("is-visible");
      dot.classList.remove("is-visible");
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerdown", onDown, { passive: true });
    window.addEventListener("pointerup", onUp, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      document.documentElement.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <>
      <div ref={ringRef} aria-hidden="true" className="cursor-ring" />
      <div ref={dotRef} aria-hidden="true" className="cursor-dot" />
    </>
  );
}
