import { FOOTER } from "./content";
import { container } from "./ui";

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div
        className={`${container} py-5 text-[13px] text-ink-muted md:py-6`}
      >
        <p>
          <span className="font-extrabold text-primary">{FOOTER.brand}</span> · {FOOTER.tagline}
        </p>
      </div>
    </footer>
  );
}
