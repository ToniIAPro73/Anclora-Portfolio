# Documentación Técnica - Anclora Nexus Portfolio

## Tabla de Contenidos

1. [Arquitectura del Proyecto](#arquitectura-del-proyecto)
2. [Guía de Implementación](#guía-de-implementación)
3. [API Reference](#api-reference)
4. [Guías de Desarrollo](#guías-de-desarrollo)
5. [Optimización de Performance](#optimización-de-performance)
6. [Accesibilidad](#accesibilidad)
7. [Internacionalización](#internacionalización)
8. [Testing](#testing)
9. [Despliegue](#despliegue)
10. [Mantenimiento](#mantenimiento)

## Arquitectura del Proyecto

### Estructura de Directorios

```
src/
├── app/                    # App Router de Next.js
│   ├── globals.css        # Estilos globales
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx          # Página principal
│   └── api/              # API Routes
├── components/           # Componentes reutilizables
│   ├── sections/        # Secciones principales
│   └── ui/             # Componentes UI
├── data/               # Datos y configuraciones
├── hooks/              # Custom hooks
├── lib/               # Utilidades y librerías
└── types/             # Tipos TypeScript
```

### Patrones de Arquitectura

#### 1. Arquitectura Modular

- **Componentes Independientes**: Cada componente es autocontenidos y reutilizables
- **Separación de Concerns**: Lógica, estilos y datos separados claramente
- **Sistema de Hooks**: Lógica reutilizable a través de custom hooks

#### 2. Sistema de Estado

- **Context API**: Para estado global (idioma, galería, etc.)
- **Local State**: Para estado local de componentes
- **Server State**: Para datos que provienen del servidor

#### 3. Gestión de Estilos

- **Tailwind CSS**: Sistema de clases utility-first
- **CSS Modules**: Para estilos específicos de componentes
- **CSS-in-JS**: Para estilos dinámicos y condicionales

## Guía de Implementación

### Requisitos del Sistema

- Node.js 18.17.0 o superior
- Bun 1.1.4 o superior
- Git 2.34.1 o superior

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/ToniIAPro73/Anclora-Portfolio.git
cd Anclora-Portfolio

# Instalar dependencias
bun install

# Iniciar el servidor de desarrollo
bun dev
```

### Configuración del Entorno

Crear un archivo `.env.local` en la raíz del proyecto:

```env
# API Configuration
NEXT_PUBLIC_API_URL=http://localhost:3000
NEXT_PUBLIC_CMS_URL=http://localhost:1337

# Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_HOTJAR_ID=XXXXXX

# Performance
NEXT_PUBLIC_PERFORMANCE_MONITORING=true
NEXT_PUBLIC_LAZY_LOADING=true
```

### Desarrollo Local

#### Iniciar el Servidor de Desarrollo

```bash
# Iniciar en modo desarrollo
bun dev

# Iniciar con monitorización de performance
bun dev --performance

# Iniciar con modo estricto de TypeScript
bun dev --strict
```

#### Comandos Disponibles

```bash
# Desarrollo
bun dev              # Iniciar servidor de desarrollo
bun dev:cms          # Iniciar CMS local
bun dev:api          # Iniciar API local

# Construcción
bun build            # Construir para producción
bun build:analyze    # Analizar bundle
bun build:stats      # Generar estadísticas de build

# Testing
bun test             # Ejecutar tests
bun test:coverage    # Generar cobertura
bun test:e2e         # Tests end-to-end

# Linting y Formateo
bun lint             # Linting de código
bun format           # Formatear código
bun typecheck        # Verificar tipos TypeScript
```

## API Reference

### Componentes Principales

#### GallerySection

Componente principal de galería con funcionalidades avanzadas.

```typescript
interface GallerySectionProps {
  initialImages?: GalleryImage[];
  columns?: number;
  enableFilters?: boolean;
  enableSearch?: boolean;
  enableDownload?: boolean;
  enableShare?: boolean;
}

// Uso
<GallerySection
  initialImages={images}
  columns={4}
  enableFilters={true}
  enableSearch={true}
  enableDownload={true}
  enableShare={true}
/>
```

#### ResidenceCard

Tarjeta de residencia con información detallada.

```typescript
interface ResidenceCardProps {
  residence: Residence;
  onResidenceSelect?: (residence: Residence) => void;
  onImageSelect?: (image: GalleryImage) => void;
  showDetails?: boolean;
  showPrice?: boolean;
  showFeatures?: boolean;
}

// Uso
<ResidenceCard
  residence={residence}
  onResidenceSelect={handleSelect}
  onImageSelect={handleImageSelect}
  showDetails={true}
  showPrice={true}
  showFeatures={true}
/>
```

#### ContactForm

Formulario de contacto con validación avanzada.

```typescript
interface ContactFormProps {
  onSubmit?: (data: ContactFormData) => void;
  showNewsletter?: boolean;
  showBudget?: boolean;
  customFields?: CustomField[];
}

// Uso
<ContactForm
  onSubmit={handleSubmit}
  showNewsletter={true}
  showBudget={true}
  customFields={customFields}
/>
```

### Hooks Personalizados

#### useGallery

Hook para gestión de galería con funcionalidades avanzadas.

```typescript
interface UseGalleryOptions {
  initialImages?: GalleryImage[];
  enableFilters?: boolean;
  enableSearch?: boolean;
  enableDownload?: boolean;
  enableShare?: boolean;
}

const {
  images,
  filteredImages,
  filters,
  searchTerm,
  isLoading,
  error,
  setFilters,
  setSearchTerm,
  downloadImage,
  shareImage,
  loadMore,
  hasNextPage,
} = useGallery(options);
```

#### useLanguage

Hook para gestión de internacionalización.

```typescript
const {
  currentLanguage,
  availableLanguages,
  t,
  setLanguage,
  formatDate,
  formatCurrency,
} = useLanguage();
```

#### usePerformance

Hook para monitorización de performance.

```typescript
const {
  performanceMetrics,
  startMeasurement,
  endMeasurement,
  measureAsync,
  getMemoryUsage,
} = usePerformance();
```

## Guías de Desarrollo

### Creación de Componentes

#### Estructura Recomendada

```typescript
// Componente.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface ComponentProps {
  data: DataType;
  className?: string;
  onAction?: (data: DataType) => void;
}

export const Component: React.FC<ComponentProps> = ({
  data,
  className,
  onAction,
  ...props
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const handleClick = () => {
    onAction?.(data);
  };

  return (
    <motion.div
      ref={ref}
      className={`component ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      {...props}
    >
      {/* Contenido del componente */}
    </motion.div>
  );
};
```

#### Estilos con Tailwind CSS

```css
/* component.module.css */
.component {
  @apply bg-white rounded-lg shadow-md p-6;
}

.component:hover {
  @apply shadow-lg transform hover:-translate-y-1 transition-all duration-300;
}

.component--featured {
  @apply border-2 border-gold-500;
}
```

### Gestión de Estado

#### Context API

```typescript
// context.tsx
import React, { createContext, useContext, useReducer } from 'react';

interface State {
  data: DataType[];
  loading: boolean;
  error: string | null;
}

interface Action {
  type: 'SET_DATA' | 'SET_LOADING' | 'SET_ERROR';
  payload?: any;
}

const StateContext = createContext<any>(null);

export const StateProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
```

### Validación de Formularios

#### Con Yup y React Hook Form

```typescript
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  message: yup.string().min(10, 'Message must be at least 10 characters'),
});

export const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('name')} />
      {errors.name && <span>{errors.name.message}</span>}

      <input {...register('email')} />
      {errors.email && <span>{errors.email.message}</span>}

      <textarea {...register('message')} />
      {errors.message && <span>{errors.message.message}</span>}

      <button type="submit">Submit</button>
    </form>
  );
};
```

## Optimización de Performance

### Técnicas Implementadas

#### 1. Lazy Loading

```typescript
// Componentes lazy-loaded
const LazyComponent = React.lazy(() => import('./Component'));

// Imágenes lazy-loaded
<img
  src={image.src}
  loading="lazy"
  alt={image.alt}
/>
```

#### 2. Virtualización

```typescript
// Virtualización de listas largas
const virtualizer = createVirtualizer({
  containerHeight: 400,
  itemHeight: 100,
  totalItems: 1000,
});

const { startIndex, endIndex } = virtualizer.getVisibleRange(scrollTop);
```

#### 3. Memoización

```typescript
// Memoización de cálculos costosos
const expensiveValue = useMemo(() => {
  return calculateExpensiveValue(props.data);
}, [props.data]);

// Memoización de callbacks
const handleClick = useCallback(
  (id: string) => {
    doSomething(id);
  },
  [doSomething],
);
```

#### 4. Debouncing y Throttling

```typescript
// Búsqueda con debouncing
const debouncedSearch = debounce((term: string) => {
  performSearch(term);
}, 300);

// Scroll con throttling
const throttledScroll = throttle((event: Event) => {
  handleScroll(event);
}, 100);
```

### Métricas de Performance

#### Core Web Vitals

- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID (First Input Delay)**: < 100ms
- **CLS (Cumulative Layout Shift)**: < 0.1

#### Métricas de Carga

- **TTFB (Time to First Byte)**: < 600ms
- **FCP (First Contentful Paint)**: < 1.8s
- **TBT (Total Blocking Time)**: < 200ms

### Monitorización

```typescript
// Monitorización de performance
PerformanceMonitor.startMeasurement("page-load");
// ... carga de la página
const duration = PerformanceMonitor.endMeasurement("page-load");
console.log(`Page loaded in ${duration}ms`);
```

## Accesibilidad

### Principios WCAG 2.1 AA

#### 1. Perceptible

- **Texto Alternativo**: Todas las imágenes tienen textos alternativos descriptivos
- **Contraste**: Relación de contraste mínima 4.5:1 para texto normal
- **Tamaño de Texto**: Texto escalable sin pérdida de funcionalidad

#### 2. Operable

- **Navegación por Teclado**: Todos los elementos interactivos son accesibles
- **Tiempo de Respuesta**: No hay tiempos de respuesta que puedan causar problemas
- **Sin Contenido Parpadeante**: No se utiliza contenido que parpadea más de 3 veces por segundo

#### 3. Comprensible

- **Lenguaje Claro**: Uso de lenguaje simple y directo
- **Navegación Consistente**: Estructura de navegación consistente
- **Ayuda y Retroalimentación**: Mensajes de error claros y útiles

#### 4. Robusto

- **Código Válido**: HTML, CSS y JavaScript válido
- **Compatibilidad**: Compatible con lectores de pantalla y tecnologías de asistencia

### Implementación de ARIA

```typescript
// Ejemplos de ARIA labels
<div
  role="button"
  aria-label="Close modal"
  aria-expanded="false"
  tabIndex={0}
  onClick={handleClick}
  onKeyDown={handleKeyDown}
>
  Close
</div>

// Formularios accesibles
<label htmlFor="email">Email Address</label>
<input
  id="email"
  type="email"
  aria-describedby="email-error"
  aria-required="true"
/>
<div id="email-error" role="alert">Please enter a valid email address</div>
```

## Internacionalización

### Sistema de i18n

#### Estructura de Archivos

```
src/data/translations/
├── en.json    # Inglés
├── es.json    # Español
├── fr.json    # Francés
└── de.json    # Alemán
```

#### Uso del Hook useLanguage

```typescript
// Uso básico
const { t, currentLanguage, setLanguage } = useLanguage();

const title = t("gallery.title");
const description = t("gallery.description");

// Cambiar idioma
setLanguage("es");

// Formateo de fechas
const formattedDate = formatDate(new Date(), "long");

// Formateo de moneda
const price = formatCurrency(1000, "EUR");
```

#### Archivos de Traducción

```json
{
  "gallery": {
    "title": "Gallery",
    "description": "Explore our exclusive collection",
    "filters": {
      "all": "All",
      "featured": "Featured",
      "recent": "Recent"
    }
  },
  "contact": {
    "title": "Contact Us",
    "form": {
      "name": "Name",
      "email": "Email",
      "message": "Message"
    }
  }
}
```

### Consideraciones de i18n

#### 1. Texto Dinámico

```typescript
// Texto con variables
const welcomeMessage = t("welcome", { name: user.name });

// Texto plural
const itemsCount = t("items.count", { count: items.length });
```

#### 2. Dirección del Texto

```typescript
// Soporte para idiomas RTL
const isRTL = ["ar", "he", "fa"].includes(currentLanguage);
document.dir = isRTL ? "rtl" : "ltr";
```

#### 3. Formatos Regionales

```typescript
// Formatos de fecha
const dateOptions = {
  year: "numeric",
  month: "long",
  day: "numeric",
};
const formattedDate = new Intl.DateTimeFormat(
  currentLanguage,
  dateOptions,
).format(date);

// Formatos de moneda
const currencyOptions = {
  style: "currency",
  currency: "EUR",
};
const formattedPrice = new Intl.NumberFormat(
  currentLanguage,
  currencyOptions,
).format(price);
```

## Testing

### Tipos de Tests

#### 1. Unit Tests

```typescript
// Test de componentes
import { render, screen } from '@testing-library/react';
import { GallerySection } from './GallerySection';

describe('GallerySection', () => {
  it('should render correctly', () => {
    render(<GallerySection initialImages={[]} />);
    expect(screen.getByText('Gallery')).toBeInTheDocument();
  });
});
```

#### 2. Integration Tests

```typescript
// Test de integración
import { rest } from "msw";
import { setupServer } from "msw/node";

const server = setupServer(
  rest.get("/api/images", (req, res, ctx) => {
    return res(ctx.json(mockImages));
  }),
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
```

#### 3. E2E Tests

```typescript
// Test end-to-end con Playwright
import { test, expect } from "@playwright/test";

test("gallery filters work correctly", async ({ page }) => {
  await page.goto("/");
  await page.click('[data-testid="filter-featured"]');
  await expect(page.locator('[data-testid="gallery-item"]')).toHaveCount(5);
});
```

### Cobertura de Tests

#### Métricas de Cobertura

- **Statement Coverage**: > 80%
- **Branch Coverage**: > 75%
- **Function Coverage**: > 85%
- **Line Coverage**: > 80%

#### Comandos de Testing

```bash
# Ejecutar todos los tests
bun test

# Generar cobertura
bun test:coverage

# Tests en modo watch
bun test --watch

# Tests específicos
bun test GallerySection
```

## Despliegue

### Entornos

#### 1. Desarrollo

```bash
# Variables de entorno
NEXT_PUBLIC_API_URL=http://localhost:3000
NEXT_PUBLIC_CMS_URL=http://localhost:1337
```

#### 2. Staging

```bash
# Variables de entorno
NEXT_PUBLIC_API_URL=https://api-staging.ancloranexus.com
NEXT_PUBLIC_CMS_URL=https://cms-staging.ancloranexus.com
```

#### 3. Producción

```bash
# Variables de entorno
NEXT_PUBLIC_API_URL=https://api.ancloranexus.com
NEXT_PUBLIC_CMS_URL=https://cms.ancloranexus.com
```

### Proceso de Despliegue

#### CI/CD Pipeline

```yaml
# .github/workflows/deploy.yml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: "18"
          cache: "bun"

      - name: Install dependencies
        run: bun install

      - name: Run tests
        run: bun test

      - name: Build project
        run: bun build

      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
```

#### Despliegue Manual

```bash
# Construir para producción
bun build

# Desplegar en Vercel
vercel deploy --prod

# Desplegar en Netlify
netlify deploy --prod
```

### Optimizaciones de Producción

#### 1. Bundle Optimization

```javascript
// next.config.js
module.exports = {
  experimental: {
    optimizeCss: true,
    gzipSize: true,
  },
  webpack: (config) => {
    config.optimization.splitChunks = {
      chunks: "all",
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
      },
    };
    return config;
  },
};
```

#### 2. Imágenes Optimizadas

```typescript
// Uso del componente Image de Next.js
import Image from 'next/image';

<Image
  src="/images/gallery/image.jpg"
  alt="Gallery image"
  width={800}
  height={600}
  placeholder="blur"
  blurDataURL="/images/placeholder.jpg"
  priority={false}
/>
```

## Mantenimiento

### Monitoreo

#### 1. Performance Monitoring

```typescript
// Monitorización de errores
import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  environment: process.env.NODE_ENV,
  tracesSampleRate: 1.0,
});
```

#### 2. Analytics

```typescript
// Google Analytics
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export const usePageTracking = () => {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("config", process.env.NEXT_PUBLIC_GA_ID, {
        page_path: pathname,
      });
    }
  }, [pathname]);
};
```

### Actualizaciones

#### 1. Dependencias

```bash
# Verificar dependencias obsoletas
bun outdated

# Actualizar dependencias
bun update

# Actualizar dependencias de seguridad
bun audit
```

#### 2. TypeScript

```bash
# Verificar tipos
bun typecheck

# Actualizar tipos
bun update @types/node
```

### Backup y Recovery

#### 1. Backup de Datos

```bash
# Backup de base de datos
pg_dump -h localhost -U user database_name > backup.sql

# Backup de archivos estáticos
tar -czf static-backup.tar.gz public/
```

#### 2. Recovery

```bash
# Restaurar base de datos
psql -h localhost -U user database_name < backup.sql

# Restaurar archivos estáticos
tar -xzf static-backup.tar.gz
```

### Documentación del Código

#### 1. Comentarios JSDoc

```typescript
/**
 * Gallery component with advanced filtering and search capabilities
 *
 * @param {GalleryProps} props - Component properties
 * @param {GalleryImage[]} props.initialImages - Initial images to display
 * @param {number} props.columns - Number of columns in grid layout
 * @param {boolean} props.enableFilters - Enable filter functionality
 * @returns {JSX.Element} Gallery component
 */
export const Gallery: React.FC<GalleryProps> = ({
  initialImages,
  columns = 4,
  enableFilters = true,
}) => {
  // Component implementation
};
```

#### 2. Guía de Contribución

```markdown
# Contributing Guidelines

## Code Style

- Use TypeScript for all new code
- Follow ESLint and Prettier configurations
- Use meaningful variable names
- Add JSDoc comments for public APIs

## Git Workflow

- Create feature branches from main
- Use conventional commit messages
- Squash commits before merging
- Update documentation for breaking changes
```

## Conclusión

Esta documentación proporciona una guía completa para el desarrollo, implementación y mantenimiento del proyecto Anclora Nexus Portfolio.

Para cualquier consulta o soporte técnico, por favor contactar al equipo de desarrollo.

---

**Última Actualización**: 2025-01-27
**Versión**: 1.0.0
**Autor**: Equipo de Desarrollo Anclora Nexus
