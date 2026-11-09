import Link from "next/link";
import type { ReactNode } from "react";

// --ink-subtle is only 4.48:1 on --paper, so small text on paper uses --ink-muted.

export const container = "mx-auto w-full max-w-[1440px] px-5 md:px-10 xl:px-20";

export const textLink =
  "inline-flex min-h-11 items-center hover:text-primary-hover hover:underline";

// The hidden variant is display:none, so screen readers never read both.
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
      // /masuk and /daftar don't exist yet; prefetching them logs 404s.
      prefetch={false}
      className={`inline-flex items-center justify-center rounded-md whitespace-nowrap transition-[color,background-color,border-color,scale] duration-150 motion-safe:active:scale-[0.98] ${VARIANT[variant]} ${SIZE[size]} ${className}`}
    >
      {children}
    </Link>
  );
}

export function SectionTitle({
  id,
  className = "",
  reveal = false,
  children,
}: {
  id: string;
  className?: string;
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
