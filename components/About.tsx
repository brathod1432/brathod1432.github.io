import {
  about,
  quickFacts,
  experience,
  education,
  languages,
} from "@/data/projects";
import { Reveal } from "@/components/Reveal";
import {
  BriefcaseIcon,
  GradIcon,
  PinIcon,
  GlobeIcon,
} from "@/components/icons";

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent2">
      <span className="h-px w-6 bg-accent2/60" />
      {children}
    </span>
  );
}

export function About() {
  return (
    <section
      id="about"
      className="relative scroll-mt-20 overflow-hidden border-t border-line/50 py-24"
    >
      <div className="pointer-events-none absolute right-0 top-1/4 h-[360px] w-[420px] translate-x-1/3 rounded-full bg-accent/10 blur-[150px]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Narrative */}
          <div className="lg:col-span-5">
            <Reveal>
              <Eyebrow>My story</Eyebrow>
              <h2 className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                From robotics to reliable AI systems
              </h2>
              <p className="mt-3 inline-flex items-center gap-2 text-sm text-accent2">
                <PinIcon className="h-4 w-4" /> {about.location}
              </p>
              <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-muted">
                {about.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              <dl className="mt-8 grid grid-cols-2 gap-3">
                {quickFacts.map((f) => (
                  <div
                    key={f.label}
                    className="rounded-xl border border-line bg-surface px-4 py-3"
                  >
                    <dt className="text-lg font-bold text-white">{f.value}</dt>
                    <dd className="mt-0.5 text-xs text-muted">{f.label}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-6 flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 text-xs text-muted">
                  <GlobeIcon className="h-4 w-4 text-accent2" /> Languages:
                </span>
                {languages.map((l) => (
                  <span
                    key={l.name}
                    className="rounded-full border border-line bg-base px-3 py-1 text-xs text-gray-300"
                  >
                    {l.name}{" "}
                    <span className="font-mono text-accent2">{l.level}</span>
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Timeline + education */}
          <div className="lg:col-span-7">
            <Reveal delay={120}>
              <div className="mb-5 flex items-center gap-2 text-sm font-semibold text-white">
                <BriefcaseIcon className="h-5 w-5 text-accent" /> Experience
              </div>
            </Reveal>

            <div className="relative ml-2 border-l border-line pl-8">
              <span className="pointer-events-none absolute left-0 top-0 h-full w-px bg-gradient-to-b from-accent via-accent2/60 to-transparent" />
              {experience.map((item, i) => (
                <Reveal key={item.role + item.period} delay={i * 90}>
                  <div className="relative pb-9 last:pb-0">
                    <span className="absolute -left-[38px] top-1 flex h-4 w-4 items-center justify-center">
                      {item.current && (
                        <span className="absolute inline-flex h-4 w-4 animate-ping rounded-full bg-accent/50" />
                      )}
                      <span
                        className={`relative h-3 w-3 rounded-full border-2 ${
                          item.current
                            ? "border-accent bg-accent"
                            : "border-accent2 bg-base"
                        }`}
                      />
                    </span>
                    <p className="font-mono text-xs uppercase tracking-wider text-accent2">
                      {item.period}
                    </p>
                    <h3 className="mt-1 text-base font-semibold text-white">
                      {item.role}
                    </h3>
                    <p className="text-sm font-medium text-gray-300">
                      {item.org}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {item.summary}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={120}>
              <div className="mb-4 mt-10 flex items-center gap-2 text-sm font-semibold text-white">
                <GradIcon className="h-5 w-5 text-accent" /> Education
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {education.map((e) => (
                  <div
                    key={e.degree}
                    className="rounded-2xl border border-line bg-surface p-5 transition-colors hover:border-accent/40"
                  >
                    <h4 className="text-sm font-semibold text-white">
                      {e.degree}
                    </h4>
                    <p className="mt-1 text-xs text-accent2">
                      {e.school}
                      {e.period ? ` · ${e.period}` : ""}
                    </p>
                    <p className="mt-2 text-xs leading-relaxed text-muted">
                      {e.focus}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
