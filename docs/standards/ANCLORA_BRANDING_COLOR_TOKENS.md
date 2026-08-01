---
title: ANCLORA_BRANDING_COLOR_TOKENS
type: standard
estado: activo
scope: branding
tags: [branding, standards, anclora, color-tokens]
related:
  - "[[ANCLORA_BRANDING_MASTER_CONTRACT]]"
  - "[[ANCLORA_BRANDING_ICON_SYSTEM]]"
---

# ANCLORA_BRANDING_COLOR_TOKENS

> Referencia: [[ANCLORA_BRANDING_MASTER_CONTRACT]]

## Objetivo

Definir los tokens CSS de color para cada aplicación del ecosistema. Cada app utiliza tokens compartidos de su grupo más tokens individuales derivados de su color de acento (definido en [[ANCLORA_BRANDING_ICON_SYSTEM]]).

## Estructura de tokens por app

| Grupo      | Tokens                                                                                            | Origen                                   |
| ---------- | ------------------------------------------------------------------------------------------------- | ---------------------------------------- |
| Surfaces   | `--background`, `--surface`, `--card`, `--elevated`, `--hover`                                    | Individual (tinte de interior del icono) |
| Accent     | `--accent`, `--accent-hover`, `--accent-dim`, `--accent-soft`, `--accent-glow`, `--accent-border` | Individual (color de ondas del icono)    |
| Secondary  | `--secondary`, `--secondary-soft`, `--secondary-border`                                           | Individual                               |
| Sidebar    | `--sidebar`, `--sidebar-border`, `--sidebar-active`                                               | Individual                               |
| Text       | `--text-primary`, `--text-secondary`, `--text-muted`, `--text-on-accent`                          | Individual (tinte de grupo)              |
| Semántico  | `--danger`, `--success`, `--warning` + `-soft`                                                    | Compartido global                        |
| Estructura | `--radius-*`, `--shadow-*`, `--border-*`                                                          | Compartido por grupo                     |

---

## Tokens compartidos globales

```css
/* ── Semántico ── */
--danger: #e53e3e;
--danger-soft: rgba(229, 62, 62, 0.12);
--success: #38a169;
--success-soft: rgba(56, 161, 105, 0.12);
--warning: #d69e2e;
--warning-soft: rgba(214, 158, 46, 0.12);
```

## Tokens compartidos — Internas

```css
--radius-sm: 6px;
--radius-md: 10px;
--radius-lg: 16px;
--radius-full: 9999px;
--border-subtle: rgba(255, 255, 255, 0.08);
--border-default: rgba(255, 255, 255, 0.12);
--border-strong: rgba(255, 255, 255, 0.2);
--shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.2);
--shadow-md: 0 8px 24px rgba(0, 0, 0, 0.28);
--shadow-lg: 0 16px 48px rgba(0, 0, 0, 0.36);
```

## Tokens compartidos — Premium

```css
--radius-sm: 6px;
--radius-md: 10px;
--radius-lg: 16px;
--radius-full: 9999px;
--border-subtle: rgba(255, 255, 255, 0.08);
--border-default: rgba(255, 255, 255, 0.12);
--border-strong: rgba(255, 255, 255, 0.2);
--shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.22);
--shadow-md: 0 8px 24px rgba(0, 0, 0, 0.3);
--shadow-lg: 0 16px 48px rgba(0, 0, 0, 0.38);
```

## Tokens compartidos — Ultra Premium

```css
--radius-sm: 8px;
--radius-md: 12px;
--radius-lg: 20px;
--radius-full: 9999px;
--border-subtle: rgba(212, 175, 55, 0.12);
--border-default: rgba(212, 175, 55, 0.2);
--border-strong: rgba(212, 175, 55, 0.3);
--shadow-sm: 0 4px 12px rgba(0, 0, 0, 0.18);
--shadow-md: 0 16px 48px rgba(0, 0, 0, 0.28);
--shadow-lg: 0 30px 90px rgba(0, 0, 0, 0.38);
--shadow-gold: 0 15px 35px rgba(212, 175, 55, 0.2);
--shadow-gold-hover: 0 20px 45px rgba(212, 175, 55, 0.3);
```

---

## Anclora Group (Entidad Matriz)

Accent: Silver `#A8AEB8` | Secondary: — | Tipografía: Georgia, serif

### Dark

```css
:root {
  --background: #0f1520;
  --surface: #151c28;
  --card: #1a2230;
  --elevated: #202a38;
  --hover: #263040;
  --accent: #a8aeb8;
  --accent-hover: #bcc2cc;
  --accent-dim: #8a909a;
  --accent-soft: rgba(168, 174, 184, 0.12);
  --accent-glow: rgba(168, 174, 184, 0.08);
  --accent-border: rgba(168, 174, 184, 0.25);
  --sidebar: #111925;
  --sidebar-border: rgba(168, 174, 184, 0.1);
  --sidebar-active: rgba(168, 174, 184, 0.14);
  --text-primary: #ecf0f5;
  --text-secondary: #b0bec5;
  --text-muted: #728694;
  --text-on-accent: #0f1520;
}
```

### Light

```css
[data-theme="light"] {
  --background: #f4f6f8;
  --surface: #ffffff;
  --card: #ffffff;
  --elevated: #f0f2f5;
  --hover: #e8ecf0;
  --accent: #5c6370;
  --accent-hover: #4a5060;
  --accent-soft: rgba(92, 99, 112, 0.08);
  --sidebar: #eaedf2;
  --text-primary: #101820;
  --text-secondary: #4a5568;
  --text-muted: #8492a6;
  --text-on-accent: #ffffff;
}
```

---

## Anclora Advisor AI (Interna)

Accent: Teal `#1DAB89` | Secondary: Mint `#A1DBC6`

### Dark

```css
:root {
  --background: #101e30;
  --surface: #152438;
  --card: #1a2c42;
  --elevated: #20344c;
  --hover: #263c56;
  --accent: #1dab89;
  --accent-hover: #22c49e;
  --accent-dim: #17987a;
  --accent-soft: rgba(29, 171, 137, 0.12);
  --accent-glow: rgba(29, 171, 137, 0.1);
  --accent-border: rgba(29, 171, 137, 0.3);
  --secondary: #a1dbc6;
  --secondary-soft: rgba(161, 219, 198, 0.1);
  --secondary-border: rgba(161, 219, 198, 0.18);
  --sidebar: #132133;
  --sidebar-border: rgba(161, 219, 198, 0.12);
  --sidebar-active: rgba(29, 171, 137, 0.16);
  --text-primary: #ecf2fb;
  --text-secondary: #bfd0e7;
  --text-muted: #7a96b5;
  --text-on-accent: #ffffff;
}
```

### Light

```css
[data-theme="light"] {
  --background: #f3f6fb;
  --surface: #ffffff;
  --card: #ffffff;
  --elevated: #edf2fa;
  --hover: #e4ecf6;
  --accent: #17987a;
  --accent-hover: #128a6e;
  --accent-soft: rgba(23, 152, 122, 0.08);
  --secondary: #4a8a74;
  --sidebar: #e8eef8;
  --text-primary: #102033;
  --text-secondary: #425b78;
  --text-muted: #7a96b5;
  --text-on-accent: #ffffff;
}
```

---

## Anclora Nexus (Interna)

Accent: Gold `#D4AF37` | Secondary: Blue light `#AFD2FA`

### Dark

```css
:root {
  --background: #0f1629;
  --surface: #141c3a;
  --card: #192350;
  --elevated: #1e2a5c;
  --hover: #243268;
  --accent: #d4af37;
  --accent-hover: #e0c050;
  --accent-dim: #b8962e;
  --accent-soft: rgba(212, 175, 55, 0.12);
  --accent-glow: rgba(212, 175, 55, 0.1);
  --accent-border: rgba(212, 175, 55, 0.3);
  --secondary: #afd2fa;
  --secondary-soft: rgba(175, 210, 250, 0.1);
  --secondary-border: rgba(175, 210, 250, 0.15);
  --sidebar: #111a38;
  --sidebar-border: rgba(175, 210, 250, 0.08);
  --sidebar-active: rgba(212, 175, 55, 0.14);
  --text-primary: #f5f5f0;
  --text-secondary: #c8d0e0;
  --text-muted: #7a88a8;
  --text-on-accent: #0f1629;
}
```

### Light

```css
[data-theme="light"] {
  --background: #f5f5f0;
  --surface: #ffffff;
  --card: #ffffff;
  --elevated: #eeeee8;
  --hover: #e5e5df;
  --accent: #b8962e;
  --accent-hover: #a08028;
  --accent-soft: rgba(184, 150, 46, 0.08);
  --secondary: #4a6890;
  --sidebar: #eaeae4;
  --text-primary: #101828;
  --text-secondary: #4a5570;
  --text-muted: #8090a8;
  --text-on-accent: #ffffff;
}
```

---

## Anclora Content Generator AI (Interna)

Accent: Coral `#E06848` | Secondary: Sage green `#5A9A78`

### Dark

```css
:root {
  --background: #110d0a;
  --surface: #181210;
  --card: #201a16;
  --elevated: #28221c;
  --hover: #302a24;
  --accent: #e06848;
  --accent-hover: #e87c60;
  --accent-dim: #c85a3c;
  --accent-soft: rgba(224, 104, 72, 0.12);
  --accent-glow: rgba(224, 104, 72, 0.1);
  --accent-border: rgba(224, 104, 72, 0.3);
  --secondary: #5a9a78;
  --secondary-soft: rgba(90, 154, 120, 0.1);
  --secondary-border: rgba(90, 154, 120, 0.18);
  --sidebar: #14100c;
  --sidebar-border: rgba(224, 104, 72, 0.1);
  --sidebar-active: rgba(224, 104, 72, 0.14);
  --text-primary: #f0ede8;
  --text-secondary: #c8c0b8;
  --text-muted: #8a8078;
  --text-on-accent: #ffffff;
}
```

### Light

```css
[data-theme="light"] {
  --background: #faf7f2;
  --surface: #ffffff;
  --card: #ffffff;
  --elevated: #f4f0ea;
  --hover: #ece8e0;
  --accent: #c85a3c;
  --accent-hover: #b84e32;
  --accent-soft: rgba(200, 90, 60, 0.08);
  --secondary: #3a7a58;
  --sidebar: #f0ebe4;
  --text-primary: #1a1410;
  --text-secondary: #5a4e44;
  --text-muted: #948880;
  --text-on-accent: #ffffff;
}
```

---

## Anclora Impulso (Premium)

Accent: Naranja `#FF6A00` | Secondary: Naranja claro `#FFB366`

### Dark

```css
:root {
  --background: #0e0f18;
  --surface: #141520;
  --card: #1a1c2b;
  --elevated: #222435;
  --hover: #2a2d40;
  --accent: #ff6a00;
  --accent-hover: #ff8228;
  --accent-dim: #d45800;
  --accent-soft: rgba(255, 106, 0, 0.12);
  --accent-glow: rgba(255, 106, 0, 0.1);
  --accent-border: rgba(255, 106, 0, 0.3);
  --secondary: #ffb366;
  --secondary-soft: rgba(255, 179, 102, 0.1);
  --secondary-border: rgba(255, 179, 102, 0.18);
  --sidebar: #111220;
  --sidebar-border: rgba(255, 106, 0, 0.1);
  --sidebar-active: rgba(255, 106, 0, 0.14);
  --text-primary: #f0eef5;
  --text-secondary: #b8b4c8;
  --text-muted: #7e7a90;
  --text-on-accent: #ffffff;
}
```

### Light

```css
[data-theme="light"] {
  --background: #f8f6fa;
  --surface: #ffffff;
  --card: #ffffff;
  --elevated: #f2f0f5;
  --hover: #eae8f0;
  --accent: #d45800;
  --accent-hover: #b84c00;
  --accent-soft: rgba(212, 88, 0, 0.08);
  --secondary: #a06020;
  --sidebar: #eceaf2;
  --text-primary: #14151e;
  --text-secondary: #4a4860;
  --text-muted: #8884a0;
  --text-on-accent: #ffffff;
}
```

---

## Anclora Data Lab (Premium)

Accent: Esmeralda `#2DA078` | Secondary: Esmeralda claro `#7ED4B8`

### Dark

```css
:root {
  --background: #061218;
  --surface: #0b1a22;
  --card: #10242e;
  --elevated: #162e38;
  --hover: #1c3842;
  --accent: #2da078;
  --accent-hover: #38b88c;
  --accent-dim: #248a66;
  --accent-soft: rgba(45, 160, 120, 0.12);
  --accent-glow: rgba(45, 160, 120, 0.1);
  --accent-border: rgba(45, 160, 120, 0.3);
  --secondary: #7ed4b8;
  --secondary-soft: rgba(126, 212, 184, 0.1);
  --secondary-border: rgba(126, 212, 184, 0.18);
  --sidebar: #081820;
  --sidebar-border: rgba(45, 160, 120, 0.1);
  --sidebar-active: rgba(45, 160, 120, 0.14);
  --text-primary: #ebfbff;
  --text-secondary: #b0d8e0;
  --text-muted: #6a9ca8;
  --text-on-accent: #ffffff;
}
```

### Light

```css
[data-theme="light"] {
  --background: #e9f7fb;
  --surface: #ffffff;
  --card: #ffffff;
  --elevated: #e0f2f5;
  --hover: #d5ecf0;
  --accent: #248a66;
  --accent-hover: #1c7858;
  --accent-soft: rgba(36, 138, 102, 0.08);
  --secondary: #3a8a70;
  --sidebar: #dff2f5;
  --text-primary: #09212a;
  --text-secondary: #2a5560;
  --text-muted: #6a9098;
  --text-on-accent: #ffffff;
}
```

---

## Anclora Talent (Premium)

Accent: Azul cielo `#4A9FD8` | Secondary: Azul pálido `#A0D0F0`

### Dark

```css
:root {
  --background: #0c141e;
  --surface: #111c28;
  --card: #162535;
  --elevated: #1c2e40;
  --hover: #22384a;
  --accent: #4a9fd8;
  --accent-hover: #5cb4e8;
  --accent-dim: #3a88be;
  --accent-soft: rgba(74, 159, 216, 0.12);
  --accent-glow: rgba(74, 159, 216, 0.1);
  --accent-border: rgba(74, 159, 216, 0.3);
  --secondary: #a0d0f0;
  --secondary-soft: rgba(160, 208, 240, 0.1);
  --secondary-border: rgba(160, 208, 240, 0.18);
  --sidebar: #0e1825;
  --sidebar-border: rgba(74, 159, 216, 0.1);
  --sidebar-active: rgba(74, 159, 216, 0.14);
  --text-primary: #edf2f8;
  --text-secondary: #b0c4d8;
  --text-muted: #7090a8;
  --text-on-accent: #ffffff;
}
```

### Light

```css
[data-theme="light"] {
  --background: #f2f7fc;
  --surface: #ffffff;
  --card: #ffffff;
  --elevated: #e8f0f8;
  --hover: #dee8f4;
  --accent: #3a88be;
  --accent-hover: #2e78a8;
  --accent-soft: rgba(58, 136, 190, 0.08);
  --secondary: #4878a0;
  --sidebar: #e4edf5;
  --text-primary: #0c1820;
  --text-secondary: #3a5068;
  --text-muted: #7898b0;
  --text-on-accent: #ffffff;
}
```

---

## Anclora Synergi (Premium)

Accent: Púrpura `#8C5AB4` | Secondary: Lavanda `#C4A0E0`

### Dark

```css
:root {
  --background: #0f0717;
  --surface: #160c22;
  --card: #1d0f2e;
  --elevated: #26163c;
  --hover: #2e1e48;
  --accent: #8c5ab4;
  --accent-hover: #a070cc;
  --accent-dim: #7648a0;
  --accent-soft: rgba(140, 90, 180, 0.12);
  --accent-glow: rgba(140, 90, 180, 0.1);
  --accent-border: rgba(140, 90, 180, 0.3);
  --secondary: #c4a0e0;
  --secondary-soft: rgba(196, 160, 224, 0.1);
  --secondary-border: rgba(196, 160, 224, 0.18);
  --sidebar: #120920;
  --sidebar-border: rgba(140, 90, 180, 0.1);
  --sidebar-active: rgba(140, 90, 180, 0.14);
  --text-primary: #f7efff;
  --text-secondary: #d0c0e0;
  --text-muted: #8a78a0;
  --text-on-accent: #ffffff;
}
```

### Light

```css
[data-theme="light"] {
  --background: #f7f2fc;
  --surface: #ffffff;
  --card: #ffffff;
  --elevated: #f0e8f8;
  --hover: #e8def4;
  --accent: #7648a0;
  --accent-hover: #643a90;
  --accent-soft: rgba(118, 72, 160, 0.08);
  --secondary: #6a4890;
  --sidebar: #ede4f5;
  --text-primary: #170923;
  --text-secondary: #4a3560;
  --text-muted: #8a78a0;
  --text-on-accent: #ffffff;
}
```

---

## Anclora Command Center (Premium)

Accent: Violeta premium `#6C63FF` | Secondary: Azul luminoso `#5FA8FF`

### Dark

```css
:root {
  --background: #121021;
  --surface: #171426;
  --card: #1e1a2e;
  --elevated: #29244a;
  --hover: #342d61;
  --accent: #6c63ff;
  --accent-hover: #8a7cff;
  --accent-dim: #4b45c8;
  --accent-soft: rgba(108, 99, 255, 0.14);
  --accent-glow: rgba(95, 168, 255, 0.18);
  --accent-border: rgba(138, 124, 255, 0.34);
  --secondary: #5fa8ff;
  --secondary-soft: rgba(95, 168, 255, 0.14);
  --secondary-border: rgba(95, 168, 255, 0.26);
  --sidebar: #0b0a18;
  --sidebar-border: rgba(138, 124, 255, 0.18);
  --sidebar-active: rgba(108, 99, 255, 0.18);
  --text-primary: #eae8f5;
  --text-secondary: #c7c2ea;
  --text-muted: #8f89c6;
  --text-on-accent: #ffffff;
}
```

### Light

```css
[data-theme="light"] {
  --background: #f4f7ff;
  --surface: #ffffff;
  --card: #f8faff;
  --elevated: #eef2ff;
  --hover: #e7ecff;
  --accent: #6c63ff;
  --accent-hover: #4f47d8;
  --accent-soft: rgba(108, 99, 255, 0.1);
  --secondary: #2f8bef;
  --sidebar: #eef3ff;
  --text-primary: #15142a;
  --text-secondary: #3d3a68;
  --text-muted: #6e6a98;
  --text-on-accent: #ffffff;
}
```

---

## Anclora Private Estates (Ultra Premium)

Accent: Gold `#D4AF37` | Secondary: Teal `#3AA090`

### Dark

```css
:root {
  --background: #07252f;
  --surface: #0b313f;
  --card: #0f3f45;
  --elevated: #124a50;
  --hover: #165a5c;
  --accent: #d4af37;
  --accent-hover: #e6c96e;
  --accent-dim: #b8962e;
  --accent-soft: rgba(212, 175, 55, 0.12);
  --accent-glow: rgba(212, 175, 55, 0.15);
  --accent-border: rgba(212, 175, 55, 0.25);
  --accent-gradient: linear-gradient(
    135deg,
    #bf953f 0%,
    #fcf6ba 45%,
    #b38728 50%,
    #fbf5b7 55%,
    #aa771c 100%
  );
  --secondary: #3aa090;
  --secondary-soft: rgba(58, 160, 144, 0.1);
  --secondary-border: rgba(58, 160, 144, 0.18);
  --sidebar: #07252f;
  --sidebar-border: rgba(212, 175, 55, 0.12);
  --sidebar-active: rgba(212, 175, 55, 0.16);
  --text-primary: #f5f5f0;
  --text-secondary: #c8d0cc;
  --text-muted: #7a8a85;
  --text-on-accent: #07252f;
}
```

### Light

```css
[data-theme="light"] {
  --background: #fbf9f4;
  --surface: #f4f0e8;
  --card: #ffffff;
  --elevated: #ebe5db;
  --hover: #ddd4c7;
  --accent: #c9a95f;
  --accent-hover: #a8843e;
  --accent-dim: #d8bf86;
  --accent-soft: rgba(201, 169, 95, 0.1);
  --accent-border: rgba(201, 169, 95, 0.2);
  --secondary: #003331;
  --secondary-soft: rgba(0, 51, 49, 0.06);
  --sidebar: #f1ece3;
  --sidebar-border: rgba(0, 51, 49, 0.08);
  --text-primary: #13211f;
  --text-secondary: #31423f;
  --text-muted: #64716e;
  --text-on-accent: #ffffff;
}
```

### Deep (secciones inmersivas)

```css
[data-section="deep"] {
  --background: #0d1b1a;
  --surface: #102423;
  --card: #14302f;
  --text-primary: #f7f4ee;
  --text-muted: rgba(247, 244, 238, 0.72);
}
```

---

## Apps añadidas 2026-08 — verificadas contra código fuente real

> Las 6 secciones siguientes documentan apps incorporadas a `anclora-design-system` en 2026-08, tras una sesión de auditoría que verificó cada acento contra el repositorio real de cada app (no contra suposición). El modo **Dark** de cada una está confirmado byte a byte contra las variables CSS declaradas en el código fuente real. El modo **Light** no se verificó en esta sesión — se marca explícitamente como pendiente en vez de inventarse, siguiendo el mismo criterio que el resto de este documento.

## Anclora Fiscal (Interna)

Accent: Dorado `#D7A957` | Fondo: Navy `#070C13`

### Dark

```css
:root {
  --background: #070c13;
  --surface: #0c1624;
  --card: #152437;
  --accent: #d7a957;
  --text-primary: #f5efe3;
  --text-secondary: rgba(245, 239, 227, 0.62);
}
```

Fuente: `app/styles.css` real (`--fiscal-ink`, `--fiscal-midnight`, `--fiscal-panel-raised`, `--fiscal-gold`).

### Light

_No verificado — pendiente de auditoría._

---

## Anclora VisionFlow (Interna)

Accent: Índigo `#5C70D8`

### Dark

```css
:root {
  --background: #0f1520;
  --surface: #192640;
  --card: #1f2e4c;
  --accent: #5c70d8;
  --secondary: #a0aaec;
  --text-primary: #edf1fb;
}
```

Fuente: `src/app/globals.css` real (`.dark { --avf-accent }`, shadcn token mapping).

### Light

_No verificado — pendiente de auditoría. El repo real sí define un modo claro propio (`--avf-accent: #4A5CC0` en `:root`), distinto del dark; queda pendiente confirmarlo como spec oficial._

---

## Anclora FileStudio (Interna)

Accent: Teal `#4FB3BF` _(sin matiz de marca propio confirmado en el repo — ver nota)_

### Dark

```css
:root {
  --background: #0d0f12;
  --surface: #1a1e25;
  --card: #22272f;
  --accent: #4fb3bf;
  --text-primary: #f4f1ea;
}
```

> **Nota:** a diferencia de las demás apps de este documento, el repo real de FileStudio (`globals.css`) usa la paleta gris de shadcn sin ningún matiz de color propio (`oklch` con croma cero). El acento `#4FB3BF` no proviene del código — es una asignación del design system solo para diferenciación de wayfinding entre apps Internal. Confirmar con el cliente si esto debe formalizarse como decisión de marca ("herramienta neutra deliberada") o si FileStudio debería recibir un acento de marca propio en el futuro.

### Light

_No aplica — el repo real no tiene modo claro/oscuro diferenciado, usa un único tema neutro._

---

## Anclora EnergyScan (Premium)

Accent: Verde `#00DC82`

### Dark

```css
:root {
  --background: #0a0a0a;
  --surface: #131313;
  --card: #262626;
  --accent: #00dc82;
  --warning: #ffb020;
  --danger: #ef4444;
  --text-primary: #f0ede8;
}
```

Fuente: `src/app/globals.css` real — `#00DC82` confirmado con 625 apariciones, es la firma visual dominante de toda la app, no un acento tímido.

### Light

_No verificado — pendiente de auditoría._

---

## Anclora SyncXML (Premium)

Accent: Dorado apagado `#BFA46A`

### Dark

```css
:root {
  --background: #070a12;
  --surface: #101827;
  --card: #151f32;
  --accent: #bfa46a;
  --success: #34d399;
  --warning: #fbbf24;
  --danger: #f87171;
  --text-primary: #f8fafc;
  --text-secondary: #d6deea;
  --text-muted: #a8b3c7;
}
```

Fuente: `src/app/globals.css` real (variables nombradas `--accent`, `--bg`, `--surface`).

### Light

```css
[data-theme="light"] {
  --background: #f8fafc;
  --surface: #ffffff;
  --card: #f1f5f9;
  --accent: #94783e;
  --success: #047857;
  --warning: #b45309;
  --danger: #dc2626;
  --text-primary: #0f172a;
  --text-secondary: #334155;
  --text-muted: #475569;
}
```

Fuente: mismo archivo, bloque `[data-theme='light']` real — única de las 6 apps nuevas con ambos modos verificados directamente en código.

---

## Anclora Group Landing (Portfolio — landing corporativa pública)

Accent: Signal Blue `#5FA8FF` | Acción primaria: Command Purple `#6C63FF` | Fondo: Anchor Navy `#0A1F3D`

### Dark (único modo — no hay variante light)

```css
:root {
  --background: #0a1f3d;
  --surface: #111827;
  --card: #12294e;
  --accent: #5fa8ff;
  --action-primary-bg: #6c63ff;
  --text-eyebrow: #c5a059;
  --text-primary: #f8fafc;
  --text-secondary: #cbd5e1;
}
```

Fuente: `src/styles/tokens.css` real, con comentario explícito en el propio código: _"Color (brand book v2.0 — sección 6)"_. Confirmado `body { background: var(--anchor-navy) }` en `globals.css`. **Esta es la app cuyo código real implementa el brand book más fielmente de todo el ecosistema auditado.**
