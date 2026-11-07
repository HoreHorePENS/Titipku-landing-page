import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import { PhoneVisitMock } from "./PhoneVisitMock";
import { container, Copy, SectionTitle } from "./ui";

/**
 * TODO(foto): taruh foto asli di public/landing/buku-tulis.jpg.
 * Selama file belum ada, ditampilkan blok placeholder berarsir sesuai desain.
 * Pengecekan berjalan saat build (halaman ini dirender statis).
 */
const NOTEBOOK_PHOTO = "/landing/buku-tulis.jpg";
const HAS_NOTEBOOK_PHOTO = fs.existsSync(
  path.join(process.cwd(), "public", NOTEBOOK_PHOTO),
);

const POINTS = [
  {
    title: "Tidak ada lagi salah hitung",
    desktop: "Cukup isi sisa di rak dan retur. Terjual dan tagihan dihitung sendiri.",
    mobile: "Isi sisa dan retur, terjual dihitung sendiri.",
  },
  {
    title: "Utang lama tidak terlupa",
    desktop: "Sisa bayar minggu lalu otomatis ikut di nota berikutnya.",
    mobile: "Sisa bayar ikut di nota berikutnya.",
  },
  {
    title: "Barang basi ketahuan lebih awal",
    desktop: "Tahu warung mana yang perlu ditarik barangnya sebelum kedaluwarsa.",
    mobile: "Tahu kapan harus ditarik dari rak.",
  },
];

function NotebookPhoto() {
  if (HAS_NOTEBOOK_PHOTO) {
    return (
      // Bingkai sama dengan placeholder di desain: tinggi 240 px (mobile) /
      // 440 px (desktop) selebar kolom; foto dipotong rapi dengan object-cover.
      <div className="relative h-[240px] overflow-hidden rounded-md md:h-[440px]">
        <Image
          src={NOTEBOOK_PHOTO}
          alt="Buku tulis catatan titipan warung"
          fill
          sizes="(min-width: 1440px) 584px, (min-width: 768px) 45vw, 50vw"
          className="object-cover"
        />
      </div>
    );
  }
  return (
    <div className="flex h-[240px] items-end rounded-md p-2 font-mono text-[10px] text-ink-muted hatch-sm md:h-[440px] md:p-4 md:text-xs md:hatch">
      <Copy
        mobile="foto: buku tulis penuh coretan"
        desktop="foto: buku tulis catatan titipan Warung Bu Sri, angka dicoret-coret"
      />
    </div>
  );
}

export function ProblemSection() {
  return (
    <section id="masalah" aria-labelledby="masalah-title" className="border-t border-line">
      <div className={`${container} flex flex-col gap-5 py-12 md:gap-10 md:py-20`}>
        <SectionTitle id="masalah-title" className="max-w-[720px]">
          <Copy
            mobile="Lima belas warung, buku penuh coretan."
            desktop="Satu warung, satu halaman buku. Lima belas warung, buku penuh coretan."
          />
        </SectionTitle>

        <div className="grid grid-cols-2 gap-2 md:gap-0 md:overflow-hidden md:rounded-lg md:border md:border-line md:bg-surface">
          <div className="flex flex-col gap-1.5 md:gap-3.5 md:border-r md:border-line md:p-7">
            <h3 className="text-[11px] font-bold tracking-[0.05em] text-ink-muted uppercase md:text-ink-subtle md:text-[13px]">
              <Copy mobile="Sebelum" desktop="Sebelum · buku tulis" />
            </h3>
            <NotebookPhoto />
          </div>
          <div className="flex flex-col gap-1.5 md:gap-3.5 md:bg-paper md:p-7">
            <h3 className="text-[11px] font-bold tracking-[0.05em] text-primary uppercase md:text-[13px]">
              <Copy mobile="Sesudah" desktop="Sesudah · Titipku, data yang sama" />
            </h3>
            <div className="relative h-[240px] overflow-hidden rounded-md border border-line bg-surface md:h-[440px] md:rounded-none md:border-0 md:bg-transparent">
              <div className="absolute top-1.5 left-1.5 origin-top-left scale-[0.52] md:top-0 md:left-1/2 md:origin-top md:-translate-x-1/2 md:scale-[0.85] lg:scale-100">
                <PhoneVisitMock />
              </div>
            </div>
          </div>
        </div>

        <ul className="grid gap-3.5 md:grid-cols-3 md:gap-10">
          {POINTS.map((point) => (
            <li
              key={point.title}
              className="flex flex-col gap-1 border-t-2 border-ink pt-2.5 md:gap-1.5 md:pt-3.5"
            >
              <h3 className="text-base font-bold md:text-[17px]">{point.title}</h3>
              <p className="text-sm leading-[21px] text-ink-muted md:text-[15px] md:leading-[23px]">
                <Copy mobile={point.mobile} desktop={point.desktop} />
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
