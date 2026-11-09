import type { CSSProperties, ReactNode } from "react";

// Each line is exactly --rule tall, so the handwriting always sits on a ruled line.

function Crossed({ children }: { children: ReactNode }) {
  return <s className="decoration-ink-pen decoration-2">{children}</s>;
}

function Circled({ children }: { children: ReactNode }) {
  return (
    <span className="inline-block -rotate-6 rounded-[50%] border-[1.5px] border-ink-pen px-1 leading-[0.9]">
      {children}
    </span>
  );
}

type Note = {
  text: ReactNode;
  /** Small per-line offsets so it reads as handwriting. */
  tilt: number;
  shift: number;
  gapBefore?: boolean;
  desktopOnly?: boolean;
};

const NOTES: Note[] = [
  { text: "Tanya Bu Sri — penuh", tilt: -0.8, shift: 0 },
  { text: "Kantin SMP 3 — tanya kepsek dulu", tilt: 0.6, shift: 5 },
  {
    text: (
      <>
        ongkos bensin <Circled>3x</Circled> bolak-balik
      </>
    ),
    tilt: -0.5,
    shift: 2,
  },
  { text: "Senin 20/10 — Bu Sri (Rungkut)", tilt: -0.8, shift: 0, gapBefore: true },
  { text: "Ori titip 25 → sisa 6? retur 2", tilt: 0.5, shift: 6 },
  {
    text: (
      <>
        Balado titip <Crossed>18</Crossed> 20 → sisa 4
      </>
    ),
    tilt: -0.4,
    shift: 3,
  },
  {
    text: (
      <>
        laku brp?? <Circled>17</Circled> + 16 ...
      </>
    ),
    tilt: 1,
    shift: 10,
  },
  {
    text: (
      <>
        bayar 50rb, kurang <Crossed>30</Crossed> 40rb
      </>
    ),
    tilt: -0.6,
    shift: 2,
  },
  { text: "Pak Darto ... keripik tempe basi 5 → tarik", tilt: -0.9, shift: 5, desktopOnly: true },
];

export function NotebookSketch({ caption }: { caption: string }) {
  return (
    <figure
      aria-label="Ilustrasi catatan titipan di buku tulis yang penuh coretan"
      className="relative h-[240px] overflow-hidden rounded-md border border-line bg-notebook [--rule:22px] md:h-[440px] md:[--rule:28px]"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[repeating-linear-gradient(to_bottom,transparent_0_calc(var(--rule)-1px),var(--notebook-rule)_calc(var(--rule)-1px)_var(--rule))] bg-[position:0_var(--rule)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-y-0 left-[14px] w-px bg-notebook-margin md:left-[52px]"
      />

      <ul className="relative pt-[var(--rule)] pr-2 pl-5 font-hand text-[13px] whitespace-nowrap leading-[var(--rule)] font-medium text-ink-pen md:pr-6 md:pl-16 md:text-[23px] md:whitespace-normal">
        {NOTES.map((note, i) => (
          <li
            key={i}
            style={
              {
                transform: `translate(${note.shift}px, 3px) rotate(${note.tilt}deg)`,
              } as CSSProperties
            }
            className={`origin-left ${note.gapBefore ? "md:mt-[var(--rule)]" : ""} ${note.desktopOnly ? "max-md:hidden" : ""}`}
          >
            {note.text}
          </li>
        ))}
      </ul>

      <figcaption className="absolute inset-x-0 bottom-0 bg-notebook px-2 py-1.5 font-mono text-[10px] leading-[13px] text-ink-muted md:px-4 md:leading-normal md:py-3 md:text-xs">
        {caption}
      </figcaption>
    </figure>
  );
}
