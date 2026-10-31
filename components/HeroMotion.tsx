"use client";

import { useEffect, useRef } from "react";

type Particle = { x: number; y: number; vx: number; vy: number; r: number; ex: number; ey: number };
type Ripple = { x: number; y: number; age: number };

const LINK_DISTANCE = 130;
const MOUSE_RADIUS = 150;

/**
 * Decorative "neural network" backdrop for the hero: drifting nodes joined by
 * faint lines that react to the pointer. Pure canvas, no dependencies.
 * Pauses when off-screen or the tab is hidden, and is skipped entirely for
 * visitors who prefer reduced motion.
 */
export function HeroMotion() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0;
    let h = 0;
    let raf = 0;
    let visible = true;
    let pageVisible = !document.hidden;
    let particles: Particle[] = [];
    let ripples: Ripple[] = [];
    const mouse = { x: -9999, y: -9999 };
    let colA = "115,85,245";
    let colB = "34,211,238";

    const readColors = () => {
      const cs = getComputedStyle(document.documentElement);
      const a = cs.getPropertyValue("--c-accent").trim().split(/\s+/);
      const b = cs.getPropertyValue("--c-accent2").trim().split(/\s+/);
      if (a.length === 3) colA = a.join(",");
      if (b.length === 3) colB = b.join(",");
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.max(1, Math.floor(w * dpr));
      canvas.height = Math.max(1, Math.floor(h * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.round(Math.min(70, Math.max(22, (w * h) / 22000)));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.6 + 0.8,
        ex: 0,
        ey: 0,
      }));
    };

    let tick = 0;
    const frame = () => {
      raf = 0;
      if (!visible || !pageVisible) return;
      if (tick++ % 90 === 0) readColors(); // pick up theme changes cheaply

      ctx.clearRect(0, 0, w, h);

      for (const p of particles) {
        // Gentle push away from the pointer.
        const mx = p.x - mouse.x;
        const my = p.y - mouse.y;
        const md = Math.hypot(mx, my);
        if (md < MOUSE_RADIUS && md > 0.01) {
          const f = (1 - md / MOUSE_RADIUS) * 0.9;
          p.x += (mx / md) * f;
          p.y += (my / md) * f;
        }
        p.x += p.vx + p.ex;
        p.y += p.vy + p.ey;
        p.ex *= 0.94; // click-burst impulse fades out
        p.ey *= 0.94;
        if (p.x < -10) p.x = w + 10;
        else if (p.x > w + 10) p.x = -10;
        if (p.y < -10) p.y = h + 10;
        else if (p.y > h + 10) p.y = -10;
      }

      // Expanding click ripples
      ripples = ripples.filter((rp) => rp.age < 60);
      for (const rp of ripples) {
        rp.age += 1;
        const t = rp.age / 60;
        ctx.strokeStyle = `rgba(${colB},${(1 - t) * 0.6})`;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(rp.x, rp.y, t * 220, 0, Math.PI * 2);
        ctx.stroke();
      }

      ctx.lineWidth = 1;
      for (let i = 0; i < particles.length; i++) {
        const a = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < LINK_DISTANCE) {
            ctx.strokeStyle = `rgba(${colA},${(1 - d / LINK_DISTANCE) * 0.32})`;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
        // Light up links near the pointer.
        const pd = Math.hypot(a.x - mouse.x, a.y - mouse.y);
        if (pd < MOUSE_RADIUS + 40) {
          ctx.strokeStyle = `rgba(${colB},${(1 - pd / (MOUSE_RADIUS + 40)) * 0.5})`;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      }

      for (const p of particles) {
        ctx.fillStyle = `rgba(${colB},0.75)`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(frame);
    };

    const start = () => {
      if (!raf && visible && pageVisible) raf = requestAnimationFrame(frame);
    };

    const onPointer = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const onDown = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      if (x < 0 || y < 0 || x > rect.width || y > rect.height) return;
      ripples.push({ x, y, age: 0 });
      for (const p of particles) {
        const dx = p.x - x;
        const dy = p.y - y;
        const d = Math.hypot(dx, dy);
        if (d < 260 && d > 0.01) {
          const f = (1 - d / 260) * 7;
          p.ex += (dx / d) * f;
          p.ey += (dy / d) * f;
        }
      }
      start();
    };
    const onLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };
    const onVisibility = () => {
      pageVisible = !document.hidden;
      start();
    };

    readColors();
    resize();
    start();

    const io = new IntersectionObserver(
      (entries) => {
        visible = entries.some((e) => e.isIntersecting);
        start();
      },
      { threshold: 0 }
    );
    io.observe(canvas);

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    window.addEventListener("pointermove", onPointer, { passive: true });
    window.addEventListener("pointerdown", onDown, { passive: true });
    document.addEventListener("pointerleave", onLeave);
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      if (raf) cancelAnimationFrame(raf);
      io.disconnect();
      ro.disconnect();
      window.removeEventListener("pointermove", onPointer);
      window.removeEventListener("pointerdown", onDown);
      document.removeEventListener("pointerleave", onLeave);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full opacity-70"
    />
  );
}
