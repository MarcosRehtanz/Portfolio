export interface ExperienceItem {
  company: string
  role: {
    es: string
    en: string
  }
  start: string
  end: string | null
  location: {
    es: string
    en: string
  }
  achievements: {
    es: string[]
    en: string[]
  }
  stack: string[]
}

export const experienceData: ExperienceItem[] = [
  {
    company: 'DynnamoCrypt',
    role: {
      es: 'Software Engineer (SSR)',
      en: 'Software Engineer (SSR)',
    },
    start: '2026-03',
    end: null,
    location: {
      es: 'Bahía Blanca, Argentina (presencial)',
      en: 'Bahía Blanca, Argentina (on-site)',
    },
    achievements: {
      es: [
        'Lideró la migración completa del motor de base de datos del ERP Strix (PHP): 200 tablas de MyISAM a InnoDB en MariaDB, validada en staging y migrada tabla por tabla a producción con backups previos.',
        'Realizó hardening de vulnerabilidades de SQL injection en Portix y Strix, implementación de paginación en queries y optimización de consultas lentas con índices.',
        'Reemplazó Apache por Nginx en proyectos legacy para mejor rendimiento y control de configuración.',
        'Integró AWS Secrets Manager en ERP URGARA Infinity (.NET Core), ensamblando connection strings desde componentes individuales y eliminando credenciales del entorno.',
        'Dockerizó el ERP Infinity para entornos de desarrollo local y staging consistentes.',
        'Corrigió una race condition en producción (SetNumeroAfiliado) y un problema de integridad de datos que generaba registros duplicados en la numeración de afiliados.',
        'Lidera actualmente la migración de EC2 a RDS para mejorar la confiabilidad, los backups automáticos y la escalabilidad de la base de datos.',
        'Participa en decisiones de arquitectura y revisiones de código de un portfolio de 8+ clientes: URGARA, Bilbao, GlobalTrade, Bahía Ambiental, Lanchas del Sur, entre otros.',
      ],
      en: [
        'Led the full database engine migration of the Strix ERP (PHP): 200 tables from MyISAM to InnoDB on MariaDB, validated in staging and migrated table-by-table to production with backup checkpoints.',
        'Hardened SQL injection vulnerabilities in Portix and Strix, implemented query pagination, and optimized slow queries with targeted index creation.',
        'Replaced Apache with Nginx across legacy projects for improved performance and configuration control.',
        'Integrated AWS Secrets Manager into the URGARA Infinity ERP (.NET Core), assembling connection strings from individual components and eliminating credentials from the environment.',
        'Dockerized the Infinity ERP for consistent local development and staging environments.',
        'Fixed a race condition in production (SetNumeroAfiliado) and a data integrity issue causing duplicated records in affiliate numbering.',
        'Currently leading the EC2-to-RDS migration to improve database reliability, automated backups, and scalability.',
        'Contributes to architecture decisions and code reviews for a portfolio of 8+ clients: URGARA, Bilbao, GlobalTrade, Bahía Ambiental, Lanchas del Sur, among others.',
      ],
    },
    stack: ['PHP', 'NestJS', 'TypeScript', 'C# / .NET Core', 'MySQL', 'MariaDB', 'PostgreSQL', 'Docker', 'Nginx', 'AWS (EC2, RDS, Secrets Manager)', 'GitHub Actions'],
  },
  {
    company: 'Kheiron Company S.A.S.',
    role: {
      es: 'Software Engineer & Coordinador Técnico (Freelance)',
      en: 'Software Engineer & Technical Coordinator (Freelance)',
    },
    start: '2024-01',
    end: null,
    location: {
      es: 'Colombia (remoto)',
      en: 'Colombia (remote)',
    },
    achievements: {
      es: [
        'Desarrolló Orion Tour, un ERP completo para agencias de turismo con sistema de reservas, integración de pagos live con MercadoPago, motor de cotización, comisiones, cuentas por pagar/cobrar, facturación, notas de crédito, exportación PDF/Excel, vouchers con QR, control de acceso por roles y editor de flyers con Fabric.js — entregado a producción con 1 cliente activo.',
        'Diseñó y desarrolló Luriam, una plataforma a medida para una sucursal de masajes en México (luriam.com.mx): agenda en tiempo real vía Socket.io, gestión de turnos y clientes, colas de trabajo con BullMQ, correo transaccional con AWS SES y notificaciones push web.',
        'Diseñó e implementó AresOne, una plataforma SaaS multi-tenant para dropshipping donde cada cliente gestiona su propia tienda; actualmente en beta con el primer early adopter.',
        'Implementó protección DDoS con Cloudflare como proxy, CDN con R2 para assets estáticos y rate limiting en múltiples capas (Nginx + aplicación).',
        'Configuró pipelines CI/CD con GitHub Actions y estandarizó prácticas de ingeniería para el equipo.',
        'Coordinó técnicamente un equipo de 3 desarrolladores, revisión de PRs y gestión del trabajo en GitFlow.',
        'Diseñó diagramas entidad-relación y propuesta de arquitectura completa para ERP de construcción (Argos).',
        'Desarrolló aplicaciones empresariales con NestJS, Next.js, React, TypeScript, GraphQL, React Native, Apollo Client y Firebase.',
      ],
      en: [
        'Built Orion Tour, a full tourism ERP with reservation system, live MercadoPago payment integration, quotation engine, commission tracking, accounts payable/receivable, invoicing, credit notes, PDF/Excel export, QR vouchers, role-based access control, and a custom Fabric.js flyer editor — shipped to production with 1 active client.',
        'Designed and built Luriam, a custom platform for a massage branch in Mexico (luriam.com.mx): real-time scheduling via Socket.io, appointment and client management, BullMQ job queues, AWS SES transactional email, and web push notifications.',
        'Designed and implemented AresOne, a multi-tenant dropshipping SaaS platform where each client manages their own storefront; currently in beta testing with the first early adopter.',
        'Implemented DDoS protection using Cloudflare as a proxy, CDN with R2 for static assets, and multi-layer rate limiting (Nginx + application level).',
        'Set up CI/CD pipelines with GitHub Actions and standardized engineering practices for the team.',
        'Led technical coordination of a team of 3 developers, conducted PR reviews, and managed workflow via GitFlow.',
        'Designed entity-relationship diagrams and full system architecture proposals for a construction ERP (Argos).',
        'Developed enterprise apps using NestJS, Next.js, React, TypeScript, GraphQL, React Native, Apollo Client, and Firebase.',
      ],
    },
    stack: ['NestJS', 'Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Redis', 'BullMQ', 'Socket.io', 'Fabric.js', 'MercadoPago', 'AWS (S3, SES)', 'Cloudflare R2', 'Docker', 'Nginx', 'GitHub Actions', 'GraphQL', 'React Native', 'Firebase'],
  },
  {
    company: 'DevLabs',
    role: {
      es: 'Dev Full-stack Junior',
      en: 'Junior Full-stack Developer',
    },
    start: '2024-01',
    end: '2024-05',
    location: {
      es: 'Remoto',
      en: 'Remote',
    },
    achievements: {
      es: [
        'Desarrolló aplicaciones multiplataforma para iOS y Android con Next.js, React Native, TypeScript y MaterialUI.',
        'Integró notificaciones push en tiempo real con Pusher y seguimiento de geolocalización en segundo plano.',
        'Construyó el servidor backend con documentación de API integrada en Swagger.',
      ],
      en: [
        'Developed cross-platform iOS and Android applications using Next.js, React Native, TypeScript, and MaterialUI.',
        'Integrated real-time push notifications with Pusher and background geolocation tracking.',
        'Built the backend server with integrated Swagger API documentation.',
      ],
    },
    stack: ['Next.js', 'React Native', 'TypeScript', 'MaterialUI', 'Docker', 'Pusher', 'Swagger'],
  },
  {
    company: 'Covery (Insurtech)',
    role: {
      es: 'Dev Full-stack Junior',
      en: 'Junior Full-stack Developer',
    },
    start: '2023-07',
    end: '2024-01',
    location: {
      es: 'Remoto',
      en: 'Remote',
    },
    achievements: {
      es: [
        'Desarrolló plataforma de seguros full-stack con React, Express y MySQL.',
        'Refactorizó servicios backend mejorando escalabilidad y reduciendo tiempo de carga.',
        'Implementó componentes UX/UI que mejoraron la retención de usuarios.',
      ],
      en: [
        'Built a full-stack insurance platform using React, Express, and MySQL.',
        'Refactored backend services improving scalability and reducing page load time.',
        'Implemented UX/UI components that improved user retention.',
      ],
    },
    stack: ['React', 'Express', 'MySQL', 'Node.js'],
  },
  {
    company: 'Mercado de Residuos',
    role: {
      es: 'Dev Full-stack (Pasantía)',
      en: 'Full-stack Developer (Internship)',
    },
    start: '2023-09',
    end: '2023-10',
    location: {
      es: 'Remoto',
      en: 'Remote',
    },
    achievements: {
      es: [
        'Desarrolló plataforma comercial B2B que conecta generadores de residuos con empresas recicladoras, usando React, Apollo GraphQL, Sequelize y PostgreSQL.',
        'Lideró un equipo de 8 desarrolladores, coordinando sprints y manteniendo comunicación consistente.',
        'Realizó debugging y mejoras que incrementaron la estabilidad del sistema.',
      ],
      en: [
        'Built a B2B commercial platform connecting waste generators with recycling companies, using React, Apollo GraphQL, Sequelize, and PostgreSQL.',
        'Led a team of 8 developers, coordinating sprints and maintaining consistent communication.',
        'Debugged and delivered improvements that increased system stability.',
      ],
    },
    stack: ['React', 'Apollo GraphQL', 'Sequelize', 'PostgreSQL', 'Node.js'],
  },
]
