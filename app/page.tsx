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
    name: "Swarp Foundation S.r.l.",
    legalName: "Swarp Foundation S.r.l.",
    email: "info@swarppay.com",
    vatID: "14284090967",
    taxID: "14284090967",
    identifier: [
      { "@type": "PropertyValue", propertyID: "REA", value: "MI-2771688" },
      { "@type": "PropertyValue", propertyID: "Registro Imprese", value: "14284090967" },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Viale Tunisia 22",
      postalCode: "20124",
      addressLocality: "Milano",
      addressRegion: "MI",
      addressCountry: "IT",
    },
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
