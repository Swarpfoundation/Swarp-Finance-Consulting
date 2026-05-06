import Link from "next/link";
import { ArrowRight, CheckCircle2, FileText, GraduationCap, ShieldCheck } from "lucide-react";

const badges = [
  "Per aziende con almeno 1 dipendente",
  "Supporto al consulente del lavoro",
  "Percorsi AI e digitali",
  "Gestione documentale",
];

const dashboardRows = [
  ["Stato", "Valutazione iniziale"],
  ["Fondo", "Da verificare"],
  ["Dipendenti", "1+"],
  ["Aree formative", "AI, Digitale, Sicurezza"],
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-20 pt-16 md:pb-28 md:pt-24">
      <div className="grid-pattern absolute inset-0 opacity-70" aria-hidden="true" />
      <div className="section-shell relative grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="mb-5 inline-flex rounded-full border border-[#00D2D3]/30 bg-[#00D2D3]/10 px-4 py-2 text-sm font-medium text-[#8bfafa]">
            Formazione finanziata per aziende italiane
          </p>
          <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-white md:text-6xl">
            Trasforma i contributi già versati in formazione finanziata
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Aiutiamo le aziende italiane ad attivare percorsi di formazione finanziata tramite Fondi
            Interprofessionali, semplificando analisi, coordinamento, piano formativo e
            documentazione.
          </p>
          <p className="mt-5 max-w-2xl rounded-lg border border-white/10 bg-white/[0.04] p-4 text-sm leading-6 text-slate-300">
            Non è denaro gratuito: è formazione finanziata attraverso contributi che l&apos;azienda già
            versa. L&apos;accesso dipende da requisiti, fondo scelto, avvisi disponibili e approvazione
            del piano.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#contatti"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-[#00D2D3] px-5 py-3 font-semibold text-[#031018] transition hover:bg-[#3ff4f4] focus:outline-none focus:ring-2 focus:ring-[#00D2D3] focus:ring-offset-2 focus:ring-offset-[#050B14]"
            >
              Verifica la tua azienda
              <ArrowRight aria-hidden="true" size={18} />
            </Link>
            <Link
              href="#come-funziona"
              className="inline-flex items-center justify-center rounded-md border border-white/15 px-5 py-3 font-semibold text-white transition hover:border-[#00D2D3]/60 hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-[#00D2D3] focus:ring-offset-2 focus:ring-offset-[#050B14]"
            >
              Scopri come funziona
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {badges.map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-slate-300"
              >
                <CheckCircle2 aria-hidden="true" size={16} className="text-[#00D2D3]" />
                {badge}
              </span>
            ))}
          </div>
        </div>

        <div className="accent-ring relative rounded-lg border border-white/10 bg-[#081525]/90 p-5">
          <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-[#00D2D3]/20 blur-3xl" />
          <div className="relative">
            <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <p className="text-sm text-slate-400">Dashboard percorso</p>
                <h2 className="text-xl font-semibold">Valutazione aziendale</h2>
              </div>
              <ShieldCheck className="text-[#00D2D3]" aria-hidden="true" />
            </div>
            <div className="space-y-3">
              {dashboardRows.map(([label, value]) => (
                <div
                  key={label}
                  className="flex items-center justify-between gap-4 rounded-md border border-white/10 bg-white/[0.04] px-4 py-3"
                >
                  <span className="text-sm text-slate-400">{label}</span>
                  <span className="text-right text-sm font-semibold text-white">{value}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-lg border border-[#00D2D3]/25 bg-[#00D2D3]/10 p-4">
              <div className="mb-4 flex items-center gap-3">
                <GraduationCap className="text-[#00D2D3]" aria-hidden="true" />
                <p className="font-semibold">Step operativo</p>
              </div>
              <div className="grid gap-2 text-sm text-slate-200 sm:grid-cols-4">
                {["Analisi", "Piano", "Attivazione", "Formazione"].map((step, index) => (
                  <div key={step} className="rounded-md border border-white/10 bg-[#050B14]/60 p-3">
                    <span className="mb-2 block text-xs text-[#8bfafa]">0{index + 1}</span>
                    {step}
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-5 flex items-center gap-3 text-sm text-slate-400">
              <FileText aria-hidden="true" size={18} />
              Analisi, piano formativo e documenti in un percorso coordinato.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
