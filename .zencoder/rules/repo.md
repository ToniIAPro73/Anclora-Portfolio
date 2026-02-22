---
description: Repository Information Overview
alwaysApply: true
---

# Anclora Portfolio - Repository Information

## Summary

A modern, production-ready Next.js portfolio web application built with TypeScript, featuring a comprehensive technology stack for rapid development. The project uses Prisma as an ORM with SQLite database, includes NextAuth.js for authentication, and leverages shadcn/ui components with Tailwind CSS for responsive UI design.

## Structure

```text
src/
├── app/              # Next.js App Router pages & API routes
├── components/       # Reusable React components (UI & custom)
├── hooks/           # Custom React hooks
├── lib/             # Utility functions and configurations
├── data/            # Static data and constants
└── types/           # TypeScript type definitions

prisma/
├── schema.prisma    # Database schema (User, Post models)
└── dev.db          # SQLite development database

public/
├── docs/            # Public documentation
└── images/          # Static images and assets
```

## Language & Runtime

**Language**: TypeScript 5  
**Runtime**: Node.js (v18+, via Bun runtime)  
**Package Manager**: Bun (bun.lock present, npm fallback available)  
**Framework**: Next.js 16 (App Router)  
**Build System**: Next.js built-in build system

## Dependencies

**Main Dependencies**:

- **UI & Components**: @radix-ui/\* (20+ packages), shadcn/ui, lucide-react
- **Forms & Validation**: react-hook-form, zod, @hookform/resolvers
- **Database & Auth**: @prisma/client, next-auth
- **State Management**: zustand
- **Data Fetching**: @tanstack/react-query
- **Data Display**: @tanstack/react-table, recharts
- **Styling**: tailwindcss, tailwind-merge, tailwindcss-animate
- **Animations**: framer-motion
- **Utilities**: date-fns, uuid, class-variance-authority, clsx
- **Drag & Drop**: @dnd-kit/core, @dnd-kit/sortable
- **Internationalization**: next-intl
- **Content**: @mdxeditor/editor, react-markdown
- **Image Processing**: sharp
- **Notifications**: sonner

**Dev Dependencies**:

- **Linting**: eslint, eslint-config-next
- **Styling**: tailwindcss, @tailwindcss/postcss
- **Types**: @types/react, @types/react-dom, bun-types
- **Database**: prisma
- **Other**: tw-animate-css

## Build & Installation

**Install dependencies**:

```bash
bun install
```

**Development server** (Port 3000):

```bash
bun run dev
```

**Build for production**:

```bash
bun run build
```

**Start production server**:

```bash
NODE_ENV=production bun .next/standalone/server.js 2>&1 | tee server.log
```

**Lint code**:

```bash
bun run lint
```

**Database commands**:

```bash
bun run db:push          # Push schema changes to database
bun run db:generate      # Generate Prisma client
bun run db:migrate       # Create and run migrations
bun run db:reset         # Reset database (destructive)
```

## Database

**Type**: SQLite (development)  
**ORM**: Prisma v7.4.1  
**Schema Location**: `prisma/schema.prisma`

**Models**:

- **User**: id, email (unique), name, createdAt, updatedAt
- **Post**: id, title, content, published (boolean), authorId, createdAt, updatedAt

**Configuration**: Database URL via `DATABASE_URL` environment variable

## Main Files & Entry Points

**Application Entry**:

- `src/app/layout.tsx` - Root layout component
- `src/app/page.tsx` - Home page
- `src/app/api/route.ts` - API route handler

**Configuration**:

- `next.config.ts` - Next.js configuration (standalone output, TypeScript error handling)
- `tsconfig.json` - TypeScript compiler options (ES2017 target, path aliases via @/\*)
- `tailwind.config.ts` - Tailwind CSS theme extension with dark mode support
- `eslint.config.mjs` - ESLint rules (mostly relaxed for development flexibility)
- `postcss.config.mjs` - PostCSS configuration
- `components.json` - Component configuration (shadcn/ui)

**Other Notable**:

- `prisma/schema.prisma` - Database schema definition
- `scripts/generate-images.ts` - Image generation utility

## Testing & Validation

**Linting Framework**: ESLint (v9)  
**Configuration File**: `eslint.config.mjs`

**Run Command**:

```bash
bun run lint
```

**Note**: No unit/integration test framework (Jest, Vitest, Mocha) is currently configured. Tests can be added when needed.

## Code Quality

**TypeScript**: Strict mode enabled with full type checking  
**Validation**: Zod for runtime schema validation  
**Formatting**: Enforced via ESLint  
**Path Aliases**: `@/*` maps to `src/*` for clean imports
