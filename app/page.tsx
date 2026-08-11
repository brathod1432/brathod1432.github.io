import { categories, privateWork, GITHUB } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { GitHubIcon, MailIcon, ArrowIcon, LockIcon } from "@/components/icons";

const EMAIL = "bgrathod00@gmail.com";

const publicCount = categories.reduce((n, c) => n + c.projects.length, 0);

const stats = [
  { value: `${publicCount}`, label: "Open-source projects" },
  { value: "4", label: "Domains" },
  { value: "Python · TS", label: "Primary stacks" },
];

const skills = [
  "LLM Evaluation & Safety",
  "AI Agents",
  "FastAPI",
  "RAG",
  "Python",
  "TypeScript",
  "Next.js",
  "Robotics / Kinematics",
  "Motion Planning",
  "NumPy / ML",
  "Observability",
  "CI/CD",
];

function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line/60 bg-base/70 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-mono text-sm font-semibold tracking-tight text-white">
          brijesh<span className="text-accent">.rathod</span>
        </a>
        <div className="hidden items-center gap-7 text-sm text-muted md:flex">
          {categories.map((c) => (
            <a key={c.id} href={`#${c.id}`} className="transition-colors hover:text-white">
              {c.label.split(" ")[0]}
            </a>
          ))}
          <a href="#contact" className="transition-colors hover:text-white">
            Contact
          </a>
        </div>
        <a
          href={GITHUB}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-1.5 text-sm text-white transition-colors hover:border-accent hover:bg-accent/10"
        >
          <GitHubIcon className="h-4 w-4" /> GitHub
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-grid">
      <div className="pointer-events-none absolute left-1/2 top-[-10%] h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-accent/20 blur-[140px]" />
      <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-40 md:pt-48">
        <p className="animate-fade-up font-mono text-sm text-accent2">
          Hi, I&apos;m Brijesh Rathod
        </p>
        <h1 className="mt-4 max-w-3xl animate-fade-up text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
          I build <span className="gradient-text">AI systems</span>, robotics
          tooling, and production web platforms.
        </h1>
        <p className="mt-6 max-w-2xl animate-fade-up text-lg leading-relaxed text-muted">
          Engineer working across LLM evaluation &amp; safety, robot-arm
          kinematics, and security-first full-stack products. I care about the
          hard part — making systems reliably good, testable, and ready for
          production.
        </p>
        <div className="mt-8 flex animate-fade-up flex-wrap items-center gap-3">
          <a
            href="#ai"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-[1.03]"
          >
            View projects <ArrowIcon className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:border-accent2"
          >
            <MailIcon className="h-4 w-4" /> Get in touch
          </a>
        </div>

        <dl className="mt-14 grid max-w-lg grid-cols-3 gap-6">
          {stats.map((s) => (
            <div key={s.label}>
              <dt className="text-2xl font-bold text-white">{s.value}</dt>
              <dd className="mt-1 text-xs text-muted">{s.label}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-12 flex flex-wrap gap-2">
          {skills.map((s) => (
            <span
              key={s}
              className="rounded-full border border-line bg-surface px-3 py-1 text-xs text-gray-400"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />

        {categories.map((cat) => (
          <section key={cat.id} id={cat.id} className="scroll-mt-20 border-t border-line/50 py-20">
            <div className="mx-auto max-w-6xl px-6">
              <div className="max-w-2xl">
                <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  {cat.label}
                </h2>
                <p className="mt-3 text-muted">{cat.blurb}</p>
              </div>
              <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {cat.projects.map((p) => (
                  <ProjectCard key={p.name} project={p} />
                ))}
              </div>
            </div>
          </section>
        ))}

        <section className="scroll-mt-20 border-t border-line/50 py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-xs text-muted">
                <LockIcon className="h-3.5 w-3.5" /> Private &amp; client work
              </div>
              <h2 className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Selected Private Work
              </h2>
              <p className="mt-3 text-muted">
                A sample of closed-source projects. Source is private; happy to
                walk through architecture and decisions on request.
              </p>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {privateWork.map((w) => (
                <div
                  key={w.title}
                  className="rounded-2xl border border-dashed border-line bg-surface/60 p-6"
                >
                  <div className="flex items-center gap-2 text-white">
                    <LockIcon className="h-4 w-4 text-muted" />
                    <h3 className="text-lg font-semibold">{w.title}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {w.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {w.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-line bg-base px-2 py-1 text-xs text-gray-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-20 border-t border-line/50 py-24">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Let&apos;s build something reliable.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted">
              Open to collaboration on AI, robotics, and full-stack projects.
              Reach out and I&apos;ll get back to you.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-[1.03]"
              >
                <MailIcon className="h-4 w-4" /> {EMAIL}
              </a>
              <a
                href={GITHUB}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:border-accent2"
              >
                <GitHubIcon className="h-4 w-4" /> @brathod1432
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-line/50 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 text-sm text-muted sm:flex-row">
          <p>© {new Date().getFullYear()} Brijesh Rathod</p>
          <p className="font-mono text-xs">
            Built with Next.js &amp; Tailwind · Deployed on GitHub Pages
          </p>
        </div>
      </footer>
    </>
  );
}
