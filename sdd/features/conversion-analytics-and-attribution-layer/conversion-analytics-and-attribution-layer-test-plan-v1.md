# Test Plan v1 — conversion-analytics-and-attribution-layer

## Alcance de QA

- Correctitud funcional de tracking y atribución.
- Robustez backend de ingestión.
- No regresión UX/performance.

## Matriz de pruebas

1. Evento CTA principal del hero.
   Resultado esperado: evento persistido con nombre correcto y metadatos base.
2. Evento CTA secundario del hero.
   Resultado esperado: persistencia sin duplicado por clicks rápidos.
3. Flujo de formulario exitoso.
   Resultado esperado: `attempt` + `success` y datos de atribución presentes.
4. Flujo de formulario con error.
   Resultado esperado: `attempt` + `error` con motivo controlado.
5. Entrada con UTMs.
   Resultado esperado: UTMs capturadas y almacenadas en todos los eventos de sesión.
6. Rate-limit del endpoint de eventos.
   Resultado esperado: respuesta 429 en abuso y sistema estable.
7. Checks técnicos.
   Resultado esperado: `npm run -s lint`, `npm run -s test`, `npm run -s build` en verde.
8. Lighthouse.
   Resultado esperado: 100/100 en desktop y mobile para categorías obligatorias.

## Evidencias

- Logs de pruebas y extracto de DB.
- JSON de Lighthouse desktop/mobile.
- Capturas de panel interno con métricas mínimas.
