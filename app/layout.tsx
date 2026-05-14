import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { Instrument_Serif } from "next/font/google";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const title = "Swarp Consulting | Formazione finanziata per la tua azienda";
const description =
  "Offriamo percorsi di formazione finanziata su misura per sviluppare le competenze del tuo team e far crescere la tua azienda. Gestione dei fondi e della burocrazia inclusa.";

export const metadata: Metadata = {
  title: {
    default: title,
    template: "%s | Swarp Consulting",
  },
  description,
  metadataBase: new URL("https://www.swarpconsulting.com"),
  applicationName: "Swarp Consulting",
  category: "business",
  keywords: [
    "formazione finanziata",
    "formazione aziendale",
    "fondi interprofessionali",
    "Formazienda",
    "FonARCom",
    "corsi finanziati per aziende",
    "PMI Italia formazione",
    "sicurezza sul lavoro",
    "AI per aziende",
    "corsi di lingua per aziende",
  ],
  authors: [{ name: "Swarp Consulting" }],
  creator: "Swarp Consulting",
  publisher: "Swarp Consulting",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title,
    description,
    type: "website",
    locale: "it_IT",
    url: "/",
    siteName: "Swarp Consulting",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/swarp_consulting_transparent.png",
    apple: "/swarp_consulting_transparent.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#030817",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className={`${GeistSans.variable} ${instrumentSerif.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
