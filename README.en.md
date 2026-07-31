<div align="center">

<img src="./public/logo-anclora-private-estates-exp.png" alt="Anclora Private Estates logo" width="420" />

# Anclora Real Estate Portfolio

### Premium digital experience for luxury real estate

A bilingual portfolio project combining high-end visual design, modular frontend architecture, lead capture, conversion tracking and production-oriented quality controls.

<br />

[![Next.js](https://img.shields.io/badge/Next.js-16-000000?logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-20232A?logo=react&logoColor=61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Bun](https://img.shields.io/badge/Bun-runtime-FBF0DF?logo=bun&logoColor=000000)](https://bun.sh/)
[![CI](https://github.com/ToniIAPro73/anclora-portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/ToniIAPro73/anclora-portfolio/actions/workflows/ci.yml)

<br />

[Español](./README.md) | **English**

</div>

> ⚠️ **Note:** this repository was previously marked as archived in favour of `anclora-portfolio-legacy`. It is again the active version of the project.

---

<img
  src="./public/images/hero/hero-daylight.jpg"
  alt="Luxury real-estate portfolio interface"
  width="100%"
/>

> **Portfolio disclosure**
>
> All properties, prices, investment figures and commercial content shown in this project are fictional and are used exclusively to demonstrate product design and software engineering capabilities.

## Project overview

Anclora Real Estate Portfolio is a complete digital showcase for a fictional luxury residential development in Mallorca.

The project goes beyond visual presentation. It demonstrates how a premium real-estate experience can combine brand positioning, responsive design, bilingual content, lead generation, server-side validation and measurable conversion events.

| Area                 | What the project demonstrates                                              |
| -------------------- | -------------------------------------------------------------------------- |
| Product design       | Premium positioning, visual hierarchy and conversion-oriented storytelling |
| Frontend             | Responsive sections, reusable components and deferred loading              |
| Internationalisation | Complete Spanish and English user experience                               |
| Lead capture         | Validated contact flow with honeypot and duplicate prevention              |
| Backend              | API routes, rate limiting and local persistence abstractions               |
| Analytics            | Validated conversion-event tracking and channel attribution                |
| Quality              | Automated lint, type-check, tests and production build                     |

## Key features

### Premium real-estate experience

- Editorial design adapted to luxury residential property.
- Immersive hero, gallery, residences, investment and location sections.
- Responsive behaviour across desktop, tablet and mobile.
- Carefully structured typography, spacing and visual rhythm.
- Spanish and English content controlled from a unified translation layer.

### Lead-capture reliability

- Zod schema validation.
- Honeypot anti-bot field.
- IP-based request throttling.
- Duplicate-submission protection.
- Controlled API responses.
- Automated tests for success and error scenarios.

### Conversion intelligence

- Client-side conversion event capture.
- Server-side event validation.
- UTM source attribution.
- Device classification.
- Submission success-rate calculation.
- Top acquisition-channel summaries.

### Engineering quality

- Strict TypeScript configuration.
- ESLint and Prettier.
- Vitest and Testing Library.
- GitHub Actions continuous integration.
- Standalone Next.js production build.
- Modular hooks, data, schemas and UI components.

## Technology stack

<div align="center">

| Frontend       | Backend and data       | Quality and tooling |
| -------------- | ---------------------- | ------------------- |
| Next.js 16     | Next.js Route Handlers | TypeScript          |
| React 19       | Zod                    | Vitest              |
| Tailwind CSS 4 | File-based demo stores | Testing Library     |
| Radix UI       | Rate limiting          | ESLint              |
| Framer Motion  | Conversion tracking    | Prettier            |
| Lucide React   | Prisma-ready structure | GitHub Actions      |

</div>

Infrastructure dependencies available for more complex projects: **Prisma**, **NextAuth**, **TanStack Query** and **Zustand**.

## Architecture

```text
src/
├── app/
│   ├── api/
│   │   ├── analytics/events/
│   │   └── contact/
│   ├── cookies/
│   ├── legal/
│   ├── privacy/
│   └── terms/
├── components/
│   ├── sections/
│   └── ui/
├── data/
├── hooks/
├── lib/
│   └── schemas/
└── types/

prisma/        # database schema and dev database
scripts/       # build, lint and quality-gate scripts
docs/          # technical documentation
├── standards/ # canonical UX/UI contracts
└── analysis/  # feature and portfolio analyses
archive/       # historical material and scaffolding leftovers
```

The project separates page composition, business logic, validation, reusable presentation components and persistence concerns.

Historical material and scaffolding leftovers are preserved in `archive/` (see [`archive/README.md`](./archive/README.md)). Nothing in `archive/` participates in the build or the application.

## API endpoints

### Contact requests

```http
POST /api/contact
GET  /api/contact
```

Responsibilities:

- validate the submitted payload;
- reject malformed requests;
- detect honeypot submissions;
- enforce IP-based rate limits;
- prevent immediate duplicates;
- store accepted inquiries;
- return a restricted response payload.

### Conversion events

```http
POST /api/analytics/events
GET  /api/analytics/events
```

Responsibilities:

- validate conversion events;
- classify device type;
- preserve campaign attribution;
- calculate submission success rates;
- aggregate acquisition channels.

### API metadata

```http
GET /api
```

Returns the available public API routes.

## Local development

### Requirements

- [Bun](https://bun.sh/) (the project is managed with Bun and `bun.lock`)

### Installation

```bash
git clone git@github.com:ToniIAPro73/anclora-portfolio.git
cd anclora-portfolio

bun install
cp .env.example .env.local
bun dev
```

Open:

```text
http://localhost:3000
```

## Environment configuration

The repository includes development placeholders only:

```dotenv
DATABASE_URL="file:./dev.db"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="replace-with-a-secure-random-secret"
NEXT_PUBLIC_EUR_TO_GBP="0.86"
```

Real credentials, personal information and production secrets must never be committed.

## Quality gates

Run the complete local validation suite:

```bash
bun run lint
bun run type-check
bun run test
bun run build
```

Current baseline:

| Check                    |     Status |
| ------------------------ | ---------: |
| Prisma client generation |    Passing |
| ESLint                   |    Passing |
| TypeScript               |    Passing |
| Automated tests          | 16 passing |
| Production build         |    Passing |

The same core checks run automatically through GitHub Actions.

## Technical documentation

- [Architecture](./docs/ARCHITECTURE.md)
- [API documentation](./docs/API.md)
- [Technical documentation](./docs/TECHNICAL_DOCUMENTATION.md)
- [Contribution guide](./docs/CONTRIBUTING.md)
- [Release checklist](./docs/RELEASE_CHECKLIST.md)

### UX/UI contracts

Minimum reading before touching the interface:

1. [`docs/standards/ANCLORA_ECOSYSTEM_CONTRACT_GROUPS.md`](./docs/standards/ANCLORA_ECOSYSTEM_CONTRACT_GROUPS.md)
2. [`docs/standards/ANCLORA_PORTFOLIO_SHOWCASE_CONTRACT.md`](./docs/standards/ANCLORA_PORTFOLIO_SHOWCASE_CONTRACT.md)
3. [`docs/standards/UI_MOTION_CONTRACT.md`](./docs/standards/UI_MOTION_CONTRACT.md)
4. [`docs/standards/MODAL_CONTRACT.md`](./docs/standards/MODAL_CONTRACT.md)
5. [`docs/standards/LOCALIZATION_CONTRACT.md`](./docs/standards/LOCALIZATION_CONTRACT.md)

## The Anclora ecosystem

This repository is the reusable technical engine.

The `Anclora-Azure-Bay-landing-page` repository is the commercial and visual case study.

- **Azure Bay** — the showcase of results.
- **Anclora Portfolio** — the scalable technical foundation.

## Production considerations

The default inquiry and analytics stores use local JSON files for demonstration and automated testing.

A production implementation should connect the existing interfaces to services such as:

- a managed SQL database;
- a CRM platform;
- transactional email;
- durable rate limiting;
- consent-aware analytics;
- authenticated administration.

## Project scope

This repository is intended to demonstrate:

- premium frontend execution;
- product-oriented development;
- maintainable architecture;
- reliable lead capture;
- testable backend behaviour;
- readiness for further commercial integrations.

It is not presented as a live property listing service, investment offer or operational CRM.

---

<div align="center">

### Antonio Ballesteros

Product-oriented developer focused on premium web applications, automation and AI-assisted digital solutions.

[![GitHub](https://img.shields.io/badge/GitHub-ToniIAPro73-181717?logo=github)](https://github.com/ToniIAPro73)

<br />

**Designed and engineered as part of the Anclora digital ecosystem.**

</div>
