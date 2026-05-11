import {
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
  "Per aziende con almeno 1 dipendente",
  "Finanziata al 100% a fondo perduto",
  "Burocrazia gestita da Swarp",
  "Tutte le aree e tutti i settori",
];

export const processSteps = [
  {
    icon: Sparkles,
    label: "Contatto",
    title: "Spieghiamo il meccanismo",
    text: "Ti raccontiamo cosa sono i fondi interprofessionali, da dove arrivano e cosa puoi finanziare. Spiegazione semplice, a prova di liceo.",
  },
  {
    icon: Network,
    label: "Contatti",
    title: "Raccolta riferimenti",
    text: "Ci colleghiamo con il titolare e con il consulente del lavoro per coordinare insieme i passaggi successivi.",
  },
  {
    icon: FileCheck2,
    label: "Informativa",
    title: "Email con la documentazione",
    text: "Ricevi una mail con la spiegazione completa, in versione semplice e tecnica, con i link alle fonti ufficiali (Ministero del Lavoro, INPS).",
  },
  {
    icon: Shield,
    label: "Iscrizione",
    title: "Adesione al fondo",
    text: "Il consulente del lavoro iscrive l'azienda al fondo tramite portale INPS. Tempo medio: 1 – 1,5 mesi.",
  },
  {
    icon: Route,
    label: "Definizione",
    title: "Piano formativo",
    text: "Scegliamo insieme tipologia di corsi e obiettivi: formazione teorica e training on the job in azienda.",
  },
  {
    icon: BookOpenCheck,
    label: "Avvio",
    title: "Partenza corsi",
    text: "Dopo l'attivazione del fondo, parte la formazione. Tu pensi all'azienda, ai docenti e ai materiali ci pensiamo noi.",
  },
  {
    icon: ClipboardCheck,
    label: "Rendicontazione",
    title: "Burocrazia gestita",
    text: "Registri, presenze, documenti e chiusura: Swarp si occupa di tutta la parte burocratica fino alla rendicontazione.",
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
    icon: Shield,
    title: "Sicurezza sul lavoro",
    text: "D.Lgs 81/08 e tutti gli obblighi di legge. Formazione obbligatoria, finanziabile al 100%.",
    tag: "sicurezza",
    featured: true,
  },
  {
    icon: Flame,
    title: "Antincendio e primo soccorso",
    text: "Percorsi obbligatori, aggiornamenti periodici e cultura della prevenzione in azienda.",
    tag: "sicurezza",
  },
  {
    icon: BriefcaseBusiness,
    title: "Marketing e vendite",
    text: "Branding, vendite, negoziazione e gestione del cliente: le competenze che portano fatturato.",
    tag: "commerciale",
    featured: true,
  },
  {
    icon: BrainCircuit,
    title: "Intelligenza artificiale",
    text: "Strumenti generativi, automazioni e casi d'uso pratici per ridurre tempi e costi.",
    tag: "digitale",
    featured: true,
  },
  {
    icon: MonitorCog,
    title: "Excel e digitale",
    text: "Excel, siti web, strumenti digitali e produttività operativa per chi lavora ogni giorno.",
    tag: "digitale",
  },
  {
    icon: Wrench,
    title: "Gestione aziendale",
    text: "Organizzazione, processi e gestione del personale e dell'attività quotidiana.",
    tag: "operations",
  },
  {
    icon: Languages,
    title: "Lingue",
    text: "Inglese business per il commerciale e italiano operativo per il personale straniero.",
    tag: "lingue",
    featured: true,
  },
  {
    icon: Utensils,
    title: "Ristorazione e hospitality",
    text: "Bartender, mixology, gestione staff e servizio clienti per ristoranti, hotel e bar.",
    tag: "operations",
    featured: true,
  },
  {
    icon: Store,
    title: "Palestre e centri sportivi",
    text: "Formazione istruttori e personal trainer, gestione clienti e organizzazione del centro.",
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
  "Micro imprese — fino a 10 dipendenti",
  "Piccole imprese — oltre 10 dipendenti",
  "Medie imprese — oltre 50 dipendenti",
  "Grandi imprese — accesso a più fondi",
  "Studi professionali",
  "Ristorazione, hotel e bar",
  "Palestre e centri sportivi",
  "Retail, servizi e produzione",
];

export const faqItems = [
  {
    q: "È formazione gratuita?",
    a: "No. È formazione finanziata al 100% a fondo perduto. La differenza è importante: i fondi non sono un regalo, sono soldi che la tua azienda ha già versato sotto forma di contributi obbligatori.",
  },
  {
    q: "Da dove arrivano questi fondi?",
    a: "Dallo 0,30% dei contributi che ogni azienda versa per ciascun dipendente. L'INPS li raccoglie e li trasferisce ai fondi interprofessionali, regolati dal Ministero del Lavoro.",
  },
  {
    q: "Cosa succede se non li uso?",
    a: "Ogni anno i fondi inutilizzati tornano all'INPS. Non rimangono in azienda e non si accumulano: se non li attivi, li perdi. È il motivo principale per cui esiste Swarp.",
  },
  {
    q: "Quali aziende possono accedere?",
    a: "Tutte le aziende private con almeno un dipendente. Le ore di formazione finanziabili variano in base alla dimensione: indicativamente 50 per le micro imprese, 100 per le piccole, 200 per le medie. Le grandi imprese accedono a più fondi.",
  },
  {
    q: "Cosa si può finanziare?",
    a: "Qualsiasi formazione utile per l'azienda: sicurezza obbligatoria (D.Lgs 81/08, antincendio, primo soccorso), professionalizzante (marketing, vendite, gestione, Excel, AI, lingue) e settoriale (ristorazione, palestre, tecnica di settore). Modalità: teoria e training on the job.",
  },
  {
    q: "Quanto tempo serve per partire?",
    a: "L'iscrizione al fondo tramite portale INPS la gestisce il consulente del lavoro e richiede 1 – 1,5 mesi. Dopo l'attivazione si definiscono insieme i corsi e si parte. La parte burocratica resta in capo a Swarp.",
  },
];

export const trustMetrics: {
  value: number;
  suffix: string;
  label: string;
  caption: string;
}[] = [];

// Add real client logos by dropping SVGs in /public/logos/
// and pushing entries like { name: "Cliente", src: "/logos/cliente.svg" }.
export const partnerLogos: { name: string; src?: string }[] = [];

// Add real, compliance-safe testimonials here.
// Add `photo: "/testimonials/<file>.jpg"` to render a photo instead of the initials chip.
export const testimonials: {
  quote: string;
  name: string;
  role: string;
  company: string;
  sector: string;
  photo?: string;
  featured?: boolean;
}[] = [];

export const assessmentStats = [
  { icon: Sparkles, label: "Output", value: "Verifica fondo + ore stimate" },
  { icon: CheckCircle2, label: "Accesso", value: "Aziende con ≥1 dipendente" },
  { icon: ShieldAlert, label: "Burocrazia", value: "Gestita da Swarp" },
];
