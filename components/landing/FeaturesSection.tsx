import { PhoneVisitMock } from "./PhoneVisitMock";
import { container, Copy, SectionTitle } from "./ui";

const VISIT_CHECKS = [
  "Peringatan kalau sisa + retur melebihi titipan",
  "Tersimpan di HP dulu saat sinyal hilang",
  "Bayar penuh, sebagian, atau belum bayar",
];

const SMALL_FEATURES = [
  {
    title: "Tagihan per warung",
    mobileTitle: "Tagihan per warung",
    desc: "Lihat siapa yang belum bayar lebih dari 14 hari. Pembayaran dicicil masuk ke nota tertua dulu.",
    mobileDesc: "Tahu siapa yang telat bayar.",
  },
  {
    title: "Pengingat barang basi",
    mobileTitle: "Pengingat basi",
    desc: "Tanggal basi dihitung dari umur simpan tiap produk.",
    mobileDesc: "Dari umur simpan produk.",
  },
  {
    // Tidak ditampilkan di mobile, sesuai desain.
    title: "Kesehatan warung",
    mobileTitle: null,
    desc: "Bagus, Pantau, atau Evaluasi, dengan alasan yang bisa dibaca.",
    mobileDesc: null,
  },
];

export function FeaturesSection() {
  return (
    <section id="fitur" aria-labelledby="fitur-title" className="border-t border-line">
      <div className={`${container} flex flex-col gap-3 py-12 md:gap-8 md:py-20`}>
        <SectionTitle id="fitur-title" className="mb-2 md:mb-0">
          Yang dipakai tiap minggu
        </SectionTitle>

        <div className="grid gap-3 md:gap-5 xl:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]">
          <article className="flex flex-col gap-2 rounded-lg border border-line bg-surface p-5 md:grid md:grid-cols-[minmax(0,1fr)_316px] md:gap-8 md:p-9">
            <div className="flex flex-col gap-2 md:gap-3.5">
              <h3 className="text-[22px] font-extrabold md:text-[28px] md:leading-[34px]">
                Catat Kunjungan
              </h3>
              <p className="text-[15px] leading-[23px] text-ink-muted md:text-base md:leading-[25px]">
                <Copy
                  mobile="Tombol besar untuk jari, angka langsung dihitung, saran jumlah titip baru. Tersimpan di HP saat sinyal hilang."
                  desktop="Satu kartu per produk. Tombol besar untuk jari, angka langsung dihitung, dan saran jumlah titip baru dari kecepatan laku di warung itu."
                />
              </p>
              <ul className="flex flex-col gap-2.5 pt-2.5 text-[15px] max-md:hidden">
                {VISIT_CHECKS.map((item) => (
                  <li key={item} className="border-t border-line pt-2.5">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="max-md:hidden">
              <PhoneVisitMock />
            </div>
          </article>

          <ul className="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-5 xl:grid-cols-1 xl:grid-rows-3">
            {SMALL_FEATURES.map((f) => (
              <li
                key={f.title}
                className={`flex flex-col gap-1 border-t border-line-strong pt-3 md:gap-2 md:pt-5 ${
                  f.mobileTitle ? "" : "max-md:hidden"
                }`}
              >
                <h3 className="text-[15px] font-bold md:text-lg">
                  {f.mobileTitle ? <Copy mobile={f.mobileTitle} desktop={f.title} /> : f.title}
                </h3>
                <p className="text-[13px] text-ink-muted md:text-[15px] md:leading-[23px]">
                  {f.mobileDesc ? <Copy mobile={f.mobileDesc} desktop={f.desc} /> : f.desc}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
