import { REQUEST } from "./content";

// data-req-* hooks are animated by MatchDemo; elsewhere the card renders `status` as is.

type Props = {
  variant?: "full" | "compact";
  status?: "pending" | "approved";
  /** Label above the card, e.g. "HP warung · …"; false hides it. */
  device?: string | false;
};

const PILL_BASE = "rounded px-1.5 py-0.5 text-[10px] font-bold whitespace-nowrap";
const PILL_WAIT = `${PILL_BASE} bg-status-sebagian/10 text-status-sebagian`;
const PILL_DONE = `${PILL_BASE} bg-primary-soft text-status-lunas`;

function Actions({ compact }: { compact: boolean }) {
  const size = compact ? "h-7 px-2 text-[10px]" : "h-8 px-3.5 text-xs";
  return (
    <div className="flex items-center gap-1.5">
      <span className={`flex items-center rounded-md border border-line-strong font-semibold text-ink-muted ${size}`}>
        {REQUEST.reject}
      </span>
      <span
        data-req-accept=""
        className={`relative flex items-center rounded-md bg-primary font-bold text-white ${size}`}
      >
        {REQUEST.accept}
      </span>
    </div>
  );
}

export function RequestCardMock({
  variant = "full",
  status = "approved",
  device = REQUEST.device,
}: Props) {
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
            {device}
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
            {/* Both pills share one grid cell so the width stays put when they swap. */}
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

          {approved ? (
            // Once approved only the "Disetujui" badge remains; the hero demo shows the
            // buttons until the approval lands.
            <div data-req-actions="">
              <Actions compact={compact} />
            </div>
          ) : (
            <Actions compact={compact} />
          )}
        </div>
      </div>
    </div>
  );
}
