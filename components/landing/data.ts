import {
  BarChart3,
  BookOpenCheck,
  BrainCircuit,
  BriefcaseBusiness,
  CheckCircle2,
  ClipboardCheck,
  FileCheck2,
  Flame,
  Languages,
  MonitorCog,
  Network,
  Route,
  Shield,
  ShieldAlert,
  Sparkles,
  Store,
  Target,
  Utensils,
  Wrench,
} from "lucide-react";

export const navItems = [
  { label: "Metodo", href: "#metodo" },
  { label: "Corsi", href: "#corsi" },
  { label: "Aziende", href: "#aziende" },
  { label: "FAQ", href: "#faq" },
];

export const proofPoints = [
  "Aziende con almeno 1 dipendente",
  "Analisi fondo e requisiti",
  "Coordinamento con consulente",
  "Documentazione operativa",
];

export const problemCards = [
  {
    icon: BarChart3,
    title: "Contributi gia versati",
    text: "Molte aziende sostengono contributi collegati alla formazione continua, ma non li trasformano in competenze.",
  },
  {
    icon: Network,
    title: "Fondi e procedure",
    text: "Avvisi, scadenze, requisiti e documenti rendono difficile agire senza una regia operativa.",
  },
  {
    icon: Target,
    title: "Fabbisogni dispersi",
    text: "AI, digitale, sicurezza e vendita richiedono piani concreti, non corsi scelti a caso.",
  },
];

export const processSteps = [
  {
    icon: ClipboardCheck,
    label: "Diagnosi",
    title: "Raccolta dati",
    text: "Azienda, dipendenti, settore, consulente del lavoro e priorita formative.",
  },
  {
    icon: Shield,
    label: "Verifica",
    title: "Fondo e requisiti",
    text: "Controllo preliminare del percorso possibile, degli avvisi e delle condizioni applicabili.",
  },
  {
    icon: Route,
    label: "Design",
    title: "Piano formativo",
    text: "Costruiamo obiettivi, calendario, modalita e contenuti coerenti con la procedura.",
  },
  {
    icon: BookOpenCheck,
    label: "Delivery",
    title: "Erogazione",
    text: "La formazione parte solo dopo verifiche e approvazioni necessarie.",
  },
  {
    icon: FileCheck2,
    label: "Chiusura",
    title: "Documenti",
    text: "Supporto su registri, presenze e rendicontazione operativa fino alla chiusura.",
  },
];

export type TrainingTag = "digitale" | "commerciale" | "sicurezza" | "operations" | "lingue";

export const trainingCategories: {
  icon: typeof BrainCircuit;
  title: string;
  text: string;
  tag: TrainingTag;
  featured?: boolean;
}[] = [
  {
    icon: BrainCircuit,
    title: "AI per PMI",
    text: "Automazioni, strumenti generativi e casi d'uso pratici per ridurre tempi e costi.",
    tag: "digitale",
    featured: true,
  },
  {
    icon: MonitorCog,
    title: "Digital skills",
    text: "Excel, strumenti web, processi digitali e produttivita operativa.",
    tag: "digitale",
  },
  {
    icon: BriefcaseBusiness,
    title: "Marketing e vendite",
    text: "Brand, funnel, negoziazione, customer care e crescita commerciale.",
    tag: "commerciale",
    featured: true,
  },
  {
    icon: Shield,
    title: "Sicurezza",
    text: "Percorsi obbligatori, aggiornamenti e cultura della prevenzione.",
    tag: "sicurezza",
    featured: true,
  },
  {
    icon: Flame,
    title: "Emergenze",
    text: "Antincendio, primo soccorso e formazione tecnica conforme.",
    tag: "sicurezza",
  },
  {
    icon: Languages,
    title: "Lingue",
    text: "Inglese business e italiano operativo per team internazionali.",
    tag: "lingue",
    featured: true,
  },
  {
    icon: Store,
    title: "Retail e servizi",
    text: "Hospitality, ristorazione, palestre, negozi e front office.",
    tag: "operations",
    featured: true,
  },
  {
    icon: Wrench,
    title: "Tecnica di settore",
    text: "Percorsi verticali costruiti sui fabbisogni reali dell'azienda.",
    tag: "operations",
  },
  {
    icon: Utensils,
    title: "Operations",
    text: "Logistica, produzione, qualita e gestione quotidiana del lavoro.",
    tag: "operations",
  },
];

export const trainingFilters: { id: "all" | TrainingTag; label: string }[] = [
  { id: "all", label: "Tutti" },
  { id: "digitale", label: "Digitale & AI" },
  { id: "commerciale", label: "Commerciale" },
  { id: "sicurezza", label: "Sicurezza" },
  { id: "operations", label: "Operations" },
  { id: "lingue", label: "Lingue" },
];

export const targetCustomers = [
  "Micro imprese",
  "PMI",
  "Studi professionali",
  "Retail e servizi locali",
  "Ristorazione e hotel",
  "Palestre e centri sportivi",
  "Logistica e produzione",
  "Aziende digitali e B2B",
];

export const faqItems = [
  {
    q: "E formazione gratuita?",
    a: "E piu corretto parlare di formazione finanziata. L'azienda usa meccanismi collegati a contributi gia versati, quando i requisiti sono soddisfatti e il piano viene approvato.",
  },
  {
    q: "L'azienda riceve denaro in contanti?",
    a: "No. Normalmente il beneficio riguarda il finanziamento o rimborso di percorsi formativi approvati ed erogati, non un contributo cash libero.",
  },
  {
    q: "Serve il consulente del lavoro?",
    a: "Nella maggior parte dei casi si, per verifiche sulla posizione contributiva, adesione al fondo e aspetti collegati alla gestione del personale.",
  },
  {
    q: "Quali aziende possono accedere?",
    a: "Il servizio e pensato principalmente per aziende private con almeno un dipendente. La verifica finale dipende da posizione contributiva, fondo scelto e requisiti applicabili.",
  },
  {
    q: "L'approvazione del piano e garantita?",
    a: "No. Ogni richiesta resta soggetta a requisiti, disponibilita fondi, procedure, tempistiche e approvazione finale del piano formativo.",
  },
];

export const trustMetrics = [
  { value: 240, suffix: "+", label: "Aziende analizzate", caption: "PMI italiane attive" },
  { value: 18, suffix: "", label: "Regioni servite", caption: "Copertura su tutto il territorio" },
  { value: 15, suffix: "", label: "Settori coperti", caption: "Retail, AI, sicurezza, lingue" },
];

// To swap placeholders for real client logos, drop SVGs in /public/logos/
// and add `src: "/logos/<file>.svg"` to each entry below.
export const partnerLogos: { name: string; src?: string }[] = [
  { name: "Ferrara Logistica" },
  { name: "Tessile Veneto" },
  { name: "Romano & Partners" },
  { name: "Olivetti Digitale" },
  { name: "Casa del Caffe" },
  { name: "Studio Bianchi" },
];

// Placeholder testimonials — replace with real, compliance-safe quotes when ready.
// Add `photo: "/testimonials/<file>.jpg"` to render a photo instead of the initials chip.
export const testimonials: {
  quote: string;
  name: string;
  role: string;
  company: string;
  sector: string;
  photo?: string;
  featured?: boolean;
}[] = [
  {
    quote:
      "Avevamo l'impressione di pagare contributi senza ritorno. Con Swarp abbiamo capito cosa era davvero attivabile e quali passaggi servivano. Tutto piu chiaro, finalmente.",
    name: "Marta Ferrari",
    role: "Direttrice HR",
    company: "Ferrara Logistica",
    sector: "Logistica",
    featured: true,
  },
  {
    quote:
      "La parte di coordinamento con il nostro consulente del lavoro e con il fondo e stata risolutiva. Da soli non saremmo partiti.",
    name: "Luca Bianchi",
    role: "Titolare",
    company: "Studio Bianchi",
    sector: "Servizi professionali",
  },
  {
    quote:
      "Non ci hanno promesso scorciatoie. Hanno costruito un piano coerente con quello che serviva davvero alla nostra squadra.",
    name: "Elena Romano",
    role: "Operations Manager",
    company: "Tessile Veneto",
    sector: "Manifatturiero",
  },
];

export const assessmentStats = [
  { icon: Sparkles, label: "Output", value: "Valutazione preliminare" },
  { icon: CheckCircle2, label: "Focus", value: "Requisiti verificabili" },
  { icon: ShieldAlert, label: "Nota", value: "Nessuna promessa di accesso" },
];
