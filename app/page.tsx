import {
  categories,
  privateWork,
  services,
  valueProps,
  GITHUB,
  LINKEDIN,
  EMAIL,
  Service,
} from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { About } from "@/components/About";
import { Reveal } from "@/components/Reveal";
import {
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  ArrowIcon,
  LockIcon,
  AiIcon,
  RobotIcon,
  WebIcon,
  QualityIcon,
  CheckIcon,
} from "@/components/icons";

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

const serviceIcons: Record<Service["icon"], (p: { className?: string }) => JSX.Element> = {
  ai: AiIcon,
  robot: RobotIcon,
  web: WebIcon,
  quality: QualityIcon,
};

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent2">
      <span className="h-px w-6 bg-accent2/60" />
      {children}
    </span>
  );
}

function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line/60 bg-base/70 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-mono text-sm font-semibold tracking-tight text-white">
          brijesh<span className="text-accent">.rathod</span>
        </a>
        <div className="hidden items-center gap-7 text-sm text-muted md:flex">
          <a href="#about" className="transition-colors hover:text-white">
            About
          </a>
          <a href="#services" className="transition-colors hover:text-white">
            Services
          </a>
          {categories.map((c) => (
            <a key={c.id} href={`#${c.id}`} className="transition-colors hover:text-white">
              {c.label.split(" ")[0]}
            </a>
          ))}
          <a href="#contact" className="transition-colors hover:text-white">
            Contact
          </a>
        </div>
        <div className="flex items-center gap-2">
          <a
            href={LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="rounded-full border border-line p-2 text-muted transition-colors hover:border-accent hover:text-white"
          >
            <LinkedInIcon className="h-4 w-4" />
          </a>
          <a
            href={GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="rounded-full border border-line p-2 text-muted transition-colors hover:border-accent hover:text-white"
          >
            <GitHubIcon className="h-4 w-4" />
          </a>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-grid">
      <div className="pointer-events-none absolute left-1/4 top-[-10%] h-[420px] w-[560px] -translate-x-1/2 rounded-full bg-accent/20 blur-[150px]" />
      <div className="pointer-events-none absolute right-0 top-[10%] h-[360px] w-[460px] translate-x-1/3 rounded-full bg-accent2/10 blur-[150px]" />
      <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-40 md:pt-48">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-xs text-muted">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Available for select projects &amp; collaboration
          </span>
        </div>
        <p className="mt-6 animate-fade-up font-mono text-sm text-accent2">
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
            href="#services"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-[1.03]"
          >
            How I can help <ArrowIcon className="h-4 w-4" />
          </a>
          <a
            href="#contact"
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

function Services() {
  return (
    <section id="services" className="relative scroll-mt-20 overflow-hidden border-t border-line/50 py-24">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[300px] w-[900px] -translate-x-1/2 rounded-full bg-accent/10 blur-[160px]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="max-w-2xl">
            <Eyebrow>How I can help</Eyebrow>
            <h2 className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl">
              What I bring to clients
            </h2>
            <p className="mt-3 text-muted">
              I partner with teams and founders to design, build, and harden
              real systems — then leave them with something maintainable. Here&apos;s
              where I create the most value.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {services.map((s, i) => {
            const Icon = serviceIcons[s.icon];
            return (
              <Reveal key={s.title} delay={i * 90}>
                <div className="group h-full rounded-2xl border border-line bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:bg-surface2">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-line bg-base text-accent2 transition-colors group-hover:border-accent group-hover:text-accent">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">{s.title}</h3>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-muted">{s.pitch}</p>
                  <ul className="mt-5 grid gap-2.5">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-start gap-2.5 text-sm text-gray-300">
                        <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={120}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 rounded-2xl border border-line bg-surface/60 px-6 py-5">
            {valueProps.map((v) => (
              <span key={v} className="inline-flex items-center gap-2 text-sm text-gray-300">
                <CheckIcon className="h-4 w-4 text-accent2" /> {v}
              </span>
            ))}
          </div>
        </Reveal>
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
        <About />
        <Services />

        {categories.map((cat) => (
          <section key={cat.id} id={cat.id} className="scroll-mt-20 border-t border-line/50 py-20">
            <div className="mx-auto max-w-6xl px-6">
              <Reveal>
                <div className="max-w-2xl">
                  <Eyebrow>{cat.label}</Eyebrow>
                  <h2 className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                    {cat.label}
                  </h2>
                  <p className="mt-3 text-muted">{cat.blurb}</p>
                </div>
              </Reveal>
              <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {cat.projects.map((p, i) => (
                  <Reveal key={p.name} delay={(i % 3) * 80}>
                    <div className="h-full">
                      <ProjectCard project={p} />
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        ))}

        <section className="scroll-mt-20 border-t border-line/50 py-20">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
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
            </Reveal>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {privateWork.map((w, i) => (
                <Reveal key={w.title} delay={i * 90}>
                  <div className="h-full rounded-2xl border border-dashed border-line bg-surface/60 p-6">
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
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-20 border-t border-line/50 py-24">
          <div className="mx-auto max-w-4xl px-6">
            <Reveal>
              <div className="relative overflow-hidden rounded-3xl border border-line bg-gradient-to-b from-surface2 to-surface p-10 text-center md:p-14">
                <div className="pointer-events-none absolute left-1/2 top-[-40%] h-[320px] w-[520px] -translate-x-1/2 rounded-full bg-accent/20 blur-[130px]" />
                <div className="relative">
                  <Eyebrow>Contact</Eyebrow>
                  <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    Let&apos;s build something reliable.
                  </h2>
                  <p className="mx-auto mt-4 max-w-xl text-muted">
                    Have a project in AI, robotics, or full-stack? Tell me what
                    you&apos;re working on and I&apos;ll get back to you within a day.
                  </p>
                  <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                    <a
                      href={`mailto:${EMAIL}?subject=Project%20inquiry`}
                      className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.03]"
                    >
                      <MailIcon className="h-4 w-4" /> {EMAIL}
                    </a>
                    <a
                      href={LINKEDIN}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-line bg-base px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-accent2"
                    >
                      <LinkedInIcon className="h-4 w-4 text-[#0a66c2]" /> Connect on LinkedIn
                    </a>
                    <a
                      href={GITHUB}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-line bg-base px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-accent"
                    >
                      <GitHubIcon className="h-4 w-4" /> @brathod1432
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="border-t border-line/50 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 text-sm text-muted sm:flex-row">
          <p>© {new Date().getFullYear()} Brijesh Rathod</p>
          <div className="flex items-center gap-4">
            <a href={`mailto:${EMAIL}`} aria-label="Email" className="transition-colors hover:text-white">
              <MailIcon className="h-5 w-5" />
            </a>
            <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="transition-colors hover:text-white">
              <LinkedInIcon className="h-5 w-5" />
            </a>
            <a href={GITHUB} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="transition-colors hover:text-white">
              <GitHubIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
