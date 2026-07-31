# Archive

Material histórico y residuos de scaffolding que no forman parte del producto,
conservado aquí para mantener la raíz del repositorio limpia sin borrar nada.

- `upload/` — imágenes y assets temporales pegados durante el desarrollo.
- `download/` — residuo del scaffolding inicial.
- `examples/websocket/` — ejemplo de plantilla ajeno al portfolio.
- `db/custom.db` — SQLite antiguo; la base de datos activa es `prisma/dev.db`.
- `image-generation.log` — log del antiguo script de generación de imágenes.
- `.dockerignore`, `Caddyfile` — residuos de despliegue del scaffolding; no hay `Dockerfile`
  ni pipeline de contenedores en el repo, y el `Caddyfile` solo lo usaban los `.zscripts/`.
- `.zscripts/`, `.agent/`, `.antigravity/`, `.zencoder/`, `CLAUDE.md` — configuración y
  scripts de herramientas de IA/scaffolding (z.ai, Claude, Zencoder) ajenas al proyecto.
- `package-lock.json` — lockfile de npm duplicado; el gestor de paquetes del proyecto es Bun (`bun.lock`).
- `README_1.md` — borrador de referencia usado para la versión premium del `README.md` principal.
- `scripts/` — manual de Anclora Nexus (`manual_anclora.md`, `Manual_Anclora_Nexus_Final.docx`,
  `generar_manual.py`) y `generate-images.ts`, utilidades huérfanas sin referencia en `package.json`.

Nada de lo aquí contenido participa en el build ni en la app (`src/`).
