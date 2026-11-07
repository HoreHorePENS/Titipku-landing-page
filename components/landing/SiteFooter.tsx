import { LINKS } from "./content";
import { container, textLink } from "./ui";

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div
        className={`${container} flex justify-between py-5 text-[13px] text-ink-muted md:py-6`}
      >
        <p>
          <span className="font-extrabold text-primary">Titipku</span> · Dibuat untuk
          GTNIC 2026
        </p>
        {/* Di mobile desain hanya menampilkan baris merek. */}
        <a href={LINKS.kontak} className={`${textLink} -my-3 max-md:hidden`}>
          Kontak
        </a>
      </div>
    </footer>
  );
}
