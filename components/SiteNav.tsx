"use client";

import { useEffect, useState } from "react";
import { GITHUB, LINKEDIN } from "@/data/projects";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";

const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "impact", label: "Impact" },
  { id: "ai", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const ids = NAV_ITEMS.map((n) => n.id);
    const els = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line/60 bg-base/70 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="font-mono text-sm font-semibold tracking-tight text-white"
          onClick={() => setOpen(false)}
        >
          brijesh<span className="text-accent">.rathod</span>
        </a>

        <div className="hidden items-center gap-7 text-sm text-muted md:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`transition-colors hover:text-white ${
                active === item.id ? "text-white" : ""
              }`}
              aria-current={active === item.id ? "true" : undefined}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hidden rounded-full border border-line p-2 text-muted transition-colors hover:border-accent hover:text-white sm:inline-flex"
          >
            <LinkedInIcon className="h-4 w-4" />
          </a>
          <a
            href={GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hidden rounded-full border border-line p-2 text-muted transition-colors hover:border-accent hover:text-white sm:inline-flex"
          >
            <GitHubIcon className="h-4 w-4" />
          </a>
          <a
            href="#contact"
            className="hidden rounded-full bg-accent px-4 py-1.5 text-sm font-semibold text-white transition-transform hover:scale-[1.03] md:inline-flex"
          >
            Contact me
          </a>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="inline-flex items-center justify-center rounded-md border border-line p-2 text-white md:hidden"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5" aria-hidden>
              {open ? (
                <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <div className="border-t border-line/60 bg-base/95 backdrop-blur-md md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col px-6 py-4">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className={`border-b border-line/40 py-3 text-sm last:border-0 ${
                  active === item.id ? "text-white" : "text-muted"
                }`}
              >
                {item.label}
              </a>
            ))}
            <div className="mt-4 flex items-center gap-3">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="flex-1 rounded-full bg-accent px-4 py-2.5 text-center text-sm font-semibold text-white"
              >
                Contact me
              </a>
              <a
                href={LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="rounded-full border border-line p-2.5 text-muted"
              >
                <LinkedInIcon className="h-5 w-5" />
              </a>
              <a
                href={GITHUB}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="rounded-full border border-line p-2.5 text-muted"
              >
                <GitHubIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
