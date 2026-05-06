import type { Metadata } from "next";
import "./globals.css";

const title = "Swarp Academy | Formazione finanziata per aziende italiane";
const description =
  "Swarp Academy aiuta le aziende italiane ad attivare percorsi di formazione finanziata tramite Fondi Interprofessionali: AI, digitale, sicurezza, vendite, lingue e competenze operative.";

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL("https://academy.swarp.foundation"),
  openGraph: {
    title,
    description,
    type: "website",
    locale: "it_IT",
    siteName: "Swarp Academy",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
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
