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
