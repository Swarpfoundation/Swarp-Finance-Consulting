import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Swarp Consulting — Formazione finanziata per la tua azienda";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background:
            "radial-gradient(800px 600px at 90% 10%, rgba(0,229,229,0.35), transparent 60%), radial-gradient(700px 500px at 0% 100%, rgba(0,180,180,0.20), transparent 60%), #030817",
          color: "#ffffff",
          fontFamily: "Inter, sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            opacity: 0.6,
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 16, zIndex: 1 }}>
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 12,
              background: "#00e5e5",
              boxShadow: "0 0 60px rgba(0,229,229,0.6)",
            }}
          />
          <div
            style={{
              fontSize: 22,
              fontWeight: 700,
              letterSpacing: 6,
              textTransform: "uppercase",
              color: "#ffffff",
            }}
          >
            Swarp · Consulting
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 28, zIndex: 1 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              padding: "8px 16px",
              alignSelf: "flex-start",
              border: "1px solid rgba(0,229,229,0.4)",
              borderRadius: 999,
              background: "rgba(0,229,229,0.1)",
              fontSize: 18,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#a5f3fc",
              fontWeight: 600,
            }}
          >
            <div
              style={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                background: "#67e8f9",
                boxShadow: "0 0 12px rgba(103,232,249,0.9)",
              }}
            />
            Formazione finanziata · B2B
          </div>

          <div
            style={{
              fontSize: 96,
              fontWeight: 700,
              lineHeight: 1.0,
              letterSpacing: -2,
              color: "#ffffff",
              maxWidth: 1000,
            }}
          >
            Formazione finanziata{" "}
            <span style={{ color: "#67e8f9", fontStyle: "italic", fontWeight: 500 }}>
              per la tua azienda.
            </span>
          </div>

          <div style={{ fontSize: 28, color: "#c7d3e6", maxWidth: 900, lineHeight: 1.4 }}>
            Percorsi di formazione finanziata su misura per sviluppare le competenze del tuo team.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            zIndex: 1,
          }}
        >
          <div style={{ fontSize: 22, color: "#8ea0bf" }}>www.swarpconsulting.com</div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              fontSize: 18,
              color: "#5a6f93",
              letterSpacing: 4,
              textTransform: "uppercase",
              fontWeight: 600,
            }}
          >
            <div style={{ width: 60, height: 1, background: "rgba(255,255,255,0.2)" }} />
            Italia · PMI · Fondi
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
