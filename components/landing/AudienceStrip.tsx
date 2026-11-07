import { container } from "./ui";

const SEGMENTS = [
  "Keripik & camilan",
  "Kue kering",
  "Sambal & bumbu kemasan",
  "Frozen food",
];

export function AudienceStrip() {
  return (
    <section
      id="untuk-siapa"
      aria-labelledby="untuk-siapa-title"
      className="border-t border-line bg-surface"
    >
      <div
        className={`${container} flex flex-col gap-4 py-8 md:py-10 lg:flex-row lg:items-start lg:justify-between lg:gap-12`}
      >
        <div className="flex max-w-[560px] flex-col gap-2">
          <h2 id="untuk-siapa-title" className="text-lg leading-6 font-extrabold md:text-xl md:leading-7">
            Dibuat untuk produsen yang menitip di banyak tempat
          </h2>
          <p className="text-[15px] leading-[23px] text-ink-muted">
            Cocok untuk usaha yang menitipkan produk di 5 sampai 30 warung, kantin,
            koperasi, atau toko oleh-oleh.
          </p>
        </div>
        <ul className="flex flex-wrap gap-2 lg:max-w-[600px] lg:pt-1">
          {SEGMENTS.map((segment) => (
            <li
              key={segment}
              className="rounded-md border border-line-strong bg-paper px-3 py-1.5 text-sm font-semibold"
            >
              {segment}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
