import { REQUEST } from "./content";

/**
 * Kartu "Permintaan titip baru" di HP warung (komponen statis).
 * - variant "full": 290 px, rincian produk (hero desktop).
 * - variant "compact": 196 px, ringkas (hero mobile & kartu langkah).
 * - status "approved": bercap DISETUJUI (keadaan akhir); "pending": belum.
 *
 * Atribut data-req-* dipakai animasi hero (motion/MatchDemo.tsx): pil status
 * berganti Menunggu → Disetujui dan cap distempel. Tanpa JS / tanpa demo,
 * kartu tampil sesuai `status`.
 */

type Props = {
  variant?: "full" | "compact";
  status?: "pending" | "approved";
  /** Tampilkan baris "HP warung · …" di atas kartu. */
  device?: boolean;
};

const PILL_BASE = "rounded px-1.5 py-0.5 text-[10px] font-bold whitespace-nowrap";
const PILL_WAIT = `${PILL_BASE} bg-status-sebagian/10 text-status-sebagian`;
const PILL_DONE = `${PILL_BASE} bg-primary-soft text-status-lunas`;

export function RequestCardMock({ variant = "full", status = "approved", device = true }: Props) {
  const compact = variant === "compact";
  const approved = status === "approved";
  const label = `${REQUEST.title} di HP warung dari ${REQUEST.from}: ${REQUEST.products}, ${REQUEST.qty}. Status: ${
    approved ? REQUEST.approved.toLowerCase() : REQUEST.pending.toLowerCase()
  }.`;

  return (
    <div
      role="img"
      aria-label={label}
      data-req-card=""
      className={compact ? "w-[196px]" : "w-[290px]"}
    >
      <div aria-hidden="true" className="flex flex-col gap-1.5 select-none">
        {device && (
          <span
            className={`self-start rounded border border-line bg-surface px-1.5 py-0.5 font-mono text-ink-muted ${
              compact ? "text-[9px]" : "text-[11px]"
            }`}
          >
            {REQUEST.device}
          </span>
        )}
        <div
          className={`relative flex flex-col rounded-lg border border-line bg-surface ${
            compact ? "gap-2 p-3" : "gap-3 p-4"
          }`}
        >
          <div className="flex items-start justify-between gap-2">
            <span className={`font-extrabold ${compact ? "text-xs" : "text-[15px]"}`}>
              {REQUEST.title}
            </span>
            {/* Dua pil ditumpuk di sel grid yang sama → lebar tetap saat berganti. */}
            <span className="grid shrink-0 justify-items-end">
              {approved ? (
                <>
                  <span data-req-pill="wait" className={`col-start-1 row-start-1 ${PILL_WAIT}`}>
                    {REQUEST.pending}
                  </span>
                  <span data-req-pill="done" className={`col-start-1 row-start-1 ${PILL_DONE}`}>
                    {REQUEST.approved}
                  </span>
                </>
              ) : (
                <span className={PILL_WAIT}>{REQUEST.pending}</span>
              )}
            </span>
          </div>

          <dl className={`flex flex-col ${compact ? "gap-1 text-[10px]" : "gap-1.5 text-xs"}`}>
            <div className="flex gap-2">
              <dt className="w-12 shrink-0 text-ink-muted">{REQUEST.fromLabel}</dt>
              <dd className="font-semibold">{REQUEST.from}</dd>
            </div>
            {!compact && (
              <div className="flex gap-2">
                <dt className="w-12 shrink-0 text-ink-muted">{REQUEST.productsLabel}</dt>
                <dd>{REQUEST.products}</dd>
              </div>
            )}
            <div className="flex gap-2">
              <dt className="w-12 shrink-0 text-ink-muted">{REQUEST.qtyLabel}</dt>
              <dd className="font-mono font-semibold tabular-nums">{REQUEST.qty}</dd>
            </div>
          </dl>

          <div className="relative flex items-center gap-1.5">
            <span
              className={`flex items-center rounded-md border border-line-strong font-semibold text-ink-muted ${
                compact ? "h-7 px-2 text-[10px]" : "h-8 px-3.5 text-xs"
              }`}
            >
              {REQUEST.reject}
            </span>
            <span
              data-req-accept=""
              className={`relative flex items-center rounded-md bg-primary font-bold text-white ${
                compact ? "h-7 px-2 text-[10px]" : "h-8 px-3.5 text-xs"
              }`}
            >
              {REQUEST.accept}
            </span>
            {approved && (
              <span
                data-req-stamp=""
                className={`absolute right-0 -rotate-4 rounded border-[1.5px] border-status-lunas bg-surface font-extrabold text-status-lunas ${
                  compact
                    ? "top-0.5 px-1.5 py-[3px] text-[8px] tracking-[0.08em]"
                    : "-top-0.5 px-2.5 py-1 text-xs tracking-[0.12em]"
                }`}
              >
                {REQUEST.stamp}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
