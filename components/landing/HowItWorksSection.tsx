import type { ComponentType } from "react";
import { BillStepCard, CountStepCard, NotaStepCard } from "./StepCards";
import { container, SectionTitle } from "./ui";

const STEPS: {
  title: string;
  desc: string;
  mobile: string;
  Card: ComponentType;
}[] = [
  {
    title: "Hitung sisa di rak",
    desc: "Ketuk + dan − untuk sisa dan barang basi. Bisa satu tangan.",
    mobile: "Ketuk + dan −, bisa satu tangan.",
    Card: CountStepCard,
  },
  {
    title: "Tagihan terhitung otomatis",
    desc: "Terjual dikali harga titip, ditambah sisa utang sebelumnya.",
    // Rumus angka yang dulu tampil di sini kini ada di kartu langkah 2.
    mobile: "Terjual dikali harga titip, ditambah sisa utang sebelumnya.",
    Card: BillStepCard,
  },
  {
    title: "Nota terkirim ke WhatsApp",
    desc: "Pemilik warung buka link, tanpa perlu daftar atau pasang aplikasi.",
    mobile: "Warung buka link, tanpa daftar.",
    Card: NotaStepCard,
  },
];

export function HowItWorksSection() {
  return (
    <section
      id="cara-kerja"
      aria-labelledby="cara-kerja-title"
      className="border-t border-line bg-surface"
    >
      <div className={`${container} flex flex-col gap-8 py-12 md:gap-12 md:py-20`}>
        <div className="flex flex-col gap-2 md:gap-3">
          <SectionTitle id="cara-kerja-title">Lima menit di depan rak</SectionTitle>
          <p className="max-w-[640px] text-[15px] leading-[23px] text-ink-muted md:text-lg md:leading-7">
            Tiga langkah yang sama di setiap warung. Hitungannya dikerjakan Titipku.
          </p>
        </div>

        {/*
          Desktop (≥1024 px): 3 kolom; di bawahnya langkah bertumpuk dengan garis vertikal.
          Tiap <li> memakai subgrid 3 baris (nomor, teks, kartu)
          sehingga teks dan kartu sejajar dan tinggi kartu sama.
          Garis putus-putus penghubung (desktop) dibuat dengan ::before.
        */}
        <ol className="relative flex flex-col lg:grid lg:grid-cols-3 lg:grid-rows-[auto_auto_1fr] lg:gap-x-12 lg:before:absolute lg:before:top-[27px] lg:before:right-[33%] lg:before:left-7 lg:before:border-t-[1.5px] lg:before:border-dashed lg:before:border-primary lg:before:content-['']">
          {STEPS.map((step, i) => {
            const last = i === STEPS.length - 1;
            return (
              <li
                key={step.title}
                className="relative flex gap-4 lg:row-span-3 lg:grid lg:grid-rows-subgrid lg:gap-4"
              >
                <div className="flex flex-col items-center lg:block">
                  <span
                    aria-hidden="true"
                    className="relative z-10 flex size-10 shrink-0 items-center justify-center rounded-full border-[1.5px] border-primary bg-surface font-mono font-semibold text-primary lg:size-14 lg:text-xl"
                  >
                    {i + 1}
                  </span>
                  {!last && (
                    <span
                      aria-hidden="true"
                      className="flex-1 border-l-[1.5px] border-dashed border-primary lg:hidden"
                    />
                  )}
                </div>
                <div
                  className={`flex min-w-0 flex-1 flex-col gap-4 pt-2 lg:contents ${last ? "" : "pb-10"}`}
                >
                  <div className="flex flex-col gap-1 md:gap-3">
                    <h3 className="text-[17px] font-bold md:text-xl">{step.title}</h3>
                    <p className="text-[15px] leading-[23px] text-ink-muted max-md:hidden">
                      {step.desc}
                    </p>
                    <p className="text-sm text-ink-muted md:hidden">{step.mobile}</p>
                  </div>
                  <step.Card />
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
