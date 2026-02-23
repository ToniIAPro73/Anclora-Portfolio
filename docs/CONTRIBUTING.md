# Contributing

## Setup

1. Install dependencies:

```bash
npm ci
```

2. Generate Prisma client:

```bash
npm run -s db:generate
```

3. Start dev server:

```bash
npm run dev
```

## Quality Checklist

Before pushing changes, run:

```bash
npm run -s lint
npm run -s type-check
npm run -s test
npm run -s build
```

## Coding Guidelines

- Keep `src/app/page.tsx` as composition root only.
- Put new homepage business state in hooks (`src/hooks/*`), not inline in the page.
- Keep section data in `src/data/*`.
- Prefer typed server validation with Zod for new API inputs.
- Avoid introducing uncontrolled `any` in domain logic.

## Pull Requests

- One focused change per PR.
- Include validation output summary.
- If API behavior changes, update `docs/API.md`.
- If architecture changes, update `docs/ARCHITECTURE.md`.
