import Link from "next/link";
import { LINKS } from "./content";
import { ButtonLink, container, textLink } from "./ui";

const NAV = [
  { href: "#untuk-siapa", label: "Untuk siapa" },
  { href: "#masalah", label: "Masalahnya" },
  { href: "#cara-kerja", label: "Cara kerja" },
  { href: "#fitur", label: "Fitur" },
  { href: "#faq", label: "FAQ" },
];

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
        <nav aria-label="Navigasi utama" className="max-md:hidden">
          <ul className="flex gap-5 text-sm font-semibold whitespace-nowrap lg:gap-8">
            {NAV.map((item) => (
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
            Masuk
          </Link>
          <ButtonLink href={LINKS.daftar} size="md" className="max-md:hidden">
            Daftar Gratis
          </ButtonLink>
        </div>
      </div>
    </header>
  );
}
