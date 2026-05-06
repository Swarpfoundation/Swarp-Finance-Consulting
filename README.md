# Swarp Finance Consulting

Marketing website for Swarp Finance Consulting, a B2B Italian service supporting companies with funded employee training through Fondi Interprofessionali.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Quality checks

```bash
npm run lint
npm run typecheck
npm run build
```

## Lead form

The form posts to `/api/leads`. The API validates the payload and logs the lead only in development mode, so no personal data is stored by default. The route is intentionally small and can be connected later to an email provider or CRM.

## Compliance note

Before launch, have legal/compliance review the statements about `formazione finanziata`, Fondi Interprofessionali, eligibility, approval, and the role of accredited partners.
