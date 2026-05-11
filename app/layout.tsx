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

const title = "Swarp Finance Consulting | Fondi interprofessionali per le PMI italiane";
const description =
  "Swarp Finance Consulting recupera i fondi interprofessionali — lo 0,30% di contributi che la tua azienda già versa — e li trasforma in formazione finanziata al 100% per i tuoi dipendenti. Burocrazia gestita.";

export const metadata: Metadata = {
  title: {
    default: title,
    template: "%s | Swarp Finance Consulting",
  },
  description,
  metadataBase: new URL("https://swarpfinanceconsulting.com"),
  applicationName: "Swarp Finance Consulting",
  category: "business",
  keywords: [
    "fondi interprofessionali",
    "formazione finanziata 100%",
    "fondo perduto formazione",
    "0,30% contributi formazione",
    "INPS formazione continua",
    "PMI Italia formazione",
    "Fondimpresa",
    "Fondir",
    "formazione aziendale finanziata",
    "sicurezza sul lavoro finanziata",
  ],
  authors: [{ name: "Swarp Finance Consulting" }],
  creator: "Swarp Finance Consulting",
  publisher: "Swarp Finance Consulting",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title,
    description,
    type: "website",
    locale: "it_IT",
    url: "/",
    siteName: "Swarp Finance Consulting",
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
    icon: "/swarp-finance-consulting-logo.png",
    apple: "/swarp-finance-consulting-logo.png",
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
