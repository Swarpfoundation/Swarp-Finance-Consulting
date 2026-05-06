import type { Metadata } from "next";
import "./globals.css";

const title = "Swarp Finance Consulting | Formazione finanziata per aziende italiane";
const description =
  "Swarp Finance Consulting aiuta le aziende italiane ad attivare percorsi di formazione finanziata tramite Fondi Interprofessionali: AI, digitale, sicurezza, vendite, lingue e competenze operative.";

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL("https://swarpfinanceconsulting.com"),
  openGraph: {
    title,
    description,
    type: "website",
    locale: "it_IT",
    siteName: "Swarp Finance Consulting",
    images: [
      {
        url: "/swarp-finance-consulting-logo.png",
        width: 1254,
        height: 1254,
        alt: "Swarp Finance Consulting logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/swarp-finance-consulting-logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  );
}
