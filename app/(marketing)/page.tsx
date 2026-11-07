import type { Metadata } from "next";
import { AudienceStrip } from "@/components/landing/AudienceStrip";
import { ClosingCta } from "@/components/landing/ClosingCta";
import { META } from "@/components/landing/content";
import { FaqSection } from "@/components/landing/FaqSection";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { Hero } from "@/components/landing/Hero";
import { MotionController } from "@/components/landing/motion/MotionController";
import { HowItWorksSection } from "@/components/landing/HowItWorksSection";
import { OwnerAndShopSection } from "@/components/landing/OwnerAndShopSection";
import { ProblemSection } from "@/components/landing/ProblemSection";
import { SiteFooter } from "@/components/landing/SiteFooter";
import { SiteHeader } from "@/components/landing/SiteHeader";
import { TeamSection } from "@/components/landing/TeamSection";

const { title, description } = META;

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
        <AudienceStrip />
        <ProblemSection />
        <HowItWorksSection />
        <OwnerAndShopSection />
        <FeaturesSection />
        <FaqSection />
        <TeamSection />
        <ClosingCta />
      </main>
      <SiteFooter />
      <MotionController />
    </>
  );
}
