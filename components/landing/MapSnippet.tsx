import type { CSSProperties } from "react";

type Pin = { x: number; y: number; tone: "open" | "full" };

const NEARBY: Pin[] = [
  { x: 14, y: 64, tone: "open" },
  { x: 72, y: 24, tone: "full" },
  { x: 88, y: 64, tone: "open" },
  { x: 28, y: 90, tone: "open" },
];

const at = (x: number, y: number) => ({ left: `${x}%`, top: `${y}%` }) as CSSProperties;

// Decorative street map: plain blocks for roads, dots for nearby warung, one location pin.
export function MapSnippet({
  label,
  nearby = false,
  className = "",
}: {
  label?: string;
  nearby?: boolean;
  className?: string;
}) {
  return (
    <div className={`relative overflow-hidden rounded-md border border-line bg-hatch-b ${className}`}>
      <span className="absolute inset-x-0 top-[44%] h-2 border-y border-line bg-surface" />
      <span className="absolute inset-y-0 left-[38%] w-2 border-x border-line bg-surface" />
      <span className="absolute -inset-x-6 top-[72%] h-1.5 -rotate-6 bg-surface" />
      {nearby &&
        NEARBY.map((pin) => (
          <span
            key={`${pin.x}-${pin.y}`}
            style={at(pin.x, pin.y)}
            className={`absolute size-2.5 -translate-1/2 rounded-full border-2 border-surface ${
              pin.tone === "open" ? "bg-primary" : "bg-ink-subtle"
            }`}
          />
        ))}
      <span style={at(60, 70)} className="absolute -translate-x-1/2 -translate-y-full">
        <span className="flex size-5 rotate-45 items-center justify-center rounded-[50%_50%_0_50%] bg-primary">
          <span className="size-1.5 rounded-full bg-surface" />
        </span>
      </span>
      {label && (
        <span className="absolute top-1.5 left-1.5 rounded border border-line bg-surface px-1.5 py-0.5 text-[9px] font-semibold">
          {label}
        </span>
      )}
    </div>
  );
}
