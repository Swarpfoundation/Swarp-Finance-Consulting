import {
  BookOpenCheck,
  BrainCircuit,
  BriefcaseBusiness,
  Flame,
  Globe,
  HeartPulse,
  Languages,
  MonitorCog,
  Network,
  PencilRuler,
  Route,
  Shield,
  Sparkles,
  Store,
  Utensils,
  Wrench,
} from "lucide-react";

export const navItems = [
  { label: "Metodo", href: "#metodo" },
  { label: "Corsi", href: "#corsi" },
  { label: "FAQ", href: "#faq" },
];

export const proofPoints = [
  "Corsi per tutte le aziende",
  "Finanziata al 100% a fondo perduto",
  "Burocrazia gestita da Swarp",
  "Corsi per ogni settore e area professionale",
];

export const processSteps = [
  {
    icon: Sparkles,
    label: "Spiegazione",
    title: "Spiegazione riguardo il fondo",
    text: "Ti spieghiamo che cosa sono i fondi interprofessionali, da dove arrivano questi soldi e quale tipo di formazione può essere finanziata.",
  },
  {
    icon: Network,
    label: "Raccolta",
    title: "Raccolta documenti e dati",
    text: "Raccogliamo i dati del titolare dell'azienda, del consulente del lavoro e richiediamo tutti i documenti necessari.",
  },
  {
    icon: Shield,
    label: "Iscrizione",
    title: "Iscrizione al fondo",
    text: "Dopo aver ottenuto tutta la documentazione necessaria, procediamo con l'iscrizione al fondo tramite il portale dell'INPS.",
  },
  {
    icon: Route,
    label: "Definizione",
    title: "Definizione del piano formativo",
    text: "Decidiamo insieme a te i corsi da svolgere e gli obiettivi da raggiungere.",
  },
  {
    icon: BookOpenCheck,
    label: "Avvio",
    title: "Avvio dei corsi",
    text: "Una volta iscritti al fondo, sarà possibile iniziare la formazione.",
  },
];

export type TrainingTag = "obbligatorio" | "professionalizzante" | "settoriale";

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
    text: "D.Lgs 81/08 e tutti gli obblighi di legge in materia di salute e sicurezza in azienda.",
    tag: "obbligatorio",
    featured: true,
  },
  {
    icon: Flame,
    title: "Antincendio",
    text: "Formazione antincendio per addetti, aggiornamenti periodici e prevenzione in azienda.",
    tag: "obbligatorio",
  },
  {
    icon: HeartPulse,
    title: "Primo soccorso",
    text: "Corsi obbligatori per addetti al primo soccorso, con aggiornamenti periodici.",
    tag: "obbligatorio",
  },
  {
    icon: BriefcaseBusiness,
    title: "Marketing e branding",
    text: "Posizionamento, comunicazione e branding per costruire la presenza dell'azienda.",
    tag: "professionalizzante",
    featured: true,
  },
  {
    icon: Sparkles,
    title: "Vendite",
    text: "Tecniche di vendita, negoziazione e gestione del cliente per il team commerciale.",
    tag: "professionalizzante",
  },
  {
    icon: Wrench,
    title: "Gestione aziendale",
    text: "Organizzazione, processi e gestione del personale e dell'attività quotidiana.",
    tag: "professionalizzante",
  },
  {
    icon: MonitorCog,
    title: "Excel",
    text: "Fogli di calcolo, formule e analisi dei dati per chi lavora ogni giorno con Excel.",
    tag: "professionalizzante",
  },
  {
    icon: Globe,
    title: "Siti web",
    text: "Creazione e gestione di siti web aziendali, e-commerce e presenza digitale.",
    tag: "professionalizzante",
  },
  {
    icon: BrainCircuit,
    title: "Intelligenza artificiale",
    text: "Strumenti generativi, automazioni e casi d'uso pratici per ridurre tempi e costi.",
    tag: "professionalizzante",
    featured: true,
  },
  {
    icon: Languages,
    title: "Corsi di lingua",
    text: "Inglese per il business e italiano operativo per il personale straniero.",
    tag: "professionalizzante",
    featured: true,
  },
  {
    icon: Store,
    title: "Palestre",
    text: "Formazione istruttori e personal trainer, gestione clienti e organizzazione del centro.",
    tag: "settoriale",
    featured: true,
  },
  {
    icon: Utensils,
    title: "Ristorazione",
    text: "Bartender e mixology, gestione staff e servizio clienti per ristoranti, hotel e bar.",
    tag: "settoriale",
    featured: true,
  },
  {
    icon: PencilRuler,
    title: "Tecnica di settore",
    text: "Formazione tecnica specifica per ogni settore, costruita sui fabbisogni reali dell'azienda.",
    tag: "settoriale",
  },
];

export const trainingFilters: { id: "all" | TrainingTag; label: string }[] = [
  { id: "all", label: "Tutti" },
  { id: "obbligatorio", label: "Obbligatori" },
  { id: "professionalizzante", label: "Professionalizzanti" },
  { id: "settoriale", label: "Settoriali" },
];

export const faqItems = [
  {
    q: "La formazione è gratuita?",
    a: "La formazione è finanziata: il fondo verrà gestito da Swarp per finanziare i percorsi formativi di cui hai bisogno.",
  },
  {
    q: "Quali sono i fondi gestiti da Swarp?",
    a: "Formazienda e FonARCom.",
  },
  {
    q: "Cosa succede se non uso questi fondi?",
    a: "Ogni anno i fondi inutilizzati tornano all'INPS: se non li usi, li perdi.",
  },
  {
    q: "Quali aziende possono accedere ai fondi?",
    a: "Tutte le aziende private con almeno un dipendente. Le ore di formazione finanziabili variano in base alla dimensione: indicativamente 50 per le micro imprese, 100 per le piccole, 200 per le medie.",
  },
  {
    q: "Quale tipologia di formazione si può finanziare?",
    a: "Qualsiasi tipologia di formazione utile per l'azienda: dai corsi obbligatori, come salute e sicurezza sul lavoro (D.Lgs. 81/08), antincendio e primo soccorso, ai percorsi professionalizzanti (marketing, vendite, gestione, Excel, AI, corsi di lingua), fino alla formazione più settoriale (ristorazione, palestre e competenze tecniche di settore).",
  },
  {
    q: "Quanto devo aspettare prima di poter iniziare il corso?",
    a: "L'iscrizione al fondo richiede circa 1 mese / 1 mese e mezzo. Una volta fatta, si definiscono insieme i corsi necessari e si avvia la formazione. Tutta la parte burocratica è gestita da Swarp.",
  },
];

export const contactRoles = [
  "Azienda",
  "Consulente del Lavoro",
  "Commercialista",
  "Altro",
] as const;

export type ContactRole = (typeof contactRoles)[number];

