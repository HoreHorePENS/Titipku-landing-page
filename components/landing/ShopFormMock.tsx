import Image from "next/image";
import { STEP_CARDS } from "./content";

const FORM = STEP_CARDS.shop;

export function ShopFormMock() {
  return (
    <div className="flex w-full flex-col gap-2 rounded-md border border-line bg-surface p-2.5 text-xs">
      {/* Peran Pemilik Toko terpilih */}
      <div className="flex flex-wrap items-center gap-1.5">
        <span className="text-[9.5px] text-ink-muted">Daftar sebagai:</span>
        <span className="rounded border border-primary bg-primary-soft px-1.5 py-0.5 text-[8.5px] font-bold text-primary">
          {FORM.role} ✓
        </span>
      </div>

      {/* Field Nama Toko, Kategori, Foto, Alamat */}
      <div className="flex flex-col gap-1.5">
        <div className="flex flex-col gap-0.5">
          <span className="text-[8.5px] font-semibold text-ink-muted">Nama Toko</span>
          <div className="rounded border border-line-strong bg-paper/50 px-2 py-1 text-[9.5px] font-semibold text-ink">
            {FORM.name}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-1.5">
          <div className="flex flex-col gap-0.5">
            <span className="text-[8.5px] font-semibold text-ink-muted">Kategori</span>
            <div className="truncate rounded border border-line-strong bg-paper/50 px-2 py-1 text-[9px] text-ink">
              {FORM.category}
            </div>
          </div>
          <div className="flex flex-col gap-0.5">
            <span className="text-[8.5px] font-semibold text-ink-muted">Kotak Foto</span>
            <div className="flex h-[25px] items-center justify-center gap-1 rounded border border-dashed border-line-strong bg-paper/40 text-[8px] text-ink-subtle">
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-2.5 shrink-0">
                <rect width="18" height="18" x="3" y="3" rx="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <path d="m21 15-5-5L5 21" />
              </svg>
              <span className="truncate">{FORM.photo}</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-0.5">
          <span className="text-[8.5px] font-semibold text-ink-muted">Alamat</span>
          <div className="rounded border border-line-strong bg-paper/50 px-2 py-1 text-[8.5px] leading-tight text-ink">
            {FORM.address}
          </div>
        </div>
      </div>

      {/* Peta kecil dengan pin dan tombol Gunakan Lokasi GPS */}
      <div className="relative h-16 w-full overflow-hidden rounded border border-line bg-hatch-b">
        <Image
          src="/landing/app/peta-sekitar.webp"
          alt=""
          width={314}
          height={268}
          className="size-full object-cover"
        />
        {/* Pin */}
        <span className="absolute top-1/2 left-1/2 flex size-3.5 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-white shadow-xs">
          <span className="size-1 rounded-full bg-surface" />
        </span>
        {/* Tombol Gunakan Lokasi GPS */}
        <span className="absolute right-1 bottom-1 flex items-center gap-1 rounded bg-surface/90 px-1.5 py-0.5 text-[7.5px] font-bold text-ink shadow-xs">
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-2 text-primary">
            <circle cx="12" cy="12" r="3" />
            <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
          </svg>
          {FORM.gps}
        </span>
      </div>

      <span className="flex h-7 items-center justify-center rounded-md bg-primary text-[10px] font-bold text-white">
        {FORM.submit}
      </span>
    </div>
  );
}
