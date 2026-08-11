import { Project, GITHUB } from "@/data/projects";
import { GitHubIcon, ArrowIcon } from "./icons";

export function ProjectCard({ project }: { project: Project }) {
  const href = project.repo ? `${GITHUB}/${project.repo}` : undefined;

  return (
    <article className="group relative flex flex-col rounded-2xl border border-line bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:bg-surface2">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold tracking-tight text-white">
            {project.title}
          </h3>
          <p className="mt-1 text-sm text-accent2">{project.tagline}</p>
        </div>
        {href && (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${project.title} on GitHub`}
            className="shrink-0 rounded-full border border-line p-2 text-muted transition-colors hover:border-accent hover:text-white"
          >
            <GitHubIcon className="h-4 w-4" />
          </a>
        )}
      </div>

      <p className="mt-4 text-sm leading-relaxed text-muted">
        {project.description}
      </p>

      <ul className="mt-4 space-y-1.5">
        {project.highlights.map((h) => (
          <li key={h} className="flex gap-2 text-sm text-gray-300">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
            <span>{h}</span>
          </li>
        ))}
      </ul>

      <div className="mt-5 flex flex-wrap gap-2 pt-1">
        {project.tech.map((t) => (
          <span
            key={t}
            className="rounded-md border border-line bg-base px-2 py-1 text-xs font-medium text-gray-400"
          >
            {t}
          </span>
        ))}
      </div>

      {href && (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors group-hover:text-accent2"
        >
          View source <ArrowIcon className="h-3.5 w-3.5" />
        </a>
      )}
    </article>
  );
}
