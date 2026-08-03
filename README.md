<div align="center">

<img src="./public/anclora-private-estates-exp.png" alt="Logotipo de Anclora Private Estates" width="420" />

# Anclora Real Estate Portfolio

### Experiencia digital premium para el sector inmobiliario de lujo

Proyecto de portfolio bilingüe que combina diseño visual de alta gama, arquitectura frontend modular, captura de leads, seguimiento de conversiones y controles de calidad orientados a producción.

<br />

[![Next.js](https://img.shields.io/badge/Next.js-16-000000?logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-20232A?logo=react&logoColor=61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Bun](https://img.shields.io/badge/Bun-runtime-FBF0DF?logo=bun&logoColor=000000)](https://bun.sh/)
[![CI](https://github.com/ToniIAPro73/anclora-portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/ToniIAPro73/anclora-portfolio/actions/workflows/ci.yml)

<br />

**Español** | [English](./README.en.md)

</div>

> ⚠️ **Nota:** este repositorio estuvo marcado como archivado en favor de `anclora-portfolio-legacy`. Vuelve a ser la versión activa del proyecto.

---

<img
  src="./public/images/hero/hero-daylight.jpg"
  alt="Interfaz del portfolio inmobiliario de lujo"
  width="100%"
/>

> **Aviso de portfolio**
>
> Todas las propiedades, precios, cifras de inversión y contenidos comerciales mostrados en este proyecto son ficticios y se utilizan exclusivamente para demostrar capacidades de diseño de producto e ingeniería de software.

## Descripción del proyecto

Anclora Real Estate Portfolio es un escaparate digital completo para una promoción residencial de lujo ficticia en Mallorca.

El proyecto va más allá de la presentación visual. Demuestra cómo una experiencia inmobiliaria premium puede combinar posicionamiento de marca, diseño responsive, contenido bilingüe, generación de leads, validación en servidor y eventos de conversión medibles.

| Área                 | Qué demuestra el proyecto                                                       |
| -------------------- | ------------------------------------------------------------------------------- |
| Diseño de producto   | Posicionamiento premium, jerarquía visual y storytelling orientado a conversión |
| Frontend             | Secciones responsive, componentes reutilizables y carga diferida                |
| Internacionalización | Experiencia de usuario completa en español e inglés                             |
| Captura de leads     | Flujo de contacto validado con honeypot y prevención de duplicados              |
| Backend              | Rutas API, rate limiting y abstracciones de persistencia local                  |
| Analítica            | Seguimiento de eventos de conversión validados y atribución de canales          |
| Calidad              | Lint, type-check, tests y build de producción automatizados                     |

## Funcionalidades clave

### Experiencia inmobiliaria premium

- Diseño editorial adaptado a propiedades residenciales de lujo.
- Secciones inmersivas de hero, galería, residencias, inversión y ubicación.
- Comportamiento responsive en escritorio, tablet y móvil.
- Tipografía, espaciado y ritmo visual cuidadosamente estructurados.
- Contenido en español e inglés controlado desde una capa de traducción unificada.

### Fiabilidad en la captura de leads

- Validación de esquemas con Zod.
- Campo honeypot anti-bots.
- Limitación de peticiones por IP.
- Protección contra envíos duplicados.
- Respuestas API controladas.
- Tests automatizados para escenarios de éxito y de error.

### Inteligencia de conversión

- Captura de eventos de conversión en cliente.
- Validación de eventos en servidor.
- Atribución de fuentes UTM.
- Clasificación de dispositivos.
- Cálculo de la tasa de éxito de envíos.
- Resúmenes de los principales canales de adquisición.

### Calidad de ingeniería

- Configuración estricta de TypeScript.
- ESLint y Prettier.
- Vitest y Testing Library.
- Integración continua con GitHub Actions.
- Build de producción standalone de Next.js.
- Hooks, datos, esquemas y componentes UI modulares.

## Stack tecnológico

<div align="center">

| Frontend       | Backend y datos                  | Calidad y tooling |
| -------------- | -------------------------------- | ----------------- |
| Next.js 16     | Route Handlers de Next.js        | TypeScript        |
| React 19       | Zod                              | Vitest            |
| Tailwind CSS 4 | Stores demo en archivos          | Testing Library   |
| Radix UI       | Rate limiting                    | ESLint            |
| Framer Motion  | Seguimiento de conversiones      | Prettier          |
| Lucide React   | Estructura preparada para Prisma | GitHub Actions    |

</div>

Dependencias de infraestructura disponibles para proyectos más complejos: **Prisma**, **NextAuth**, **TanStack Query** y **Zustand**.

## Arquitectura

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

prisma/        # esquema y base de datos de desarrollo
scripts/       # scripts de build, lint y quality gates
docs/          # documentación técnica
├── standards/ # contratos UX/UI canónicos
└── analysis/  # análisis de features y portfolios
archive/       # material histórico y residuos de scaffolding
```

El proyecto separa la composición de páginas, la lógica de negocio, la validación, los componentes de presentación reutilizables y la persistencia.

El material histórico y los residuos de scaffolding se conservan en `archive/` (ver [`archive/README.md`](./archive/README.md)). Nada de lo contenido en `archive/` participa en el build ni en la aplicación.

## Endpoints de la API

### Solicitudes de contacto

```http
POST /api/contact
GET  /api/contact
```

Responsabilidades:

- validar el payload enviado;
- rechazar peticiones malformadas;
- detectar envíos de bots (honeypot);
- aplicar límites de peticiones por IP;
- prevenir duplicados inmediatos;
- persistir las solicitudes aceptadas;
- devolver una respuesta restringida.

### Eventos de conversión

```http
POST /api/analytics/events
GET  /api/analytics/events
```

Responsabilidades:

- validar los eventos de conversión;
- clasificar el tipo de dispositivo;
- preservar la atribución de campaña;
- calcular tasas de éxito de envíos;
- agregar los canales de adquisición.

### Metadatos de la API

```http
GET /api
```

Devuelve las rutas públicas disponibles de la API.

## Desarrollo local

### Requisitos

- [Bun](https://bun.sh/) (el proyecto se gestiona con Bun y `bun.lock`)

### Instalación

```bash
git clone git@github.com:ToniIAPro73/anclora-portfolio.git
cd anclora-portfolio

bun install
cp .env.example .env.local
bun dev
```

Abrir:

```text
http://localhost:3000
```

## Configuración de entorno

El repositorio incluye únicamente valores de desarrollo de ejemplo:

```dotenv
DATABASE_URL="file:./dev.db"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="replace-with-a-secure-random-secret"
NEXT_PUBLIC_EUR_TO_GBP="0.86"
```

Nunca deben commitearse credenciales reales, información personal ni secretos de producción.

## Quality gates

Ejecuta la suite completa de validación local:

```bash
bun run lint
bun run type-check
bun run test
bun run build
```

Estado actual:

| Check                        |      Estado |
| ---------------------------- | ----------: |
| Generación de cliente Prisma |    Correcta |
| ESLint                       |    Correcto |
| TypeScript                   |    Correcto |
| Tests automatizados          | 16 en verde |
| Build de producción          |    Correcto |

Las mismas comprobaciones se ejecutan automáticamente en GitHub Actions.

## Documentación técnica

- [Arquitectura](./docs/ARCHITECTURE.md)
- [Documentación de la API](./docs/API.md)
- [Documentación técnica](./docs/TECHNICAL_DOCUMENTATION.md)
- [Guía de contribución](./docs/CONTRIBUTING.md)
- [Checklist de release](./docs/RELEASE_CHECKLIST.md)

### Contratos UX/UI

Lectura mínima antes de tocar la interfaz:

1. [`docs/standards/ANCLORA_ECOSYSTEM_CONTRACT_GROUPS.md`](./docs/standards/ANCLORA_ECOSYSTEM_CONTRACT_GROUPS.md)
2. [`docs/standards/ANCLORA_PORTFOLIO_SHOWCASE_CONTRACT.md`](./docs/standards/ANCLORA_PORTFOLIO_SHOWCASE_CONTRACT.md)
3. [`docs/standards/UI_MOTION_CONTRACT.md`](./docs/standards/UI_MOTION_CONTRACT.md)
4. [`docs/standards/MODAL_CONTRACT.md`](./docs/standards/MODAL_CONTRACT.md)
5. [`docs/standards/LOCALIZATION_CONTRACT.md`](./docs/standards/LOCALIZATION_CONTRACT.md)

## El ecosistema Anclora

Este repositorio representa el motor técnico reutilizable.

El repositorio `Anclora-Azure-Bay-landing-page` representa el caso de estudio comercial y visual.

- **Azure Bay** — la vitrina de resultados.
- **Anclora Portfolio** — la base técnica escalable.

## Consideraciones de producción

Los stores de inquiries y analítica utilizan archivos JSON locales para demostración y tests automatizados.

Una implementación en producción debería conectar las interfaces existentes a servicios como:

- una base de datos SQL gestionada;
- una plataforma CRM;
- email transaccional;
- rate limiting duradero;
- analítica con gestión de consentimiento;
- administración autenticada.

## Alcance del proyecto

Este repositorio pretende demostrar:

- ejecución frontend premium;
- desarrollo orientado a producto;
- arquitectura mantenible;
- captura de leads fiable;
- comportamiento de backend testeable;
- preparación para futuras integraciones comerciales.

No se presenta como un servicio real de listado de propiedades, una oferta de inversión ni un CRM operativo.

---

<div align="center">

### Antonio Ballesteros

Desarrollador orientado a producto, centrado en aplicaciones web premium, automatización y soluciones digitales asistidas por IA.

[![GitHub](https://img.shields.io/badge/GitHub-ToniIAPro73-181717?logo=github)](https://github.com/ToniIAPro73)

<br />

**Diseñado y desarrollado como parte del ecosistema digital Anclora.**

</div>
