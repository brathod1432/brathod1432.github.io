import { metrics, caseStudies, clientWork } from "@/data/projects";
import { Reveal } from "@/components/Reveal";
import { CountUp } from "@/components/CountUp";
import { CheckIcon } from "@/components/icons";

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent2">
      <span className="h-px w-6 bg-accent2/60" />
      {children}
    </span>
  );
}

export function Impact() {
  return (
    <section
      id="impact"
      className="relative scroll-mt-20 overflow-hidden border-t border-line/50 py-24"
    >
      <div className="pointer-events-none absolute left-1/2 top-0 h-[280px] w-[820px] -translate-x-1/2 rounded-full bg-accent2/10 blur-[160px]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="max-w-2xl">
            <Eyebrow>Impact</Eyebrow>
            <h2 className="mt-4 text-2xl font-bold tracking-tight text-fg sm:text-3xl">
              Results, not just repositories
            </h2>
            <p className="mt-3 text-muted">
              The numbers and the story behind the work — what actually changed
              because the engineering was done well.
            </p>
          </div>
        </Reveal>

        {/* Metrics */}
        <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-3">
          {metrics.map((m, i) => (
            <Reveal key={m.label} delay={i * 70}>
              <div className="glow-card rounded-2xl border border-line bg-surface p-6 text-center transition-colors hover:border-accent/40">
                <CountUp
                  value={m.value}
                  className="gradient-text block text-2xl font-extrabold sm:text-3xl"
                />
                <div className="mt-2 text-xs leading-snug text-muted">
                  {m.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Case studies */}
        <div className="mt-8 grid gap-6">
          {caseStudies.map((cs, i) => (
            <Reveal key={cs.title} delay={i * 90}>
              <article className="overflow-hidden rounded-2xl border border-line bg-surface">
                <div className="grid gap-6 p-7 md:grid-cols-3 md:gap-8 md:p-9">
                  <div className="md:col-span-1">
                    <p className="font-mono text-xs uppercase tracking-wider text-accent2">
                      Case study
                    </p>
                    <h3 className="mt-2 text-lg font-semibold leading-snug text-fg">
                      {cs.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted">{cs.context}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {cs.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-md border border-line bg-base px-2 py-1 text-xs text-muted"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <div className="space-y-4 text-sm leading-relaxed">
                      <div>
                        <p className="font-semibold text-fg">The problem</p>
                        <p className="mt-1 text-muted">{cs.problem}</p>
                      </div>
                      <div>
                        <p className="font-semibold text-fg">What I did</p>
                        <ul className="mt-2 space-y-2">
                          {cs.approach.map((a) => (
                            <li key={a} className="flex items-start gap-2.5 text-body">
                              <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                              <span>{a}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="rounded-xl border border-accent2/30 bg-accent2/5 p-4">
                        <p className="font-semibold text-accent2">The result</p>
                        <p className="mt-1 text-body">{cs.result}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Anonymized freelance / client engagements */}
        {clientWork.length > 0 && (
          <div className="mt-16">
            <Reveal>
              <div className="max-w-2xl">
                <Eyebrow>Client work</Eyebrow>
                <h3 className="mt-4 text-xl font-bold tracking-tight text-fg sm:text-2xl">
                  Freelance engagements
                </h3>
                <p className="mt-3 text-sm text-muted">
                  A selection of the freelance work behind the number above.
                  Client names are withheld — each entry describes the type of
                  engagement rather than the account.
                </p>
              </div>
            </Reveal>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {clientWork.map((c, i) => (
                <Reveal key={c.sector} delay={i * 80}>
                  <div className="h-full rounded-2xl border border-line bg-surface p-6">
                    <p className="font-mono text-xs uppercase tracking-wider text-accent2">
                      {c.engagement}
                    </p>
                    <h4 className="mt-2 text-base font-semibold text-fg">
                      {c.sector}
                    </h4>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {c.summary}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {c.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-md border border-line bg-base px-2 py-1 text-xs text-muted"
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
        )}
      </div>
    </section>
  );
}
