import { NextResponse } from "next/server";
import { validateLeadPayload } from "@/lib/validation";

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, message: "Richiesta non valida" },
      { status: 400 },
    );
  }

  const result = validateLeadPayload(body);
  if (!result.valid) {
    return NextResponse.json(
      { ok: false, message: "Controlla i campi evidenziati", errors: result.errors },
      { status: 422 },
    );
  }

  if (process.env.NODE_ENV === "development") {
    console.info("Swarp Consulting contact form", {
      ...result.data,
      receivedAt: new Date().toISOString(),
    });
  }

  return NextResponse.json({ ok: true });
}
