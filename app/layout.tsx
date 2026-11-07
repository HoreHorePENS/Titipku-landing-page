import type { Metadata } from "next";
import { META } from "@/components/landing/content";
import { Caveat, IBM_Plex_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

// Tulisan tangan untuk ilustrasi buku tulis; di bawah lipatan, jadi tidak di-preload.
const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  preload: false,
});

const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Titipku",
    template: "%s · Titipku",
  },
  description: META.description,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="id"
      className={`${jakarta.variable} ${plexMono.variable} ${caveat.variable} antialiased`}
    >
      <body className="min-h-dvh bg-paper text-ink">{children}</body>
    </html>
  );
}
