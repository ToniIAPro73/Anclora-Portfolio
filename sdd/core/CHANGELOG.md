# Core Changelog

## v1

- Se crea baseline SDD para Anclora Portfolio.
- Se define gobernanza de performance/accesibilidad para evitar regresiones Lighthouse.

## v1.1

- Feature `landing-performance-and-accessibility-guardrails` implementada y cerrada (GO).
  - Añadido gate ejecutable `npm run check:lighthouse` (`scripts/lighthouse-kpi-gate.mjs`).
  - Añadido guardrail global de `prefers-reduced-motion` para reducir riesgo de regresión en performance UX.
- Feature `lead-capture-reliability-and-trust` implementada y cerrada (GO).
  - Añadido honeypot server/client para filtrar bots sin fricción.
  - Añadido dedupe de envíos en ventana corta para evitar doble submit accidental.
  - Mejorado flujo de envío con timeout de red y manejo explícito de errores.
  - Añadidas pruebas de API para honeypot y deduplicación.

## v1.2

- Feature `content-ops-and-portfolio-storytelling` implementada y cerrada (GO).
  - Nueva sección de storytelling en landing con narrativa `contexto -> método -> resultado`.
  - Bloques de contenido reusable por canal: LinkedIn, cold email y social.
  - Integración bilingüe (`es`/`en`) en `translations`.
