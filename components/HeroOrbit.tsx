// Decorative orbiting diagram for the hero (wide screens only). Pure CSS motion;
// labels counter-rotate so they always stay upright. Hidden from assistive tech.

const OUTER = [
  { label: "AI Agents", angle: 0 },
  { label: "Full-Stack", angle: 90 },
  { label: "Test Automation", angle: 180 },
  { label: "Robotics", angle: 270 },
];

const OUTER_RADIUS = 168;
const INNER_RADIUS = 108;

export function HeroOrbit() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute right-6 top-1/2 hidden h-[400px] w-[400px] -translate-y-1/2 xl:block"
    >
      {/* soft glow */}
      <div className="absolute left-1/2 top-1/2 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/25 blur-[70px]" />

      {/* rings */}
      <div className="absolute left-1/2 top-1/2 h-[336px] w-[336px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-accent/30" />
      <div className="absolute left-1/2 top-1/2 h-[216px] w-[216px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-accent2/30" />

      {/* outer orbit: labelled nodes */}
      <div className="orbit-spin absolute inset-0">
        {OUTER.map((n) => (
          <div
            key={n.label}
            className="absolute left-1/2 top-1/2"
            style={{ transform: `rotate(${n.angle}deg) translateX(${OUTER_RADIUS}px)` }}
          >
            <div
              className="orbit-counter"
              style={{ ["--a" as string]: `${n.angle}deg` }}
            >
              <span className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border border-line bg-surface/90 px-3 py-1 text-xs font-medium text-body shadow-[0_0_24px_-6px_rgba(124,92,255,0.6)] backdrop-blur">
                {n.label}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* inner orbit: small satellites, opposite direction */}
      <div className="orbit-spin-rev absolute inset-0">
        {[0, 120, 240].map((a) => (
          <div
            key={a}
            className="absolute left-1/2 top-1/2"
            style={{ transform: `rotate(${a}deg) translateX(${INNER_RADIUS}px)` }}
          >
            <span className="absolute left-0 top-0 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent2 shadow-[0_0_14px_2px_rgba(34,211,238,0.7)]" />
          </div>
        ))}
      </div>

      {/* core */}
      <div className="orbit-pulse absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-accent/50 bg-gradient-to-br from-accent/40 to-accent2/30 shadow-[0_0_60px_-8px_rgba(124,92,255,0.8)] backdrop-blur">
        <span className="gradient-text text-center text-lg font-extrabold leading-tight tracking-tight">
          Reliable AI
        </span>
      </div>
    </div>
  );
}
