import { ComplianceBox } from "@/components/ComplianceBox";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { LeadForm } from "@/components/LeadForm";
import { ProblemSection } from "@/components/ProblemSection";
import { ProcessSection } from "@/components/ProcessSection";
import { SolutionSection } from "@/components/SolutionSection";
import { TargetCustomers } from "@/components/TargetCustomers";
import { TrainingCategories } from "@/components/TrainingCategories";
import { WhyUs } from "@/components/WhyUs";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Swarp Academy",
  description:
    "Supporto consulenziale e operativo per aziende italiane che vogliono attivare percorsi di formazione finanziata tramite Fondi Interprofessionali.",
  areaServed: "IT",
  serviceType: [
    "Formazione finanziata",
    "Progettazione formativa",
    "Coordinamento operativo",
    "Gestione documentale",
  ],
  parentOrganization: {
    "@type": "Organization",
    name: "Swarp Foundation",
  },
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <TrainingCategories />
        <ProcessSection />
        <TargetCustomers />
        <WhyUs />
        <ComplianceBox />
        <FAQ />
        <LeadForm />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </>
  );
}
