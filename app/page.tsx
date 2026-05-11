import { PremiumLanding } from "@/components/PremiumLanding";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Swarp Finance Consulting",
  description:
    "Swarp Finance Consulting recupera i fondi interprofessionali (0,30% dei contributi) e li trasforma in formazione finanziata al 100% a fondo perduto per le PMI italiane: iscrizione al fondo, definizione dei corsi e gestione completa della burocrazia.",
  areaServed: "IT",
  serviceType: [
    "Fondi interprofessionali",
    "Formazione finanziata al 100%",
    "Iscrizione al fondo",
    "Progettazione formativa",
    "Rendicontazione e burocrazia",
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
