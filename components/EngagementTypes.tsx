"use client";

import { engagements } from "@/data/projects";
import { ArrowIcon } from "@/components/icons";

export function EngagementTypes() {
  const select = (label: string, prefill: string) => {
    window.dispatchEvent(
      new CustomEvent("engagement:select", { detail: { label, prefill } })
    );
  };

  return (
    <div className="mt-16">
      <h3 className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-muted">
        Ways to engage
      </h3>
      <p className="mx-auto mt-3 max-w-xl text-center text-sm text-muted">
        Pick the shape that fits — each one drops you into the contact form with
        a head start.
      </p>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {engagements.map((e) => (
          <a
            key={e.label}
            href="#contact"
            onClick={() => select(e.label, e.prefill)}
            className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:bg-surface2 hover:shadow-[0_20px_60px_-25px_rgba(124,92,255,0.5)]"
          >
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <span className="font-mono text-xs uppercase tracking-wider text-accent2">
              {e.format}
            </span>
            <h4 className="mt-3 text-lg font-semibold text-fg">{e.label}</h4>
            <p className="mt-1 text-sm font-medium text-accent2">{e.tagline}</p>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
              {e.description}
            </p>
            <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-fg transition-colors group-hover:text-accent2">
              Start this <ArrowIcon className="h-3.5 w-3.5" />
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
