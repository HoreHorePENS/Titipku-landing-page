import { LINKS } from "./content";
import { ButtonLink, container } from "./ui";

export function ClosingCta() {
  return (
    <section aria-labelledby="cta-title" className="border-t border-line">
      <div
        className={`${container} flex flex-col gap-3.5 py-10 md:gap-6 md:py-[72px] lg:flex-row lg:items-center lg:justify-between lg:gap-10`}
      >
        <h2
          id="cta-title"
          data-reveal=""
          className="text-2xl leading-[30px] font-extrabold md:text-[32px] md:leading-10 md:tracking-[-0.02em]"
        >
          Tutup buku tulisnya minggu ini.
        </h2>
        <div data-reveal="" className="flex gap-3">
          <ButtonLink href={LINKS.daftar} className="max-md:w-full">
            Daftar Gratis
          </ButtonLink>
          <ButtonLink href={LINKS.demo} variant="secondary" className="max-md:hidden">
            Coba Demo
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
