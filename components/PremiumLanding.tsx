"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";
import {
  AlertCircle,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Brain,
  Check,
  CheckCircle2,
  ChevronDown,
  FileText,
  Loader2,
  Menu,
  Network,
  ShieldAlert,
  Target,
  X,
  Zap,
} from "lucide-react";
import { validateLeadPayload, type LeadPayload } from "@/lib/validation";

const navItems = [
  { label: "Come funziona", href: "#come-funziona" },
  { label: "Corsi", href: "#corsi" },
  { label: "Per aziende", href: "#aziende" },
  { label: "FAQ", href: "#faq" },
];

const initialForm: LeadPayload = {
  fullName: "",
  email: "",
  phone: "",
  company: "",
  location: "",
  employees: "",
  sector: "",
  hasConsultant: "",
  interests: [],
  message: "",
  consent: false,
};

const interestOptions = [
  "AI",
  "Digitale",
  "Marketing e vendite",
  "Sicurezza",
  "Lingue",
  "Formazione tecnica",
  "Altro",
];

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function GlobalStyle() {
  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `
          :root {
            --night-blue: #030712;
            --night-blue-light: #0b162c;
            --cyan: #00e5ff;
          }

          html { scroll-behavior: smooth; }

          .bg-noise {
            position: fixed;
            inset: 0;
            pointer-events: none;
            z-index: 50;
            opacity: 0.04;
            background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
          }

          .glass-pill {
            background: rgba(11, 22, 44, 0.5);
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
            border: 1px solid rgba(255, 255, 255, 0.08);
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
          }

          .glass-card {
            background: linear-gradient(145deg, rgba(11, 22, 44, 0.7) 0%, rgba(3, 7, 18, 0.9) 100%);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.05);
            box-shadow: 0 20px 40px -10px rgba(0,0,0,0.5), inset 0 1px 0 0 rgba(255,255,255,0.05);
          }

          .glass-card:hover {
            border-color: rgba(0, 229, 255, 0.3);
            box-shadow: 0 20px 40px -10px rgba(0,0,0,0.5), 0 0 30px -5px rgba(0, 229, 255, 0.15), inset 0 1px 0 0 rgba(255,255,255,0.1);
          }

          .text-outline {
            color: transparent;
            -webkit-text-stroke: 1px rgba(255, 255, 255, 0.16);
          }

          @keyframes float {
            0% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(1deg); }
            100% { transform: translateY(0) rotate(0deg); }
          }

          @keyframes float-delayed {
            0% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(15px) rotate(-1deg); }
            100% { transform: translateY(0) rotate(0deg); }
          }

          @keyframes pulse-glow {
            0%, 100% { opacity: 0.4; transform: scale(1); }
            50% { opacity: 0.8; transform: scale(1.05); }
          }

          @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(240%); }
          }

          @media (prefers-reduced-motion: no-preference) {
            .animate-float { animation: float 7s ease-in-out infinite; }
            .animate-float-delayed { animation: float-delayed 9s ease-in-out infinite; }
            .animate-pulse-glow { animation: pulse-glow 5s ease-in-out infinite; }
            .shimmer { animation: shimmer 2s infinite; }
          }

          .course-row:hover .course-arrow { opacity: 1; transform: translateX(0); }
          .course-row .course-arrow { opacity: 0; transform: translateX(-20px); transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1); }
        `,
      }}
    />
  );
}

function Logo() {
  return (
    <div className="flex items-center">
      <Image
        src="/swarp-finance-consulting-logo.png"
        alt="Swarp Finance Consulting"
        width={260}
        height={260}
        className="h-16 w-auto object-contain drop-shadow-[0_0_16px_rgba(0,229,255,0.32)] md:h-20"
        priority
      />
    </div>
  );
}

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

function Button({ children, variant = "primary", className = "", ...props }: ButtonProps) {
  const baseStyle =
    "group relative inline-flex items-center justify-center overflow-hidden rounded-full px-8 py-4 font-semibold transition-all duration-500 disabled:cursor-not-allowed disabled:opacity-60";

  if (variant === "primary") {
    return (
      <button
        className={`${baseStyle} bg-white text-[#030712] hover:bg-[#00E5FF] focus:outline-none focus:ring-2 focus:ring-[#00E5FF] focus:ring-offset-2 focus:ring-offset-[#030712] ${className}`}
        {...props}
      >
        <span className="relative z-10 flex items-center gap-2">{children}</span>
      </button>
    );
  }

  return (
    <button
      className={`${baseStyle} glass-pill border border-white/10 text-white hover:border-[#00E5FF]/50 hover:text-[#00E5FF] focus:outline-none focus:ring-2 focus:ring-[#00E5FF] focus:ring-offset-2 focus:ring-offset-[#030712] ${className}`}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </button>
  );
}

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed left-0 top-4 z-40 w-full px-4 md:top-6 md:px-6">
      <div className="glass-pill mx-auto flex max-w-6xl items-center justify-between rounded-full px-4 py-3 transition-all duration-300 md:px-6">
        <Link href="#" aria-label="Swarp Finance Consulting home">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Navigazione principale">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-xs font-medium uppercase tracking-wider text-slate-300 transition-colors hover:text-[#00E5FF]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button
            onClick={() => scrollToId("contatti")}
            className="px-6 py-2.5 text-xs uppercase tracking-wider"
          >
            Richiedi valutazione <ArrowUpRight className="ml-1 size-4" aria-hidden="true" />
          </Button>
        </div>

        <button
          className="p-2 text-white lg:hidden"
          onClick={() => setMobileMenuOpen((open) => !open)}
          aria-label={mobileMenuOpen ? "Chiudi menu" : "Apri menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>

      {mobileMenuOpen ? (
        <div className="glass-card absolute left-6 right-6 top-full mt-4 flex flex-col gap-4 rounded-2xl p-6 lg:hidden">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="border-b border-white/5 py-3 text-sm font-medium uppercase tracking-wider text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Button
            className="mt-4 w-full"
            onClick={() => {
              setMobileMenuOpen(false);
              scrollToId("contatti");
            }}
          >
            Richiedi valutazione
          </Button>
        </div>
      ) : null}
    </header>
  );
}

function HeroDashboardVisual() {
  return (
    <div className="relative flex h-[500px] w-full items-center justify-center lg:h-[700px]">
      <div className="animate-pulse-glow absolute left-1/4 top-1/4 size-96 rounded-full bg-[#00E5FF] opacity-20 blur-[120px] mix-blend-screen" />
      <div
        className="animate-pulse-glow absolute bottom-1/4 right-1/4 size-96 rounded-full bg-blue-600 opacity-20 blur-[120px] mix-blend-screen"
        style={{ animationDelay: "2s" }}
      />

      <div className="glass-card animate-float absolute z-20 w-[90%] max-w-md rounded-3xl p-6 md:p-8">
        <div className="mb-8 flex items-center justify-between border-b border-white/10 pb-6">
          <div>
            <p className="mb-1 text-[10px] uppercase tracking-[0.2em] text-[#00E5FF]">
              Status sistema
            </p>
            <h2 className="text-xl font-light text-white">Valutazione iniziale</h2>
          </div>
          <div className="relative flex size-4">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#00E5FF] opacity-75" />
            <span className="relative inline-flex size-4 rounded-full bg-[#00E5FF]" />
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-2xl border border-white/5 bg-[#030712]/50 p-5">
            <div className="mb-2 flex items-end justify-between">
              <span className="font-mono text-xs text-slate-400">Fondo I.P. target</span>
              <Loader2 className="size-4 animate-spin text-[#00E5FF]" aria-hidden="true" />
            </div>
            <p className="text-lg tracking-wide text-white">Analisi in corso...</p>
            <div className="mt-4 h-1 w-full overflow-hidden rounded-full bg-white/10">
              <div className="relative h-full w-2/3 rounded-full bg-gradient-to-r from-blue-600 to-[#00E5FF]">
                <div className="shimmer absolute bottom-0 right-0 top-0 w-20 bg-gradient-to-r from-transparent to-white/50" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl border border-white/5 bg-[#030712]/50 p-5">
              <span className="mb-2 block text-[10px] uppercase tracking-wider text-slate-400">
                Dipendenti
              </span>
              <span className="text-3xl font-light text-white">
                1<span className="text-[#00E5FF]">+</span>
              </span>
            </div>
            <div className="flex flex-col justify-center rounded-2xl border border-white/5 bg-[#030712]/50 p-5">
              <span className="mb-2 block text-[10px] uppercase tracking-wider text-slate-400">
                Requisiti
              </span>
              <div className="flex items-center gap-2 text-sm text-green-400">
                <CheckCircle2 className="size-4" aria-hidden="true" /> Verificabili
              </div>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-2 text-[11px] uppercase tracking-wider text-slate-400">
            {["Analisi", "Piano", "Attivazione", "Formazione"].map((step) => (
              <span key={step} className="rounded-lg border border-white/5 bg-white/[0.03] p-2 text-center">
                {step}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="glass-card animate-float-delayed absolute right-0 top-32 z-30 hidden items-center gap-4 rounded-2xl p-4 lg:flex">
        <div className="flex size-10 items-center justify-center rounded-full bg-blue-500/20">
          <Brain className="size-5 text-[#00E5FF]" aria-hidden="true" />
        </div>
        <div>
          <p className="text-xs uppercase tracking-wider text-slate-400">Area rilevata</p>
          <p className="font-medium text-white">AI & Digitale</p>
        </div>
      </div>

      <div
        className="glass-card animate-float absolute bottom-32 left-4 z-10 hidden items-center gap-4 rounded-2xl p-4 lg:flex"
        style={{ animationDelay: "1s" }}
      >
        <div className="flex size-10 items-center justify-center rounded-full border border-dashed border-slate-500">
          <FileText className="size-4 text-slate-400" aria-hidden="true" />
        </div>
        <div>
          <p className="text-xs uppercase tracking-wider text-slate-400">Documentazione</p>
          <p className="text-sm font-medium text-white">Supporto attivo</p>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative flex min-h-screen items-center pb-20 pt-40 lg:pb-32 lg:pt-48">
      <div className="container relative z-10 mx-auto px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div className="space-y-10 lg:col-span-7">
            <div className="glass-pill inline-flex items-center gap-3 rounded-full border-[#00E5FF]/30 px-4 py-2">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#00E5FF] opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-[#00E5FF]" />
              </span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#00E5FF]">
                Formazione finanziata per aziende italiane
              </span>
            </div>

            <h1 className="text-5xl font-black uppercase leading-[0.95] tracking-tighter text-white md:text-7xl lg:text-[5.5rem]">
              Trasforma i <br />
              <span className="bg-gradient-to-r from-[#00E5FF] to-blue-600 bg-clip-text text-transparent">
                contributi
              </span>
              <br />
              <span className="text-outline">in valore.</span>
            </h1>

            <p className="max-w-2xl text-lg font-light leading-relaxed text-slate-400 md:text-xl">
              Aiutiamo le aziende ad attivare percorsi di formazione finanziata tramite Fondi
              Interprofessionali. Semplifichiamo analisi, coordinamento, piano formativo e
              documentazione.
            </p>

            <div className="flex flex-col gap-4 pt-4 sm:flex-row">
              <Button onClick={() => scrollToId("contatti")}>Verifica la tua azienda</Button>
              <Button variant="secondary" onClick={() => scrollToId("come-funziona")}>
                Scopri il processo
              </Button>
            </div>

            <div className="mt-12 flex max-w-2xl items-start gap-4 rounded-xl border border-white/5 bg-white/[0.02] p-4">
              <ShieldAlert className="mt-0.5 size-5 shrink-0 text-slate-500" aria-hidden="true" />
              <p className="font-mono text-[11px] uppercase leading-relaxed tracking-widest text-slate-500">
                Non è denaro gratuito. È formazione finanziata attraverso contributi che l&apos;azienda
                già versa. L&apos;accesso è soggetto a requisiti, fondo scelto, avvisi disponibili e
                approvazione del piano.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <HeroDashboardVisual />
          </div>
        </div>
      </div>
    </section>
  );
}

function BentoGrid() {
  return (
    <section className="relative border-t border-white/5 py-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#0A1B3F]/20 via-[#030712] to-[#030712]" />
      <div className="container mx-auto px-6">
        <div className="mb-20 max-w-3xl">
          <h2 className="mb-6 text-4xl font-bold tracking-tighter text-white md:text-5xl">
            Molte aziende pagano già,
            <br />
            <span className="text-[#00E5FF]">ma perdono il valore formativo.</span>
          </h2>
          <p className="text-xl font-light text-slate-400">
            Un&apos;opportunità spesso ignorata a causa della burocrazia, della complessità normativa
            e della mancanza di tempo operativo.
          </p>
        </div>

        <div className="grid auto-rows-[minmax(250px,auto)] grid-cols-1 gap-6 md:grid-cols-3">
          <div className="glass-card group relative flex flex-col justify-between overflow-hidden rounded-3xl p-8 md:col-span-2 md:p-12">
            <div className="absolute right-0 top-0 size-64 rounded-full bg-blue-500/10 blur-[80px] transition-colors duration-700 group-hover:bg-[#00E5FF]/20" />
            <div className="relative z-10">
              <BarChart3 className="mb-8 size-10 text-[#00E5FF]" aria-hidden="true" />
              <h3 className="mb-4 text-3xl font-bold tracking-tight text-white">
                Contributi già versati
              </h3>
              <p className="max-w-md text-lg font-light text-slate-400">
                Le aziende sostengono contributi obbligatori collegati alla formazione continua.
                Usarli è possibile se ci sono i requisiti.
              </p>
            </div>
          </div>

          <ProblemCard
            icon={<Network className="mb-8 size-8 text-slate-400 transition-colors group-hover:text-white" />}
            title="Processo complesso"
            text="Fondi, avvisi, requisiti e documentazione rendono difficile orientarsi senza una guida esperta."
          />
          <ProblemCard
            icon={<AlertCircle className="mb-8 size-8 text-slate-400 transition-colors group-hover:text-white" />}
            title="Poco tempo per le PMI"
            text="Imprenditori e consulenti del lavoro spesso non hanno tempo per gestire l'intero iter burocratico."
          />

          <div className="glass-card group relative flex flex-col justify-between gap-8 overflow-hidden rounded-3xl p-8 md:col-span-2 md:flex-row md:items-center md:p-12">
            <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-[#00E5FF]/5 to-transparent" />
            <div className="relative z-10 flex-1">
              <Target className="mb-8 size-10 text-[#00E5FF]" aria-hidden="true" />
              <h3 className="mb-4 text-3xl font-bold tracking-tight text-white">
                Competenze non aggiornate
              </h3>
              <p className="text-lg font-light text-slate-400">
                AI, transizione digitale, vendita e sicurezza richiedono formazione continua e
                pratica. Restare fermi significa perdere competitività.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProblemCard({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="glass-card group flex flex-col justify-between rounded-3xl p-8 md:col-span-1 md:p-10">
      {icon}
      <div>
        <h3 className="mb-3 text-xl font-bold text-white">{title}</h3>
        <p className="text-sm font-light text-slate-400">{text}</p>
      </div>
    </div>
  );
}

function ProcessFlow() {
  const steps = [
    {
      title: "Primo contatto & raccolta info",
      desc: "Spieghiamo il meccanismo e analizziamo azienda, dipendenti, settore e consulente del lavoro.",
    },
    {
      title: "Verifica di ammissibilità",
      desc: "Valutiamo il fondo, i requisiti dell'azienda, le procedure applicabili e i documenti necessari.",
    },
    {
      title: "Design del piano formativo",
      desc: "Costruiamo obiettivi, corsi, calendario, modalità e contenuti in linea con le procedure applicabili.",
    },
    {
      title: "Avvio & erogazione",
      desc: "La formazione parte solo dopo tutte le verifiche e le necessarie approvazioni.",
    },
    {
      title: "Gestione documentale",
      desc: "Supportiamo registri, presenze e rendicontazione operativa fino alla chiusura.",
    },
  ];

  return (
    <section id="come-funziona" className="relative border-t border-white/5 bg-[#02050A] py-32">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 gap-20 lg:grid-cols-2">
          <div className="h-fit lg:sticky lg:top-40">
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#00E5FF]">
              Metodologia operativa
            </p>
            <h2 className="mb-6 text-4xl font-bold leading-tight tracking-tighter text-white md:text-5xl">
              Semplifichiamo
              <br />
              l&apos;intero percorso.
            </h2>
            <p className="max-w-md text-lg font-light text-slate-400">
              Agiamo come partner operativo e consulenziale, alleggerendo azienda e consulente del
              lavoro dalla complessità dei fondi interprofessionali.
            </p>
          </div>

          <div className="relative">
            <div className="absolute bottom-4 left-[27px] top-4 w-px bg-white/5" />
            <div className="relative space-y-12">
              {steps.map((step, index) => (
                <div key={step.title} className="group flex gap-8">
                  <div className="relative z-10 flex size-14 shrink-0 items-center justify-center rounded-full border border-white/10 bg-[#0B162C] transition-colors duration-500 group-hover:border-[#00E5FF] group-hover:bg-[#00E5FF]/10">
                    <span className="font-mono text-sm text-[#00E5FF]">0{index + 1}</span>
                  </div>
                  <div className="pt-3">
                    <h3 className="mb-3 text-2xl font-bold tracking-tight text-white transition-colors group-hover:text-[#00E5FF]">
                      {step.title}
                    </h3>
                    <p className="font-light leading-relaxed text-slate-400">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CategoryListReveal() {
  const categories = [
    "Intelligenza artificiale per PMI",
    "Digital skills, Excel e strumenti web",
    "Marketing, branding e vendite",
    "Sicurezza sul lavoro",
    "Antincendio e primo soccorso",
    "Lingue: inglese e italiano per stranieri",
    "Customer service e gestione operativa",
    "Formazione tecnica per settore",
    "Hospitality, ristorazione, retail, logistica",
  ];

  return (
    <section id="corsi" className="relative overflow-hidden border-t border-white/5 py-32">
      <div className="container mx-auto px-6">
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <h2 className="mb-6 text-4xl font-bold tracking-tighter text-white md:text-5xl">
            Percorsi <span className="text-outline">formativi</span> utili,
            <br />
            concreti e finanziabili.
          </h2>
          <p className="font-light text-slate-400">
            Sviluppiamo piani formativi moderni quando i requisiti dell&apos;azienda e del fondo
            sono soddisfatti.
          </p>
        </div>

        <div className="mx-auto max-w-5xl border-t border-white/10">
          {categories.map((category) => (
            <div
              key={category}
              className="course-row group flex cursor-default items-center justify-between border-b border-white/10 py-8"
            >
              <span className="text-2xl font-light tracking-tight text-slate-500 transition-colors duration-300 group-hover:text-white md:text-4xl">
                {category}
              </span>
              <div className="course-arrow flex size-12 shrink-0 items-center justify-center rounded-full border border-[#00E5FF] bg-[#00E5FF]/10">
                <ArrowRight className="size-5 text-[#00E5FF]" aria-hidden="true" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="inline-block rounded-full border border-white/10 bg-white/[0.02] px-6 py-3 font-mono text-xs uppercase tracking-widest text-slate-500">
            La finanziabilità dipende sempre dal fondo, dall&apos;avviso disponibile, dal piano e dai
            requisiti aziendali.
          </p>
        </div>
      </div>
    </section>
  );
}

function TargetCustomers() {
  const targets = [
    "Micro imprese",
    "Piccole e medie imprese",
    "Studi professionali",
    "Ristoranti, bar e hotel",
    "Palestre e centri sportivi",
    "Retail e servizi locali",
    "Aziende tech e digitali",
    "Logistica, produzione e servizi B2B",
  ];

  return (
    <section id="aziende" className="border-t border-white/5 bg-[#02050A] py-28">
      <div className="container mx-auto px-6">
        <div className="mb-14 max-w-3xl">
          <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#00E5FF]">
            Per aziende
          </p>
          <h2 className="text-4xl font-bold tracking-tighter text-white md:text-5xl">
            Pensato per PMI, attività locali e aziende in crescita.
          </h2>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {targets.map((target) => (
            <div key={target} className="glass-card rounded-2xl p-5 text-sm font-light text-slate-300">
              {target}
            </div>
          ))}
        </div>
        <p className="mt-8 max-w-3xl text-sm leading-6 text-slate-500">
          Il servizio è pensato principalmente per aziende private con almeno un dipendente. La
          possibilità di accesso viene verificata caso per caso.
        </p>
      </div>
    </section>
  );
}

function CompliancePanel() {
  return (
    <section className="relative bg-[#0B162C] py-20">
      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-[#00E5FF]/50 to-transparent" />
      <div className="container mx-auto px-6">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-12 md:flex-row">
          <div className="relative flex size-24 shrink-0 items-center justify-center rounded-full border border-[#00E5FF]/30">
            <div className="absolute inset-0 animate-ping rounded-full border border-[#00E5FF] opacity-20" />
            <ShieldAlert className="size-10 text-[#00E5FF]" aria-hidden="true" />
          </div>
          <div>
            <h2 className="mb-4 text-2xl font-bold uppercase tracking-tight text-white">
              Chiarezza istituzionale
            </h2>
            <p className="text-lg font-light leading-relaxed text-slate-400">
              Swarp Finance Consulting <strong>non è un ente pubblico, INPS o Ministero del Lavoro</strong>.
              Il servizio consiste in supporto consulenziale B2B, progettazione formativa,
              coordinamento operativo e gestione documentale. L&apos;accesso alla formazione
              finanziata dipende dal fondo interprofessionale scelto, dai requisiti
              dell&apos;azienda, dagli avvisi disponibili, dalle procedure applicabili e
              dall&apos;approvazione del piano formativo. Dove richiesto, la gestione può coinvolgere
              enti o partner accreditati.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQAccordion({ q, a, num }: { q: string; a: string; num: number }) {
  const [isOpen, setIsOpen] = useState(false);
  const panelId = `faq-panel-${num}`;

  return (
    <div className="border-b border-white/10">
      <button
        className="group flex w-full items-center justify-between gap-6 py-8 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00E5FF]"
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
        aria-controls={panelId}
      >
        <span className="flex items-center gap-6">
          <span className="font-mono text-sm text-[#00E5FF] opacity-50 transition-opacity group-hover:opacity-100">
            0{num}
          </span>
          <span className="text-xl font-light text-slate-200 transition-colors group-hover:text-white md:text-2xl">
            {q}
          </span>
        </span>
        <span
          className={`flex size-10 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
            isOpen ? "border-[#00E5FF] bg-[#00E5FF]/10" : "border-white/20"
          }`}
        >
          <ChevronDown
            className={`size-5 transition-transform duration-500 ${
              isOpen ? "rotate-180 text-[#00E5FF]" : "text-slate-400"
            }`}
            aria-hidden="true"
          />
        </span>
      </button>
      <div
        id={panelId}
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-[500px] pb-8 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="ml-[9px] max-w-3xl border-l border-[#00E5FF]/30 pl-12 text-lg font-light leading-relaxed text-slate-400">
          {a}
        </p>
      </div>
    </div>
  );
}

function FAQ() {
  const faqs = [
    {
      q: "È formazione gratuita?",
      a: "È più corretto parlare di formazione finanziata. L'azienda utilizza meccanismi collegati a contributi già versati, quando i requisiti sono soddisfatti e il piano viene approvato.",
    },
    {
      q: "L'azienda riceve denaro in contanti?",
      a: "No. Normalmente il beneficio riguarda il finanziamento o rimborso di percorsi formativi approvati ed erogati, non un contributo cash libero.",
    },
    {
      q: "Serve il consulente del lavoro?",
      a: "Sì, nella maggior parte dei casi il consulente del lavoro aziendale è coinvolto per le verifiche sulla posizione contributiva e l'adesione al fondo.",
    },
    {
      q: "Quali aziende possono accedere?",
      a: "Generalmente aziende private con almeno un dipendente, ma la verifica finale dipende dalla posizione contributiva, dal fondo scelto e dai requisiti applicabili in quel momento.",
    },
    {
      q: "Quanto tempo serve per iniziare?",
      a: "Dipende dalla situazione aziendale specifica e dal fondo. L'attivazione, l'analisi e la preparazione del piano possono richiedere alcune settimane.",
    },
    {
      q: "L'approvazione del piano è garantita?",
      a: "No. Ogni singola richiesta è soggetta a requisiti, fondi disponibili, tempistiche delle procedure e approvazione finale del piano formativo da parte dell'ente preposto.",
    },
  ];

  return (
    <section id="faq" className="relative border-t border-white/5 py-32">
      <div className="container mx-auto max-w-5xl px-6">
        <h2 className="mb-16 text-4xl font-bold tracking-tighter text-white md:text-5xl">
          Domande frequenti
        </h2>
        <div className="border-t border-white/10">
          {faqs.map((faq, index) => (
            <FAQAccordion key={faq.q} num={index + 1} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TerminalForm() {
  const [form, setForm] = useState<LeadPayload>(initialForm);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  function updateField<K extends keyof LeadPayload>(key: K, value: LeadPayload[K]) {
    setForm((current) => ({ ...current, [key]: value }));
    if (status === "error") {
      setStatus("idle");
      setErrorMessage("");
    }
  }

  function toggleInterest(value: string) {
    updateField(
      "interests",
      form.interests.includes(value)
        ? form.interests.filter((item) => item !== value)
        : [...form.interests, value],
    );
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "loading" || status === "success") return;

    const validation = validateLeadPayload(form);
    if (!validation.valid) {
      setStatus("error");
      setErrorMessage("Controlla i campi obbligatori e seleziona almeno un'area formativa.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");
    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validation.data),
      });
      if (!response.ok) {
        setStatus("error");
        setErrorMessage("Invio non riuscito. Riprova tra poco.");
        return;
      }
      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMessage("Invio non riuscito. Riprova tra poco.");
    }
  }

  const inputClass =
    "w-full border-b border-white/20 bg-transparent px-0 py-4 font-light text-white placeholder:text-slate-600 transition-colors focus:border-[#00E5FF] focus:outline-none";
  const labelClass = "mb-1 block font-mono text-[10px] uppercase tracking-widest text-[#00E5FF]";

  return (
    <section id="contatti" className="relative border-t border-white/5 bg-[#010308] py-32">
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[600px] w-full max-w-3xl -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00E5FF]/5 blur-[120px]" />

      <div className="container mx-auto px-6">
        <div className="glass-card mx-auto flex max-w-6xl flex-col overflow-hidden rounded-[40px] lg:flex-row">
          <div className="flex flex-col justify-between border-r border-white/5 bg-[#030712]/80 p-10 lg:w-2/5 lg:p-16">
            <div>
              <div className="mb-12 flex gap-2">
                <div className="size-3 rounded-full bg-slate-700" />
                <div className="size-3 rounded-full bg-slate-700" />
                <div className="size-3 animate-pulse rounded-full bg-[#00E5FF]" />
              </div>
              <h2 className="mb-6 text-4xl font-bold leading-tight tracking-tighter text-white lg:text-5xl">
                Inizia la
                <br />
                valutazione.
              </h2>
              <p className="mb-8 text-lg font-light text-slate-400">
                Compila il form per richiedere un&apos;analisi di fattibilità preliminare per la tua
                azienda.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 font-mono text-sm text-slate-500">
                <Zap className="size-4 text-[#00E5FF]" aria-hidden="true" /> Dati trattati per
                ricontatto
              </div>
              <div className="flex items-center gap-4 font-mono text-sm text-slate-500">
                <Check className="size-4 text-[#00E5FF]" aria-hidden="true" /> Valutazione
                preliminare
              </div>
            </div>
          </div>

          <div className="p-10 lg:w-3/5 lg:p-16">
            {status === "success" ? (
              <div className="flex h-full flex-col items-center justify-center text-center">
                <div className="mb-8 flex size-24 items-center justify-center rounded-full border border-[#00E5FF] bg-[#00E5FF]/10">
                  <CheckCircle2 className="size-12 text-[#00E5FF]" aria-hidden="true" />
                </div>
                <h3 className="mb-4 text-3xl font-bold tracking-tight text-white">
                  Richiesta acquisita
                </h3>
                <p className="mb-12 max-w-md text-lg font-light text-slate-400">
                  Analizzeremo i dati immessi e ti contatteremo per definire i prossimi step.
                </p>
                <Button
                  onClick={() => {
                    setForm(initialForm);
                    setStatus("idle");
                  }}
                  variant="secondary"
                >
                  Nuova richiesta
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8" noValidate>
                <div className="grid gap-x-12 gap-y-8 md:grid-cols-2">
                  <TerminalField label="Nome e cognome" labelClass={labelClass}>
                    <input
                      type="text"
                      required
                      className={inputClass}
                      placeholder="Es. Mario Rossi"
                      value={form.fullName}
                      onChange={(event) => updateField("fullName", event.target.value)}
                    />
                  </TerminalField>
                  <TerminalField label="Email aziendale" labelClass={labelClass}>
                    <input
                      type="email"
                      required
                      className={inputClass}
                      placeholder="mario@azienda.it"
                      value={form.email}
                      onChange={(event) => updateField("email", event.target.value)}
                    />
                  </TerminalField>
                  <TerminalField label="Nome azienda" labelClass={labelClass}>
                    <input
                      type="text"
                      required
                      className={inputClass}
                      placeholder="Ragione sociale"
                      value={form.company}
                      onChange={(event) => updateField("company", event.target.value)}
                    />
                  </TerminalField>
                  <TerminalField label="Telefono" labelClass={labelClass}>
                    <input
                      type="tel"
                      required
                      className={inputClass}
                      placeholder="+39"
                      value={form.phone}
                      onChange={(event) => updateField("phone", event.target.value)}
                    />
                  </TerminalField>
                  <TerminalField label="Città / provincia" labelClass={labelClass}>
                    <input
                      type="text"
                      required
                      className={inputClass}
                      placeholder="Milano"
                      value={form.location}
                      onChange={(event) => updateField("location", event.target.value)}
                    />
                  </TerminalField>
                  <TerminalField label="Settore" labelClass={labelClass}>
                    <input
                      type="text"
                      required
                      className={inputClass}
                      placeholder="Servizi, retail, produzione..."
                      value={form.sector}
                      onChange={(event) => updateField("sector", event.target.value)}
                    />
                  </TerminalField>
                  <TerminalField label="Dipendenti" labelClass={labelClass}>
                    <select
                      required
                      className={`${inputClass} appearance-none`}
                      value={form.employees}
                      onChange={(event) => updateField("employees", event.target.value)}
                    >
                      <option value="" className="bg-[#0B162C]">
                        Seleziona fascia
                      </option>
                      <option value="1-5" className="bg-[#0B162C]">
                        1 - 5 dipendenti
                      </option>
                      <option value="6-15" className="bg-[#0B162C]">
                        6 - 15 dipendenti
                      </option>
                      <option value="16-50" className="bg-[#0B162C]">
                        16 - 50 dipendenti
                      </option>
                      <option value="50+" className="bg-[#0B162C]">
                        Oltre 50 dipendenti
                      </option>
                    </select>
                  </TerminalField>
                  <TerminalField label="Consulente del lavoro" labelClass={labelClass}>
                    <select
                      required
                      className={`${inputClass} appearance-none`}
                      value={form.hasConsultant}
                      onChange={(event) =>
                        updateField("hasConsultant", event.target.value as LeadPayload["hasConsultant"])
                      }
                    >
                      <option value="" className="bg-[#0B162C]">
                        Presente in azienda?
                      </option>
                      <option value="yes" className="bg-[#0B162C]">
                        Sì, abbiamo un consulente
                      </option>
                      <option value="no" className="bg-[#0B162C]">
                        No / Non so
                      </option>
                    </select>
                  </TerminalField>
                </div>

                <fieldset>
                  <legend className={labelClass}>Aree formative di interesse</legend>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {interestOptions.map((interest) => (
                      <label
                        key={interest}
                        className="flex cursor-pointer items-center gap-3 rounded-full border border-white/10 px-4 py-3 text-xs uppercase tracking-widest text-slate-400 transition hover:border-[#00E5FF]/50 hover:text-white"
                      >
                        <input
                          type="checkbox"
                          checked={form.interests.includes(interest)}
                          onChange={() => toggleInterest(interest)}
                          className="size-4 accent-[#00E5FF]"
                        />
                        {interest}
                      </label>
                    ))}
                  </div>
                </fieldset>

                <TerminalField label="Messaggio" labelClass={labelClass}>
                  <textarea
                    className={`${inputClass} min-h-24 resize-y`}
                    placeholder="Raccontaci le esigenze formative principali"
                    value={form.message}
                    onChange={(event) => updateField("message", event.target.value)}
                  />
                </TerminalField>

                <label className="group flex cursor-pointer items-start gap-4">
                  <input
                    type="checkbox"
                    required
                    checked={form.consent}
                    onChange={(event) => updateField("consent", event.target.checked)}
                    className="mt-1 size-5 cursor-pointer accent-[#00E5FF]"
                  />
                  <span className="font-mono text-[11px] uppercase leading-relaxed tracking-widest text-slate-500 transition-colors group-hover:text-slate-400">
                    Accetto di essere ricontattato per una valutazione preliminare. La presente
                    richiesta non garantisce in alcun modo l&apos;accesso al finanziamento, che resta
                    soggetto a requisiti, avvisi disponibili e approvazione del piano.
                  </span>
                </label>

                {status === "error" ? (
                  <p className="rounded-2xl border border-amber-300/20 bg-amber-300/10 p-4 text-sm text-amber-100">
                    {errorMessage}
                  </p>
                ) : null}

                <div className="border-t border-white/10 pt-8 text-right">
                  <Button type="submit" disabled={status === "loading"} className="w-full md:w-auto">
                    {status === "loading" ? (
                      <>
                        <Loader2 className="mr-3 size-5 animate-spin" aria-hidden="true" />
                        Invio in corso...
                      </>
                    ) : (
                      "Invia richiesta di valutazione"
                    )}
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function TerminalField({
  label,
  labelClass,
  children,
}: {
  label: string;
  labelClass: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className={labelClass}>{label}</span>
      {children}
    </label>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#010308] pb-12 pt-24">
      <div className="container mx-auto px-6">
        <div className="mb-20 grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo />
            <p className="mt-8 max-w-sm text-lg font-light text-slate-500">
              Formazione finanziata per aziende italiane. Valorizziamo i contributi attraverso
              supporto consulenziale e operativo.
            </p>
          </div>

          <div className="md:col-span-3 md:col-start-7">
            <h3 className="mb-8 text-xs font-bold uppercase tracking-wider text-white">
              Piattaforma
            </h3>
            <ul className="space-y-4 font-light text-slate-400">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition-colors hover:text-[#00E5FF]">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="#contatti" className="transition-colors hover:text-[#00E5FF]">
                  Contatti
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="mb-8 text-xs font-bold uppercase tracking-wider text-white">
              Nota legale
            </h3>
            <p className="font-light leading-7 text-slate-400">
              Servizio di supporto consulenziale e operativo. Accesso soggetto a requisiti e
              approvazione.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 md:flex-row">
          <p className="font-mono text-[11px] uppercase tracking-widest text-slate-600">
            © {new Date().getFullYear()} Swarp Finance Consulting
          </p>
          <p className="max-w-2xl text-center font-mono text-[10px] uppercase tracking-widest text-slate-600 md:text-right">
            L&apos;accesso a qualsiasi forma di formazione finanziata è sempre soggetto a requisiti
            aziendali, disponibilità fondi e approvazione.
          </p>
        </div>
      </div>
    </footer>
  );
}

export function PremiumLanding() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#030712] font-sans text-slate-50 selection:bg-[#00E5FF]/30 selection:text-white">
      <GlobalStyle />
      <div className="bg-noise" />
      <Header />
      <main>
        <Hero />
        <BentoGrid />
        <ProcessFlow />
        <CategoryListReveal />
        <TargetCustomers />
        <CompliancePanel />
        <FAQ />
        <TerminalForm />
      </main>
      <Footer />
    </div>
  );
}
