import { container, SectionTitle } from "./ui";

const FAQS = [
  {
    q: "Apakah warung harus memasang aplikasi?",
    a: "Tidak. Warung menerima nota lewat link WhatsApp dan membukanya tanpa akun.",
  },
  {
    q: "Apakah saya perlu menginstal aplikasi?",
    a: "Tidak. Titipku dibuka dari browser di HP atau laptop.",
  },
  {
    q: "Bagaimana kalau warung baru membayar sebagian?",
    a: "Catat nominal yang dibayar. Sisanya otomatis menjadi utang dan muncul di kunjungan berikutnya.",
  },
  {
    q: "Bagaimana Titipku tahu barang mana yang hampir basi?",
    a: "Setiap titipan dicatat tanggalnya, lalu dihitung dari umur simpan produk.",
  },
  {
    q: "Apakah data usaha saya bisa dilihat orang lain?",
    a: "Tidak. Data setiap usaha dipisahkan dan hanya bisa dibuka oleh akun pemiliknya.",
  },
  {
    q: "Bisakah saya mencoba dulu?",
    a: "Bisa, lewat tombol Coba Demo berisi data contoh usaha keripik.",
  },
];

/** Accordion native <details>/<summary>: bisa dibuka-tutup dengan Enter/Spasi. */
export function FaqSection() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="border-t border-line bg-surface">
      <div className={`${container} flex flex-col gap-6 py-12 md:gap-10 md:py-20`}>
        <SectionTitle id="faq-title" reveal>Pertanyaan umum</SectionTitle>

        <div data-reveal="" className="max-w-[860px] border-b border-line">
          {FAQS.map((item) => (
            <details key={item.q} data-faq="" className="group border-t border-line">
              <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-3 text-base font-bold hover:text-primary-hover md:text-lg [&::-webkit-details-marker]:hidden">
                {item.q}
                <span
                  aria-hidden="true"
                  className="shrink-0 font-mono text-xl font-medium text-primary"
                >
                  <span className="group-open:hidden">+</span>
                  <span className="hidden group-open:inline">−</span>
                </span>
              </summary>
              <p data-faq-answer="" className="max-w-[680px] pb-5 text-[15px] leading-[23px] text-ink-muted md:text-base md:leading-[25px]">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
