# Test Plan v1 — crm-handoff-and-lead-intelligence

## Alcance de QA

- Fiabilidad de entrega.
- Correctitud de scoring.
- Resiliencia ante fallos externos.

## Matriz de pruebas

1. Submit válido genera lead.
   Resultado esperado: lead persistido con estado `new`.
2. Handoff exitoso.
   Resultado esperado: estado `delivered` y confirmación asociada.
3. Fallo temporal del destino.
   Resultado esperado: estado `retry_pending` con reintento programado.
4. Reintento exitoso.
   Resultado esperado: transición a `delivered`.
5. Fallo definitivo tras umbral.
   Resultado esperado: estado `failed` con causa registrada.
6. Idempotencia.
   Resultado esperado: sin duplicados ante reenvío/reintento.
7. Scoring.
   Resultado esperado: score y prioridad correctos para combinaciones de entrada.
8. Checks técnicos.
   Resultado esperado: `npm run -s lint`, `npm run -s test`, `npm run -s build` en verde.
9. Lighthouse.
   Resultado esperado: sin regresión de KPIs en mobile/desktop.

## Evidencias

- Logs de handoff y reintentos.
- Capturas/JSON de endpoints de estado.
- Informes Lighthouse.
