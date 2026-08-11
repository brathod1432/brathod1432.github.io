"use client";

import { useEffect, useRef, useState } from "react";
import { siteConfig, EMAIL, LINKEDIN, GITHUB, CV_PATH } from "@/data/projects";
import {
  MailIcon,
  LinkedInIcon,
  GitHubIcon,
  CheckIcon,
  ArrowIcon,
} from "@/components/icons";

type Status = "idle" | "sending" | "success" | "error";
type EngagementDetail = { label: string; prefill: string };

function useEngagementSelection(onSelect: (d: EngagementDetail) => void) {
  const cb = useRef(onSelect);
  cb.current = onSelect;
  useEffect(() => {
    const handler = (e: Event) => cb.current((e as CustomEvent<EngagementDetail>).detail);
    window.addEventListener("engagement:select", handler);
    return () => window.removeEventListener("engagement:select", handler);
  }, []);
}

function CopyEmail() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };
  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex items-center gap-2 rounded-full border border-line bg-base px-4 py-2.5 text-sm font-medium text-white transition-colors hover:border-accent2"
    >
      {copied ? (
        <>
          <CheckIcon className="h-4 w-4 text-accent2" /> Copied!
        </>
      ) : (
        <>
          <MailIcon className="h-4 w-4" /> Copy email
        </>
      )}
    </button>
  );
}

function SelectedChip({ label }: { label: string }) {
  return (
    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent2/40 bg-accent2/5 px-4 py-1.5 text-sm text-accent2">
      <CheckIcon className="h-4 w-4" />
      Selected: <span className="font-semibold text-white">{label}</span>
    </div>
  );
}

export function ContactForm() {
  const key = siteConfig.web3formsKey.trim();
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [selected, setSelected] = useState<EngagementDetail | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEngagementSelection((detail) => {
    setSelected(detail);
    setMessage(detail.prefill);
    // Focus without fighting the smooth scroll triggered by the anchor.
    requestAnimationFrame(() => {
      textareaRef.current?.focus({ preventScroll: true });
      const len = textareaRef.current?.value.length ?? 0;
      textareaRef.current?.setSelectionRange(len, len);
    });
  });

  // No form backend configured yet — show robust direct-contact options.
  if (!key) {
    const body = selected ? `&body=${encodeURIComponent(selected.prefill)}` : "";
    const mailtoHref = `mailto:${EMAIL}?subject=${encodeURIComponent(
      selected ? `${selected.label} inquiry` : "Project inquiry"
    )}${body}`;
    return (
      <div className="mt-8 text-center">
        {selected && <SelectedChip label={selected.label} />}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href={mailtoHref}
            className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.03]"
          >
            <MailIcon className="h-4 w-4" /> Email me
          </a>
          <CopyEmail />
          <a
            href={LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-line bg-base px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-accent2"
          >
            <LinkedInIcon className="h-4 w-4 text-[#0a66c2]" /> LinkedIn
          </a>
          <a
            href={CV_PATH}
            download
            className="inline-flex items-center gap-2 rounded-full border border-line bg-base px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-accent"
          >
            Download CV
          </a>
          <a
            href={GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-line bg-base px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-accent"
          >
            <GitHubIcon className="h-4 w-4" /> GitHub
          </a>
        </div>
        <p className="mt-6 text-xs text-muted">
          Prefer a form? Add a free Web3Forms key in{" "}
          <span className="font-mono">data/projects.ts</span> and it appears here
          automatically.
        </p>
      </div>
    );
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");
    const form = e.currentTarget;
    const data = new FormData(form);
    data.append("access_key", key);
    data.append(
      "subject",
      selected
        ? `${selected.label} inquiry — brathod1432.github.io`
        : "New portfolio inquiry from brathod1432.github.io"
    );
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const json = await res.json();
      if (json.success) {
        setStatus("success");
        setMessage("");
        setSelected(null);
        form.reset();
      } else {
        setStatus("error");
        setError(json.message || "Something went wrong. Please email me directly.");
      }
    } catch {
      setStatus("error");
      setError("Network error. Please email me directly.");
    }
  }

  if (status === "success") {
    return (
      <div className="mt-8 rounded-2xl border border-accent2/40 bg-accent2/5 p-8 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent2/15 text-accent2">
          <CheckIcon className="h-6 w-6" />
        </div>
        <h3 className="mt-4 text-lg font-semibold text-white">Message sent!</h3>
        <p className="mt-2 text-sm text-muted">
          Thanks for reaching out — I&apos;ll get back to you within a day.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-5 text-sm font-medium text-accent2 hover:underline"
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="mt-8 space-y-4 text-left">
      {selected && (
        <div className="text-center">
          <SelectedChip label={selected.label} />
        </div>
      )}
      {/* Honeypot field — hidden from humans, catches bots */}
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-xs font-medium text-muted">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="w-full rounded-lg border border-line bg-base px-4 py-2.5 text-sm text-white outline-none transition-colors placeholder:text-muted/60 focus:border-accent"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-xs font-medium text-muted">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="w-full rounded-lg border border-line bg-base px-4 py-2.5 text-sm text-white outline-none transition-colors placeholder:text-muted/60 focus:border-accent"
            placeholder="you@company.com"
          />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="mb-1.5 block text-xs font-medium text-muted">
          What are you working on?
        </label>
        <textarea
          id="message"
          name="message"
          ref={textareaRef}
          required
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full resize-y rounded-lg border border-line bg-base px-4 py-2.5 text-sm text-white outline-none transition-colors placeholder:text-muted/60 focus:border-accent"
          placeholder="A few lines about your project or role…"
        />
      </div>
      {status === "error" && <p className="text-sm text-red-400">{error}</p>}
      <div className="flex flex-wrap items-center gap-3">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.03] disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : "Send message"}
          {status !== "sending" && <ArrowIcon className="h-4 w-4" />}
        </button>
        <CopyEmail />
        <a
          href={CV_PATH}
          download
          className="inline-flex items-center gap-2 rounded-full border border-line bg-base px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-accent2"
        >
          Download CV
        </a>
      </div>
      <p className="text-xs text-muted">
        Or reach me on{" "}
        <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="text-accent2 hover:underline">
          LinkedIn
        </a>
        .
      </p>
    </form>
  );
}
