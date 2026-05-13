import { PremiumLanding } from "@/components/PremiumLanding";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Swarp Consulting",
  description:
    "Swarp Consulting offre percorsi di formazione finanziata su misura per sviluppare le competenze del team e far crescere le aziende italiane. Gestione dei fondi interprofessionali Formazienda e FonARCom e di tutta la burocrazia.",
  areaServed: "IT",
  serviceType: [
    "Formazione finanziata",
    "Fondi interprofessionali",
    "Formazione obbligatoria",
    "Formazione professionalizzante",
    "Formazione settoriale",
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
