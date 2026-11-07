import { LINKS } from "./content";
import { VisitDemo } from "./motion/VisitDemo";
import { PhoneVisitMock } from "./PhoneVisitMock";
import { ReceiptMock } from "./ReceiptMock";
import { ButtonLink, container, Copy } from "./ui";

export function Hero() {
  return (
    <section aria-labelledby="hero-title">
      <VisitDemo>
      <div
        className={`${container} grid gap-12 pt-9 pb-6 md:py-16 lg:grid-cols-[minmax(0,1fr)_480px] lg:items-center lg:pt-20 lg:pb-[72px] xl:grid-cols-[minmax(0,1fr)_620px]`}
      >
        <div className="flex flex-col gap-[18px] md:gap-6">
          <p className="text-xs font-bold tracking-[0.06em] text-primary uppercase md:text-[13px]">
            <Copy
              mobile="Untuk UMKM yang titip jual"
              desktop="Untuk UMKM yang titip jual di warung"
            />
          </p>
          <h1
            id="hero-title"
            className="text-[36px] leading-[42px] font-extrabold tracking-[-0.02em] text-balance md:text-[52px] md:leading-[58px] md:tracking-[-0.03em] xl:text-[64px] xl:leading-[70px]"
          >
            Titip jual rapi, uang tidak lagi nyangkut
          </h1>
          <p className="max-w-[540px] text-[17px] leading-[26px] text-pretty text-ink-muted md:text-xl md:leading-[30px]">
            Catat titipan di puluhan warung, tagihan dihitung otomatis, nota langsung
            terkirim ke WhatsApp.
          </p>
          <div className="flex flex-col gap-2 md:flex-row md:gap-3 md:pt-2">
            <ButtonLink href={LINKS.daftar}>Daftar Gratis</ButtonLink>
            <ButtonLink href={LINKS.demo} variant="secondary">
              Coba Demo
            </ButtonLink>
          </div>
          <p className="text-sm text-ink-muted max-md:hidden">
            Jalan di HP Android biasa. Tetap bisa mencatat saat sinyal lemah.
          </p>
        </div>

        {/* Visual tablet & desktop: komposisi 620 × 660, diperkecil di 1024–1279 px. */}
        <div className="relative mx-auto h-[660px] w-[620px] max-md:hidden lg:mx-0 lg:h-[511px] lg:w-[480px] xl:h-[660px] xl:w-[620px]">
          <div className="absolute top-0 left-0 h-[660px] w-[620px] origin-top-left lg:scale-[0.774] xl:scale-100">
            <div className="absolute top-0 left-5">
              <PhoneVisitMock demo />
            </div>
            <div className="absolute top-[150px] right-0 rotate-2">
              <ReceiptMock />
            </div>
          </div>
        </div>
      </div>

      {/* Visual mobile: HP diskalakan 0,78 + nota ringkas. */}
      <div className="relative mx-auto h-[500px] max-w-[480px] overflow-hidden md:hidden">
        <div className="absolute top-0 left-4 origin-top-left scale-[0.78]">
          <PhoneVisitMock demo />
        </div>
        {/* <640 px: nota diturunkan ke area kartu Balado (statis) supaya tidak
            menutupi stepper "Sisa di rak" yang disorot saat demo. */}
        <div className="absolute top-[120px] right-3.5 rotate-3 max-sm:top-[276px] max-sm:right-2">
          <ReceiptMock variant="compact" />
        </div>
      </div>
      </VisitDemo>
    </section>
  );
}
