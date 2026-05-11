import { ComplianceSection } from "./landing/ComplianceSection";
import { EligibilitySection } from "./landing/EligibilitySection";
import { FAQ } from "./landing/FAQ";
import { Footer } from "./landing/Footer";
import { Header } from "./landing/Header";
import { Hero } from "./landing/Hero";
import { LeadAssessment } from "./landing/LeadAssessment";
import { ProcessSection } from "./landing/ProcessSection";
import { Testimonials } from "./landing/Testimonials";
import { TrainingCategories } from "./landing/TrainingCategories";
import { TrustBand } from "./landing/TrustBand";
import { WhySwarp } from "./landing/WhySwarp";

export function PremiumLanding() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-ink-950 text-white selection:bg-brand-400/30 selection:text-white">
      <Header />
      <main>
        <Hero />
        <TrustBand />
        <WhySwarp />
        <ProcessSection />
        <TrainingCategories />
        <EligibilitySection />
        <ComplianceSection />
        <Testimonials />
        <FAQ />
        <LeadAssessment />
      </main>
      <Footer />
    </div>
  );
}
