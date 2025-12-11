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
    company: 'Kheiron Company S.A.S.',
    role: {
      es: 'Software Engineer & Technical Coordinator',
      en: 'Software Engineer & Technical Coordinator',
    },
    start: '2024-01',
    end: null,
    location: {
      es: 'Colombia - Remoto',
      en: 'Colombia - Remote',
    },
    achievements: {
      es: [
        'Diseño e implementación de arquitectura SaaS multi-tenant para e-commerce, escalable hasta 100+ tiendas con Redis y escalado horizontal.',
        'Implementación de seguridad contra ataques DDoS utilizando Cloudflare como proxy, CDN con R2 y rate limiting en múltiples capas.',
        'Estandarización de tecnologías y mejores prácticas, estableciendo guías de desarrollo y arquitectura.',
        'Coordinación técnica de equipo de 3 desarrolladores, revisión de PRs y gestión del trabajo en GitFlow.',
        'Desarrollo de aplicaciones con NestJS, Next.js, React, TypeScript, GraphQL y MongoDB.',
      ],
      en: [
        'Designed and implemented multi-tenant SaaS architecture for e-commerce, scalable to 100+ stores with Redis and horizontal scaling.',
        'Implemented DDoS protection using Cloudflare proxy, CDN with R2, and multi-layer rate limiting.',
        'Standardized technologies and best practices, establishing development and architecture guidelines.',
        'Technical coordination of 3-developer team, PR reviews and GitFlow work management.',
        'Built applications with NestJS, Next.js, React, TypeScript, GraphQL and MongoDB.',
      ],
    },
    stack: ['NestJS', 'Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Redis', 'Docker', 'Nginx', 'Cloudflare'],
  },
  {
    company: 'DevLabs',
    role: {
      es: 'Desarrollador Fullstack Junior',
      en: 'Junior Fullstack Developer',
    },
    start: '2024-01',
    end: '2024-05',
    location: {
      es: 'Remoto',
      en: 'Remote',
    },
    achievements: {
      es: [
        'Creación de aplicaciones con NextJS, React Native, TypeScript para iOS y Android.',
        'Integración de librerías como notificaciones push y geolocalización en segundo plano.',
        'Desarrollo de servidor con documentación integrada en Swagger.',
      ],
      en: [
        'Built applications with NextJS, React Native, TypeScript for iOS and Android.',
        'Integration of push notifications and background geolocation libraries.',
        'Server development with integrated Swagger documentation.',
      ],
    },
    stack: ['Next.js', 'React Native', 'TypeScript', 'Docker', 'Swagger'],
  },
  {
    company: 'Covery (Insurtech)',
    role: {
      es: 'Desarrollador Fullstack Junior',
      en: 'Junior Fullstack Developer',
    },
    start: '2023-07',
    end: '2024-01',
    location: {
      es: 'Remoto',
      en: 'Remote',
    },
    achievements: {
      es: [
        'Creación de una web de seguros utilizando React, Express y MySQL.',
        'Refactorización de servidores, mejorando la escalabilidad y reduciendo el tiempo de carga.',
        'Implementación de componentes de UX/UI, mejorando la retención de usuarios.',
      ],
      en: [
        'Built an insurance web platform using React, Express and MySQL.',
        'Server refactoring, improving scalability and reducing load time.',
        'UX/UI component implementation, improving user retention.',
      ],
    },
    stack: ['React', 'Express', 'MySQL'],
  },
  {
    company: 'Mercado de Residuos',
    role: {
      es: 'Desarrollador FullStack (Pasantía)',
      en: 'FullStack Developer (Internship)',
    },
    start: '2023-09',
    end: '2023-10',
    location: {
      es: 'Remoto',
      en: 'Remote',
    },
    achievements: {
      es: [
        'Creación de plataforma comercial B2B con React, Apollo GraphQL, Sequelize y PostgreSQL.',
        'Liderazgo de equipo de 8 desarrolladores, coordinando sprints y comunicación.',
        'Debugging y mejoras, incrementando la estabilidad del sistema.',
      ],
      en: [
        'Built B2B commercial platform with React, Apollo GraphQL, Sequelize and PostgreSQL.',
        'Led team of 8 developers, coordinating sprints and communication.',
        'Debugging and improvements, increasing system stability.',
      ],
    },
    stack: ['React', 'Apollo GraphQL', 'Sequelize', 'PostgreSQL'],
  },
]
