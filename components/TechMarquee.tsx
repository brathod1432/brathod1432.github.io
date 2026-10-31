// Slow, endlessly scrolling strip of the technologies used across the work.
// The second copy is aria-hidden so screen readers hear the list once.

const ITEMS = [
  "Python",
  "TypeScript",
  "Next.js",
  "React",
  "FastAPI",
  "Node.js",
  "Rust",
  "Tauri",
  "Tailwind",
  "LLM Evaluation",
  "AI Agents",
  "RAG",
  "MCP",
  "Playwright",
  "Jenkins",
  "Docker",
  "Prometheus",
  "NumPy",
  "MATLAB",
  "URDF",
];

function Row({ hidden }: { hidden?: boolean }) {
  return (
    <ul
      aria-hidden={hidden || undefined}
      className="flex shrink-0 items-center"
    >
      {ITEMS.map((t) => (
        <li
          key={t}
          className="flex items-center whitespace-nowrap px-5 text-sm font-medium text-muted"
        >
          <span className="mr-5 h-1.5 w-1.5 rotate-45 rounded-[2px] bg-accent/70" />
          {t}
        </li>
      ))}
    </ul>
  );
}

export function TechMarquee() {
  return (
    <section
      aria-label="Technologies I work with"
      className="marquee-mask relative overflow-hidden border-y border-line/50 bg-surface/40 py-5"
    >
      <div className="marquee-track flex w-max">
        <Row />
        <Row hidden />
      </div>
    </section>
  );
}
