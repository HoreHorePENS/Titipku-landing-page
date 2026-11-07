import type { Metadata } from "next";
import { ClosingCta } from "@/components/landing/ClosingCta";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { Hero } from "@/components/landing/Hero";
import { HowItWorksSection } from "@/components/landing/HowItWorksSection";
import { ProblemSection } from "@/components/landing/ProblemSection";
import { SiteFooter } from "@/components/landing/SiteFooter";
import { SiteHeader } from "@/components/landing/SiteHeader";

const title = "Titipku — Titip jual rapi, uang tidak lagi nyangkut";
const description =
  "Aplikasi untuk UMKM yang titip jual di warung: catat titipan di puluhan warung, tagihan dihitung otomatis, nota langsung terkirim ke WhatsApp.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "/",
    siteName: "Titipku",
    title,
    description,
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
};

export default function LandingPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <ProblemSection />
        <HowItWorksSection />
        <FeaturesSection />
        <ClosingCta />
      </main>
      <SiteFooter />
    </>
  );
}
