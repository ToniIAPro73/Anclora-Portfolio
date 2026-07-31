ANCLORA NEXUS
Manual de Usuario Premium
Versión 2.4 | Edición Empresarial
DOCUMENTO CONFIDENCIAL
© 2024 Anclora Technologies S.L.
Todos los derechos reservados.

Este manual está destinado exclusivamente a clientes empresariales con licencia activa de Anclora Nexus. Queda prohibida su reproducción, distribución o modificación sin autorización expresa por escrito.

text

┌────────────────────────────────────────────────────────────────────────────┐
│ │
│ │
│ ██████╗ █████╗ ███╗ ██╗ │
│ ██╔════╝ ██╔══██╗████╗ ██║ │
│ ██║ ███╗███████║██╔██╗ ██║ │
│ ██║ ██║██╔══██║██║╚██╗██║ │
│ ╚██████╔╝██║ ██║██║ ╚████║ │
│ ╚═════╝ ╚═╝ ╚═╝╚═╝ ╚═══╝ │
│ │
│ ███╗ ██╗██╗ ██╗██╗ ██╗ │
│ ████╗ ██║██║ ██║╚██╗██╔╝ │
│ ██╔██╗ ██║██║ ██║ ╚███╔╝ │
│ ██║╚██╗██║██║ ██║ ██╔██╗ │
│ ██║ ╚████║╚██████╔╝██╔╝ ██╗ │
│ ╚═╝ ╚═══╝ ╚═════╝ ╚═╝ ╚═╝ │
│ │
│ ─── CRM INMOBILIARIO INTELIGENTE ─── │
│ │
│ │
│ M A N U A L D E U S U A R I O │
│ │
│ Versión 2.4 | Edición Empresarial │
│ │
│ │
│ │
│ Anclora Technologies S.L. │
│ www.anclora.com | support@anclora.com │
│ │
└────────────────────────────────────────────────────────────────────────────┘
CARTA DE BIENVENIDA
Estimado/a cliente,

Es un honor darle la bienvenida al ecosistema Anclora Nexus.

En un mercado inmobiliario cada vez más competitivo y digitalizado, la diferencia entre el éxito y el estancamiento radica en la capacidad de tomar decisiones informadas, actuar con precisión y construir relaciones duraderas. Anclora Nexus no es simplemente un CRM; es una plataforma de inteligencia operativa diseñada para transformar la manera en que su organización gestiona leads, propiedades y oportunidades de negocio.

Este manual ha sido elaborado por nuestro equipo de producto, diseño y documentación técnica con un único propósito: que usted y su equipo extraigan el máximo valor de cada funcionalidad, desde la configuración inicial hasta las capacidades más avanzadas de inteligencia artificial.

A lo largo de las siguientes páginas, encontrará guías detalladas, flujos operativos paso a paso, casos de uso reales y mejores prácticas derivadas de años de colaboración con las empresas inmobiliarias más innovadoras del sector.

Nuestro compromiso con su éxito es total. Si en algún momento requiere asistencia adicional, formación personalizada o soporte técnico, nuestro equipo está a su disposición.

Le agradecemos la confianza depositada en Anclora Technologies. Estamos convencidos de que juntos alcanzaremos nuevos horizontes de eficiencia y crecimiento.

Atentamente,

El Equipo de Anclora Nexus

ÍNDICE
PRIMERA PARTE: FUNDAMENTOS

1. Introducción al Ecosistema Anclora Nexus .................. 12

1.1 Visión general del sistema
1.2 Propuesta de valor diferencial
1.3 Componentes principales

2. Arquitectura Funcional ...................................... 18

2.1 Visión general de la arquitectura
2.2 Módulos del sistema
2.3 Flujo de datos

3. Configuración Inicial ........................................ 26

3.1 Primeros pasos
3.2 Configuración de cuenta
3.3 Personalización del entorno

SEGUNDA PARTE: GESTIÓN DE USUARIOS 4. Gestión de Usuarios y Equipos ............................. 34

4.1 Estructura organizativa
4.2 Creación y edición de usuarios
4.3 Gestión de equipos
4.4 Configuración de permisos

5. Seguridad y Roles ............................................. 44

5.1 Sistema de roles jerárquico
5.2 Permisos granulares
5.3 Auditoría y compliance

TERCERA PARTE: GESTIÓN COMERCIAL 6. Gestión de Leads .............................................. 54

6.1 Panel de Leads
6.2 Captura y cualificación
6.3 Scoring automático
6.4 Distribución inteligente
6.5 Seguimiento y nurturing

7. Gestión de Propiedades ..................................... 72

7.1 Catálogo inmobiliario
7.2 Publicación multicanal
7.3 Sincronización de portales
7.4 Gestión de visitas

CUARTA PARTE: INTELIGENCIA Y PROSPECCIÓN 8. Motor de Inteligencia Artificial .......................... 90

8.1 Capacidades del motor IA
8.2 Predicción de conversión
8.3 Recomendaciones inteligentes
8.4 Análisis de sentimiento
8.5 Automatizaciones predictivas

9. Prospección Avanzada ...................................... 106

9.1 Panel de prospección
9.2 Búsqueda inteligente
9.3 Generación de oportunidades
9.4 Integración con fuentes externas

10. Feed Orchestrator ........................................... 120

10.1 Arquitectura del orquestador
10.2 Configuración de feeds
10.3 Normalización de datos
10.4 Monitoreo y alertas

QUINTA PARTE: CALIDAD Y GOBERNANZA 11. Data Quality & Entity Resolution ...................... 134

11.1 Sistema de calidad de datos
11.2 Resolución de entidades
11.3 Deduplicación inteligente
11.4 Enriquecimiento automático

12. Gobernanza de Costes ..................................... 148

12.1 Panel de costes
12.2 Optimización de recursos
12.3 Alertas y presupuestos
12.4 Informes de eficiencia

13. Sistema Multitenant ....................................... 160

13.1 Arquitectura multiempresa
13.2 Aislamiento de datos
13.3 Configuración por tenant

SEXTA PARTE: OPERACIONES 14. Flujos Operativos Completos ............................ 172

14.1 Flujo de captación de lead
14.2 Flujo de venta de propiedad
14.3 Flujo de prospección proactiva
14.4 Flujo de reporting ejecutivo

15. Casos de Uso Reales ...................................... 190

15.1 Caso: Inmobiliaria regional
15.2 Caso: Red de franquicias
15.3 Caso: Promotora de obra nueva

SÉPTIMA PARTE: ANEXOS 16. Mejores Prácticas .......................................... 206 17. Preguntas Frecuentes (FAQ) ............................ 216 18. Glosario de Términos ..................................... 226 19. Soporte y Contacto ........................................ 234

PRIMERA PARTE
FUNDAMENTOS
text

╔══════════════════════════════════════════════════════════════════════════════╗
║ ║
║ FUNDAMENTOS ║
║ ║
║ "La excelencia comienza con el ║
║ conocimiento de las bases" ║
║ ║
╚══════════════════════════════════════════════════════════════════════════════╝

1. INTRODUCCIÓN AL ECOSISTEMA ANCLORA NEXUS
   1.1 Visión General del Sistema
   Anclora Nexus es una plataforma de gestión de relaciones con clientes (CRM) específicamente diseñada para el sector inmobiliario, que integra capacidades avanzadas de inteligencia artificial para automatizar, optimizar y predecir resultados comerciales.

A diferencia de los CRM tradicionales que funcionan como meros repositorios de información, Anclora Nexus actúa como un sistema operativo comercial inteligente que no solo almacena datos, sino que los analiza, los enriquece y los transforma en acciones concretas que generan valor medible.

text

┌─────────────────────────────────────────────────────────────────────────┐
│ │
│ ARQUITECTURA CONCEPTUAL ANCLORA NEXUS │
│ │
│ ┌─────────────────────────────────────────────────────────────────┐ │
│ │ │ │
│ │ CAPA DE EXPERIENCIA │ │
│ │ ┌───────────┐ ┌───────────┐ ┌───────────┐ ┌───────────┐ │ │
│ │ │ Dashboard │ │ Panel │ │ Panel │ │ Consola │ │ │
│ │ │ Principal │ │ Leads │ │Propiedades│ │ IA │ │ │
│ │ └───────────┘ └───────────┘ └───────────┘ └───────────┘ │ │
│ │ │ │
│ └─────────────────────────────────────────────────────────────────┘ │
│ │ │
│ ▼ │
│ ┌─────────────────────────────────────────────────────────────────┐ │
│ │ │ │
│ │ CAPA DE APLICACIÓN │ │
│ │ ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐ │ │
│ │ │ Gestión │ │ Gestión │ │Prospec- │ │ Feed │ │ Data │ │ │
│ │ │ Leads │ │Propieda.│ │ ción │ │Orchest. │ │ Quality │ │ │
│ │ └─────────┘ └─────────┘ └─────────┘ └─────────┘ └─────────┘ │ │
│ │ │ │
│ └─────────────────────────────────────────────────────────────────┘ │
│ │ │
│ ▼ │
│ ┌─────────────────────────────────────────────────────────────────┐ │
│ │ │ │
│ │ CAPA DE INTELIGENCIA │ │
│ │ ┌───────────────┐ ┌───────────────┐ ┌───────────────┐ │ │
│ │ │ Motor de IA │ │ Entity Resol. │ │ Predicción │ │ │
│ │ │ │ │ │ │ Conversional │ │ │
│ │ └───────────────┘ └───────────────┘ └───────────────┘ │ │
│ │ │ │
│ └─────────────────────────────────────────────────────────────────┘ │
│ │ │
│ ▼ │
│ ┌─────────────────────────────────────────────────────────────────┐ │
│ │ │ │
│ │ CAPA DE DATOS │ │
│ │ ┌───────────────────────────────────────────────────────┐ │ │
│ │ │ Supabase PostgreSQL │ │ │
│ │ │ (Base de datos relacional multi-tenant) │ │ │
│ │ └───────────────────────────────────────────────────────┘ │ │
│ │ │ │
│ └─────────────────────────────────────────────────────────────────┘ │
│ │
└─────────────────────────────────────────────────────────────────────────┘
1.2 Propuesta de Valor Diferencial
Anclora Nexus se distingue de otras soluciones del mercado mediante un conjunto de capacidades únicas que responden a las necesidades específicas del sector inmobiliario:

Inteligencia Predictiva Nativa
El motor de inteligencia artificial de Anclora Nexus no es un añadido posterior, sino un componente central de la arquitectura. Esto permite:

Predicción de conversión: Análisis probabilístico del cierre de operaciones
Scoring automático: Valoración inteligente de leads basada en múltiples variables
Recomendaciones contextuales: Sugerencias de acción personalizadas para cada situación
Gestión Unificada del Ciclo Inmobiliario
Una única plataforma que cubre todo el journey:

text

CAPTACIÓN → CUALIFICACIÓN → VISITA → NEGOCIACIÓN → CIERRE → POST-VENTA
│ │ │ │ │ │
└────────────┴───────────┴───────────┴──────────┴──────────┘
ANCLORA NEXUS
Calidad de Datos Garantizada
El módulo de Data Quality y Entity Resolution asegura que la base de datos permanezca limpia, actualizada y libre de duplicados, un problema crítico en el sector que puede llegar a afectar hasta el 30% de los registros en CRM tradicionales.

Arquitectura Multitenant Empresarial
Diseñado para grupos inmobiliarios, redes de franquicias y organizaciones con múltiples oficinas, permitiendo:

Aislamiento total de datos por tenant
Configuración independiente por unidad de negocio
Visibilidad consolidada a nivel corporativo
Gobernanza de Costes Integrada
Visibilidad total sobre el consumo de recursos computacionales y de API, con alertas automáticas y optimización continua.

1.3 Componentes Principales
El ecosistema Anclora Nexus está compuesto por los siguientes módulos interconectados:

Módulo
Descripción
Usuarios Objetivo
Dashboard Principal Vista consolidada de KPIs, métricas y alertas Todos los roles
Gestión de Leads Captación, cualificación, scoring y seguimiento Agentes, Equipos
Gestión de Propiedades Catálogo, publicación multicanal, gestión de visitas Agentes, Marketing
Motor de IA Predicciones, recomendaciones, automatizaciones Todos los roles
Prospección Avanzada Búsqueda proactiva, generación de oportunidades Agentes senior, Equipos
Feed Orchestrator Sincronización con portales y fuentes externas Admin, Marketing
Data Quality Limpieza, deduplicación, enriquecimiento Admin, Data Managers
Cost Governance Control y optimización de recursos Admin, Finanzas
Gestión de Usuarios Creación, roles, permisos, equipos Administradores
Reporting Informes personalizados, exportaciones Gestores, Dirección

2. ARQUITECTURA FUNCIONAL
   2.1 Visión General de la Arquitectura
   Anclora Nexus implementa una arquitectura moderna basada en microservicios, diseñada para escalabilidad, mantenibilidad y alto rendimiento.

text

┌─────────────────────────────────────────────────────────────────────────────────┐
│ │
│ ARQUITECTURA TÉCNICA ANCLORA NEXUS │
│ │
│ ┌───────────────────────────────────────────────────────────────────────────┐ │
│ │ │ │
│ │ FRONTEND LAYER │ │
│ │ ┌─────────────────────────────────────────────────────────────────┐ │ │
│ │ │ React + TypeScript │ │ │
│ │ │ (Single Page Application) │ │ │
│ │ └─────────────────────────────────────────────────────────────────┘ │ │
│ │ │ │
│ └───────────────────────────────────────────────────────────────────────────┘ │
│ │ │
│ │ HTTPS/REST │
│ ▼ │
│ ┌───────────────────────────────────────────────────────────────────────────┐ │
│ │ │ │
│ │ API GATEWAY │ │
│ │ ┌─────────────────────────────────────────────────────────────────┐ │ │
│ │ │ Autenticación • Rate Limiting • Routing │ │ │
│ │ └─────────────────────────────────────────────────────────────────┘ │ │
│ │ │ │
│ └───────────────────────────────────────────────────────────────────────────┘ │
│ │ │
│ ┌─────────────────────────────┼─────────────────────────────┐ │
│ ▼ ▼ ▼ │
│ ┌───────────────┐ ┌───────────────┐ ┌───────────────┐ │
│ │ │ │ │ │ │ │
│ │ BACKEND │ │ INTELLIGENCE │ │ SUPABASE │ │
│ │ SERVICES │ │ ENGINE │ │ SERVICES │ │
│ │ │ │ │ │ │ │
│ │ ┌───────────┐ │ │ ┌───────────┐ │ │ ┌───────────┐ │ │
│ │ │ Lead Svc │ │ │ │ ML Models │ │ │ │ Auth │ │ │
│ │ ├───────────┤ │ │ ├───────────┤ │ │ ├───────────┤ │ │
│ │ │ Prop Svc │ │◄──────────►│ │NLP Engine │ │◄──────────►│ │ Storage │ │ │
│ │ ├───────────┤ │ │ ├───────────┤ │ │ ├───────────┤ │ │
│ │ │ User Svc │ │ │ │ Scoring │ │ │ │ DB │ │ │
│ │ ├───────────┤ │ │ ├───────────┤ │ │ ├───────────┤ │ │
│ │ │ Feed Svc │ │ │ │Predictor │ │ │ │ Edge Fn │ │ │
│ │ └───────────┘ │ │ └───────────┘ │ │ └───────────┘ │ │
│ │ │ │ │ │ │ │
│ └───────────────┘ └───────────────┘ └───────────────┘ │
│ │
└─────────────────────────────────────────────────────────────────────────────────┘
2.2 Módulos del Sistema
A continuación se presenta el detalle de cada módulo funcional:

Frontend Application
Aplicación web responsive construida con React y TypeScript, que proporciona:

Interfaz de usuario moderna y accesible
Navegación fluida tipo SPA (Single Page Application)
Tema oscuro elegante optimizado para uso profesional intensivo
Soporte para dispositivos móviles y tablets
Backend Services
Conjunto de microservicios que implementan la lógica de negocio:

Servicio
Responsabilidades
Lead Service Gestión completa del ciclo de vida de leads
Property Service Administración del catálogo inmobiliario
User Service Autenticación, autorización, gestión de perfiles
Feed Service Orquestación de integraciones externas
Analytics Service Procesamiento de métricas y generación de informes

Intelligence Engine
Motor de inteligencia artificial que potencia las capacidades predictivas:

text

┌─────────────────────────────────────────────────────────────────┐
│ INTELLIGENCE ENGINE │
│ │
│ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐ │
│ │ NLP Engine │ │ ML Pipeline │ │ Predictor │ │
│ │ │ │ │ │ │ │
│ │ Análisis de │ │ Entrenamien.│ │ Scoring de │ │
│ │ texto y │ │ de modelos │ │ conversión │ │
│ │ sentimiento │ │ IA/ML │ │ predictivo │ │
│ └─────────────┘ └─────────────┘ └─────────────┘ │
│ │
│ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐ │
│ │Recommender │ │ Entity Res. │ │ Automation │ │
│ │ System │ │ Engine │ │ Engine │ │
│ │ │ │ │ │ │ │
│ │Sugerencias │ │ Deduplicac. │ │ Workflows │ │
│ │contextuales│ │ y merge │ │ automáticos│ │
│ └─────────────┘ └─────────────┘ └─────────────┘ │
│ │
└─────────────────────────────────────────────────────────────────┘
Supabase Infrastructure
Plataforma de backend-as-a-service que proporciona:

Base de datos PostgreSQL con extensiones avanzadas
Autenticación y gestión de usuarios
Storage para archivos y documentos
Edge Functions para lógica serverless
Real-time subscriptions para actualizaciones en vivo
2.3 Flujo de Datos
El siguiente diagrama ilustra el flujo principal de datos a través del sistema:

text

┌───────────────────────────────────────────────────────────────────────────────┐
│ │
│ FLUJO DE DATOS ANCLORA NEXUS │
│ │
│ ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐ │
│ │ FUENTES │ │ CAPTURA │ │PROCESAM.│ │ALMACEN. │ │ SALIDA │ │
│ │EXTERNAS │ │ │ │ │ │ │ │ │ │
│ └────┬────┘ └────┬────┘ └────┬────┘ └────┬────┘ └────┬────┘ │
│ │ │ │ │ │ │
│ ▼ ▼ ▼ ▼ ▼ │
│ ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐ │
│ │ Portales│────►│ Feed │────►│ Data │────►│ Database│────►│Dashboard│ │
│ │ │ │Orchestr.│ │ Quality │ │ │ │ │ │
│ ├─────────┤ ├─────────┤ ├─────────┤ ├─────────┤ ├─────────┤ │
│ │Webhooks │────►│ API │────►│ Entity │────►│ Storage │────►│Reports │ │
│ │ │ │ Gateway │ │ Resolut.│ │ │ │ │ │
│ ├─────────┤ ├─────────┤ ├─────────┤ ├─────────┤ ├─────────┤ │
│ │Forms │────►│ Lead │────►│ Scoring │────►│Search │────►│Exports │ │
│ │ │ │ Capture │ │ Engine │ │ Index │ │ │ │
│ └─────────┘ └─────────┘ └─────────┘ └─────────┘ └─────────┘ │
│ │ │
│ ▼ │
│ ┌─────────┐ │
│ │Intellig.│ │
│ │ Engine │ │
│ └─────────┘ │
│ │
└───────────────────────────────────────────────────────────────────────────────┘
Descripción del flujo:

Captación: Los datos ingresan desde múltiples fuentes (portales, webhooks, formularios, importaciones manuales)
Procesamiento: El Feed Orchestrator normaliza y enruta los datos hacia los módulos correspondientes
Calidad: El sistema de Data Quality aplica reglas de validación, limpieza y deduplicación
Inteligencia: El motor IA enriquece los datos con scores, predicciones y recomendaciones
Almacenamiento: Los datos limpios y enriquecidos se persisten en la base de datos multi-tenant
Salida: La información se presenta en dashboards, informes y exportaciones 3. CONFIGURACIÓN INICIAL
3.1 Primeros Pasos
Al recibir acceso a Anclora Nexus, siga los siguientes pasos para configurar su entorno:

Paso 1: Acceso al Sistema
text

┌─────────────────────────────────────────────────────────────────────────────┐
│ │
│ INICIO DE SESIÓN │
│ │
│ ┌─────────────────────────────────────────────────────────────────────┐ │
│ │ │ │
│ │ ┌───────────────────────────────────────────────────────────┐ │ │
│ │ │ ANCLORA NEXUS │ │ │
│ │ │ │ │ │
│ │ │ ┌───────────────────────────────────────────────────┐ │ │ │
│ │ │ │ Correo electrónico │ │ │ │
│ │ │ └───────────────────────────────────────────────────┘ │ │ │
│ │ │ │ │ │
│ │ │ ┌───────────────────────────────────────────────────┐ │ │ │
│ │ │ │ Contraseña │ │ │ │
│ │ │ └───────────────────────────────────────────────────┘ │ │ │
│ │ │ │ │ │
│ │ │ ┌───────────────────────────────────────────────────┐ │ │ │
│ │ │ │ INICIAR SESIÓN │ │ │ │
│ │ │ └───────────────────────────────────────────────────┘ │ │ │
│ │ │ │ │ │
│ │ │ ¿Olvidó su contraseña? │ │ │
│ │ │ │ │ │
│ │ └───────────────────────────────────────────────────────────┘ │ │
│ │ │ │
│ └─────────────────────────────────────────────────────────────────────┘ │
│ │
└─────────────────────────────────────────────────────────────────────────────┘
Acceda a la URL proporcionada por su administrador (ejemplo: https://empresa.anclora.app)
Introduzca su correo electrónico corporativo
Introduzca su contraseña temporal
El sistema le solicitará cambiar la contraseña en el primer acceso
Paso 2: Configuración del Perfil
Tras el primer inicio de sesión, complete su perfil:

Nombre completo: Su nombre profesional
Teléfono: Número de contacto principal
Foto de perfil: Imagen profesional (opcional, recomendada)
Firma digital: Plantilla para comunicaciones (opcional)
Zona horaria: Para correcta visualización de fechas
Idioma preferido: Español, Catalán, Inglés o Portugués
Paso 3: Verificación de Organización
Si es el primer usuario de su organización, se le asignará el rol de Administrador Principal. Si su organización ya existe en el sistema, recibirá una invitación con el rol asignado por su administrador.

3.2 Configuración de Cuenta
Panel de Configuración
text

┌─────────────────────────────────────────────────────────────────────────────┐
│ ⚙ Configuración │
├─────────────────────────────────────────────────────────────────────────────┤
│ │
│ ┌─────────────────────────────────────────────────────────────────────┐ │
│ │ │ │
│ │ CUENTA │ GENERAL │ AVANZADO │ │
│ │ ──────── │ ──────── │ ───────── │ │
│ │ │ │ │ │
│ │ • Perfil │ • Idioma │ • API Keys │ │
│ │ • Seguridad │ • Notificaciones │ • Webhooks │ │
│ │ • Preferencias │ • Tema │ • Integrac. │ │
│ │ │ │ │ │
│ │ │ │ │ │
│ └─────────────────────────────────────────────────────────────────────┘ │
│ │
└─────────────────────────────────────────────────────────────────────────────┘
Opciones de Configuración por Rol
Opción
Agente
Líder de Equipo
Administrador
Editar propio perfil ✓ ✓ ✓
Cambiar contraseña ✓ ✓ ✓
Configurar notificaciones ✓ ✓ ✓
Ver API Keys ✗ ✗ ✓
Configurar webhooks ✗ ✗ ✓
Gestionar usuarios ✗ ✓ ✓
Configurar organización ✗ ✗ ✓

3.3 Personalización del Entorno
Temas Visuales
Anclora Nexus ofrece dos temas principales:

Modo Oscuro (Recomendado): Diseño elegante con fondo oscuro, ideal para uso prolongado
Modo Claro: Diseño con fondos claros para ambientes con mucha luz
text

┌─────────────────────────────────────────────────────────────────────────────┐
│ │
│ MODO OSCURO (PREDETERMINADO) MODO CLARO │
│ ───────────────────────────── ──────────── │
│ │
│ ┌─────────────────────┐ ┌─────────────────────┐ │
│ │█████████████████████│ │░░░░░░░░░░░░░░░░░░░░░│ │
│ │░░░░░░░░░░░░░░░░░░░░░│ │█████████████████████│ │
│ │░░░░░░░░░░░░░░░░░░░░░│ │█████████████████████│ │
│ │█████████████████████│ │░░░░░░░░░░░░░░░░░░░░░│ │
│ └─────────────────────┘ └─────────────────────┘ │
│ │
│ Reduce fatiga visual Ideal para presentaciones │
│ Aspecto premium Mayor contraste en exteriores │
│ │
└─────────────────────────────────────────────────────────────────────────────┘
Configuración de Notificaciones
Configure qué notificaciones desea recibir y a través de qué canales:

Tipo de Notificación
Email
Push
In-App
Nuevo lead asignado ✓ ✓ ✓
Lead sin seguimiento ✓ ✗ ✓
Visita programada ✓ ✓ ✓
Alerta de scoring ✗ ✗ ✓
Informe semanal ✓ ✗ ✗
Mención en nota ✓ ✗ ✓

text

╔══════════════════════════════════════════════════════════════════════════════╗
║ ║
║ FIN DE LA PRIMERA PARTE ║
║ ║
║ Continúa en: GESTIÓN DE USUARIOS ║
║ ║
╚══════════════════════════════════════════════════════════════════════════════╝
SEGUNDA PARTE
GESTIÓN DE USUARIOS
text

╔══════════════════════════════════════════════════════════════════════════════╗
║ ║
║ GESTIÓN DE USUARIOS ║
║ ║
║ "El capital humano es el activo más valioso ║
║ de cualquier organización inmobiliaria" ║
║ ║
╚══════════════════════════════════════════════════════════════════════════════╝ 4. GESTIÓN DE USUARIOS Y EQUIPOS
4.1 Estructura Organizativa
Anclora Nexus implementa una estructura organizativa jerárquica que refleja la realidad de las empresas inmobiliarias:

text

┌─────────────────────────────────────────────────────────────────────────────┐
│ │
│ ESTRUCTURA ORGANIZATIVA │
│ │
│ ┌─────────────────┐ │
│ │ ORGANIZACIÓN │ │
│ │ (Tenant) │ │
│ └────────┬────────┘ │
│ │ │
│ ┌───────────────────┼───────────────────┐ │
│ │ │ │ │
│ ▼ ▼ ▼ │
│ ┌────────────────┐ ┌────────────────┐ ┌────────────────┐ │
│ │ EQUIPO A │ │ EQUIPO B │ │ EQUIPO C │ │
│ │ (Oficina 1) │ │ (Oficina 2) │ │ (Online) │ │
│ └───────┬────────┘ └───────┬────────┘ └───────┬────────┘ │
│ │ │ │ │
│ ┌───────┴───────┐ ┌───────┴───────┐ ┌───────┴───────┐ │
│ │ │ │ │ │ │ │
│ ▼ ▼ ▼ ▼ ▼ ▼ │
│ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐ │
│ │Líder │ │Agent.│ │Líder │ │Agent.│ │Líder │ │Agent.│ │
│ │Equipo│ │ 1 │ │Equipo│ │ 1 │ │Equipo│ │ 1 │ │
│ └──────┘ └──────┘ └──────┘ └──────┘ └──────┘ └──────┘ │
│ │
└─────────────────────────────────────────────────────────────────────────────┘
Niveles de la Estructura
Nivel
Descripción
Ejemplo
Organización (Tenant) Entidad empresarial principal Inmobiliaria Pérez S.L.
Equipo Unidad operativa, típicamente una oficina Oficina Centro
Usuario Individuo con acceso al sistema María García

4.2 Creación y Edición de Usuarios
Acceso al Panel de Usuarios
text

┌─────────────────────────────────────────────────────────────────────────────┐
│ ANCLORA NEXUS │ ⚙ │ ▼ │
├─────────────────────────────────────────────────────────────────────────────┤
│ │
│ ┌────────────────┐ ┌─────────────────────────────────────────────────┐ │
│ │ │ │ USUARIOS │ │
│ │ □ Dashboard │ │ ───────────────────────────────────────────── │ │
│ │ │ │ │ │
│ │ □ Leads │ │ ┌─────────────────────────────────────────┐ │ │
│ │ │ │ │ 🔍 Buscar usuario... [+ Nuevo] │ │ │
│ │ □ Propiedades │ │ └─────────────────────────────────────────┘ │ │
│ │ │ │ │ │
│ │ □ Prospección │ │ ┌───────────────────────────────────────────┐ │ │
│ │ │ │ │ │ │ │
│ │ □ Inteligencia│ │ │ ● María García mgarcia@... Activo │ │ │
│ │ │ │ │ Administrador [✎] [🗑] │ │ │
│ │ □ Reporting │ │ ├───────────────────────────────────────────┤ │ │
│ │ │ │ │ │ │ │
│ │ ───────────── │ │ │ ● Carlos López clopez@... Activo │ │ │
│ │ │ │ │ Líder de Equipo [✎] [🗑] │ │ │
│ │ █ Usuarios │ │ ├───────────────────────────────────────────┤ │ │
│ │ │ │ │ │ │ │
│ │ □ Equipos │ │ │ ● Ana Martínez amartinez@... Activo │ │ │
│ │ │ │ │ Agente [✎] [🗑] │ │ │
│ │ □ Roles │ │ │ │ │ │
│ │ │ │ └───────────────────────────────────────────┘ │ │
│ │ ───────────── │ │ │ │
│ │ │ │ │ │
│ │ □ Configurac. │ │ │ │
│ │ │ │ │ │
│ │ □ Integrac. │ │ │ │
│ │ │ │ │ │
│ └────────────────┘ └─────────────────────────────────────────────────┘ │
│ │
└─────────────────────────────────────────────────────────────────────────────┘
Crear Nuevo Usuario
Acceda a Configuración → Usuarios
Haga clic en [+ Nuevo Usuario]
Complete el formulario:
Campo
Descripción
Obligatorio
Nombre Nombre completo del usuario ✓
Email Correo electrónico corporativo ✓
Teléfono Número de contacto ✗
Rol Rol principal en el sistema ✓
Equipo Equipo al que pertenece ✓
Zona Zona geográfica asignada ✗

Haga clic en Guardar y Enviar Invitación
El usuario recibirá un email con instrucciones para completar su registro.

4.3 Gestión de Equipos
Panel de Equipos
text

┌─────────────────────────────────────────────────────────────────────────────┐
│ │
│ EQUIPOS [+ New] │
│ ───────────────────────────────────────────────────────────────────────── │
│ │
│ ┌─────────────────────────────────────────────────────────────────────┐ │
│ │ │ │
│ │ ┌─────────────────────────────────────────────────────────────┐ │ │
│ │ │ OFICINA CENTRO Activo │ │ │
│ │ │ ──────────────────────────────────────────────────────── │ │ │
│ │ │ │ │ │
│ │ │ Líder: Carlos López │ │ │
│ │ │ Agentes: 8 │ │ │
│ │ │ Leads activos: 234 │ │ │
│ │ │ Propiedades: 56 │ │ │
│ │ │ │ │ │
│ │ │ Miembros: │ │ │
│ │ │ ● Carlos López (Líder) ● Ana Martínez ● Pedro Ruiz │ │ │
│ │ │ ● Laura Sánchez ● Miguel Torres ● Elena Vargas │ │ │
│ │ │ ● Jorge Herrera ● Lucía Mendoza │ │ │
│ │ │ │ │ │
│ │ │ [Ver detalle] [Editar] │ │ │
│ │ └─────────────────────────────────────────────────────────────┘ │ │
│ │ │ │
│ └─────────────────────────────────────────────────────────────────────┘ │
│ │
└─────────────────────────────────────────────────────────────────────────────┘
Crear Nuevo Equipo
Acceda a Configuración → Equipos
Haga clic en [+ Nuevo Equipo]
Complete la información:
Nombre del equipo: Identificador único
Descripción: Breve descripción del equipo
Líder de equipo: Usuario responsable
Zona geográfica: Área de operación
Configuración de distribución: Cómo se asignan leads
4.4 Configuración de Permisos
Matriz de Permisos
Anclora Nexus utiliza un sistema de permisos granulares que permite configurar exactamente qué puede hacer cada usuario:

text

┌─────────────────────────────────────────────────────────────────────────────┐
│ │
│ MATRIZ DE PERMISOS │
│ │
│ ┌───────────────────────────────────────────────────────────────────────┐ │
│ │ │ │
│ │ Recurso │ Ver │ Crear │ Editar │ Eliminar │ Exportar │ │
│ │ ──────────────────────────────────────────────────────────────────── │ │
│ │ Leads propios │ ✓ │ ✓ │ ✓ │ ✓ │ ✓ │ │
│ │ Leads del equipo │ ✓ │ ✓ │ ✓ │ ✗ │ ✓ │ │
│ │ Leads de otros │ ✗ │ ✗ │ ✗ │ ✗ │ ✗ │ │
│ │ Propiedades propias │ ✓ │ ✓ │ ✓ │ ✓ │ ✓ │ │
│ │ Propiedades equipo │ ✓ │ ✗ │ ✓ │ ✗ │ ✓ │ │
│ │ Reportes │ ✓ │ ✓ │ ✗ │ ✗ │ ✓ │ │
│ │ Configuración │ ✗ │ ✗ │ ✗ │ ✗ │ ✗ │ │
│ │ │ │
│ └───────────────────────────────────────────────────────────────────────┘ │
│ │
│ Ejemplo: Permisos de Agente estándar │
│ │
└─────────────────────────────────────────────────────────────────────────────┘ 5. SEGURIDAD Y ROLES
5.1 Sistema de Roles Jerárquico
Anclora Nexus implementa un sistema de roles jerárquico que define el nivel de acceso y las capacidades de cada usuario:

text

┌─────────────────────────────────────────────────────────────────────────────┐
│ │
│ JERARQUÍA DE ROLES │
│ │
│ │
│ ┌─────────────────────┐ │
│ │ SUPER ADMIN │ │
│ │ (Plataforma) │ │
│ │ Acceso total │ │
│ │ Multi-tenant │ │
│ └──────────┬──────────┘ │
│ │ │
│ ┌──────────▼──────────┐ │
│ │ ADMINISTRADOR │ │
│ │ (Organización) │ │
│ │ Gestión completa │ │
│ │ de tenant │ │
│ └──────────┬──────────┘ │
│ │ │
│ ┌─────────────────────┼─────────────────────┐ │
│ │ │ │ │
│ ┌──────────▼──────────┐ ┌───────▼───────┐ ┌──────────▼──────────┐ │
│ │ GESTOR COMERCIAL │ │ LÍDER EQUIPO │ │ MARKETING MANAGER │ │
│ │ Visibilidad total │ │ Gestión de │ │ Campañas y │ │
│ │ sin config. │ │ su equipo │ │ automatizaciones │ │
│ └──────────┬──────────┘ └───────┬───────┘ └──────────┬──────────┘ │
│ │ │ │ │
│ └─────────────────────┼─────────────────────┘ │
│ │ │
│ ┌──────────▼──────────┐ │
│ │ AGENTE │ │
│ │ (Usuario base) │ │
│ │ Operación diaria │ │
│ │ Leads propios │ │
│ └─────────────────────┘ │
│ │
└─────────────────────────────────────────────────────────────────────────────┘
5.2 Permisos Granulares por Rol
Tabla de Capacidades por Rol
Capacidad
Agente
Líder
Gestor
Admin
Ver leads propios ✓ ✓ ✓ ✓
Ver leads del equipo ✗ ✓ ✓ ✓
Ver todos los leads ✗ ✗ ✓ ✓
Crear leads ✓ ✓ ✓ ✓
Editar cualquier lead ✗ ✗ ✓ ✓
Eliminar leads ✗ ✗ ✗ ✓
Ver propiedades ✓ ✓ ✓ ✓
Publicar propiedades ✓ ✓ ✓ ✓
Gestionar usuarios ✗ ✗ ✗ ✓
Configurar integraciones ✗ ✗ ✗ ✓
Ver reportes ejecutivos ✗ ✓ ✓ ✓
Ver costes del sistema ✗ ✗ ✗ ✓
Exportar datos Limitado Equipo Total Total

5.3 Auditoría y Compliance
Anclora Nexus mantiene un registro exhaustivo de todas las acciones realizadas en el sistema, esencial para:

Compliance regulatorio: RGPD, LOPD-GDD
Auditoría interna: Revisión de procesos
Detección de anomalías: Identificación de comportamientos sospechosos
Responsabilidad: Trazabilidad de acciones
Panel de Auditoría
text

┌─────────────────────────────────────────────────────────────────────────────┐
│ │
│ REGISTRO DE ACTIVIDAD │
│ ───────────────────────────────────────────────────────────────────────── │
│ │
│ Filtros: [Fecha ▼] [Usuario ▼] [Acción ▼] [Módulo ▼] [Aplicar] │
│ │
│ ┌─────────────────────────────────────────────────────────────────────┐ │
│ │ │ │
│ │ 15/01/2024 14:32:15 │ │
│ │ ┌─────────────────────────────────────────────────────────────┐ │ │
│ │ │ Carlos López creó un nuevo lead │ │ │
│ │ │ Lead: Juan García Martínez - contacto@ejemplo.com │ │ │
│ │ │ IP: 192.168.1.100 | Dispositivo: Chrome/Windows │ │ │
│ │ └─────────────────────────────────────────────────────────────┘ │ │
│ │ │ │
│ │ 15/01/2024 14:28:03 │ │
│ │ ┌─────────────────────────────────────────────────────────────┐ │ │
│ │ │ Ana Martínez actualizó el estado de un lead │ │ │
│ │ │ Lead ID: #4521 | Estado: Nuevo → En seguimiento │ │ │
│ │ │ IP: 192.168.1.105 | Dispositivo: Safari/iOS │ │ │
│ │ └─────────────────────────────────────────────────────────────┘ │ │
│ │ │ │
│ │ 15/01/2024 14:15:47 │ │
│ │ ┌─────────────────────────────────────────────────────────────┐ │ │
│ │ │ Sistema ejecutó distribución automática de leads │ │ │
│ │ │ 12 leads asignados a 4 agentes según reglas configuradas │ │ │
│ │ │ Job ID: dist-20240115-141547 │ │ │
│ │ └─────────────────────────────────────────────────────────────┘ │ │
│ │ │ │
│ └─────────────────────────────────────────────────────────────────────┘ │
│ │
└─────────────────────────────────────────────────────────────────────────────┘
text

╔══════════════════════════════════════════════════════════════════════════════╗
║ ║
║ FIN DE LA SEGUNDA PARTE ║
║ ║
║ Continúa en: GESTIÓN COMERCIAL ║
║ ║
╚══════════════════════════════════════════════════════════════════════════════╝
TERCERA PARTE
GESTIÓN COMERCIAL
text

╔══════════════════════════════════════════════════════════════════════════════╗
║ ║
║ GESTIÓN COMERCIAL ║
║ ║
║ "El arte de vender inmuebles comienza ║
║ con el dominio de la información" ║
║ ║
╚══════════════════════════════════════════════════════════════════════════════╝ 6. GESTIÓN DE LEADS
El módulo de Gestión de Leads constituye el corazón operativo de Anclora Nexus. Diseñado específicamente para el ciclo de venta inmobiliaria, ofrece herramientas avanzadas para captar, cualificar, distribuir y convertir contactos en clientes.

6.1 Panel de Leads
Vista Principal
text

┌─────────────────────────────────────────────────────────────────────────────┐
│ ANCLORA NEXUS │
├─────────────────────────────────────────────────────────────────────────────┤
│ │
│ ┌────────────────┐ ┌─────────────────────────────────────────────────┐ │
│ │ │ │ LEADS │ │
│ │ █ Dashboard │ │ ───────────────────────────────────────────── │ │
│ │ │ │ │ │
│ │ █ Leads │ │ KPIs del día │ │
│ │ │ │ ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐ │ │
│ │ □ Propiedades │ │ │ 47 │ │ 12 │ │ 8 │ │ 3 │ │ │
│ │ │ │ │ Nuevos │ │En Segui│ │Visitas │ │Cierres │ │ │
│ │ □ Prospección │ │ └────────┘ └────────┘ └────────┘ └────────┘ │ │
│ │ │ │ │ │
│ │ □ Inteligencia│ │ ┌─────────────────────────────────────────┐ │ │
│ │ │ │ │ 🔍 Buscar... Filtros │ [+ Nuevo Lead]│ │ │
│ │ □ Reporting │ │ └─────────────────────────────────────────┘ │ │
│ │ │ │ │ │
│ │ ───────────── │ │ ┌─────────────────────────────────────────┐ │ │
│ │ │ │ │ │ │ │
│ │ □ Usuarios │ │ │ ● Juan García ★ 87 📅 Hoy │ │ │
│ │ │ │ │ 📍 Madrid Centro | €350K | 3 hab │ │ │
│ │ □ Configurac. │ │ │ 📧 contacto@ejemplo.com │ │ │
│ │ │ │ │ ──────────────────────────────────────│ │ │
│ │ │ │ │ │ │ │
│ │ │ │ │ ● María López ★ 72 📅 Ayer │ │ │
│ │ │ │ │ 📍 Barcelona | €500K | 4 hab │ │ │
│ │ │ │ │ 📧 mlopez@correo.com │ │ │
│ │ │ │ │ ──────────────────────────────────────│ │ │
│ │ │ │ │ │ │ │
│ │ │ │ │ ● Pedro Sánchez ★ 65 📅 2d │ │ │
│ │ │ │ │ 📍 Valencia | €275K | 2 hab │ │ │
│ │ │ │ │ 📧 psanchez@empresa.es │ │ │
│ │ │ │ │ │ │ │
│ │ │ │ └─────────────────────────────────────────┘ │ │
│ │ │ │ │ │
│ └────────────────┘ └─────────────────────────────────────────────────┘ │
│ │
└─────────────────────────────────────────────────────────────────────────────┘
Componentes del Panel
Elemento
Descripción
KPIs superiores Métricas clave del día: nuevos, en seguimiento, visitas, cierres
Barra de búsqueda Búsqueda full-text por nombre, email, teléfono, referencia
Filtros Estado, score, fecha, agente, zona, presupuesto
Lista de leads Tarjetas con información principal y score
Indicador de score Valoración de calidad del lead (0-100)
Fecha de contacto Última interacción registrada

6.2 Captura y Cualificación
Fuentes de Captación
Anclora Nexus integra múltiples canales de captación:

text

┌─────────────────────────────────────────────────────────────────────────────┐
│ │
│ FUENTES DE CAPTACIÓN │
│ │
│ ┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐ │
│ │ PORTALES │ │ WEB FORMS │ │ WEBHOOKS │ │
│ │ ────────── │ │ ────────── │ │ ────────── │ │
│ │ │ │ │ │ │ │
│ │ • Idealista │ │ • Formularios │ │ • APIs externas│ │
│ │ • Fotocasa │ │ • Landing pages│ │ • Zaps │ │
│ │ • Habitaclia │ │ • Pop-ups │ │ • Custom │ │
│ │ • Pisos.com │ │ • Chatbots │ │ │ │
│ │ │ │ │ │ │ │
│ └─────────────────┘ └─────────────────┘ └─────────────────┘ │
│ │
│ ┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐ │
│ │ IMPORTACIÓN │ │ MANUAL │ │ PROSPECCIÓN │ │
│ │ ────────── │ │ ────────── │ │ ────────── │ │
│ │ │ │ │ │ │ │
│ │ • CSV/Excel │ │ • Alta directa │ │ • Búsquedas │ │
│ │ • APIs legacy │ │ • App móvil │ │ proactivas │ │
│ │ • Migraciones │ │ • Telefónica │ │ • IA Scout │ │
│ │ │ │ │ │ │ │
│ └─────────────────┘ └─────────────────┘ └─────────────────┘ │
│ │
└─────────────────────────────────────────────────────────────────────────────┘
Proceso de Cualificación Automática
Al ingresar un nuevo lead, el sistema ejecuta automáticamente:

Validación de datos: Verificación de email, teléfono, formato
Normalización: Estandarización de nombres, direcciones
** Enriquecimiento**: Búsqueda de información adicional en fuentes públicas
Deduplicación: Detección de posibles duplicados
Scoring inicial: Asignación de score predictivo
text

┌─────────────────────────────────────────────────────────────────────────────┐
│ │
│ PROCESO DE CUALIFICACIÓN AUTOMÁTICA │
│ │
│ INPUT PROCESAMIENTO OUTPUT │
│ ───── ───────────── ────── │
│ │
│ ┌─────────┐ ┌─────────────────┐ ┌─────────┐ │
│ │ Nuevo │────────►│ 1. Validación │─────────►│ Lead │ │
│ │ Lead │ │ de datos │ │ cualific│ │
│ └─────────┘ └────────┬────────┘ │ - Score │ │
│ │ │ - Tags │ │
│ ┌─────────▼────────┐ │ - Equipo│ │
│ │ 2. Normalización │ │ - Agente│ │
│ │ y limpieza │ └─────────┘ │
│ └────────┬────────┘ │
│ │ │
│ ┌─────────▼────────┐ │
│ │ 3. Enriquecimiento│ │
│ │ externo │ │
│ └────────┬────────┘ │
│ │ │
│ ┌─────────▼────────┐ │
│ │ 4. Deduplicación │ │
│ │ Entity Resol. │ │
│ └────────┬────────┘ │
│ │ │
│ ┌─────────▼────────┐ │
│ │ 5. Scoring IA │ │
│ │ predictivo │ │
│ └─────────┬────────┘ │
│ │ │
│ ┌─────────▼────────┐ │
│ │ 6. Distribución │ │
│ │ automática │ │
│ └──────────────────┘ │
│ │
└─────────────────────────────────────────────────────────────────────────────┘
6.3 Scoring Automático
El motor de scoring de Anclora Nexus analiza múltiples dimensiones para asignar una puntuación predictiva a cada lead:

Factores de Scoring
Dimensión
Factores
Peso
Engagement Aperturas de email, clics, interacciones web 25%
Perfil Presupuesto, zona, tipo de propiedad 20%
Comportamiento Visitas realizadas, tiempo en web 20%
Temporalidad Urgencia, disponibilidad para visitar 15%
Calidad datos Completitud, verificación, fuente 10%
Histórico Patrones de leads similares convertidos 10%

Interpretación del Score
text

┌─────────────────────────────────────────────────────────────────────────────┐
│ │
│ ESCALA DE SCORING │
│ │
│ 0 ──────── 25 ──────── 50 ──────── 75 ──────── 100 │
│ │ │ │ │ │ │
│ │ 🔴 BAJO │ 🟠 MEDIO │ 🟡 BUENO │ 🟢 ALTO │ 🔵 EXCELENTE │
│ │ │ │ │ │ │
│ │ Prioridad│ Prioridad │ Prioridad │ Prioridad │ Prioridad │
│ │ baja │ media │ alta │ muy alta │ inmediata │
│ │ │ │ │ │ │
│ │ Seguimien│ Seguimien │ Contacto │ Contacto │ Contacto │
│ │ to │ to progra │ en 24h │ inmediato │ inmediato │
│ │ pasivo │ mado │ │ │ + gerencia │
│ │ │ │ │ │ │
│ └───────────┴───────────┴───────────┴───────────┴─────────────────────────┘
│ │
└─────────────────────────────────────────────────────────────────────────────┘
Panel de Score Detallado
text

┌─────────────────────────────────────────────────────────────────────────────┐
│ │
│ DETALLE DE SCORING - Juan García Martínez │
│ ───────────────────────────────────────────────────────────────────────── │
│ │
│ Score Total: ★ 87/100 (EXCELENTE) │
│ │
│ ┌─────────────────────────────────────────────────────────────────────┐ │
│ │ │ │
│ │ Engagement ████████████████████░░░░ 82% ▲ +5 │ │
│ │ Perfil ████████████████████████ 95% ▲ +12 │ │
│ │ Comportamiento ██████████████████░░░░░░ 78% ▬ 0 │ │
│ │ Temporalidad ████████████████████░░░░ 85% ▲ +8 │ │
│ │ Calidad datos █████████████████░░░░░░░ 72% ▼ -3 │ │
│ │ Histórico █████████████████████░░░ 88% ▲ +2 │ │
│ │ │ │
│ └─────────────────────────────────────────────────────────────────────┘ │
│ │
│ Factores positivos: │
│ ✓ Presupuesto verificado: €350,000 │
│ ✓ Zona objetivo coincide con inventario activo │
│ ✓ 3 propiedades visitadas en los últimos 7 días │
│ ✓ Respuesta a email en menos de 2 horas │
│ │
│ Factores a mejorar: │
│ ⚠ Teléfono no verificado │
│ ⚠ Sin preaprobación hipotecaria confirmada │
│ │
│ Recomendación IA: "Alta probabilidad de conversión. Contactar hoy." │
│ │
└─────────────────────────────────────────────────────────────────────────────┘
6.4 Distribución Inteligente
Anclora Nexus ofrece múltiples estrategias de distribución de leads:

Métodos de Distribución
Método
Descripción
Uso Recomendado
Round Robin Distribución equitativa en rotación Equipos homogéneos
Por zona Asignación según ubicación del lead Equipos por área geográfica
Por especialidad Según tipo de propiedad Equipos especializados
Por carga Al agente con menos leads activos Balanceo de carga
Manual Selección por supervisor Leads VIP o complejos
Híbrido Combinación de criterios Organizaciones complejas

Configuración de Reglas de Distribución
text

┌─────────────────────────────────────────────────────────────────────────────┐
│ │
│ REGLAS DE DISTRIBUCIÓN [+] │
│ ───────────────────────────────────────────────────────────────────────── │
│ │
│ Regla #1: Leads zona Centro │
│ ┌─────────────────────────────────────────────────────────────────────┐ │
│ │ │ │
│ │ Condiciones: │ │
│ │ • Zona = "Madrid Centro" OR "Madrid Salamanca" │ │
│ │ • Presupuesto ≥ €300,000 │ │
│ │ │ │
│ │ Acción: │ │
│ │ • Distribuir a: Equipo Centro │ │
│ │ • Método: Por carga (máximo 15 leads activos por agente) │ │
│ │ │ │
│ │ Prioridad: 1 | Estado: Activo | [✎ Editar] [🗑 Eliminar] │ │
│ │ │ │
│ └─────────────────────────────────────────────────────────────────────┘ │
│ │
│ Regla #2: Leads VIP (Score > 90) │
│ ┌─────────────────────────────────────────────────────────────────────┐ │
│ │ │ │
│ │ Condiciones: │ │
│ │ • Score ≥ 90 │ │
│ │ │ │
│ │ Acción: │ │
│ │ • Notificar a: Director Comercial │ │
│ │ • Distribuir a: Agente Senior disponible │ │
│ │ • Método: Manual (requiere confirmación) │ │
│ │ │ │
│ │ Prioridad: 0 | Estado: Activo | [✎ Editar] [🗑 Eliminar] │ │
│ │ │ │
│ └─────────────────────────────────────────────────────────────────────┘ │
│ │
└─────────────────────────────────────────────────────────────────────────────┘
6.5 Seguimiento y Nurturing
Estados del Lead
Anclora Nexus define un flujo de estados optimizado para el proceso inmobiliario:

text

┌─────────────────────────────────────────────────────────────────────────────┐
│ │
│ CICLO DE VIDA DEL LEAD │
│ │
│ │
│ ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐ │
│ │ NUEVO │────►│CONTACTADO│────►│ CUALIFIC│────►│ VISITA │ │
│ │ │ │ │ │ │ │PROGRAMADA│ │
│ └─────────┘ └─────────┘ └─────────┘ └────┬────┘ │
│ │ │ │
│ │ ▼ │
│ │ ┌─────────┐ ┌─────────┐ ┌─────────┐ │
│ └─────────►│ DESCARTE│◄────│ NEGOCIAC│◄────│ VISITA │ │
│ │ │ │ │ │REALIZADA│ │
│ └─────────┘ └─────────┘ └─────────┘ │
│ │ │ │
│ │ ▼ │
│ │ ┌─────────┐ │
│ └────────────►│ CIERRE │ │
│ │ │ │
│ └─────────┘ │
│ │
│ Estados especiales: │
│ ┌─────────┐ ┌─────────┐ ┌─────────┐ │
│ │EN NURTURE│ │REACTIVADO│ │STANDBY │ │
│ │(Automati)│ │ │ │ │ │
│ └─────────┘ └─────────┘ └─────────┘ │
│ │
└─────────────────────────────────────────────────────────────────────────────┘
Tabla de Estados y Acciones
Estado
Descripción
Acciones Disponibles
Nuevo Lead recién ingresado, sin contacto Contactar, Descartar
Contactado Primer contacto realizado Cualificar, Recontactar, Descartar
Cualificado Requisitos verificados Programar visita, Descartar
Visita Programada Cita agendada Confirmar, Reprogramar, Cancelar
Visita Realizada Propiedad mostrada Ofertar, Rechazar, Reprogramar
Negociación En proceso de oferta Contrato, Cancelar, Standby
Cierre Operación cerrada Post-venta
Descarte No viable Reactivar, Archivar
En Nurture Seguimiento automatizado Reactivar, Descartar

Secuencias de Nurturing
Anclora Nexus permite configurar secuencias automatizadas de seguimiento:

text

┌─────────────────────────────────────────────────────────────────────────────┐
│ │
│ SECUENCIA DE NURTURING: Leads sin visita │
│ ───────────────────────────────────────────────────────────────────────── │
│ │
│ Trigger: Lead en estado "Cualificado" sin visita durante 7 días │
│ │
│ ┌─────────────────────────────────────────────────────────────────────┐ │
│ │ │ │
│ │ Día 1 ──► Email: "Propiedades que te pueden interesar" │ │
│ │ └── Condiciones: Si abre → pasar a Día 3 │ │
│ │ Si no abre → continuar secuencia │ │
│ │ │ │
│ │ Día 3 ──► SMS: "¿Sigues buscando casa? Tenemos novedades" │ │
│ │ └── Condiciones: Si responde → notificar agente │ │
│ │ │ │
│ │ Día 7 ──► Email: "Actualización del mercado en tu zona" │ │
│ │ └── Adjunto: Informe de precios │ │
│ │ │ │
│ │ Día 14 ─► Email: "Tu búsqueda de inmueble" │ │
│ │ └── CTA: Agendar llamada con agente │ │
│ │ │ │
│ │ Día 21 ─► Cambio de estado a "En Nurture pasivo" │ │
│ │ └── Entrar en secuencia mensual │ │
│ │ │ │
│ └─────────────────────────────────────────────────────────────────────┘ │
│ │
└─────────────────────────────────────────────────────────────────────────────┘ 7. GESTIÓN DE PROPIEDADES
El módulo de Gestión de Propiedades permite administrar el catálogo inmobiliario completo, desde la captación hasta la venta, con integración multicanal y sincronización automática con portales.

7.1 Catálogo Inmobiliario
Vista Principal de Propiedades
text

┌─────────────────────────────────────────────────────────────────────────────┐
│ ANCLORA NEXUS │
├─────────────────────────────────────────────────────────────────────────────┤
│ │
│ ┌────────────────┐ ┌─────────────────────────────────────────────────┐ │
│ │ │ │ PROPIEDADES │ │
│ │ □ Dashboard │ │ ───────────────────────────────────────────── │ │
│ │ │ │ │ │
│ │ □ Leads │ │ Resumen │ │
│ │ │ │ ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐ │ │
│ │ █ Propiedades │ │ │ 156 │ │ 89 │ │ 42 │ │ 25 │ │ │
│ │ │ │ │Activas │ │Reservad│ │Vendidas│ │Retirada│ │ │
│ │ □ Prospección │ │ └────────┘ └────────┘ └────────┘ └────────┘ │ │
│ │ │ │ │ │
│ │ □ Inteligencia│ │ ┌─────────────────────────────────────────┐ │ │
│ │ │ │ │ 🔍 Buscar... Filtros │ [+ Nueva Prop]│ │ │
│ │ □ Reporting │ │ └─────────────────────────────────────────┘ │ │
│ │ │ │ │ │
│ │ ───────────── │ │ Vista: [Cuadrícula] [Lista] [Mapa] │ │
│ │ │ │ │ │
│ │ □ Usuarios │ │ ┌─────────────────────────────────────────┐ │ │
│ │ │ │ │ │ │ │
│ │ □ Configurac. │ │ │ ┌─────────┐ Piso en Calle Serrano │ │ │
│ │ │ │ │ │ 📷 │ Ref: MAD-2024-0156 │ │ │
│ │ │ │ │ │ │ €425,000 | 3 hab | 120m² │ │ │
│ │ │ │ │ │ │ 📍 Salamanca, Madrid │ │ │
│ │ │ │ │ └─────────┘ Activa | 12 visitas │ │ │
│ │ │ │ │ │ │ │
│ │ │ │ │ ┌─────────┐ Ático en Plaza España │ │ │
│ │ │ │ │ │ 📷 │ Ref: MAD-2024-0157 │ │ │
│ │ │ │ │ │ │ €680,000 | 4 hab | 180m² │ │ │
│ │ │ │ │ │ │ 📍 Centro, Madrid │ │ │
│ │ │ │ │ └─────────┘ Activa | 8 visitas │ │ │
│ │ │ │ │ │ │ │
│ │ │ │ └─────────────────────────────────────────┘ │ │
│ │ │ │ │ │
│ └────────────────┘ └─────────────────────────────────────────────────┘ │
│ │
└─────────────────────────────────────────────────────────────────────────────┘
Ficha Completa de Propiedad
text

┌─────────────────────────────────────────────────────────────────────────────┐
│ │
│ ┌───────────────────────────────────────────────────────────────────────┐ │
│ │ │ │
│ │ ← Volver | Ref: MAD-2024-0156 | [✎ Editar] [📤 Publicar] │ │
│ │ │ │
│ └───────────────────────────────────────────────────────────────────────┘ │
│ │
│ ┌──────────────────────────────────┬──────────────────────────────────┐ │
│ │ │ │ │
│ │ ┌────────────────────────────┐ │ INFORMACIÓN GENERAL │ │
│ │ │ │ │ ────────────────────────────── │ │
│ │ │ 📷 IMAGEN PRINCIPAL │ │ │ │
│ │ │ │ │ Título: Piso en Calle Serrano │ │
│ │ │ [Ver galería: 12 fotos] │ Precio: €425,000 │ │
│ │ │ │ │ Tipo: Piso │ │
│ │ └────────────────────────────┘ │ Estado: Activa │ │
│ │ │ │ │
│ │ ┌────┐ ┌────┐ ┌────┐ ┌────┐ │ CARACTERÍSTICAS │ │
│ │ │ 📷 │ │ 📷 │ │ 📷 │ │ 📷 │ │ ────────────────────────────── │ │
│ │ └────┘ └────┘ └────┘ └────┘ │ Habitaciones: 3 │ │
│ │ │ Baños: 2 │ │
│ │ │ Superficie: 120 m² │ │
│ │ │ Terraza: 15 m² │ │
│ │ │ Plaza garaje: Sí │ │
│ │ │ Trastero: No │ │
│ │ │ Piso: 4º │ │
│ │ │ Ascensor: Sí │ │
│ │ │ │ │
│ │ │ UBICACIÓN │ │
│ │ │ ────────────────────────────── │ │
│ │ │ Dirección: C/ Serrano, 45 │ │
│ │ │ Zona: Salamanca │ │
│ │ │ Ciudad: Madrid │ │
│ │ │ Código postal: 28001 │ │
│ │ │ │ │
│ └──────────────────────────────────┴──────────────────────────────────┘ │
│ │
│ ┌───────────────────────────────────────────────────────────────────────┐ │
│ │ │ │
│ │ ESTADÍSTICAS │ │
│ │ ─────────────────────────────────────────────────────────────────── │ │
│ │ │ │
│ │ Vistas en portales: 1,234 Contactos: 18 Visitas: 12 │ │
│ │ │ │
│ │ Evolución: │ │
│ │ ┌─────────────────────────────────────────────────────────────────┐ │ │
│ │ │ ▃▅▇█▆▄▂▁▁▂▃▄▅▆▇█▆▅▄▃▂▁ │ │ │
│ │ │ L M X J V S D L M X J V S D │ │ │
│ │ └─────────────────────────────────────────────────────────────────┘ │ │
│ │ │ │
│ └───────────────────────────────────────────────────────────────────────┘ │
│ │
└─────────────────────────────────────────────────────────────────────────────┘
7.2 Publicación Multicanal
Anclora Nexus permite publicar propiedades en múltiples canales con un solo clic:

Canales Disponibles
Canal
Tipo
Sincronización
Formato
Web corporativa Propio Automática Adaptado
Idealista Portal Automática XML
Fotocasa Portal Automática XML
Habitaclia Portal Automática XML
Pisos.com Portal Automática XML
YaEncontré Portal Automática XML
Redes sociales Social Manual/Programada Post
Portales internacionales Portal Bajo demanda XML traducido

Panel de Publicaciones
text

┌─────────────────────────────────────────────────────────────────────────────┐
│ │
│ PUBLICACIONES - Ref: MAD-2024-0156 │
│ ───────────────────────────────────────────────────────────────────────── │
│ │
│ ┌─────────────────────────────────────────────────────────────────────┐ │
│ │ │ │
│ │ Canal │ Estado │ Última sinc. │ Vistas │ Acción │ │
│ │ ───────────────────────────────────────────────────────────────── │ │
│ │ Web corporativa │ ✅ Activa │ Hace 5 min │ 234 │ [Retirar]│ │
│ │ Idealista │ ✅ Activa │ Hace 1 hora │ 567 │ [Retirar]│ │
│ │ Fotocasa │ ✅ Activa │ Hace 2 horas │ 312 │ [Retirar]│ │
│ │ Habitaclia │ ⏸ Pausada │ Hace 3 días │ 89 │ [Publicar]│ │
│ │ Pisos.com │ ❌ Error │ Error synch │ -- │ [Reintent]│ │
│ │ Facebook │ ✅ Activa │ Hace 1 día │ 45 │ [Retirar]│ │
│ │ │ │
│ └─────────────────────────────────────────────────────────────────────┘ │
│ │
│ [Publicar en todos] [Retirar de todos] [Ver informe detallado] │
│ │
└─────────────────────────────────────────────────────────────────────────────┘
7.3 Sincronización de Portales
El Feed Orchestrator gestiona la sincronización bidireccional con los portales inmobiliarios:

text

┌─────────────────────────────────────────────────────────────────────────────┐
│ │
│ SINCRONIZACIÓN BIDIRECCIONAL │
│ │
│ ┌───────────────────────┐ ┌───────────────────────┐ │
│ │ │ PUBLICAR │ │ │
│ │ ANCLORA NEXUS │─────────────►│ PORTALES │ │
│ │ │ │ INMOBILIARIOS │ │
│ │ ┌───────────────┐ │ RECIBIR │ │ │
│ │ │ Propiedades │◄──│──────────────│ • Idealista │ │
│ │ │ Actualizadas │ │ │ • Fotocasa │ │
│ │ └───────────────┘ │ │ • Habitaclia │ │
│ │ │ │ • ... │ │
│ │ ┌───────────────┐ │ │ │ │
│ │ │ Leads │◄──│──────────────│ │ │
│ │ │ Recibidos │ │ CONTACTOS │ │ │
│ │ └───────────────┘ │ │ │ │
│ │ │ │ │ │
│ └───────────────────────┘ └───────────────────────┘ │
│ │
│ Tipos de sincronización: │
│ │
│ • TIEMPO REAL: Web corporativa, Leads de formularios │
│ • CADA 15 MIN: Idealista, Fotocasa (propiedades) │
│ • CADA 1 HORA: Habitaclia, Pisos.com │
│ • BAJO DEMANDA: Portales internacionales │
│ │
└─────────────────────────────────────────────────────────────────────────────┘
7.4 Gestión de Visitas
Calendario de Visitas
text

┌─────────────────────────────────────────────────────────────────────────────┐
│ │
│ VISITAS PROGRAMADAS │
│ ───────────────────────────────────────────────────────────────────────── │
│ │
│ ┌───────────────────────────────────────────────────────────────────┐ │
│ │ ◀ Enero 2024 ▶ │ │
│ │ │ │
│ │ L M X J V S D │ │
│ │ 1 2 3 │ │
│ │ 4 5 6 7 8 9 10 │ │
│ │ 11 12 13 14 15 16 17 │ │
│ │ 18 19 20 21 22 [23] 24 │ │
│ │ 25 26 27 28 29 30 31 │ │
│ │ │ │
│ │ Visitas hoy (23): 4 │ │
│ │ │ │
│ └───────────────────────────────────────────────────────────────────┘ │
│ │
│ ┌─────────────────────────────────────────────────────────────────────┐ │
│ │ │ │
│ │ 10:00 - Piso Calle Serrano │ │
│ │ Lead: Juan García | Agente: Ana Martínez | Estado: Confirmada │ │
│ │ [Ver detalle] [Reprogramar] [Cancelar] │ │
│ │ ────────────────────────────────────────────────────────────────── │ │
│ │ 12:30 - Ático Plaza España │ │
│ │ Lead: María López | Agente: Carlos Ruiz | Estado: Pendiente │ │
│ │ [Ver detalle] [Reprogramar] [Cancelar] │ │
│ │ ────────────────────────────────────────────────────────────────── │ │
│ │ 16:00 - Estudio Gran Vía │ │
│ │ Lead: Pedro Sánchez | Agente: Ana Martínez | Estado: Confirmada │ │
│ │ [Ver detalle] [Reprogramar] [Cancelar] │ │
│ │ ────────────────────────────────────────────────────────────────── │ │
│ │ 18:30 - Piso Calle Serrano │ │
│ │ Lead: Laura Martínez | Agente: Miguel Torres | Estado: Confirmada │ │
│ │ [Ver detalle] [Reprogramar] [Cancelar] │ │
│ │ │ │
│ └─────────────────────────────────────────────────────────────────────┘ │
│ │
│ [+ Programar nueva visita] │
│ │
└─────────────────────────────────────────────────────────────────────────────┘
text

╔══════════════════════════════════════════════════════════════════════════════╗
║ ║
║ FIN DE LA TERCERA PARTE ║
║ ║
║ Continúa en: INTELIGENCIA Y PROSPECCIÓN ║
║ ║
╚══════════════════════════════════════════════════════════════════════════════╝
CUARTA PARTE
INTELIGENCIA Y PROSPECCIÓN
text

╔══════════════════════════════════════════════════════════════════════════════╗
║ ║
║ INTELIGENCIA Y PROSPECCIÓN ║
║ ║
║ "La inteligencia artificial no reemplaza ║
║ al profesional inmobiliario; lo potencia" ║
║ ║
╚══════════════════════════════════════════════════════════════════════════════╝ 8. MOTOR DE INTELIGENCIA ARTIFICIAL
El Motor de Inteligencia Artificial es el componente diferencial de Anclora Nexus. Aprovecha técnicas avanzadas de machine learning y procesamiento de lenguaje natural para transformar datos en insights accionables.

8.1 Capacidades del Motor IA
text

┌─────────────────────────────────────────────────────────────────────────────┐
│ │
│ MOTOR DE INTELIGENCIA ARTIFICIAL │
│ │
│ ┌─────────────────────────────────────────────────────────────────────┐ │
│ │ │ │
│ │ ┌───────────────┐ ┌───────────────┐ ┌───────────────┐ │ │
│ │ │ PREDICCIÓN │ │ RECOMENDACIÓN│ │ AUTOMATIZACIÓN│ │ │
│ │ │ DE CONVERSIÓN│ │ INTELIGENTE │ │ PREDICTIVA │ │ │
│ │ │ │ │ │ │ │ │ │
│ │ │ Estima la │ │ Sugiere │ │ Ejecuta │ │ │
│ │ │ probabilidad │ │ propiedades │ │ acciones │ │ │
│ │ │ de cierre │ │ y acciones │ │ automáticamente│ │ │
│ │ └───────┬───────┘ └───────┬───────┘ └───────┬───────┘ │ │
│ │ │ │ │ │ │
│ └───────────┼──────────────────┼──────────────────┼───────────────────┘ │
│ │ │ │ │
│ ┌───────────┼──────────────────┼──────────────────┼───────────────────┐ │
│ │ │ │ │ │ │
│ │ ┌───────▼───────┐ ┌───────▼───────┐ ┌───────▼───────┐ │ │
│ │ │ NLP │ │ CLUSTERING │ │ ANOMALY │ │ │
│ │ │ ENGINE │ │ ENGINE │ │ DETECTION │ │ │
│ │ │ │ │ │ │ │ │ │
│ │ │ Análisis de │ │ Segmentación │ │ Detección de │ │ │
│ │ │ texto y │ │ de leads y │ │ comportamient │ │ │
│ │ │ sentimiento │ │ propiedades │ │ os anómalos │ │ │
│ │ └───────────────┘ └───────────────┘ └───────────────┘ │ │
│ │ │ │
│ │ CORE ML LAYER │ │
│ └─────────────────────────────────────────────────────────────────────┘ │
│ │
└─────────────────────────────────────────────────────────────────────────────┘
8.2 Predicción de Conversión
El modelo de predicción de conversión analiza múltiples variables para estimar la probabilidad de que un lead se convierta en cliente.

Factores Analizados
Categoría
Variables
Ejemplos
Demográficas Ubicación, presupuesto, tipo búsqueda Madrid Centro, €400K, Compra
Comportamentales Interacciones, visitas, engagement 5 visitas web, 2 emails abiertos
Temporales Urgencia, disponibilidad, timing "Necesito mudarme en 2 meses"
Históricas Patrones de clientes similares 78% de leads similares convirtieron
De mercado Condiciones del mercado, competencia Demanda alta en zona

Panel de Predicción
text

┌─────────────────────────────────────────────────────────────────────────────┐
│ │
│ CONSOLA DE INTELIGENCIA ARTIFICIAL │
│ ───────────────────────────────────────────────────────────────────────── │
│ │
│ ┌─────────────────────────────────────────────────────────────────────┐ │
│ │ │ │
│ │ PREDICCIÓN DE CONVERSIÓN - Resumen Ejecutivo │ │
│ │ ───────────────────────────────────────────────────────────────── │ │
│ │ │ │
│ │ ┌─────────────────────────────────────────────────────────────┐ │ │
│ │ │ │ │ │
│ │ │ Leads con alta probabilidad (>70%): 23 │ │ │
│ │ │ Valor potencial estimado: €2,450,000 │ │ │
│ │ │ Tiempo medio estimado hasta cierre: 18 días │ │ │
│ │ │ │ │ │
│ │ └─────────────────────────────────────────────────────────────┘ │ │
│ │ │ │
│ │ TOP 5 LEADS PRIORITARIOS │ │
│ │ ┌─────────────────────────────────────────────────────────────┐ │ │
│ │ │ │ │ │
│ │ │ 1. Juan García Martínez ★ 92% │ €425K │ Contactar HOY│ │ │
│ │ │ Motivo: Lead caliente, visita confirmada │ │ │
│ │ │ │ │ │
│ │ │ 2. María López Fernández ★ 87% │ €680K │ Ofertar │ │ │
│ │ │ Motivo: Segunda visita, señal de interés │ │ │
│ │ │ │ │ │
│ │ │ 3. Pedro Sánchez Ruiz ★ 84% │ €275K │ Confirmar │ │ │
│ │ │ Motivo: Preaprobación confirmada │ │ │
│ │ │ │ │ │
│ │ │ 4. Laura Martínez Gómez ★ 81% │ €550K │ Negociar │ │ │
│ │ │ Motivo: Oferta en negociación │ │ │
│ │ │ │ │ │
│ │ │ 5. Carlos Ruiz Herrera ★ 78% │ €320K │ Programar │ │ │
│ │ │ Motivo: Perfil compatible con inventario │ │ │
│ │ │ │ │ │
│ │ └─────────────────────────────────────────────────────────────┘ │ │
│ │ │ │
│ └─────────────────────────────────────────────────────────────────────┘ │
│ │
└─────────────────────────────────────────────────────────────────────────────┘
8.3 Recomendaciones Inteligentes
El sistema genera recomendaciones contextuales basadas en el análisis de datos:

Tipos de Recomendaciones
Tipo
Descripción
Ejemplo
Lead-Propiedad Matching entre leads y propiedades "3 propiedades ideales para Juan García"
Precio Sugerencias de ajuste de precio "Precio 5% por encima del mercado"
Timing Momento óptimo de contacto "Mejor hora para llamar: 18:00-19:00"
Acción Siguiente paso recomendado "Programar segunda visita antes del viernes"
Riesgo Alertas de posible pérdida "Lead inactivo 14 días, riesgo de fuga"

Panel de Recomendaciones
text

┌─────────────────────────────────────────────────────────────────────────────┐
│ │
│ RECOMENDACIONES INTELIGENTES [Ver todas]│
│ ───────────────────────────────────────────────────────────────────────── │
│ │
│ ┌─────────────────────────────────────────────────────────────────────┐ │
│ │ │ │
│ │ 🔴 URGENTE - 3 recomendaciones requieren atención │ │
│ │ │ │
│ │ ┌─────────────────────────────────────────────────────────────┐ │ │
│ │ │ ⚡ Lead: María López │ │ │
│ │ │ │ │ │
│ │ │ Recomendación: CONTACTAR HOY │ │ │
│ │ │ Motivo: Ha visitado la web 3 veces en las últimas 24h │ │ │
│ │ │ Probabilidad de conversión: +15% si contacta hoy │ │ │
│ │ │ │ │ │
│ │ │ [Contactar ahora] [Ver lead] [Descartar] │ │ │
│ │ └─────────────────────────────────────────────────────────────┘ │ │
│ │ │ │
│ │ ┌─────────────────────────────────────────────────────────────┐ │ │
│ │ │ 💡 Propiedad: MAD-2024-0156 │ │ │
│ │ │ │ │ │
│ │ │ Recomendación: AJUSTAR PRECIO │ │ │
│ │ │ Motivo: 45 días sin interés, precio 8% sobre mercado │ │ │
│ │ │ Precio sugerido: €390,000 (reducción de €35,000) │ │ │
│ │ │ │ │ │
│ │ │ [Aplicar sugerencia] [Ver propiedad] [Ignorar] │ │ │
│ │ └─────────────────────────────────────────────────────────────┘ │ │
│ │ │ │
│ │ ┌─────────────────────────────────────────────────────────────┐ │ │
│ │ │ 🎯 Matching detectado │ │ │
│ │ │ │ │ │
│ │ │ Lead: Pedro Sánchez ↔ Propiedad: MAD-2024-0189 │ │ │
│ │ │ Compatibilidad: 94% │ │ │
│ │ │ Coincidencias: Zona, presupuesto, habitaciones, terraza │ │ │
│ │ │ │ │ │
│ │ │ [Proponer visita] [Ver detalle] [Descartar] │ │ │
│ │ └─────────────────────────────────────────────────────────────┘ │ │
│ │ │ │
│ └─────────────────────────────────────────────────────────────────────┘ │
│ │
└─────────────────────────────────────────────────────────────────────────────┘
8.4 Análisis de Sentimiento
El motor NLP analiza las comunicaciones con leads para detectar:

Sentimiento general: Positivo, neutro, negativo
Intención de compra: Alta, media, baja
Urgencia: Inmediata, corto plazo, largo plazo
Objeciones: Precio, ubicación, características
Señales de compra: Indicadores positivos
Panel de Análisis de Comunicaciones
text

┌─────────────────────────────────────────────────────────────────────────────┐
│ │
│ ANÁLISIS DE COMUNICACIONES - Juan García Martínez │
│ ───────────────────────────────────────────────────────────────────────── │
│ │
│ ┌─────────────────────────────────────────────────────────────────────┐ │
│ │ │ │
│ │ Resumen de Sentimiento │ │
│ │ ┌─────────────────────────────────────────────────────────────┐ │ │
│ │ │ │ │ │
│ │ │ Positivo: ████████████████████████░░░░ 78% │ │ │
│ │ │ Neutro: ████████████░░░░░░░░░░░░░░░░ 45% │ │ │
│ │ │ Negativo: ████░░░░░░░░░░░░░░░░░░░░░░░░ 12% │ │ │
│ │ │ │ │ │
│ │ └─────────────────────────────────────────────────────────────┘ │ │
│ │ │ │
│ │ Señales detectadas: │ │
│ │ ✓ "Me encanta el piso" - Interés alto │ │
│ │ ✓ "¿Cuándo podemos firmar?" - Intención de compra │ │
│ │ ⚠ "El precio es un poco alto" - Objeción de precio │ │
│ │ │ │
│ │ Temas principales: │ │
│ │ 📍 Ubicación 💰 Precio 🏠 Características 📅 Disponibilidad │ │
│ │ │ │
│ └─────────────────────────────────────────────────────────────────────┘ │
│ │
└─────────────────────────────────────────────────────────────────────────────┘
8.5 Automatizaciones Predictivas
Anclora Nexus ejecuta automatizaciones basadas en predicciones:

text

┌─────────────────────────────────────────────────────────────────────────────┐
│ │
│ AUTOMATIZACIONES PREDICTIVAS │
│ │
│ ┌─────────────────────────────────────────────────────────────────────┐ │
│ │ │ │
│ │ REGLA: Lead caliente sin contacto │ │
│ │ ───────────────────────────────────────────────────────────────── │ │
│ │ SI: Score > 80 Y sin contacto en 4 horas │ │
│ │ ENTONCES: │ │
│ │ 1. Notificar al agente asignado │ │
│ │ 2. Si no responde en 1 hora → escalar a líder de equipo │ │
│ │ 3. Enviar email automático al lead con propiedades │ │
│ │ │ │
│ └─────────────────────────────────────────────────────────────────────┘ │
│ │
│ ┌─────────────────────────────────────────────────────────────────────┐ │
│ │ │ │
│ │ REGLA: Propiedad estancada │ │
│ │ ───────────────────────────────────────────────────────────────── │ │
│ │ SI: Propiedad activa > 30 días Y < 3 contactos │ │
│ │ ENTONCES: │ │
│ │ 1. Analizar precio vs mercado │ │
│ │ 2. Generar sugerencia de ajuste │ │
│ │ 3. Notificar al agente y líder │ │
│ │ 4. Añadir a informe semanal │ │
│ │ │ │
│ └─────────────────────────────────────────────────────────────────────┘ │
│ │
│ ┌─────────────────────────────────────────────────────────────────────┐ │
│ │ │ │
│ │ REGLA: Riesgo de pérdida de lead │ │
│ │ ───────────────────────────────────────────────────────────────── │ │
│ │ SI: Lead en negociación Y sin actividad en 7 días │ │
│ │ ENTONCES: │ │
│ │ 1. Alerta de riesgo al agente │ │
│ │ 2. Generar secuencia de reactivación │ │
│ │ 3. Ofrecer incentivo si aplica │ │
│ │ │ │
│ └─────────────────────────────────────────────────────────────────────┘ │
│ │
└─────────────────────────────────────────────────────────────────────────────┘ 9. PROSPECCIÓN AVANZADA
El módulo de Prospección Avanzada permite a los equipos comerciales buscar activamente nuevas oportunidades más allá de los leads entrantes.

9.1 Panel de Prospección
text

┌─────────────────────────────────────────────────────────────────────────────┐
│ ANCLORA NEXUS │
├─────────────────────────────────────────────────────────────────────────────┤
│ │
│ ┌────────────────┐ ┌─────────────────────────────────────────────────┐ │
│ │ │ │ PROSPECCIÓN │ │
│ │ □ Dashboard │ │ ───────────────────────────────────────────── │ │
│ │ │ │ │ │
│ │ □ Leads │ │ ┌─────────────────────────────────────────┐ │ │
│ │ │ │ │ 🔍 Búsqueda inteligente │ │ │
│ │ □ Propiedades │ │ │ │ │ │
│ │ │ │ │ Zona: [Madrid Centro ▼] │ │ │
│ │ █ Prospección │ │ │ Tipo: [Propietarios ▼] │ │ │
│ │ │ │ │ Filtros: [Añadir filtro] │ │ │
│ │ □ Inteligencia│ │ │ │ │ │
│ │ │ │ │ [Buscar] │ │ │
│ │ □ Reporting │ │ └─────────────────────────────────────────┘ │ │
│ │ │ │ │ │
│ │ ───────────── │ │ Resultados: 234 propietarios encontrados │ │
│ │ │ │ │ │
│ │ □ Usuarios │ │ ┌─────────────────────────────────────────┐ │ │
│ │ │ │ │ │ │ │
│ │ □ Configurac. │ │ │ ● Propietario en C/ Serrano, 45 │ │ │
│ │ │ │ │ Posible intención de venta: 72% │ │ │
│ │ │ │ │ Última transacción: 2018 │ │ │
│ │ │ │ │ [Crear lead] [Ver detalle] [Guardar] │ │ │
│ │ │ │ │ ────────────────────────────────────── │ │ │
│ │ │ │ │ │ │ │
│ │ │ │ │ ● Propietario en C/ Velázquez, 12 │ │ │
│ │ │ │ │ Posible intención de venta: 65% │ │ │
│ │ │ │ │ Última transacción: 2015 │ │ │
│ │ │ │ │ [Crear lead] [Ver detalle] [Guardar] │ │ │
│ │ │ │ │ │ │ │
│ │ │ │ └─────────────────────────────────────────┘ │ │
│ │ │ │ │ │
│ └────────────────┘ └─────────────────────────────────────────────────┘ │
│ │
└─────────────────────────────────────────────────────────────────────────────┘
9.2 Búsqueda Inteligente
El sistema de prospección utiliza múltiples fuentes para identificar oportunidades:

Fuentes de Prospección
Fuente
Datos Disponibles
Score de Intención
Registro de la Propiedad Titulares, cargas, transacciones Medio
Portales (vendedores) Anuncios de particulares Alto
Datos públicos Censos, padrones, actividades Bajo
Comportamiento web Visitantes anónimos Medio-Alto
Redes sociales Perfiles de venta Medio
Referencias Recomendaciones de clientes Muy Alto

Filtros de Búsqueda
text

┌─────────────────────────────────────────────────────────────────────────────┐
│ │
│ FILTROS DE PROSPECCIÓN AVANZADA │
│ ───────────────────────────────────────────────────────────────────────── │
│ │
│ Ubicación │
│ ┌─────────────────────────────────────────────────────────────────────┐ │
│ │ Zona: [Madrid Centro ▼] Radio: [5 km ▼] │ │
│ │ Códigos postales: [28001, 28002, 28003...] │ │
│ └─────────────────────────────────────────────────────────────────────┘ │
│ │
│ Tipo de inmueble │
│ ┌─────────────────────────────────────────────────────────────────────┐ │
│ │ ☑ Pisos ☑ Áticos ☐ Chalets ☐ Locales ☐ Oficinas │ │
│ └─────────────────────────────────────────────────────────────────────┘ │
│ │
│ Características del propietario │
│ ┌─────────────────────────────────────────────────────────────────────┐ │
│ │ Antigüedad propiedad: [> 5 años ▼] │ │
│ │ Sin hipoteca: ☑ │ │
│ │ Multiple propietario: ☐ │ │
│ │ Edad propietario: [Cualquiera ▼] │ │
│ └─────────────────────────────────────────────────────────────────────┘ │
│ │
│ Score mínimo de intención de venta: [60 ────────●─────── 100] │
│ │
└─────────────────────────────────────────────────────────────────────────────┘
9.3 Generación de Oportunidades
Proceso de Conversión a Lead
text

┌─────────────────────────────────────────────────────────────────────────────┐
│ │
│ DE PROSPECTO A LEAD │
│ │
│ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐ ┌─────────┐ │
│ │ PROSPECTO │────►│ CONTACTO │────►| CUALIFICAC. │────►│ LEAD │ │
│ │ IDENTIFICADO│ │ INICIAL │ │ │ │ ACTIVO │ │
│ └─────────────┘ └─────────────┘ └─────────────┘ └─────────┘ │
│ │ │ │ │ │
│ ▼ ▼ ▼ ▼ │
│ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐ ┌─────────┐ │
│ │ Score: 72% │ │ Llamada/ │ │ Verificar │ │ Asignar │ │
│ │ Intención │ │ Email │ │ intención, │ │ agente │ │
│ │ de venta │ │ realizado │ │ presupuesto │ │ y score │ │
│ └─────────────┘ └─────────────┘ └─────────────┘ └─────────┘ │
│ │
└─────────────────────────────────────────────────────────────────────────────┘ 10. FEED ORCHESTRATOR
El Feed Orchestrator es el componente encargado de gestionar todas las integraciones externas, asegurando que los datos fluyan de manera eficiente y sincronizada.

10.1 Arquitectura del Orquestador
text

┌─────────────────────────────────────────────────────────────────────────────┐
│ │
│ FEED ORCHESTRATOR │
│ │
│ ┌─────────────────────────────────────────────────────────────────────┐ │
│ │ │ │
│ │ FUENTES DE ENTRADA │ │
│ │ ───────────────────────────────────────────────────────────── │ │
│ │ │ │
│ │ ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐ │ │
│ │ │Idealista│ │Fotocasa │ │Habitacl.│ │Pisos.com│ │Custom │ │ │
│ │ │ XML │ │ XML │ │ XML │ │ XML │ │ API │ │ │
│ │ └────┬────┘ └────┬────┘ └────┬────┘ └────┬────┘ └────┬────┘ │ │
│ │ │ │ │ │ │ │ │
│ │ └────────────┴────────────┼────────────┴────────────┘ │ │
│ │ │ │ │
│ │ ▼ │ │
│ │ ┌─────────────────────────────────────────────────────────────┐ │ │
│ │ │ │ │ │
│ │ │ NORMALIZATION ENGINE │ │ │
│ │ │ │ │ │
│ │ │ • Estandarización de campos │ │ │
│ │ │ • Validación de datos │ │ │
│ │ │ • Detección de duplicados │ │ │
│ │ │ • Enriquecimiento con datos internos │ │ │
│ │ │ │ │ │
│ │ └─────────────────────────────────────────────────────────────┘ │ │
│ │ │ │ │
│ │ ▼ │ │
│ │ ┌─────────────────────────────────────────────────────────────┐ │ │
│ │ │ │ │ │
│ │ │ ROUTING ENGINE │ │ │
│ │ │ │ │ │
│ │ │ • Clasificación por tipo (lead, propiedad, contacto) │ │ │
│ │ │ • Distribución por tenant │ │ │
│ │ │ • Aplicación de reglas de negocio │ │ │
│ │ │ │ │ │
│ │ └─────────────────────────────────────────────────────────────┘ │ │
│ │ │ │ │
│ │ ▼ │ │
│ │ BASE DE DATOS │ │
│ │ │ │
│ └─────────────────────────────────────────────────────────────────────┘ │
│ │
└─────────────────────────────────────────────────────────────────────────────┘
10.2 Configuración de Feeds
Panel de Configuración
text

┌─────────────────────────────────────────────────────────────────────────────┐
│ │
│ CONFIGURACIÓN DE FEEDS │
│ ───────────────────────────────────────────────────────────────────────── │
│ │
│ ┌─────────────────────────────────────────────────────────────────────┐ │
│ │ │ │
│ │ Feed: Idealista - Leads │ │
│ │ ───────────────────────────────────────────────────────────────── │ │
│ │ │ │
│ │ Estado: ✅ Activo │ │
│ │ Tipo: XML Feed │ │
│ │ URL: https://feeds.anclora.app/idealista/{tenant-id} │ │
│ │ Frecuencia: Cada 15 minutos │ │
│ │ Última sincronización: Hace 8 minutos │ │
│ │ Leads procesados hoy: 47 │ │
│ │ │ │
│ │ Mapeo de campos: │ │
│ │ ┌───────────────────────────────────────────────────────────────┐ │ │
│ │ │ idealista.nombre → lead.first_name │ │ │
│ │ │ idealista.email → lead.email │ │ │
│ │ │ idealista.telefono → lead.phone │ │ │
│ │ │ idealista.mensaje → lead.notes │ │ │
│ │ │ idealista.ref → lead.source_reference │ │ │
│ │ └───────────────────────────────────────────────────────────────┘ │ │
│ │ │ │
│ │ [Editar] [Pausar] [Ver logs] [Probar conexión] │ │
│ │ │ │
│ └─────────────────────────────────────────────────────────────────────┘ │
│ │
│ [+ Añadir nuevo feed] │
│ │
└─────────────────────────────────────────────────────────────────────────────┘
10.3 Normalización de Datos
El proceso de normalización asegura que todos los datos entrantes cumplan con los estándares del sistema:

Campo Original
Normalización
Ejemplo
Nombre Capitalización, separación "juan garcia" → "Juan García"
Teléfono Formato internacional "666123456" → "+34 666 123 456"
Email Lowercase, validación "JUAN@EMAIL.COM" → "juan@email.com"
Dirección Estandarización "c/ serrano nº 45" → "Calle Serrano, 45"
Precio Numérico, moneda "350.000€" → 350000 EUR
Superficie Numérico, unidad "120m2" → 120 m²

10.4 Monitoreo y Alertas
text

┌─────────────────────────────────────────────────────────────────────────────┐
│ │
│ MONITOREO DE FEEDS │
│ ───────────────────────────────────────────────────────────────────────── │
│ │
│ Estado General: ✅ Todos los feeds operativos │
│ │
│ ┌─────────────────────────────────────────────────────────────────────┐ │
│ │ │ │
│ │ Feed │ Estado │ Última sync │ Procesados │ Errores │ │
│ │ ───────────────────────────────────────────────────────────────── │ │
│ │ Idealista │ ✅ OK │ 8 min ago │ 47 │ 0 │ │
│ │ Fotocasa │ ✅ OK │ 15 min ago │ 23 │ 0 │ │
│ │ Habitaclia │ ⚠ WARN │ 2 hours ago │ 12 │ 2 │ │
│ │ Pisos.com │ ❌ ERR │ Error │ 0 │ 5 │ │
│ │ Web corporativa │ ✅ OK │ 1 min ago │ 156 │ 0 │ │
│ │ │ │
│ └─────────────────────────────────────────────────────────────────────┘ │
│ │
│ Alertas recientes: │
│ ┌─────────────────────────────────────────────────────────────────────┐ │
│ │ │ │
│ │ ⚠ Habitaclia: Timeout en última sincronización (retry automático) │ │
│ │ ❌ Pisos.com: Error de autenticación - revisar credenciales │ │
│ │ │ │
│ └─────────────────────────────────────────────────────────────────────┘ │
│ │
└─────────────────────────────────────────────────────────────────────────────┘
text

╔══════════════════════════════════════════════════════════════════════════════╗
║ ║
║ FIN DE LA CUARTA PARTE ║
║ ║
║ Continúa en: CALIDAD Y GOBERNANZA ║
║ ║
╚══════════════════════════════════════════════════════════════════════════════╝
QUINTA PARTE
CALIDAD Y GOBERNANZA
text

╔══════════════════════════════════════════════════════════════════════════════╗
║ ║
║ CALIDAD Y GOBERNANZA ║
║ ║
║ "La calidad de los datos determina ║
║ la calidad de las decisiones" ║
║ ║
╚══════════════════════════════════════════════════════════════════════════════╝ 11. DATA QUALITY & ENTITY RESOLUTION
El módulo de Data Quality garantiza que la base de datos permanezca limpia, actualizada y libre de inconsistencias, un aspecto crítico para la efectividad de cualquier CRM.

11.1 Sistema de Calidad de Datos
Panel de Calidad
text

┌─────────────────────────────────────────────────────────────────────────────┐
│ │
│ DATA QUALITY DASHBOARD │
│ ───────────────────────────────────────────────────────────────────────── │
│ │
│ ┌─────────────────────────────────────────────────────────────────────┐ │
│ │ │ │
│ │ Score General de Calidad: 87/100 🟢 EXCELENTE │ │
│ │ │ │
│ │ ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐ │ │
│ │ │ 94% │ │ 89% │ │ 78% │ │ 92% │ │ │
│ │ │Completitud│ │Precisión │ │Unicidad │ │Actualizad│ │ │
│ │ └──────────┘ └──────────┘ └──────────┘ └──────────┘ │ │
│ │ │ │
│ └─────────────────────────────────────────────────────────────────────┘ │
│ │
│ Métricas detalladas: │
│ │
│ ┌─────────────────────────────────────────────────────────────────────┐ │
│ │ │ │
│ │ COMPLETITUD │ │
│ │ ───────────────────────────────────────────────────────────────── │ │
│ │ Leads con email: 98% (1,245 / 1,270) │ │
│ │ Leads con teléfono: 94% (1,194 / 1,270) │ │
│ │ Leads con presupuesto: 76% (965 / 1,270) │ │
│ │ Propiedades con fotos: 99% (154 / 156) │ │
│ │ │ │
│ │ PRECISIÓN │ │
│ │ ───────────────────────────────────────────────────────────────── │ │
│ │ Emails válidos: 97% (1,208 / 1,245) │ │
│ │ Teléfonos válidos: 95% (1,134 / 1,194) │ │
│ │ Direcciones geolocalizadas: 98% │ │
│ │ │ │
│ │ UNICIDAD │ │
│ │ ───────────────────────────────────────────────────────────────── │ │
│ │ Duplicados detectados: 23 │ │
│ │ Duplicados resueltos: 21 │ │
│ │ Pendientes de revisión: 2 │ │
│ │ │ │
│ │ ACTUALIZACIÓN │ │
│ │ ───────────────────────────────────────────────────────────────── │ │
│ │ Leads actualizados último mes: 89% │ │
│ │ Propiedades actualizadas último mes: 95% │ │
│ │ │ │
│ └─────────────────────────────────────────────────────────────────────┘ │
│ │
└─────────────────────────────────────────────────────────────────────────────┘

11.2 Resolución de Entidades
Proceso de Resolución
text

┌─────────────────────────────────────────────────────────────────────────────┐
│ │
│ ENTITY RESOLUTION PROCESS │
│ │
│ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐ ┌─────────┐ │
│ │ BLOQUEO │────►│ COMPARACIÓN │────►│ CLASIFIC. │────►│ MERGE │ │
│ │ │ │ │ │ │ │ │ │
│ │ Agrupar │ │ Comparar │ │ Determinar │ │ Fusionar│ │
│ │ candidatos │ │ atributos │ │ probabilidad│ │ registros│ │
│ │ potenciales │ │ │ │ de match │ │ │ │
│ └─────────────┘ └─────────────┘ └─────────────┘ └─────────┘ │
│ │ │ │ │ │
│ ▼ ▼ ▼ ▼ │
│ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐ ┌─────────┐ │
│ │ Por email, │ │ Nombre: Jaro│ │ Score > 0.9 │ │ Lead │ │
│ │ teléfono, │ │ Teléfono: │ │ → Auto-merge│ │ unificado│ │
│ │ nombre │ │ Exacto │ │ Score 0.7-0.9│ │ creado │ │
│ │ normalizado │ │ Email: │ │ → Revisión │ │ │ │
│ │ │ │ Normalizado │ │ manual │ │ │ │
│ └─────────────┘ └─────────────┘ └─────────────┘ └─────────┘ │
│ │
└─────────────────────────────────────────────────────────────────────────────┘
Algoritmos de Matching
Algoritmo
Aplicación
Precisión
Exact Match Email, teléfono, DNI/NIF 99.9%
Jaro-Winkler Nombres y apellidos 85-95%
Levenshtein Distance Direcciones, textos cortos 80-90%
Fuzzy Matching Búsquedas aproximadas 70-85%
Machine Learning Combinación de campos 90-98%

11.3 Deduplicación Inteligente
Panel de Duplicados Detectados
text

┌─────────────────────────────────────────────────────────────────────────────┐
│ │
│ DUPLICADOS DETECTADOS [Escanear]│
│ ───────────────────────────────────────────────────────────────────────── │
│ │
│ 23 posibles duplicados encontrados │ 21 resueltos │ 2 pendientes │
│ │
│ ┌─────────────────────────────────────────────────────────────────────┐ │
│ │ │ │
│ │ DUPLICADO POTENCIAL #1 Confianza: 94% │ │
│ │ ───────────────────────────────────────────────────────────────── │ │
│ │ │ │
│ │ ┌───────────────────────────┐ ┌───────────────────────────┐ │ │
│ │ │ Registro A (ID: 4521) │ │ Registro B (ID: 4892) │ │ │
│ │ │ ─────────────────────── │ │ ─────────────────────── │ │ │
│ │ │ Nombre: Juan García │ │ Nombre: J. García │ │ │
│ │ │ Email: juan@email.com │ │ Email: contacto@email.com │ │ │
│ │ │ Teléfono: +34 666 123 456 │ │ Teléfono: 666123456 │ │ │
│ │ │ Fuente: Idealista │ │ Fuente: Fotocasa │ │ │
│ │ │ Creado: 12/01/2024 │ │ Creado: 15/01/2024 │ │ │
│ │ │ Score: 72 │ │ Score: 65 │ │ │
│ │ │ Estado: En seguimiento │ │ Estado: Nuevo │ │ │
│ │ └───────────────────────────┘ └───────────────────────────┘ │ │
│ │ │ │
│ │ Acción recomendada: Fusionar en Registro A (más completo) │ │
│ │ │ │
│ │ [Fusionar A←B] [Fusionar B←A] [No son duplicados] [Ver detalle] │ │
│ │ │ │
│ └─────────────────────────────────────────────────────────────────────┘ │
│ │
└─────────────────────────────────────────────────────────────────────────────┘
Reglas de Fusión
Cuando se fusionan dos registros, el sistema aplica las siguientes reglas:

Campo
Regla de Selección
Nombre Más completo
Email El más reciente o verificado
Teléfono Combinar ambos si son diferentes
Dirección Más específica
Notas Concatenar ambas con fecha
Score Mayor de los dos
Estado Más avanzado en el funnel
Historial Preservar ambos
Propietario El del registro con mayor score

11.4 Enriquecimiento Automático
El sistema puede enriquecer automáticamente los registros con datos de fuentes externas:

Fuentes de Enriquecimiento
Fuente
Datos Enriquecidos
Disponibilidad
Registro de la Propiedad Titularidad, cargas, valor catastral España
INE Datos demográficos por zona España
Google Places Puntos de interés cercanos Global
Valores de Mercado Precios medios por zona España, Portugal
Redes Sociales Perfil público (con consentimiento) Global

Panel de Enriquecimiento
text

┌─────────────────────────────────────────────────────────────────────────────┐
│ │
│ ENRIQUECIMIENTO AUTOMÁTICO │
│ ───────────────────────────────────────────────────────────────────────── │
│ │
│ Configuración actual: │
│ │
│ ┌─────────────────────────────────────────────────────────────────────┐ │
│ │ │ │
│ │ ☑ Enriquecer leads automáticamente al crear │ │
│ │ ☑ Enriquecer leads cada 30 días │ │
│ │ ☑ Enriquecer propiedades al publicar │ │
│ │ ☐ Enriquecer con datos de redes sociales (requiere RGPD) │ │
│ │ │ │
│ │ Fuentes activas: │ │
│ │ ☑ Registro de la Propiedad ☑ Valores de mercado │ │
│ │ ☑ Google Places ☐ Redes sociales │ │
│ │ │ │
│ └─────────────────────────────────────────────────────────────────────┘ │
│ │
│ Estadísticas del mes: │
│ ┌─────────────────────────────────────────────────────────────────────┐ │
│ │ │ │
│ │ Leads enriquecidos: 234 │ │
│ │ Propiedades enriquecidas: 45 │ │
│ │ Nuevos datos añadidos: 1,456 campos │ │
│ │ Valor catastral añadido: 89 propiedades │ │
│ │ │ │
│ └─────────────────────────────────────────────────────────────────────┘ │
│ │
└─────────────────────────────────────────────────────────────────────────────┘ 12. GOBERNANZA DE COSTES
El módulo de Gobernanza de Costes proporciona visibilidad y control sobre el consumo de recursos computacionales y APIs externas, esencial para la gestión eficiente de costes operativos.

12.1 Panel de Costes
text

┌─────────────────────────────────────────────────────────────────────────────┐
│ ANCLORA NEXUS │
├─────────────────────────────────────────────────────────────────────────────┤
│ │
│ ┌────────────────┐ ┌─────────────────────────────────────────────────┐ │
│ │ │ │ GOBERNANZA DE COSTES │ │
│ │ □ Dashboard │ │ ───────────────────────────────────────────── │ │
│ │ │ │ │ │
│ │ □ Leads │ │ Resumen del Mes │ │
│ │ │ │ ┌────────────┐ ┌────────────┐ ┌────────────┐ │ │
│ │ □ Propiedades │ │ │ €247.50 │ │ €1,250 │ │ 78% │ │ │
│ │ │ │ │ Gastado │ │ Presupuesto│ │ Utilizado │ │ │
│ │ □ Prospección │ │ └────────────┘ └────────────┘ └────────────┘ │ │
│ │ │ │ │ │
│ │ □ Inteligencia│ │ Desglose por Servicio │ │
│ │ │ │ ┌─────────────────────────────────────────┐ │ │
│ │ □ Reporting │ │ │ │ │ │
│ │ │ │ │ OpenAI API ████████████░░ €89.50│ │ │
│ │ ───────────── │ │ │ 1,234,567 tokens procesados │ │ │
│ │ │ │ │ │ │ │
│ │ □ Usuarios │ │ │ Feed Orchestrator ████████░░░░░ €45.00 │ │ │
│ │ │ │ │ 12,345 registros sincronizados │ │ │
│ │ █ Costes │ │ │ │ │ │
│ │ │ │ │ Data Enrichment ██████░░░░░░░ €68.00 │ │ │
│ │ □ Configurac. │ │ │ 234 leads enriquecidos │ │ │
│ │ │ │ │ │ │ │
│ │ │ │ │ Storage ████░░░░░░░░ €25.00 │ │ │
│ │ │ │ │ 45 GB utilizados │ │ │
│ │ │ │ │ │ │ │
│ │ │ │ │ Compute ███░░░░░░░░░ €20.00 │ │ │
│ │ │ │ │ Edge Functions ejecutadas │ │ │
│ │ │ │ │ │ │ │
│ │ │ │ └─────────────────────────────────────────┘ │ │
│ │ │ │ │ │
│ └────────────────┘ └─────────────────────────────────────────────────┘ │
│ │
└─────────────────────────────────────────────────────────────────────────────┘
12.2 Optimización de Recursos
Recomendaciones de Optimización
text

┌─────────────────────────────────────────────────────────────────────────────┐
│ │
│ RECOMENDACIONES DE OPTIMIZACIÓN │
│ ───────────────────────────────────────────────────────────────────────── │
│ │
│ ┌─────────────────────────────────────────────────────────────────────┐ │
│ │ │ │
│ │ 💡 Ahorro Potencial: €45/mes │ │
│ │ │ │
│ │ ┌─────────────────────────────────────────────────────────────┐ │ │
│ │ │ │ │ │
│ │ │ ⚡ Reducir frecuencia de feeds inactivos │ │ │
│ │ │ Ahorro estimado: €15/mes │ │ │
│ │ │ Feed "Pisos.com" no recibe datos hace 30 días │ │ │
│ │ │ [Aplicar] [Ver detalle] │ │ │
│ │ │ │ │ │
│ │ │ 🗜️ Comprimir imágenes antiguas │ │ │
│ │ │ Ahorro estimado: €12/mes │ │ │
│ │ │ 234 imágenes > 1MB pueden comprimirse │ │ │
│ │ │ [Aplicar] [Ver detalle] │ │ │
│ │ │ │ │ │
│ │ │ 🔄 Optimizar consultas de IA │ │ │
│ │ │ Ahorro estimado: €18/mes │ │ │
│ │ │ Reducir redundancia en scoring batch │ │ │
│ │ │ [Aplicar] [Ver detalle] │ │ │
│ │ │ │ │ │
│ │ └─────────────────────────────────────────────────────────────┘ │ │
│ │ │ │
│ └─────────────────────────────────────────────────────────────────────┘ │
│ │
└─────────────────────────────────────────────────────────────────────────────┘
12.3 Alertas y Presupuestos
Configuración de Alertas
Tipo de Alerta
Umbral
Acción
Presupuesto mensual 80% Notificación email
Presupuesto mensual 100% Notificación + pausa servicios no críticos
Incremento súbito +50% vs promedio Alerta inmediata
Servicio específico Configurable Notificación

text

┌─────────────────────────────────────────────────────────────────────────────┐
│ │
│ CONFIGURACIÓN DE PRESUPUESTOS │
│ ───────────────────────────────────────────────────────────────────────── │
│ │
│ Presupuesto mensual total: €1,500 │
│ │
│ ┌─────────────────────────────────────────────────────────────────────┐ │
│ │ │ │
│ │ Servicio │ Presupuesto │ Gastado │ Estado │ │
│ │ ───────────────────────────────────────────────────────────────── │ │
│ │ OpenAI API │ €200.00 │ €89.50 │ 🟢 OK │ │
│ │ Feed Orchestrator │ €100.00 │ €45.00 │ 🟢 OK │ │
│ │ Data Enrichment │ €150.00 │ €68.00 │ 🟢 OK │ │
│ │ Storage │ €50.00 │ €25.00 │ 🟢 OK │ │
│ │ Compute │ €200.00 │ €20.00 │ 🟢 OK │ │
│ │ Reserva │ €800.00 │ €0.00 │ 🟢 OK │ │
│ │ │ │
│ └─────────────────────────────────────────────────────────────────────┘ │
│ │
│ Alertas configuradas: │
│ ☑ Alertar al 80% del presupuesto mensual │
│ ☑ Alertar al 100% del presupuesto mensual │
│ ☐ Pausar automáticamente servicios no críticos al 100% │
│ ☑ Alertar si algún servicio supera su presupuesto individual │
│ │
│ [Guardar configuración] │
│ │
└─────────────────────────────────────────────────────────────────────────────┘
12.4 Informes de Eficiencia
Informe Mensual de Eficiencia
text

┌─────────────────────────────────────────────────────────────────────────────┐
│ │
│ INFORME DE EFICIENCIA - ENERO 2024 │
│ ───────────────────────────────────────────────────────────────────────── │
│ │
│ ┌─────────────────────────────────────────────────────────────────────┐ │
│ │ │ │
│ │ MÉTRICAS DE EFICIENCIA │ │
│ │ │ │
│ │ Coste por lead capturado: €0.52 │ │
│ │ Coste por lead cualificado: €0.89 │ │
│ │ Coste por visita realizada: €2.34 │ │
│ │ Coste por cierre: €24.75 │ │
│ │ │ │
│ │ Evolución (últimos 6 meses): │ │
│ │ ┌─────────────────────────────────────────────────────────────┐ │ │
│ │ │ │ │ │
│ │ │ Coste/Lead ▂▃▄▅▄▃▂ │ │ │
│ │ │ A S O N D E F │ │ │
│ │ │ │ │ │
│ │ │ Coste/Cierre ▄▃▅▄▃▂▁ │ │ │
│ │ │ A S O N D E F │ │ │
│ │ │ │ │ │
│ │ └─────────────────────────────────────────────────────────────┘ │ │
│ │ │ │
│ │ Comparativa con sector: │ │
│ │ • Coste por cierre Anclora: €24.75 │ │
│ │ • Media del sector: €45.00 │ │
│ │ • Eficiencia: 45% mejor que la media │ │
│ │ │ │
│ └─────────────────────────────────────────────────────────────────────┘ │
│ │
│ [Descargar informe completo] [Comparar con período anterior] │
│ │
└─────────────────────────────────────────────────────────────────────────────┘ 13. SISTEMA MULTITENANT
Anclora Nexus implementa una arquitectura multitenant que permite a múltiples organizaciones operar de forma aislada sobre una misma plataforma.

13.1 Arquitectura Multiempresa
text

┌─────────────────────────────────────────────────────────────────────────────┐
│ │
│ ARQUITECTURA MULTITENANT │
│ │
│ ┌─────────────────────────────────────────────────────────────────────┐ │
│ │ │ │
│ │ ANCLORA NEXUS PLATFORM │ │
│ │ │ │
│ │ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐ │ │
│ │ │ TENANT A │ │ TENANT B │ │ TENANT C │ │ │
│ │ │ │ │ │ │ │ │ │
│ │ │ Inmobiliaria│ │ Red de │ │ Promotora │ │ │
│ │ │ Pérez │ │ Franquicias│ │ Sur │ │ │
│ │ │ │ │ │ │ │ │ │
│ │ │ ┌─────────┐ │ │ ┌─────────┐ │ │ ┌─────────┐ │ │ │
│ │ │ │ Usuarios│ │ │ │ Usuarios│ │ │ │ Usuarios│ │ │ │
│ │ │ │ Leads │ │ │ │ Leads │ │ │ │ Leads │ │ │ │
│ │ │ │Propieda.│ │ │ │Propieda.│ │ │ │Propieda.│ │ │ │
│ │ │ │ Config │ │ │ │ Config │ │ │ │ Config │ │ │ │
│ │ │ └─────────┘ │ │ └─────────┘ │ │ └─────────┘ │ │ │
│ │ │ │ │ │ │ │ │ │
│ │ └──────┬──────┘ └──────┬──────┘ └──────┬──────┘ │ │
│ │ │ │ │ │ │
│ │ └────────────────┼────────────────┘ │ │
│ │ │ │ │
│ │ ▼ │ │
│ │ ┌─────────────────────────────────────────────────────────────┐ │ │
│ │ │ SHARED SERVICES │ │ │
│ │ │ │ │ │
│ │ │ • Intelligence Engine • Feed Orchestrator │ │ │
│ │ │ • Authentication • Storage Layer │ │ │
│ │ │ │ │ │
│ │ └─────────────────────────────────────────────────────────────┘ │ │
│ │ │ │ │
│ │ ▼ │ │
│ │ ┌─────────────────────────────────────────────────────────────┐ │ │
│ │ │ DATABASE LAYER │ │ │
│ │ │ │ │ │
│ │ │ PostgreSQL con Row-Level Security (RLS) │ │ │
│ │ │ Aislamiento de datos a nivel de fila │ │ │
│ │ │ │ │ │
│ │ └─────────────────────────────────────────────────────────────┘ │ │
│ │ │ │
│ └─────────────────────────────────────────────────────────────────────┘ │
│ │
└─────────────────────────────────────────────────────────────────────────────┘
13.2 Aislamiento de Datos
Anclora Nexus garantiza aislamiento total de datos entre tenants mediante:

Mecanismo
Descripción
Row-Level Security (RLS) Cada fila tiene un tenant_id; las consultas se filtran automáticamente
JWT Claims El token de autenticación incluye el tenant del usuario
Middleware de API Validación de tenant en cada petición
Storage segregado Archivos organizados por tenant
Encryption keys Claves de cifrado por tenant (opcional)

Verificación de Aislamiento
text

┌─────────────────────────────────────────────────────────────────────────────┐
│ │
│ VERIFICACIÓN DE AISLAMIENTO │
│ ───────────────────────────────────────────────────────────────────────── │
│ │
│ Usuario: carlos@inmobiliariaperez.es │
│ Tenant: tenant*abc123 (Inmobiliaria Pérez) │
│ │
│ Consulta ejecutada: │
│ ┌─────────────────────────────────────────────────────────────────────┐ │
│ │ │ │
│ │ SELECT * FROM leads WHERE status = 'active' │ │
│ │ │ │
│ │ → Consulta transformada automáticamente por RLS: │ │
│ │ │ │
│ │ SELECT \_ FROM leads │ │
│ │ WHERE status = 'active' │ │
│ │ AND tenant_id = 'tenant_abc123' │ │
│ │ │ │
│ └─────────────────────────────────────────────────────────────────────┘ │
│ │
│ Resultado: Solo leads del tenant_abc123 │
│ Fugas de datos: 0 │
│ │
└─────────────────────────────────────────────────────────────────────────────┘
13.3 Configuración por Tenant
Panel de Administración de Tenant
text

┌─────────────────────────────────────────────────────────────────────────────┐
│ │
│ CONFIGURACIÓN DE TENANT: Inmobiliaria Pérez │
│ ───────────────────────────────────────────────────────────────────────── │
│ │
│ ┌─────────────────────────────────────────────────────────────────────┐ │
│ │ │ │
│ │ INFORMACIÓN GENERAL │ │
│ │ ───────────────────────────────────────────────────────────────── │ │
│ │ │ │
│ │ Nombre: Inmobiliaria Pérez S.L. │ │
│ │ Dominio: inmobiliariaperez.anclora.app │ │
│ │ Plan: Enterprise │ │
│ │ Usuarios activos: 12 / 20 │ │
│ │ Almacenamiento: 45 GB / 100 GB │ │
│ │ │ │
│ └─────────────────────────────────────────────────────────────────────┘ │
│ │
│ ┌─────────────────────────────────────────────────────────────────────┐ │
│ │ │ │
│ │ PERSONALIZACIÓN │ │
│ │ ───────────────────────────────────────────────────────────────── │ │
│ │ │ │
│ │ Logo: [📷 inmobiliaria_perez_logo.png] │ │
│ │ Colores primarios: ███ #1E3A5F ███ #4A90D9 │ │
│ │ Dominio personalizado: www.inmobiliariaperez.es (SSL activo) │ │
│ │ │ │
│ └─────────────────────────────────────────────────────────────────────┘ │
│ │
│ ┌─────────────────────────────────────────────────────────────────────┐ │
│ │ │ │
│ │ LÍMITES Y CUOTAS │ │
│ │ ───────────────────────────────────────────────────────────────── │ │
│ │ │ │
│ │ Leads máximos: 5,000 (actual: 1,270) │ │
│ │ Propiedades máximas: 500 (actual: 156) │ │
│ │ API calls/día: 10,000 (promedio: 2,345) │ │
│ │ Almacenamiento: 100 GB (actual: 45 GB) │ │
│ │ │ │
│ └─────────────────────────────────────────────────────────────────────┘ │
│ │
└─────────────────────────────────────────────────────────────────────────────┘
text

╔══════════════════════════════════════════════════════════════════════════════╗
║ ║
║ FIN DE LA QUINTA PARTE ║
║ ║
║ Continúa en: OPERACIONES ║
║ ║
╚══════════════════════════════════════════════════════════════════════════════╝
SEXTA PARTE
OPERACIONES
text

╔══════════════════════════════════════════════════════════════════════════════╗
║ ║
║ OPERACIONES ║
║ ║
║ "La excelencia operativa es el resultado ║
║ de procesos bien diseñados y ejecutados" ║
║ ║
╚══════════════════════════════════════════════════════════════════════════════╝ 14. FLUJOS OPERATIVOS COMPLETOS
Esta sección presenta los flujos operativos principales de Anclora Nexus, proporcionando guías paso a paso para las operaciones más comunes.

14.1 Flujo de Captación de Lead
Diagrama del Flujo
text

┌─────────────────────────────────────────────────────────────────────────────┐
│ │
│ FLUJO COMPLETO: CAPTACIÓN DE LEAD │
│ │
│ ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐ │
│ │ INICIO │────►│ CAPTURA │────►│ VALIDA- │────►| DEDUPLI-│ │
│ │ │ │ │ │ CIÓN │ │ CACIÓN │ │
│ └─────────┘ └─────────┘ └─────────┘ └─────────┘ │
│ │ │ │
│ ▼ ▼ │
│ ┌───────────┐ ┌───────────┐ │
│ │ • Portales│ │ ¿Es │ │
│ │ • Web │ │ duplicado?│ │
│ │ • Manual │ └─────┬─────┘ │
│ └───────────┘ │ │
│ ┌───────────────┼───────┐ │
│ │ SÍ │ NO │ │
│ ▼ ▼ │ │
│ ┌───────────┐ ┌───────────┐ │ │
│ │ FUSIONAR │ │ CONTINUAR │ │ │
│ │ REGISTROS│ │ │ │ │
│ └─────┬─────┘ └─────┬─────┘ │ │
│ │ │ │ │
│ └───────┬───────┘ │ │
│ ▼ │ │
│ ┌───────────┐ │ │
│ │ ENRIQUECE-│ │ │
│ │ MIENTO │ │ │
│ └─────┬─────┘ │ │
│ ▼ │ │
│ ┌───────────┐ │ │
│ │ SCORING │ │ │
│ │ IA │ │ │
│ └─────┬─────┘ │ │
│ ▼ │ │
│ ┌───────────┐ │ │
│ │DISTRIBUCIÓN │ │
│ │ AUTOMÁTICA│ │ │
│ └─────┬─────┘ │ │
│ ▼ │ │
│ ┌───────────┐ │ │
│ │ NOTIFICA-│ │ │
│ │ CIÓN │ │ │
│ └─────┬─────┘ │ │
│ ▼ │ │
│ ┌───────────┐ │ │
│ │ FIN │ │ │
│ └───────────┘ │ │
│ │
└─────────────────────────────────────────────────────────────────────────────┘
Paso a Paso Detallado
Paso 1: Captura del Lead

El lead ingresa al sistema a través de una de las siguientes fuentes:

Fuente
Formato
Tiempo de procesamiento
Portal inmobiliario XML/HTTP POST < 30 segundos
Formulario web API/Webhook < 5 segundos
Importación manual CSV/Excel Según volumen
Alta directa Interfaz Inmediato
Prospección Manual/IA Inmediato

Paso 2: Validación Automática

text

┌─────────────────────────────────────────────────────────────────────────────┐
│ │
│ VALIDACIÓN AUTOMÁTICA │
│ ───────────────────────────────────────────────────────────────────────── │
│ │
│ ┌─────────────────────────────────────────────────────────────────────┐ │
│ │ │ │
│ │ Campo │ Validación │ Resultado │ │
│ │ ───────────────────────────────────────────────────────────────── │ │
│ │ Email │ Formato + DNS + SMTP │ ✅ Válido │ │
│ │ Teléfono │ Formato + Longitud │ ✅ Válido │ │
│ │ Nombre │ No vacío + Longitud │ ✅ Válido │ │
│ │ Mensaje │ Sanitización HTML │ ✅ Limpio │ │
│ │ Referencia │ Propiedad existe │ ⚠ No encontrada │ │
│ │ │ │
│ │ Score de calidad: 87% │ │
│ │ │ │
│ └─────────────────────────────────────────────────────────────────────┘ │
│ │
└─────────────────────────────────────────────────────────────────────────────┘
Paso 3: Deduplicación

El sistema busca duplicados potenciales y aplica la política configurada:

Auto-fusión si score > 90%
Cola de revisión si score 70-90%
Sin acción si score < 70%
Paso 4: Enriquecimiento

Se añaden datos de fuentes externas:

Valor catastral de la zona
Precios medios de mercado
Puntos de interés cercanos
Paso 5: Scoring IA

El motor de IA calcula el score predictivo basándose en:

Completitud de datos
Fuente de origen
Comportamiento previo (si existe)
Perfil del contacto
Paso 6: Distribución

Se aplica la regla de distribución correspondiente:

text

┌─────────────────────────────────────────────────────────────────────────────┐
│ │
│ REGLA APLICADA: Leads zona Madrid Centro │
│ ───────────────────────────────────────────────────────────────────────── │
│ │
│ Condición cumplida: Zona = "Madrid Centro" │
│ Método: Por carga (máximo 15 leads activos) │
│ │
│ Agente asignado: Ana Martínez │
│ • Leads activos previos: 12 │
│ • Leads activos después: 13 │
│ • Disponibilidad: OK │
│ │
│ Notificación enviada: ✅ Email + Push │
│ │
└─────────────────────────────────────────────────────────────────────────────┘
Paso 7: Notificación

El agente asignado recibe notificación inmediata con:

Datos del lead
Score y razón
Propiedades recomendadas
Siguiente acción sugerida
14.2 Flujo de Venta de Propiedad
Diagrama del Flujo
text

┌─────────────────────────────────────────────────────────────────────────────┐
│ │
│ FLUJO COMPLETO: VENTA DE PROPIEDAD │
│ │
│ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐ │
│ │ CAPTACIÓN │────►│ PUBLICACIÓN│────►│ VISITAS │ │
│ │ PROPIEDAD │ │ MULTICANAL │ │ PROGRAMADAS│ │
│ └─────────────┘ └─────────────┘ └─────────────┘ │
│ │ │ │ │
│ ▼ ▼ ▼ │
│ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐ │
│ │ • Cliente │ │ • Web │ │ • Lead │ │
│ │ vende │ │ • Portales │ │ interesado│ │
│ │ • Captación │ │ • Redes │ │ • Cita │ │
│ │ proactiva │ │ │ │ agendada │ │
│ └─────────────┘ └─────────────┘ └─────────────┘ │
│ │ │
│ ▼ │
│ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐ │
│ │ CIERRE │◄────│ NEGOCIACIÓN │◄────│ VISITA │ │
│ │ │ │ │ │ REALIZADA │ │
│ └─────────────┘ └─────────────┘ └─────────────┘ │
│ │ │ │ │
│ ▼ ▼ ▼ │
│ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐ │
│ │ • Contrato │ │ • Oferta │ │ • Feedback │ │
│ │ firmado │ │ aceptada │ │ positvo │ │
│ │ • Comisión │ │ • Precio │ │ • Interés │ │
│ │ registrada│ │ acordado │ │ confirmado│ │
│ └─────────────┘ └─────────────┘ └─────────────┘ │
│ │ │
│ ▼ │
│ ┌─────────────┐ │
│ │ POST-VENTA │ │
│ │ │ │
│ │ • Lead → │ │
│ │ Cliente │ │
│ │ • Propiedad │ │
│ │ → Vendida │ │
│ │ • Comisión │ │
│ │ calculada │ │
│ └─────────────┘ │
│ │
└─────────────────────────────────────────────────────────────────────────────┘
14.3 Flujo de Prospección Proactiva
Diagrama del Flujo
text

┌─────────────────────────────────────────────────────────────────────────────┐
│ │
│ FLUJO COMPLETO: PROSPECCIÓN PROACTIVA │
│ │
│ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐ │
│ │ BÚSQUEDA │────►│ FILTRADO │────►│ PRIORIZACIÓN│ │
│ │ PROPIETARI │ │ AVANZADO │ │ POR SCORE │ │
│ └─────────────┘ └─────────────┘ └─────────────┘ │
│ │ │ │ │
│ ▼ ▼ ▼ │
│ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐ │
│ │ Zona: Madrid│ │ Intención │ │ Score > 70% │ │
│ │ Centro │ │ venta: >60% │ │ primero │ │
│ │ Tipo: Piso │ │ Sin agente │ │ │ │
│ └─────────────┘ │ asignado │ └─────────────┘ │
│ └─────────────┘ │
│ │ │
│ ▼ │
│ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐ │
│ │ LEAD │◄────│ CONTACTO │◄────│ LISTA DE │ │
│ │ CREADO │ │ INICIAL │ │ TRABAJO │ │
│ └─────────────┘ └─────────────┘ └─────────────┘ │
│ │ │ │ │
│ ▼ ▼ ▼ │
│ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐ │
│ │ Lead activo │ │ • Llamada │ │ 234 propiet.│ │
│ │ en sistema │ │ • Carta │ │ encontrados │ │
│ │ Asignado a │ │ • Email │ │ 56 con score│ │
│ │ agente │ │ │ │ > 70% │ │
│ └─────────────┘ └─────────────┘ └─────────────┘ │
│ │
└─────────────────────────────────────────────────────────────────────────────┘
14.4 Flujo de Reporting Ejecutivo
Panel de Reporting
text

┌─────────────────────────────────────────────────────────────────────────────┐
│ ANCLORA NEXUS │
├─────────────────────────────────────────────────────────────────────────────┤
│ │
│ ┌────────────────┐ ┌─────────────────────────────────────────────────┐ │
│ │ │ │ REPORTING EJECUTIVO │ │
│ │ □ Dashboard │ │ ───────────────────────────────────────────── │ │
│ │ │ │ │ │
│ │ □ Leads │ │ Período: Enero 2024 [◀] [Hoy] [▶] │ │
│ │ │ │ │ │
│ │ □ Propiedades │ │ ┌─────────────────────────────────────────┐ │ │
│ │ │ │ │ │ │ │
│ │ □ Prospección │ │ │ KPIs PRINCIPALES │ │ │
│ │ │ │ │ │ │ │
│ │ □ Inteligencia│ │ │ ┌─────────┐ ┌─────────┐ ┌─────────┐ │ │ │
│ │ │ │ │ │ 247 │ │ 89 │ │ 12 │ │ │ │
│ │ █ Reporting │ │ │ │ Leads │ │ Visitas │ │ Cierres │ │ │ │
│ │ │ │ │ │ nuevos │ │ realiz. │ │ │ │ │ │
│ │ ───────────── │ │ │ └─────────┘ └─────────┘ └─────────┘ │ │ │
│ │ │ │ │ │ │ │
│ │ □ Usuarios │ │ │ ┌─────────┐ ┌─────────┐ ┌─────────┐ │ │ │
│ │ │ │ │ │ €4.2M │ │ 18.5% │ │ 4.8% │ │ │ │
│ │ □ Configurac. │ │ │ │ Volumen │ │ Convers.│ │ Tasa │ │ │ │
│ │ │ │ │ │ vendido │ │ rate │ │ cierre │ │ │ │
│ │ │ │ │ └─────────┘ └─────────┘ └─────────┘ │ │ │
│ │ │ │ │ │ │ │
│ │ │ │ └─────────────────────────────────────────┘ │ │
│ │ │ │ │ │
│ │ │ │ EVOLUCIÓN MENSUAL │ │
│ │ │ │ ┌─────────────────────────────────────────┐ │ │
│ │ │ │ │ │ │ │
│ │ │ │ │ Leads ▃▅▇█▆▅▄▃▄▅▆▇█▆▅ │ │ │
│ │ │ │ │ Visitas ▂▄▆▅▄▃▂▃▄▅▆▅▄▃ │ │ │
│ │ │ │ │ Cierres ▁▂▃▂▁▁▂▃▄▃▂▁▁ │ │ │
│ │ │ │ │ A S O N D E F │ │ │
│ │ │ │ │ │ │ │
│ │ │ │ └─────────────────────────────────────────┘ │ │
│ │ │ │ │ │
│ │ │ │ RANKING DE AGENTES │ │
│ │ │ │ ┌─────────────────────────────────────────┐ │ │
│ │ │ │ │ │ │ │
│ │ │ │ │ 1. Ana Martínez 45 leads 8 ventas │ │ │
│ │ │ │ │ 2. Carlos Ruiz 38 leads 6 ventas │ │ │
│ │ │ │ │ 3. Miguel Torres 34 leads 5 ventas │ │ │
│ │ │ │ │ 4. Laura Sánchez 29 leads 4 ventas │ │ │
│ │ │ │ │ 5. Pedro Gómez 25 leads 3 ventas │ │ │
│ │ │ │ │ │ │ │
│ │ │ │ └─────────────────────────────────────────┘ │ │
│ │ │ │ │ │
│ └────────────────┘ └─────────────────────────────────────────────────┘ │
│ │
└─────────────────────────────────────────────────────────────────────────────┘ 15. CASOS DE USO REALES
15.1 Caso: Inmobiliaria Regional
Perfil del Cliente
Aspecto
Detalle
Empresa Inmobiliaria Pérez S.L.
Sede Madrid
Oficinas 3 (Centro, Norte, Sur)
Agentes 12
Propiedades activas ~150
Leads mensuales ~200
Problema principal Leads sin seguimiento, duplicados, descoordinación entre oficinas

Implementación
Fase 1: Configuración (Semana 1-2)

text

┌─────────────────────────────────────────────────────────────────────────────┐
│ │
│ PLAN DE IMPLEMENTACIÓN - INMOBILIARIA PÉREZ │
│ ───────────────────────────────────────────────────────────────────────── │
│ │
│ Semana 1: │
│ ┌─────────────────────────────────────────────────────────────────────┐ │
│ │ ☑ Configuración de tenant y dominio personalizado │ │
│ │ ☑ Importación de base de datos existente (2,345 registros) │ │
│ │ ☑ Limpieza y deduplicación automática (234 duplicados resueltos) │ │
│ │ ☑ Configuración de 3 equipos (oficinas) │ │
│ │ ☑ Creación de 12 usuarios con roles │ │
│ └─────────────────────────────────────────────────────────────────────┘ │
│ │
│ Semana 2: │
│ ┌─────────────────────────────────────────────────────────────────────┐ │
│ │ ☑ Integración con Idealista y Fotocasa │ │
│ │ ☑ Configuración de reglas de distribución por zona │ │
│ │ ☑ Formación a usuarios (2 sesiones de 2h) │ │
│ │ ☑ Configuración de notificaciones │ │
│ └─────────────────────────────────────────────────────────────────────┘ │
│ │
└─────────────────────────────────────────────────────────────────────────────┘
Fase 2: Optimización (Mes 1-3)

Métrica
Antes
Después
Mejora
Tiempo respuesta a leads 4.5 horas 45 minutos -83%
Leads sin seguimiento 34% 5% -85%
Duplicados en base de datos 18% 2% -89%
Tasa de conversión 2.1% 4.8% +128%

Resultados después de 6 meses:

text

┌─────────────────────────────────────────────────────────────────────────────┐
│ │
│ RESULTADOS - INMOBILIARIA PÉREZ (6 meses) │
│ ───────────────────────────────────────────────────────────────────────── │
│ │
│ ┌─────────────────────────────────────────────────────────────────────┐ │
│ │ │ │
│ │ 📈 Leads capturados: 1,234 (+56% vs período anterior) │ │
│ │ 🏠 Visitas realizadas: 456 (+78% vs período anterior) │ │
│ │ ✅ Operaciones cerradas: 58 (+190% vs período anterior) │ │
│ │ 💰 Volumen facturado: €12.4M (+145% vs período anterior) │ │
│ │ │ │
│ │ ROI de Anclora Nexus: 340% │ │
│ │ Payback: 3.2 meses │ │
│ │ │ │
│ └─────────────────────────────────────────────────────────────────────┘ │
│ │
└─────────────────────────────────────────────────────────────────────────────┘
15.2 Caso: Red de Franquicias
Perfil del Cliente
Aspecto
Detalle
Empresa HogarExpress Franquicias
Sede Barcelona
Franquicias 15 oficinas
Agentes 45
Propiedades activas ~500
Leads mensuales ~800
Problema principal Visibilidad consolidada, inconsistencia de procesos, calidad de datos variable

Solución Implementada
Arquitectura Multi-tenant:

text

┌─────────────────────────────────────────────────────────────────────────────┐
│ │
│ ARQUITECTURA PARA RED DE FRANQUICIAS │
│ │
│ ┌─────────────────────┐ │
│ │ TENANT CENTRAL │ │
│ │ (Corporativo) │ │
│ │ Visibilidad total │ │
│ └──────────┬──────────┘ │
│ │ │
│ ┌───────────────────────┼───────────────────────┐ │
│ │ │ │ │
│ ▼ ▼ ▼ │
│ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐ │
│ │ FRANQUICIA │ │ FRANQUICIA │ │ FRANQUICIA │ │
│ │ BCN-01 │ │ BCN-02 │ │ MAD-01 │ ... │
│ │ │ │ │ │ │ │
│ │ 3 agentes │ │ 4 agentes │ │ 2 agentes │ │
│ │ Datos propios│ │ Datos propios│ │ Datos propios│ │
│ └─────────────┘ └─────────────┘ └─────────────┘ │
│ │
│ Características: │
│ • Cada franquicia ve solo sus datos │
│ • Corporativo ve datos consolidados │
│ • Configuración centralizada de procesos │
│ • KPIs comparativos entre franquicias │
│ │
└─────────────────────────────────────────────────────────────────────────────┘
Resultados después de 12 meses:

Métrica
Antes
Después
Mejora
Visibilidad de KPIs Manual/mensual Tiempo real 100%
Consistencia de procesos Baja (cada oficina diferente) Alta (procesos unificados) 85%
Calidad de datos 62% 94% +52%
Tiempo de consolidación de informes 5 días Automático -100%

15.3 Caso: Promotora de Obra Nueva
Perfil del Cliente
Aspecto
Detalle
Empresa Edificaciones Costa Blanca S.A.
Sede Alicante
Proyectos activos 4 promociones
Unidades en venta 120
Leads mensuales ~400
Problema principal Gestión de interés por unidades específicas, follow-up largo, coordinación con comerciales externos

Solución Implementada
Gestión de Unidades y Leads:

text

┌─────────────────────────────────────────────────────────────────────────────┐
│ │
│ GESTIÓN DE OBRA NUEVA │
│ │
│ PROMOCIÓN: Residencial Marina │
│ │
│ ┌─────────────────────────────────────────────────────────────────────┐ │
│ │ │ │
│ │ Planta │ A │ B │ C │ D │ │ │
│ │ ───────────────────────────────────────────────────────────── │ │
│ │ 4º │ [VENDIDO]│ [RESERVA]│ [LIBRE] │ [VENDIDO]│ │ │
│ │ │ €285K │ €310K │ €295K │ €320K │ │ │
│ │ │ │ ⚡ 2 interesados │ │ │
│ │ ───────────────────────────────────────────────────────────── │ │
│ │ 3º │ [LIBRE] │ [LIBRE] │ [RESERVA]│ [VENDIDO]│ │ │
│ │ │ €265K │ €290K │ €275K │ €300K │ │ │
│ │ │ ⚡ 1 int. │ ⚡ 3 int.│ │ │ │ │
│ │ ───────────────────────────────────────────────────────────── │ │
│ │ 2º │ [VENDIDO]│ [LIBRE] │ [VENDIDO]│ [LIBRE] │ │ │
│ │ │ €250K │ €275K │ €260K │ €285K │ │ │
│ │ │ │ ⚡ 1 int.│ │ ⚡ 2 int.│ │ │
│ │ ───────────────────────────────────────────────────────────── │ │
│ │ 1º │ [LIBRE] │ [LIBRE] │ [VENDIDO]│ [VENDIDO]│ │ │
│ │ │ €235K │ €260K │ €245K │ €270K │ │ │
│ │ │ │
│ │ Leyenda: [LIBRE] = Disponible [RESERVA] = Reservado │ │
│ │ [VENDIDO] = Vendido ⚡ = Interesados activos │ │
│ │ │ │
│ └─────────────────────────────────────────────────────────────────────┘ │
│ │
│ Próximas acciones sugeridas por IA: │
│ ┌─────────────────────────────────────────────────────────────────────┐ │
│ │ │ │
│ │ ⚡ Unidad 3ºB: 3 interesados - riesgo de subasta. Ofertar ya. │ │
│ │ ⚡ Unidad 4ºB: 2 interesados - segundo interesado sin visita. │ │
│ │ 💡 Unidades 2ºB y 2ºD: Considerar pack con descuento. │ │
│ │ │ │
│ └─────────────────────────────────────────────────────────────────────┘ │
│ │
└─────────────────────────────────────────────────────────────────────────────┘
Resultados después de 9 meses:

Métrica
Resultado
Unidades vendidas 89 de 120 (74%)
Tiempo medio de venta 45 días (vs 90 días antes)
Tasa de abandono de reservas 8% (vs 25% antes)
ROI de la plataforma 280%

text

╔══════════════════════════════════════════════════════════════════════════════╗
║ ║
║ FIN DE LA SEXTA PARTE ║
║ ║
║ Continúa en: ANEXOS ║
║ ║
╚══════════════════════════════════════════════════════════════════════════════╝
SÉPTIMA PARTE
ANEXOS
text

╔══════════════════════════════════════════════════════════════════════════════╗
║ ║
║ ANEXOS ║
║ ║
║ "El conocimiento es la base ║
║ del dominio profesional" ║
║ ║
╚══════════════════════════════════════════════════════════════════════════════╝ 16. MEJORES PRÁCTICAS
16.1 Gestión de Leads
Reglas de Oro para la Captación
text

┌─────────────────────────────────────────────────────────────────────────────┐
│ │
│ REGLAS DE ORO - GESTIÓN DE LEADS │
│ ───────────────────────────────────────────────────────────────────────── │
│ │
│ 1. VELOCIDAD DE RESPUESTA │
│ ┌─────────────────────────────────────────────────────────────────┐ │
│ │ La probabilidad de contacto cae un 400% después de 10 minutos. │ │
│ │ Objetivo: Contactar en los primeros 5 minutos. │ │
│ └─────────────────────────────────────────────────────────────────┘ │
│ │
│ 2. PERSISTENCIA INTELIGENTE │
│ ┌─────────────────────────────────────────────────────────────────┐ │
│ │ 80% de las ventas requieren 5+ contactos. │ │
│ │ Solo 8% de los agentes hacen 5+ intentos. │ │
│ │ Usa secuencias de nurturing automatizadas. │ │
│ └─────────────────────────────────────────────────────────────────┘ │
│ │
│ 3. CUALIFICACIÓN TEMPRANA │
│ ┌─────────────────────────────────────────────────────────────────┐ │
│ │ No todos los leads merecen el mismo tiempo. │ │
│ │ Usa el score IA para priorizar. │ │
│ │ Descarta leads no cualificados rápidamente. │ │
│ └─────────────────────────────────────────────────────────────────┘ │
│ │
│ 4. REGISTRO DE ACTIVIDAD │
│ ┌─────────────────────────────────────────────────────────────────┐ │
│ │ Si no está en el CRM, no existe. │ │
│ │ Registra todas las interacciones. │ │
│ │ El historial es oro para futuras oportunidades. │ │
│ └─────────────────────────────────────────────────────────────────┘ │
│ │
│ 5. SEGUIMIENTO DE NO-RESPUESTA │
│ ┌─────────────────────────────────────────────────────────────────┐ │
│ │ Un lead sin respuesta no es un lead muerto. │ │
│ │ Reactiva leads inactivos cada 30-60 días. │ │
│ │ Cambia el canal de contacto. │ │
│ └─────────────────────────────────────────────────────────────────┘ │
│ │
└─────────────────────────────────────────────────────────────────────────────┘
16.2 Gestión de Propiedades
Checklist de Publicación Óptima
Elemento
Mejor Práctica
Impacto
Fotos Mínimo 15 fotos profesionales, primera foto horizontal +65% visualizaciones
Descripción 200-400 palabras, palabras clave SEO, beneficios no solo características +40% contactos
Precio Precio competitivo vs mercado, actualizar cada 30 días si no hay interés +25% consultas
Ubicación Mapa interactivo, puntos de interés cercanos +30% engagement
Virtual tour Tour 360 o video +50% tiempo en ficha
Horario de visitas Disponibilidad clara, opción de reserva online +35% visitas programadas

16.3 Uso del Motor de IA
Interpretación y Acción sobre Recomendaciones
text

┌─────────────────────────────────────────────────────────────────────────────┐
│ │
│ INTERPRETACIÓN DE SCORES Y RECOMENDACIONES │
│ ───────────────────────────────────────────────────────────────────────── │
│ │
│ Score 90-100 (EXCELENTE): │
│ ┌─────────────────────────────────────────────────────────────────────┐ │
│ │ • Acción inmediata requerida │ │
│ │ • Contactar en menos de 1 hora │ │
│ │ • Considerar asignación a agente senior │ │
│ │ • Priorizar visitas │ │
│ └─────────────────────────────────────────────────────────────────────┘ │
│ │
│ Score 70-89 (ALTO): │
│ ┌─────────────────────────────────────────────────────────────────────┐ │
│ │ • Contactar el mismo día │ │
│ │ • Preparar propuesta personalizada │ │
│ │ • Seguimiento cada 2-3 días │ │
│ └─────────────────────────────────────────────────────────────────────┘ │
│ │
│ Score 50-69 (BUENO): │
│ ┌─────────────────────────────────────────────────────────────────────┐ │
│ │ • Contactar en 24-48 horas │ │
│ │ • Cualificar profundamente │ │
│ │ • Incluir en secuencias de nurturing │ │
│ └─────────────────────────────────────────────────────────────────────┘ │
│ │
│ Score < 50 (BAJO): │
│ ┌─────────────────────────────────────────────────────────────────────┐ │
│ │ • Contacto cuando haya capacidad │ │
│ │ • Enriquecer datos si es posible │ │
│ │ • Incluir en campañas automatizadas │ │
│ │ • Considerar descarte si no mejora │ │
│ └─────────────────────────────────────────────────────────────────────┘ │
│ │
└─────────────────────────────────────────────────────────────────────────────┘
16.4 Mantenimiento del Sistema
Checklist Mensual
Tarea
Responsable
Frecuencia
Revisar duplicados pendientes Administrador Semanal
Actualizar reglas de distribución Líder de equipo Mensual
Revisar costes y presupuesto Administrador Mensual
Limpiar leads archivados antiguos Sistema (automático) Trimestral
Auditar permisos de usuarios Administrador Trimestral
Exportar backup de datos Sistema (automático) Diario
Revisar integraciones Administrador Mensual
Actualizar documentación Gestor Trimestral

17. PREGUNTAS FRECUENTES (FAQ)
    Preguntas Técnicas
    P: ¿Cuál es el tiempo máximo de respuesta del sistema?

R: El sistema está diseñado para responder en menos de 200ms para la mayoría de operaciones. Las operaciones que involucran procesamiento de IA pueden tomar hasta 2 segundos. El score de un lead nuevo se calcula típicamente en menos de 5 segundos.

P: ¿Cómo se garantiza el aislamiento de datos entre organizaciones?

R: Anclora Nexus utiliza Row-Level Security (RLS) de PostgreSQL, donde cada fila de datos incluye un identificador de tenant. Las consultas se filtran automáticamente a nivel de base de datos, garantizando que un usuario nunca pueda acceder a datos de otra organización, incluso si hubiera un error en la capa de aplicación.

P: ¿Puedo exportar todos mis datos?

R: Sí. Como administrador, puede exportar la totalidad de sus datos en formatos estándar (CSV, JSON) desde Configuración → Datos → Exportar. Esta funcionalidad cumple con los requisitos de portabilidad del RGPD.

P: ¿Qué ocurre si excedo los límites de mi plan?

R: El sistema le notificará cuando alcance el 80% de cualquier límite. Al alcanzar el 100%, dependiendo de su configuración, puede: (a) recibir solo una alerta, (b) pausar temporalmente servicios no críticos, o (c) habilitar automáticamente capacidad adicional con coste extra (si está configurado).

P: ¿Cómo funciona la sincronización con portales?

R: El Feed Orchestrator se conecta a las APIs o feeds XML de cada portal. La sincronización es bidireccional: las propiedades se publican automáticamente y los contactos se importan y convierten en leads. La frecuencia varía según el portal (15 minutos a 1 hora).

Preguntas Operativas
P: ¿Cuántos usuarios puedo crear?

R: El número de usuarios depende de su plan. Los planes Enterprise permiten usuarios ilimitados. Consulte su contrato o contacte con su gestor de cuenta para verificar su límite actual.

P: ¿Puedo personalizar los campos de leads y propiedades?

R: Sí. Los administradores pueden crear campos personalizados desde Configuración → Campos personalizados. Estos campos se integran automáticamente en formularios, filtros y exportaciones.

P: ¿Cómo se asignan leads a agentes?

R: Existen múltiples métodos: (a) distribución automática por reglas configuradas, (b) round-robin equitativo, (c) asignación manual por supervisor, o (d) auto-asignación por el propio agente (según permisos).

P: ¿Qué pasa con los leads antiguos?

R: Puede configurar políticas de archivo automático para leads inactivos (por ejemplo, más de 90 días sin actividad). Los leads archivados no se eliminan, pero se excluyen de las vistas activas para mantener la base de datos limpia.

P: ¿Puedo recuperar un lead eliminado por error?

R: Sí, durante 30 días. Los elementos eliminados van a una papelera de reciclaje. Después de 30 días, la eliminación es permanente. Los administradores pueden acceder a la papelera desde Configuración → Papelera.

Preguntas sobre Inteligencia Artificial
P: ¿Cómo se calcula el score de los leads?

R: El motor de IA analiza más de 50 variables agrupadas en 6 dimensiones: engagement, perfil, comportamiento, temporalidad, calidad de datos e histórico. El modelo se entrena continuamente con los datos de su organización, mejorando su precisión con el tiempo.

P: ¿Puedo confiar en las recomendaciones de IA?

R: Las recomendaciones de IA son sugerencias basadas en patrones estadísticos. Típicamente alcanzan una precisión del 75-85% después de 3 meses de uso. Se recomienda usarlas como guía, no como única base para decisiones críticas. Con el tiempo, el modelo mejora al aprender de los patrones específicos de su organización.

P: ¿La IA puede tomar decisiones automáticas?

R: Solo si usted lo configura. Por defecto, la IA solo hace sugerencias. Puede habilitar automatizaciones (como mover leads a nurture o enviar emails automáticos) que se activan basándose en criterios de IA.

P: ¿Mis datos se usan para entrenar modelos generales?

R: No. Sus datos se usan únicamente para mejorar el modelo específico de su organización (tenant). Los datos nunca se comparten entre organizaciones ni se usan para modelos globales.

18. GLOSARIO DE TÉRMINOS
    Término
    Definición
    API Application Programming Interface. Conjunto de protocolos que permite la comunicación entre sistemas.
    CRM Customer Relationship Management. Sistema de gestión de relaciones con clientes.
    Dashboard Panel de control visual que muestra métricas y KPIs principales.
    Data Quality Conjunto de procesos que garantizan la exactitud, completitud y consistencia de los datos.
    Deduplicación Proceso de identificar y fusionar registros duplicados.
    Entity Resolution Técnica para identificar cuándo múltiples registros se refieren a la misma entidad del mundo real.
    Feed Flujo de datos entrante, típicamente desde una fuente externa como un portal inmobiliario.
    Feed Orchestrator Componente del sistema que gestiona y sincroniza múltiples fuentes de datos.
    Funnel Embudo de conversión que representa las etapas del proceso de venta.
    JWT JSON Web Token. Estándar para transmitir información de forma segura entre partes.
    KPI Key Performance Indicator. Indicador clave de rendimiento.
    Lead Contacto potencial que ha mostrado interés en comprar, vender o alquilar un inmueble.
    Lead Scoring Sistema de puntuación que valora la calidad o probabilidad de conversión de un lead.
    Multitenant Arquitectura donde una sola instancia del software sirve a múltiples organizaciones (tenants).
    NLP Natural Language Processing. Procesamiento de lenguaje natural por IA.
    Nurturing Proceso de cultivar relaciones con leads que no están listos para comprar, mediante contenido y comunicación automatizada.
    RLS Row-Level Security. Seguridad a nivel de fila en bases de datos.
    Score Puntuación numérica que indica calidad, probabilidad o valor de un elemento.
    Supabase Plataforma de backend-as-a-service utilizada como infraestructura de datos.
    Tenant Organización o instancia aislada dentro de un sistema multitenant.
    Webhook Mecanismo para que una aplicación proporcione información a otra en tiempo real.

19. SOPORTE Y CONTACTO
    Canales de Soporte
    text

┌─────────────────────────────────────────────────────────────────────────────┐
│ │
│ CENTRO DE SOPORTE │
│ │
│ ┌─────────────────────────────────────────────────────────────────────┐ │
│ │ │ │
│ │ 📧 EMAIL DE SOPORTE │ │
│ │ support@anclora.com │ │
│ │ Respuesta en menos de 4 horas laborables │ │
│ │ │ │
│ │ 📞 TELÉFONO │ │
│ │ +34 900 123 456 │ │
│ │ L-V 9:00 - 19:00 (hora peninsular) │ │
│ │ │ │
│ │ 💬 CHAT EN APLICACIÓN │ │
│ │ Disponible desde el icono de ayuda en la esquina inferior derecha │ │
│ │ Respuesta inmediata en horario laboral │ │
│ │ │ │
│ │ 📚 BASE DE CONOCIMIENTOS │ │
│ │ help.anclora.com │ │
│ │ Tutoriales, guías y vídeos │ │
│ │ │ │
│ └─────────────────────────────────────────────────────────────────────┘ │
│ │
└─────────────────────────────────────────────────────────────────────────────┘
Niveles de Soporte
Nivel
Plan
Tiempo de Respuesta
Canales
Básico Starter 24 horas Email, Base de conocimientos
Profesional Professional 8 horas Email, Chat, Teléfono
Premium Enterprise 4 horas Todos + Gerente de cuenta dedicado
VIP Enterprise Plus 1 hora Todos + Soporte 24/7 + SLA personalizado

Soporte In-App
Para acceder al soporte desde dentro de la aplicación:

Haga clic en el icono ? en la esquina inferior derecha
Seleccione el tipo de consulta:
Pregunta rápida
Reportar problema
Sugerencia
Solicitar formación
Complete el formulario y recibirá respuesta según su nivel de soporte
Recursos Adicionales
Recurso
URL
Descripción
Centro de Ayuda help.anclora.com Tutoriales y guías
API Docs api.anclora.com/docs Documentación técnica de API
Blog blog.anclora.com Novedades y mejores prácticas
Webinars anclora.com/webinars Formación en vivo
Comunidad community.anclora.com Foro de usuarios
Estado del sistema status.anclora.com Estado de servicios en tiempo real

Datos de Contacto de la Empresa
text

┌─────────────────────────────────────────────────────────────────────────────┐
│ │
│ ANCLORA TECHNOLOGIES S.L. │
│ ───────────────────────────────────────────────────────────────────────── │
│ │
│ Dirección: │
│ Calle Gran Vía, 45, Planta 7 │
│ 28013 Madrid, España │
│ │
│ Contacto comercial: │
│ ventas@anclora.com │
│ +34 900 123 456 │
│ │
│ Horario de oficina: │
│ Lunes a Viernes: 9:00 - 19:00 │
│ Sábados: 10:00 - 14:00 │
│ │
│ Registro Mercantil: │
│ Tomo 12345, Folio 67, Sección 8 │
│ Hoja M-123456 │
│ CIF: B-12345678 │
│ │
└─────────────────────────────────────────────────────────────────────────────┘
CONCLUSIÓN
text

┌─────────────────────────────────────────────────────────────────────────────┐
│ │
│ │
│ GRACIAS │
│ │
│ Por confiar en Anclora Nexus │
│ │
│ │
│ Este manual ha sido elaborado por el equipo editorial de Anclora │
│ Technologies con el objetivo de proporcionarle todas las herramientas │
│ necesarias para maximizar el valor de nuestra plataforma. │
│ │
│ │
│ Recuerde que nuestro equipo de soporte está siempre a su │
│ disposición para resolver cualquier duda o incidencia. │
│ │
│ │
│ │
│ ¡Éxito en sus operaciones! │
│ │
│ │
│ — El equipo de Anclora Nexus — │
│ │
│ │
│ │
│ ───────────────────────────────────────────────────────────────────────── │
│ │
│ Versión del manual: 2.4 │
│ Última actualización: Enero 2024 │
│ Próxima revisión: Abril 2024 │
│ │
│ © 2024 Anclora Technologies S.L. Todos los derechos reservados. │
│ │
└─────────────────────────────────────────────────────────────────────────────┘
FIN DEL MANUAL
