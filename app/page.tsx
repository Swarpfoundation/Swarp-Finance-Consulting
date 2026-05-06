import { PremiumLanding } from "@/components/PremiumLanding";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Swarp Finance Consulting",
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
      <PremiumLanding />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </>
  );
}
