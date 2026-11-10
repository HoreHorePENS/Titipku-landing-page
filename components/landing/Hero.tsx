import { HERO } from "./content";
import { MatchDemo } from "./motion/MatchDemo";
import { RequestCardMock } from "./RequestCardMock";
import { ShopListMock } from "./ShopListMock";
import { RoleCtas } from "./RoleCtas";
import { container } from "./ui";

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
            <div className="md:pt-2">
              <RoleCtas />
            </div>
            <p className="-mt-2 text-sm text-ink-muted max-md:hidden">{HERO.note}</p>
          </div>

          {/* Fixed 620 × 660 composition, scaled down between 1024 and 1279 px. */}
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
                <RequestCardMock device={HERO.requestDevice} />
              </div>
            </div>
          </div>
        </div>

        {/* The request card covers the lower shop cards so the selected one stays visible. */}
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
              <RequestCardMock variant="compact" device={HERO.requestDevice} />
            </div>
          </div>
        </div>
      </MatchDemo>
    </section>
  );
}
