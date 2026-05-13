import { contactRoles, type ContactRole } from "@/components/landing/data";

export type LeadPayload = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  roles: ContactRole[];
  message: string;
  consent: boolean;
};

const roleSet = new Set<ContactRole>(contactRoles);

export function validateLeadPayload(input: unknown): {
  valid: boolean;
  errors: Partial<Record<keyof LeadPayload, string>>;
  data?: LeadPayload;
} {
  const data = input as Partial<LeadPayload>;
  const errors: Partial<Record<keyof LeadPayload, string>> = {};

  const requiredText: Array<keyof LeadPayload> = [
    "firstName",
    "lastName",
    "email",
    "message",
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
    data.phone.trim() &&
    !/^[+()\d\s.-]{7,24}$/.test(data.phone)
  ) {
    errors.phone = "Inserisci un numero di telefono valido";
  }

  if (data.roles !== undefined) {
    if (!Array.isArray(data.roles)) {
      errors.roles = "Selezione non valida";
    } else if (!data.roles.every((role) => roleSet.has(role as ContactRole))) {
      errors.roles = "Selezione non valida";
    }
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
      firstName: data.firstName!.trim(),
      lastName: data.lastName!.trim(),
      email: data.email!.trim(),
      phone: typeof data.phone === "string" ? data.phone.trim() : "",
      roles: Array.isArray(data.roles) ? (data.roles as ContactRole[]) : [],
      message: data.message!.trim(),
      consent: true,
    },
  };
}
