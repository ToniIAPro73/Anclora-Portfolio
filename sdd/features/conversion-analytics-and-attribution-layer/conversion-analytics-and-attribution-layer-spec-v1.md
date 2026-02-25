# spec-conversion-analytics-and-attribution-layer-v1

## 1. Problema

El portfolio no mide de forma consistente los eventos de conversión ni la atribución por canal/campaña, lo que impide demostrar impacto comercial con datos.

## 2. Objetivo

Implementar una capa de analítica de conversión ligera, medible y compatible con Lighthouse para rastrear eventos clave de la landing y su origen.

## 3. Alcance

- Event taxonomy unificada para interacciones críticas.
- Captura de `utm_*`, `referrer` y contexto de sesión.
- Registro de eventos en endpoint interno y almacenamiento persistente.
- Dashboard básico de lectura para KPIs de conversión.
- Respeto de consentimiento/privacidad y degradación graceful sin JS.

## 4. No alcance

- Integraciones avanzadas con suites enterprise (GA4 server-side full, CDP).
- Modelos de atribución multitoque complejos.
- Automatizaciones de CRM (se cubren en feature separada).

## 5. Requisitos funcionales

1. Registrar eventos al menos para: `hero_cta_primary_click`, `hero_cta_secondary_click`, `nav_contact_click`, `contact_form_submit_attempt`, `contact_form_submit_success`, `contact_form_submit_error`.
2. Persistir `timestamp`, `event_name`, `lang`, `path`, `device`, `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `utm_term`, `referrer`.
3. Exponer endpoint seguro para ingestión con validación de payload y rate-limit.
4. Evitar duplicados de eventos por doble click en ventana corta.
5. Mostrar métricas mínimas en panel interno: total eventos, tasa de submit exitoso y top canales.

## 6. Requisitos no funcionales

- Sin regresión en Lighthouse (mobile/desktop) en `performance`, `accessibility`, `best-practices`, `seo`.
- Overhead de JS cliente mínimo y carga diferida para tracking no crítico.
- Cumplimiento de reglas de privacidad del proyecto (sin PII innecesaria).

## 7. Riesgos

- Inflar bundle por librerías de analytics pesadas.
- Duplicidad o pérdida de eventos por condiciones de red.
- Sesgo de medición por bloqueadores de scripts.

## 8. Criterios de aceptación

- Eventos definidos y trazables de extremo a extremo.
- Datos de atribución almacenados y consultables.
- Checks `lint`, `test`, `build` y gate Lighthouse en verde.
- QA sin P0 de rendimiento, a11y o privacidad.

## 9. Plan de pruebas

- Unit tests para validadores de eventos y deduplicación.
- API tests para ingestión, validación y rate-limit.
- E2E manual: flujo landing -> CTA -> formulario -> confirmación con eventos persistidos.

## 10. Plan de rollout

1. Habilitar esquema y endpoint de eventos.
2. Activar instrumentación en CTAs y formulario.
3. Validar QA técnica y Lighthouse.
4. Publicar panel interno y cerrar gate final.
