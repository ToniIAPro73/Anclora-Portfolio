# SKILL: CRM Handoff and Lead Intelligence

## Cuándo usar

- Cambios en entrega de leads a destinos comerciales, scoring, estados de pipeline y trazabilidad operativa.

## Objetivo

Asegurar que cada lead válido se entregue de forma fiable, con prioridad comercial útil y sin duplicidades.

## Checklist

1. Modelar estados del lead y transiciones válidas.
2. Garantizar idempotencia en handoff y reintentos.
3. Implementar timeouts y backoff para fallos transitorios.
4. Definir scoring determinista y explicable.
5. Registrar logs estructurados sin exponer datos sensibles.
6. Verificar `lint`, `test`, `build`.
7. Validar no regresión Lighthouse.

## Criterios NO-GO

- Leads perdidos o duplicados en flujo de entrega.
- Reintentos sin control de idempotencia.
- Datos sensibles expuestos en logs.
