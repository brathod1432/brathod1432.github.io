"use client";

import { useEffect, useRef, useState } from "react";

// Animates the numeric part of a metric string (e.g. "1,050+", "6+ yrs")
// from 0 to its value when it scrolls into view. Non-numeric parts are kept.
export function CountUp({ value, className = "" }: { value: string; className?: string }) {
  const match = value.match(/^(\D*)([\d,]+)(.*)$/s);
  const prefix = match?.[1] ?? "";
  const numStr = match?.[2] ?? "";
  const suffix = match?.[3] ?? "";
  const target = numStr ? parseInt(numStr.replace(/,/g, ""), 10) : 0;
  const grouped = numStr.includes(",");

  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    // No numeric part, or reduced motion → show final value immediately.
    if (!numStr) return;
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setDisplay(target);
      return;
    }
    const el = ref.current;
    if (!el) return;

    let raf = 0;
    let started = false;
    const run = () => {
      const duration = 1200;
      const start = performance.now();
      const step = (now: number) => {
        const t = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
        setDisplay(Math.round(eased * target));
        if (t < 1) raf = requestAnimationFrame(step);
      };
      raf = requestAnimationFrame(step);
    };

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started) {
            started = true;
            run();
            obs.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => {
      obs.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [numStr, target]);

  if (!numStr) return <span className={className}>{value}</span>;

  const shown = grouped ? display.toLocaleString("en-US") : String(display);
  return (
    <span ref={ref} className={className}>
      {prefix}
      {shown}
      {suffix}
    </span>
  );
}
