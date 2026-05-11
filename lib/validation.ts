export type LeadPayload = {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  location: string;
  employees: string;
  sector: string;
  hasConsultant: "yes" | "no" | "";
  interests: string[];
  message: string;
  consent: boolean;
};

const interestOptions = new Set([
  "Sicurezza obbligatoria",
  "Marketing e vendite",
  "AI e digitale",
  "Lingue",
  "Gestione aziendale",
  "Formazione di settore",
  "Altro",
]);

export function validateLeadPayload(input: unknown): {
  valid: boolean;
  errors: Partial<Record<keyof LeadPayload, string>>;
  data?: LeadPayload;
} {
  const data = input as Partial<LeadPayload>;
  const errors: Partial<Record<keyof LeadPayload, string>> = {};

  const requiredText: Array<keyof LeadPayload> = [
    "fullName",
    "email",
    "phone",
    "company",
    "location",
    "employees",
    "sector",
  ];

  for (const key of requiredText) {
    if (typeof data[key] !== "string" || !String(data[key]).trim()) {
      errors[key] = "Campo obbligatorio";
    }
  }

  if (
    typeof data.email === "string" &&
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)
  ) {
    errors.email = "Inserisci un indirizzo email valido";
  }

  if (
    typeof data.phone === "string" &&
    !/^[+()\d\s.-]{7,24}$/.test(data.phone)
  ) {
    errors.phone = "Inserisci un numero di telefono valido";
  }

  if (data.hasConsultant !== "yes" && data.hasConsultant !== "no") {
    errors.hasConsultant = "Seleziona una risposta";
  }

  if (!Array.isArray(data.interests) || data.interests.length === 0) {
    errors.interests = "Seleziona almeno un'area";
  } else if (!data.interests.every((item) => interestOptions.has(item))) {
    errors.interests = "Area formativa non valida";
  }

  if (data.consent !== true) {
    errors.consent = "Il consenso è necessario per essere ricontattati";
  }

  if (Object.keys(errors).length > 0) {
    return { valid: false, errors };
  }

  return {
    valid: true,
    errors: {},
    data: {
      fullName: data.fullName!.trim(),
      email: data.email!.trim(),
      phone: data.phone!.trim(),
      company: data.company!.trim(),
      location: data.location!.trim(),
      employees: data.employees!.trim(),
      sector: data.sector!.trim(),
      hasConsultant: data.hasConsultant!,
      interests: data.interests!,
      message: typeof data.message === "string" ? data.message.trim() : "",
      consent: true,
    },
  };
}
