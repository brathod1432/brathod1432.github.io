import { cvVariants } from "@/data/projects";

/**
 * Split control offering both CV variants: the short CV as the primary
 * download and the detailed CV alongside it. Plain anchors — works with
 * JavaScript disabled and needs no client-side state.
 */
export function CvDownload({ className = "" }: { className?: string }) {
  const [short, detailed] = cvVariants;

  return (
    <div
      className={`inline-flex items-stretch overflow-hidden rounded-full border border-line bg-base ${className}`}
    >
      <a
        href={short.href}
        download={short.fileName}
        aria-label={`${short.label} — ${short.description}`}
        className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-fg transition-colors hover:bg-surface hover:text-accent"
      >
        {short.label}
      </a>
      <span className="w-px shrink-0 bg-line" aria-hidden="true" />
      <a
        href={detailed.href}
        download={detailed.fileName}
        aria-label={`Download detailed CV — ${detailed.description}`}
        className="inline-flex items-center px-4 py-2.5 text-sm font-medium text-muted transition-colors hover:bg-surface hover:text-accent2"
      >
        {detailed.label}
      </a>
    </div>
  );
}
