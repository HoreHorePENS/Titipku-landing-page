import { DashboardMock } from "./DashboardMock";
import { ReceiptMock } from "./ReceiptMock";
import { container, SectionTitle } from "./ui";

export function OwnerAndShopSection() {
  return (
    <section
      id="pemilik-warung"
      aria-labelledby="pemilik-warung-title"
      className="border-t border-line"
    >
      <div className={`${container} flex flex-col gap-8 py-12 md:gap-12 md:py-20`}>
        <SectionTitle id="pemilik-warung-title">Untuk pemilik, untuk warung</SectionTitle>

        <div className="grid gap-12 md:grid-cols-2 md:gap-10 xl:gap-20">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <h3 className="text-xl leading-7 font-bold md:text-2xl md:leading-8">
                Pemilik melihat semuanya dalam satu layar
              </h3>
              <p className="max-w-[520px] text-[15px] leading-[23px] text-ink-muted md:text-base md:leading-[25px]">
                Uang yang masih tertahan, penjualan bulan ini, dan warung yang perlu
                didatangi langsung terlihat saat Titipku dibuka.
              </p>
            </div>
            <DashboardMock />
          </div>

          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <h3 className="text-xl leading-7 font-bold md:text-2xl md:leading-8">
                Warung cukup terima link
              </h3>
              <p className="max-w-[520px] text-[15px] leading-[23px] text-ink-muted md:text-base md:leading-[25px]">
                Tanpa daftar, tanpa aplikasi. Nota dibuka langsung dari WhatsApp, lengkap
                dengan rincian terjual, retur, dan sisa utang.
              </p>
            </div>
            <ReceiptMock />
          </div>
        </div>
      </div>
    </section>
  );
}
