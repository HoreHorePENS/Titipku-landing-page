import Link from "next/link";
import type { ReactNode } from "react";

/**
 * Catatan kontras: --ink-subtle (#78716C) di atas --paper (#FAF7F0) hanya 4,48:1,
 * jadi teks kecil di latar paper memakai --ink-muted; #78716C tetap dipakai di
 * latar putih (4,83:1).
 */

/** Lebar konten: 1440 px seperti artboard desktop, gutter 20/40/80 px. */
export const container = "mx-auto w-full max-w-[1440px] px-5 md:px-10 xl:px-20";

/** Gaya tautan teks bawaan desain (hover #0B5F58 + garis bawah). */
export const textLink =
  "inline-flex min-h-11 items-center hover:text-primary-hover hover:underline";

/**
 * Desain punya copy berbeda untuk mobile (390) dan desktop (1440).
 * Teks yang tersembunyi memakai display:none sehingga tidak dibacakan dua kali.
 */
export function Copy({ mobile, desktop }: { mobile: ReactNode; desktop: ReactNode }) {
  return (
    <>
      <span className="md:hidden">{mobile}</span>
      <span className="max-md:hidden">{desktop}</span>
    </>
  );
}

type ButtonLinkProps = {
  href: string;
  variant?: "primary" | "secondary";
  size?: "md" | "lg";
  className?: string;
  children: ReactNode;
};

const VARIANT = {
  primary: "bg-primary font-bold text-white hover:bg-primary-hover",
  secondary:
    "border border-line-strong bg-surface font-semibold text-ink hover:border-ink-subtle",
};

const SIZE = {
  md: "h-11 px-4 text-sm",
  lg: "h-[52px] px-6 text-base",
};

export function ButtonLink({
  href,
  variant = "primary",
  size = "lg",
  className = "",
  children,
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      // TODO(halaman): aktifkan lagi prefetch setelah /masuk dan /daftar dibuat;
      // sekarang prefetch ke halaman 404 memunculkan error di konsol.
      prefetch={false}
      className={`inline-flex items-center justify-center rounded-md whitespace-nowrap transition-[color,background-color,border-color,scale] duration-150 motion-safe:active:scale-[0.98] ${VARIANT[variant]} ${SIZE[size]} ${className}`}
    >
      {children}
    </Link>
  );
}

/** Judul h2 tiap bagian (26/32 di mobile, 40/48 di desktop). */
export function SectionTitle({
  id,
  className = "",
  reveal = false,
  children,
}: {
  id: string;
  className?: string;
  /** Ikut animasi muncul saat terlihat (lihat MotionController). */
  reveal?: boolean;
  children: ReactNode;
}) {
  return (
    <h2
      id={id}
      data-reveal={reveal ? "" : undefined}
      className={`text-[26px] leading-8 font-extrabold md:text-[40px] md:leading-[48px] md:tracking-[-0.02em] ${className}`}
    >
      {children}
    </h2>
  );
}
