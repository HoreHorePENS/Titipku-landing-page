import Link from "next/link";
import { HEADER, LINKS } from "./content";
import { ButtonLink, container, textLink } from "./ui";

export function SiteHeader() {
  return (
    <header className="border-b border-line">
      <div className={`${container} flex items-center justify-between py-4 md:py-[18px]`}>
        <Link
          href="/"
          className="inline-flex min-h-11 items-center text-[17px] font-extrabold text-primary md:text-lg"
        >
          Titipku
        </Link>
        <nav aria-label={HEADER.navLabel} className="max-md:hidden">
          <ul className="flex gap-5 text-sm font-semibold whitespace-nowrap lg:gap-8">
            {HEADER.nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className={textLink}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-2">
          <Link
            href={LINKS.masuk}
            prefetch={false}
            className="inline-flex h-12 items-center px-1 text-[15px] font-semibold hover:text-primary-hover hover:underline md:h-11 md:px-4 md:text-sm"
          >
            {HEADER.masuk}
          </Link>
          <ButtonLink href={LINKS.daftar} size="md" className="max-md:hidden">
            {HEADER.daftar}
          </ButtonLink>
        </div>
      </div>
    </header>
  );
}
