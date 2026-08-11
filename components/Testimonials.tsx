import { testimonials } from "@/data/projects";
import { Reveal } from "@/components/Reveal";

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent2">
      <span className="h-px w-6 bg-accent2/60" />
      {children}
    </span>
  );
}

export function Testimonials() {
  // Only renders when real testimonials have been added to the data file.
  if (testimonials.length === 0) return null;

  return (
    <section className="scroll-mt-20 border-t border-line/50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="max-w-2xl">
            <Eyebrow>Kind words</Eyebrow>
            <h2 className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl">
              What people say
            </h2>
          </div>
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 80}>
              <figure className="h-full rounded-2xl border border-line bg-surface p-6">
                <blockquote className="text-sm leading-relaxed text-gray-200">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-4 border-t border-line/60 pt-4">
                  <p className="text-sm font-semibold text-white">{t.name}</p>
                  <p className="text-xs text-muted">{t.role}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
