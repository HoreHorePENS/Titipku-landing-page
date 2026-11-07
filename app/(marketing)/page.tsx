import type { Metadata } from "next";
import { AudienceStrip } from "@/components/landing/AudienceStrip";
import { BenefitsSection } from "@/components/landing/BenefitsSection";
import { ClosingCta } from "@/components/landing/ClosingCta";
import { META } from "@/components/landing/content";
import { FaqSection } from "@/components/landing/FaqSection";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { Hero } from "@/components/landing/Hero";
import { MotionController } from "@/components/landing/motion/MotionController";
import { HowItWorksSection } from "@/components/landing/HowItWorksSection";
import { ProblemSection } from "@/components/landing/ProblemSection";
import { SiteFooter } from "@/components/landing/SiteFooter";
import { SiteHeader } from "@/components/landing/SiteHeader";
import { TeamSection } from "@/components/landing/TeamSection";

const { title, ogTitle, description } = META;

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "/",
    siteName: "Titipku",
    title: ogTitle,
    description,
  },
  twitter: {
    card: "summary",
    title: ogTitle,
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
        <BenefitsSection />
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
