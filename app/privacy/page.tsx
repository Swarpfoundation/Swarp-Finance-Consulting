import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Informativa privacy di Swarp Finance Consulting: come trattiamo i dati raccolti tramite il modulo di contatto.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-ink-950 text-white selection:bg-brand-400/30 selection:text-white">
      <Header />
      <main className="pt-36 pb-24 md:pt-40">
        <article className="mx-auto max-w-3xl px-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-200 transition hover:text-brand-100"
          >
            <ArrowLeft className="size-4" aria-hidden="true" /> Torna alla home
          </Link>

          <h1 className="mt-8 text-balance text-4xl font-semibold tracking-tight text-white md:text-5xl">
            Privacy{" "}
            <span className="font-display italic font-normal text-brand-300">Policy.</span>
          </h1>
          <p className="mt-5 text-pretty text-lg leading-8 text-ink-100">
            Contenuto in fase di pubblicazione.
          </p>

          <div className="mt-12 rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-7 md:p-9">
            <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-brand-200">
              Placeholder
            </p>
            <p className="mt-5 leading-8 text-ink-100">
              Il testo dell&apos;informativa privacy sarà pubblicato a breve. Per qualunque richiesta
              relativa al trattamento dei tuoi dati personali puoi contattarci all&apos;indirizzo{" "}
              <a
                href="mailto:info@swarppay.com"
                className="text-brand-200 underline-offset-4 hover:text-brand-100 hover:underline"
              >
                info@swarppay.com
              </a>
              .
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
