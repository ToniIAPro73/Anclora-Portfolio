# Architecture

## Purpose

This repository is a blueprint portfolio for Anclora Private Estates. The goal is not lead-landing conversion, but to demonstrate premium brand direction and strong technical execution.

## Current Layers

- `src/app/page.tsx`: composition root for homepage sections.
- `src/components/sections/*`: business sections (hero, gallery, residences, contact, etc).
- `src/hooks/*`: domain orchestration and UI state hooks.
- `src/data/*`: static business content and translations.
- `src/app/api/*`: demonstration API endpoints.
- `src/lib/*`: infrastructure utilities (db, schemas, rate-limit).

## Homepage Controller

`useHomepageController` orchestrates:

- language state (`useLanguage`)
- gallery state (`useGallery`)
- residence selection (`useResidenceSelection`)
- section navigation (`useSectionNavigation`)
- FAQ projection (`useFaqItems`)
- contact form state and submit (`useContactForm`)

This keeps `src/app/page.tsx` declarative and focused on section composition.

## API Architecture

- `POST /api/contact`: validates payload with Zod, applies in-memory rate limiting by IP, and persists inquiries with Prisma.
- `GET /api`: basic API metadata endpoint.

## Data Model

- Contact inquiries are persisted in a file-backed store (`src/lib/inquiry-store.ts`) at `db/inquiries.json`.
- Each inquiry stores `name`, `email`, `phone`, `budget`, `interest`, `message`, `ipAddress`, and `createdAt`.
- `POST /api/contact` writes records and `GET /api/contact` exposes a lightweight total count.

## Quality Gates

- Lint: `npm run -s lint`
- Type-check: `npm run -s type-check`
- Test: `npm run -s test`
- Build: `npm run -s build`
- CI workflow: `.github/workflows/ci.yml`
