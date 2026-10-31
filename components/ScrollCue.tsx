"use client";

import { useEffect, useState } from "react";

/**
 * A small "scroll to explore" hint pinned to the bottom of the hero. It fades
 * itself out once the visitor has scrolled past the first stretch of the page,
 * and stays put (no bounce) for reduced-motion visitors.
 */
export function ScrollCue() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const onScroll = () => setHidden(window.scrollY > 120);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="#about"
      aria-label="Scroll to explore"
      className={`group absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted transition-opacity duration-500 hover:text-fg sm:flex ${
        hidden ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <span className="text-[11px] font-medium uppercase tracking-[0.2em]">
        Scroll to explore
      </span>
      <span className="flex h-9 w-5 items-start justify-center rounded-full border border-line p-1">
        <span className="scroll-cue-dot h-1.5 w-1.5 rounded-full bg-accent2" />
      </span>
    </a>
  );
}
