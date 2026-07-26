> ⚠️ Repositorio archivado. Versión vigente: anclora-portfolio-legacy.

# Anclora Portfolio

Portfolio tecnico para el sector inmobiliario premium.

Este repositorio muestra como estructuro un proyecto real con enfoque de:

- calidad visual de marca,
- arquitectura modular mantenible,
- y backend listo para evolucionar.

La demo principal esta en `src/app/page.tsx` y el objetivo es mostrar criterio de producto y rigor tecnico, no solo maquetacion.

## Propuesta de valor

- Frontend premium con secciones modulares y copy bilingue.
- Capa API para captura de contactos con validacion, rate limiting y persistencia.
- Tooling profesional con lint, tests, type-check y build.
- Base reutilizable para nuevos clientes sin partir de cero.

## Stack

- Next.js 16 (App Router)
- TypeScript 5
- Tailwind CSS 4
- shadcn/ui + Radix UI
- Framer Motion
- Zod
- Vitest

Dependencias de infraestructura disponibles para proyectos mas complejos:

- Prisma
- NextAuth
- TanStack Query
- Zustand

## Arquitectura

Estructura principal:

```text
src/
  app/
    page.tsx
    api/
  components/
    sections/
    ui/
  hooks/
  data/
  lib/
db/
```

Documentacion tecnica:

- `docs/ARCHITECTURE.md`
- `docs/API.md`
- `docs/TECHNICAL_DOCUMENTATION.md`

## API incluida

- `POST /api/contact`: valida payload con Zod, aplica rate limit por IP y persiste inquiry.
- `GET /api/contact`: devuelve total de contactos registrados.
- `GET /api`: endpoint basico de metadata.

## Uso local

```bash
npm install
npm run dev
```

## Quality Gates

```bash
npm run -s lint
npm run -s type-check
npm run -s test
npm run -s build
```

## Relacion con Azure Bay

Este repo representa el motor tecnico reutilizable.

El repo `Anclora-Azure-Bay-landing-page` representa el caso de estudio comercial y visual.

Resumen:

- Azure Bay = vitrina de resultado.
- Anclora Portfolio = base tecnica escalable.

## Contratos UX/UI

Lectura minima antes de tocar interfaz:

1. `docs/standards/ANCLORA_ECOSYSTEM_CONTRACT_GROUPS.md`
2. `docs/standards/ANCLORA_PORTFOLIO_SHOWCASE_CONTRACT.md`
3. `docs/standards/UI_MOTION_CONTRACT.md`
4. `docs/standards/MODAL_CONTRACT.md`
5. `docs/standards/LOCALIZATION_CONTRACT.md`
