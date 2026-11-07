import Link from "next/link";
import { HERO, LINKS } from "./content";
import { MatchDemo } from "./motion/MatchDemo";
import { RequestCardMock } from "./RequestCardMock";
import { ShopListMock } from "./ShopListMock";
import { ButtonLink, container, textLink } from "./ui";

export function Hero() {
  return (
    <section aria-labelledby="hero-title">
      <MatchDemo>
      <div
        className={`${container} grid gap-12 pt-9 pb-6 md:py-16 lg:grid-cols-[minmax(0,1fr)_480px] lg:items-center lg:pt-20 lg:pb-[72px] xl:grid-cols-[minmax(0,1fr)_620px]`}
      >
        <div className="flex flex-col gap-[18px] md:gap-6">
          <p className="text-xs font-bold tracking-[0.06em] text-primary uppercase md:text-[13px]">
            {HERO.eyebrow}
          </p>
          <h1
            id="hero-title"
            className="text-[36px] leading-[42px] font-extrabold tracking-[-0.02em] text-balance md:text-[52px] md:leading-[58px] md:tracking-[-0.03em] xl:text-[64px] xl:leading-[70px]"
          >
            {HERO.title}
          </h1>
          <p className="max-w-[560px] text-[17px] leading-[26px] text-pretty text-ink-muted md:text-xl md:leading-[30px]">
            {HERO.subtitle}
          </p>
          <div className="flex flex-col gap-2 md:flex-row md:gap-3 md:pt-2">
            <ButtonLink href={LINKS.daftarPenitip}>{HERO.ctaPenitip}</ButtonLink>
            <ButtonLink href={LINKS.daftarWarung} variant="secondary">
              {HERO.ctaWarung}
            </ButtonLink>
          </div>
          <p className="-mt-1 flex flex-wrap items-center gap-x-3 text-sm text-ink-muted md:-mt-2">
            <Link
              href={LINKS.demo}
              prefetch={false}
              className={`${textLink} font-semibold text-primary underline underline-offset-2`}
            >
              {HERO.demo} →
            </Link>
            <span className="max-md:hidden">{HERO.note}</span>
          </p>
        </div>

        {/* Visual tablet & desktop: komposisi 620 × 660, diperkecil di 1024–1279 px. */}
        <div
          role="img"
          aria-label={HERO.visualLabel}
          className="relative mx-auto h-[660px] w-[620px] max-md:hidden lg:mx-0 lg:h-[511px] lg:w-[480px] xl:h-[660px] xl:w-[620px]"
        >
          <div
            aria-hidden="true"
            className="absolute top-0 left-0 h-[660px] w-[620px] origin-top-left lg:scale-[0.774] xl:scale-100"
          >
            <div className="absolute top-0 left-0">
              <ShopListMock />
            </div>
            <div className="absolute top-[170px] right-0 rotate-2">
              <RequestCardMock />
            </div>
          </div>
        </div>
      </div>

      {/* Visual mobile: HP diskalakan 0,78 + kartu permintaan ringkas di area
          kartu warung ke-3/4, supaya kartu Bu Sri yang dipilih tetap terlihat. */}
      <div
        role="img"
        aria-label={HERO.visualLabel}
        className="relative mx-auto h-[500px] max-w-[480px] overflow-hidden md:hidden"
      >
        <div aria-hidden="true">
          <div className="absolute top-0 left-4 origin-top-left scale-[0.78]">
            <ShopListMock />
          </div>
          <div className="absolute top-[300px] right-2 rotate-2">
            <RequestCardMock variant="compact" />
          </div>
        </div>
      </div>
      </MatchDemo>
    </section>
  );
}
