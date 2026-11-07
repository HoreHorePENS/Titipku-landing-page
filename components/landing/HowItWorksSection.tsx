import { container, SectionTitle } from "./ui";

const STEPS = [
  {
    title: "Hitung sisa di rak",
    desc: "Ketuk + dan − untuk sisa dan barang basi. Bisa satu tangan.",
    detail: "Original: sisa 6, retur 2",
    mobile: "Ketuk + dan −, bisa satu tangan.",
    mobileMono: false,
  },
  {
    title: "Tagihan terhitung otomatis",
    desc: "Terjual dikali harga titip, ditambah sisa utang sebelumnya.",
    detail: "Rp143.000 + Rp40.000 = Rp183.000",
    mobile: "Rp143.000 + Rp40.000 = Rp183.000",
    mobileMono: true,
  },
  {
    title: "Nota terkirim ke WhatsApp",
    desc: "Pemilik warung buka link, tanpa perlu daftar atau pasang aplikasi.",
    detail: "TJ-20261027-014 · 10.42",
    mobile: "Warung buka link, tanpa daftar.",
    mobileMono: false,
  },
];

export function HowItWorksSection() {
  return (
    <section
      id="cara-kerja"
      aria-labelledby="cara-kerja-title"
      className="border-t border-line bg-surface"
    >
      <div className={`${container} flex flex-col gap-6 py-12 md:gap-12 md:py-20`}>
        <SectionTitle id="cara-kerja-title">Lima menit di depan rak</SectionTitle>

        {/* Garis putus-putus penghubung (desktop) dibuat dengan ::before. */}
        <ol className="relative flex flex-col md:grid md:grid-cols-3 md:before:absolute md:before:top-[27px] md:before:right-[33%] md:before:left-7 md:before:border-t-[1.5px] md:before:border-dashed md:before:border-primary md:before:content-['']">
          {STEPS.map((step, i) => {
            const first = i === 0;
            const last = i === STEPS.length - 1;
            return (
              <li key={step.title} className="relative flex gap-4 md:flex-col md:pr-12 md:last:pr-0">
                <div className="flex flex-col items-center md:block">
                  <span
                    aria-hidden="true"
                    className={`relative z-10 flex size-10 shrink-0 items-center justify-center rounded-full font-mono font-semibold md:size-14 md:text-xl ${
                      first
                        ? "bg-primary text-white"
                        : "border-[1.5px] border-primary bg-surface text-primary"
                    }`}
                  >
                    {i + 1}
                  </span>
                  {!last && (
                    <span
                      aria-hidden="true"
                      className="flex-1 border-l-[1.5px] border-dashed border-primary md:hidden"
                    />
                  )}
                </div>
                <div className={`flex flex-col gap-1 pt-2 md:gap-4 md:p-0 ${last ? "" : "pb-6"}`}>
                  <h3 className="text-[17px] font-bold md:text-xl">{step.title}</h3>
                  <p className="text-[15px] leading-[23px] text-ink-muted max-md:hidden">
                    {step.desc}
                  </p>
                  <p className="font-mono text-[13px] text-ink-subtle tabular-nums max-md:hidden">
                    {step.detail}
                  </p>
                  <p
                    className={`text-ink-muted md:hidden ${
                      step.mobileMono ? "font-mono text-[13px] tabular-nums" : "text-sm"
                    }`}
                  >
                    {step.mobile}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
