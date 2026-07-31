# SKILL: Conversion Analytics and Attribution Layer

## Cuándo usar

- Cambios de tracking de eventos, UTMs, embudos de conversión y reportes de rendimiento comercial.

## Objetivo

Medir de forma fiable y trazable la conversión de la landing sin degradar UX premium ni Lighthouse.

## Checklist

1. Definir taxonomía de eventos antes de implementar.
2. Capturar contexto de atribución (`utm_*`, `referrer`, `path`, `lang`, `device`).
3. Validar payloads y aplicar rate-limit en endpoint de eventos.
4. Evitar doble conteo por clicks/envíos repetidos.
5. Mantener sobrecarga de JS mínima y diferida.
6. Verificar `lint`, `test`, `build`.
7. Ejecutar Lighthouse desktop/mobile tras cambios.

## Criterios NO-GO

- Eventos críticos sin trazabilidad.
- Duplicados sistemáticos en métricas.
- Regresión en performance mobile.
