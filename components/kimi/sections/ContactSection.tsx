"use client";

import { FormEvent, useEffect, useState } from "react";
import Link from "next/link";
import { Check, Mail, MapPin, Phone } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionOverline from "@/components/kimi/SectionOverline";
import { validateLeadPayload, type LeadPayload } from "@/lib/validation";
import { contactRoles, type ContactRole } from "@/lib/site-data";
import { cn } from "@/lib/cn";

gsap.registerPlugin(ScrollTrigger);

const initialForm: LeadPayload = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  roles: [],
  message: "",
  consent: false,
};

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactSection() {
  const [formState, setFormState] = useState<Status>("idle");
  const [form, setForm] = useState<LeadPayload>(initialForm);
  const [errors, setErrors] = useState<Partial<Record<keyof LeadPayload, string>>>({});
  const [serverMessage, setServerMessage] = useState("");

  useEffect(() => {
    const section = document.getElementById("contatti");
    if (!section) return;

    const ctx = gsap.context(() => {
      const leftCol = section.querySelector(".contact-left");
      const rightCol = section.querySelector(".contact-right");

      if (leftCol) {
        gsap.fromTo(
          leftCol,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: { trigger: section, start: "top 80%", once: true },
          },
        );
      }

      if (rightCol) {
        gsap.fromTo(
          rightCol,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: 0.2,
            ease: "power2.out",
            scrollTrigger: { trigger: section, start: "top 80%", once: true },
          },
        );
      }
    }, section);

    return () => ctx.revert();
  }, []);

  function updateField<K extends keyof LeadPayload>(key: K, value: LeadPayload[K]) {
    setForm((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
    if (formState === "error") {
      setFormState("idle");
      setServerMessage("");
    }
  }

  function toggleRole(role: ContactRole) {
    updateField(
      "roles",
      form.roles.includes(role)
        ? form.roles.filter((item) => item !== role)
        : [...form.roles, role],
    );
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (formState === "submitting" || formState === "success") return;

    const validation = validateLeadPayload(form);
    if (!validation.valid) {
      setErrors(validation.errors);
      setFormState("error");
      setServerMessage("Completa i campi obbligatori e correggi le informazioni evidenziate.");
      return;
    }

    setFormState("submitting");
    setServerMessage("");

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validation.data),
      });
      const payload = await response.json();

      if (!response.ok || !payload.ok) {
        setErrors(payload.errors ?? {});
        setFormState("error");
        setServerMessage(payload.message ?? "Invio non riuscito. Riprova tra poco.");
        return;
      }

      setFormState("success");
    } catch {
      setFormState("error");
      setServerMessage("Invio non riuscito. Riprova tra poco.");
    }
  }

  return (
    <section
      id="contatti"
      className="w-full"
      style={{ background: "var(--black)", padding: "128px 0" }}
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-20 lg:grid-cols-[1fr_1.2fr]">
          <div className="contact-left opacity-0">
            <SectionOverline>CONTATTACI</SectionOverline>
            <p
              className="mt-4 font-body"
              style={{ fontSize: "16px", color: "var(--light-gray)", lineHeight: 1.6 }}
            >
              Compila il questionario o chiamaci direttamente. Ti ricontatteremo entro pochi giorni
              per rispondere alle tue domande e proporti i corsi più adatti alla tua azienda.
            </p>

            <div className="mt-12 flex flex-col gap-6">
              <ContactItem label="Email" href="mailto:info@swarpconsulting.com" icon={Mail}>
                info@swarpconsulting.com
              </ContactItem>
              <ContactItem label="Telefono" href="tel:+393759836127" icon={Phone}>
                +39 375 983 6127
              </ContactItem>
              <ContactItem label="Telefono" href="tel:+393759941811" icon={Phone}>
                +39 375 994 1811
              </ContactItem>
              <div>
                <span
                  className="block font-body text-sm uppercase tracking-wider"
                  style={{ color: "var(--light-gray)" }}
                >
                  Sede
                </span>
                <span
                  className="mt-1 flex items-center gap-2 font-body text-lg"
                  style={{ color: "var(--light-gray)" }}
                >
                  <MapPin size={18} />
                  Viale Tunisia 22, 20124 Milano
                </span>
              </div>
            </div>
          </div>

          <div
            className="contact-right rounded-lg p-6 opacity-0 md:p-12"
            style={{
              background: "var(--dark-gray)",
              border: "1px solid rgba(250, 250, 250, 0.1)",
            }}
          >
            {formState === "success" ? (
              <div className="flex h-full flex-col items-center justify-center py-12 text-center">
                <div
                  className="mb-6 flex h-16 w-16 items-center justify-center rounded-full"
                  style={{ background: "var(--green)" }}
                >
                  <Check size={32} color="white" />
                </div>
                <h3 className="font-display text-2xl" style={{ color: "var(--white)" }}>
                  Richiesta Inviata!
                </h3>
                <p className="mt-3 font-body" style={{ color: "var(--light-gray)" }}>
                  Ti ricontatteremo entro pochi giorni per la tua richiesta.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <FormField label="Nome" error={errors.firstName} required>
                    <input
                      className="kimi-input"
                      value={form.firstName}
                      onChange={(event) => updateField("firstName", event.target.value)}
                      autoComplete="given-name"
                    />
                  </FormField>
                  <FormField label="Cognome" error={errors.lastName} required>
                    <input
                      className="kimi-input"
                      value={form.lastName}
                      onChange={(event) => updateField("lastName", event.target.value)}
                      autoComplete="family-name"
                    />
                  </FormField>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <FormField label="Email aziendale" error={errors.email} required>
                    <input
                      type="email"
                      className="kimi-input"
                      value={form.email}
                      onChange={(event) => updateField("email", event.target.value)}
                      autoComplete="email"
                    />
                  </FormField>
                  <FormField label="Telefono" error={errors.phone}>
                    <input
                      type="tel"
                      className="kimi-input"
                      value={form.phone}
                      onChange={(event) => updateField("phone", event.target.value)}
                      autoComplete="tel"
                      placeholder="+39"
                    />
                  </FormField>
                </div>

                <fieldset>
                  <legend
                    className="mb-2 block font-body text-sm"
                    style={{ color: "var(--light-gray)" }}
                  >
                    Chi sei
                  </legend>
                  <div className="grid gap-2 sm:grid-cols-2">
                    {contactRoles.map((role) => {
                      const checked = form.roles.includes(role);
                      return (
                        <label
                          key={role}
                          className={cn(
                            "flex cursor-pointer items-center gap-2 rounded border px-3 py-3 font-body text-xs font-semibold uppercase tracking-[0.12em] transition",
                            checked
                              ? "border-[var(--gold)] bg-[var(--gold)] text-[var(--black)]"
                              : "border-white/10 bg-[var(--black)] text-white/70 hover:border-[var(--gold)]",
                          )}
                        >
                          <input
                            type="checkbox"
                            checked={checked}
                            onChange={() => toggleRole(role)}
                            className="h-4 w-4 accent-[var(--gold)]"
                          />
                          {role}
                        </label>
                      );
                    })}
                  </div>
                  {errors.roles ? <ErrorText>{errors.roles}</ErrorText> : null}
                </fieldset>

                <FormField label="Messaggio" error={errors.message} required>
                  <textarea
                    className="kimi-input min-h-32 resize-y"
                    value={form.message}
                    onChange={(event) => updateField("message", event.target.value)}
                    placeholder="Descrivi le tue esigenze di formazione..."
                  />
                </FormField>

                <label className="flex cursor-pointer items-start gap-3">
                  <input
                    type="checkbox"
                    checked={form.consent}
                    onChange={(event) => updateField("consent", event.target.checked)}
                    className="mt-1 h-[18px] w-[18px] flex-shrink-0 cursor-pointer rounded accent-[var(--gold)]"
                  />
                  <span className="font-body text-sm" style={{ color: "var(--light-gray)" }}>
                    Accetto la{" "}
                    <Link href="/privacy" className="underline" style={{ color: "var(--gold)" }}>
                      Privacy Policy
                    </Link>{" "}
                    e il trattamento dei dati personali ai sensi del GDPR.
                  </span>
                </label>
                {errors.consent ? <ErrorText>{errors.consent}</ErrorText> : null}

                {formState === "error" ? (
                  <p className="rounded border border-[var(--gold-dim)] bg-[rgba(200,164,92,0.08)] p-4 font-body text-sm text-[var(--gold)]">
                    {serverMessage}
                  </p>
                ) : null}

                <button
                  type="submit"
                  disabled={formState === "submitting"}
                  className="w-full cursor-pointer rounded py-4 font-body text-base font-semibold uppercase transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-70"
                  style={{
                    background: formState === "submitting" ? "var(--mid-gray)" : "var(--gold)",
                    color: "var(--black)",
                  }}
                >
                  {formState === "submitting" ? "Invio in corso..." : "Richiedi Consulenza"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactItem({
  label,
  href,
  icon: Icon,
  children,
}: {
  label: string;
  href: string;
  icon: typeof Mail;
  children: React.ReactNode;
}) {
  return (
    <div>
      <span
        className="block font-body text-sm uppercase tracking-wider"
        style={{ color: "var(--light-gray)" }}
      >
        {label}
      </span>
      <a
        href={href}
        className="mt-1 flex items-center gap-2 font-body text-lg text-white transition-colors duration-300 hover:text-[var(--gold)]"
      >
        <Icon size={18} />
        {children}
      </a>
    </div>
  );
}

function FormField({
  label,
  error,
  required = false,
  children,
}: {
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block font-body text-sm" style={{ color: "var(--light-gray)" }}>
        {label} {required ? <span style={{ color: "var(--gold)" }}>*</span> : null}
      </span>
      {children}
      {error ? <ErrorText>{error}</ErrorText> : null}
    </label>
  );
}

function ErrorText({ children }: { children: React.ReactNode }) {
  return (
    <span className="mt-1 block font-body text-xs" style={{ color: "var(--red)" }}>
      {children}
    </span>
  );
}
