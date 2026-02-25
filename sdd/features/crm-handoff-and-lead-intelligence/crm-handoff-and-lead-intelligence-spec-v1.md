# spec-crm-handoff-and-lead-intelligence-v1

## 1. Problema

Los leads capturados no tienen un flujo de entrega estándar a herramientas comerciales ni una capa de enriquecimiento que priorice seguimiento.

## 2. Objetivo

Implementar entrega fiable de leads hacia destino CRM ligero y calcular señales de inteligencia comercial para priorización.

## 3. Alcance

- Integración de handoff configurable (Sheets/Notion/Webhook).
- Cola de reintentos para fallos transitorios de entrega.
- Lead scoring inicial en backend basado en presupuesto, interés y completitud.
- Registro de estado del lead (`new`, `qualified`, `retry_pending`, `delivered`, `failed`).
- Panel interno mínimo para visibilidad de estado y trazabilidad.

## 4. No alcance

- Integración con CRM enterprise propietario.
- Automatizaciones complejas de nurturing multicanal.
- IA avanzada de scoring predictivo.

## 5. Requisitos funcionales

1. Cada submit válido de formulario debe generar un lead con id único.
2. El lead debe entregarse al destino configurado con confirmación de recepción.
3. Si falla la entrega, el sistema debe reintentar con backoff y registrar motivo.
4. Debe calcularse score inicial y nivel de prioridad (`high`, `medium`, `low`).
5. Debe existir endpoint/pantalla interna para consultar estado de entrega por lead.

## 6. Requisitos no funcionales

- Idempotencia en handoff para evitar duplicados.
- Observabilidad mínima (logs estructurados y contadores por estado).
- Sin afectar performance de la landing (procesamiento diferido en servidor).

## 7. Riesgos

- Duplicación de leads por reintentos sin idempotencia.
- Bloqueos por timeout de destino externo.
- Exposición accidental de datos sensibles en logs.

## 8. Criterios de aceptación

- Flujo de entrega end-to-end probado con éxito y escenarios de error.
- Reintentos operativos y visibles en estado del lead.
- Score y prioridad calculados de forma determinista.
- `lint`, `test`, `build` y Lighthouse en verde.

## 9. Plan de pruebas

- Unit tests de scoring e idempotencia.
- API tests de creación/entrega/reintento.
- Pruebas manuales de fallo temporal y recuperación.

## 10. Plan de rollout

1. Implementar modelo de estado y cola de entrega.
2. Activar integración de handoff por configuración.
3. Validar QA y métricas de entrega.
4. Cerrar gate final y actualizar changelog.
