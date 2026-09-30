import * as Tag from "./Tag";
import * as Stack from "./stack";
import { Project } from "../types";

const AgentesIA: Project = {
  title: "Agentes de IA",
  img: "https://www.kheiron.dev/og-image.png",
  description: {
    es: "Stack propio de desarrollo asistido (Claude Code + OpenCode, MCP, subagentes y TDD) y bots de IA en producción: Sofía (kheiron.dev) y Praxy (Lambraño).",
    en: "In-house AI-assisted development stack (Claude Code + OpenCode, MCP, subagents and TDD) and production AI bots: Sofía (kheiron.dev) and Praxy (Lambraño).",
  },
  link: "https://kheiron.dev",
  tags: [Tag.AI, Tag.Agents],
  stacks: [Stack.typescript, Stack.nodejs],
  buttonLink: "viewProject",
  logo: null,
};

const OrionTour: Project = {
  title: "Orion Tour",
  img: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=300&fit=crop",
  description: {
    es: "ERP multi-tenant para agencias de turismo: cotización, reservas, vouchers con QR, facturación, comisiones y cuentas a pagar/cobrar. Pagos live con MercadoPago y +4.800 tests.",
    en: "Multi-tenant ERP for tourism agencies: quotation, reservations, QR vouchers, invoicing, commissions and accounts payable/receivable. Live MercadoPago payments and 4,800+ tests.",
  },
  link: "https://oriontour.cloud",
  tags: [Tag.ERP, Tag.MultiTenant, Tag.MercadoPago],
  stacks: [Stack.nestjs, Stack.nextjs, Stack.postgresql, Stack.prisma, Stack.prometheus, Stack.docker],
  buttonLink: "viewProject",
  logo: null,
};

const Luriam: Project = {
  title: "Luriam",
  img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&h=300&fit=crop",
  description: {
    es: "CRM de turnos y clientes en tiempo real para negocios de bienestar: agenda con Socket.io, colas con BullMQ, correo con AWS SES y notificaciones push.",
    en: "Real-time appointment and client CRM for wellness businesses: Socket.io scheduling, BullMQ job queues, AWS SES email and push notifications.",
  },
  link: "https://demo.luriam.com.mx",
  tags: [Tag.CRM, Tag.SocketIo, Tag.Dashboard],
  stacks: [Stack.nestjs, Stack.socketio, Stack.redis, Stack.postgresql, Stack.prisma, Stack.aws, Stack.docker],
  buttonLink: "viewProject",
  logo: null,
};

const AresOne: Project = {
  title: "AresOne",
  img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
  description: {
    es: "SaaS de dropshipping multi-tenant: cada cliente gestiona su propia tienda optimizada para conversión. En beta con el primer early adopter.",
    en: "Multi-tenant dropshipping SaaS: each client runs their own conversion-optimized storefront. In beta with the first early adopter.",
  },
  link: null,
  tags: [Tag.SaaS, Tag.MultiTenant, Tag.Ecommerce],
  stacks: [Stack.nextjs, Stack.postgresql, Stack.prisma, Stack.redis, Stack.docker],
  buttonLink: null,
  logo: null,
};

const Numaia: Project = {
  title: "Numaia",
  img: "https://numaia.online/og-image.png",
  description: {
    es: "App educativa de matemáticas gamificada para niños, con tutora IA (Gemini) y enfoque en la biodiversidad colombiana. Offline-first, en beta cerrada.",
    en: "Gamified math education app for children, with an AI tutor (Gemini) and a focus on Colombian biodiversity. Offline-first, in closed beta.",
  },
  link: "https://numaia.online/",
  tags: [Tag.Mobile, Tag.AI, Tag.Education],
  stacks: [Stack.reactNative, Stack.typescript],
  buttonLink: "viewProject",
  logo: null,
};

const MercadoDeResiduos: Project = {
  title: "Mercado de Residuos",
  img: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=400&h=300&fit=crop",
  description: {
    es: "Plataforma B2B que conecta generadores de residuos con empresas recicladoras. Lideré un equipo de 8 devs.",
    en: "B2B platform connecting waste generators with recycling companies. Led a team of 8 developers.",
  },
  link: "https://youtu.be/ZBi1--mW4GA",
  tags: [Tag.B2B, Tag.Ecommerce, Tag.Dashboard],
  stacks: [Stack.react, Stack.apollo, Stack.graphql, Stack.sequelize, Stack.postgresql],
  buttonLink: "viewVideo",
  logo: null,
};

const FamilyBunny: Project = {
  title: "Family Bunny",
  img: "https://img.itch.zone/aW1nLzEyMjg1MjEzLnBuZw==/508x254%23mb/JXdt6c.png",
  description: {
    es: "Juego de puzzle 3D en voxel, desarrollado en solitario y publicado en itch.io para HTML5 y Android.",
    en: "3D voxel puzzle game, developed solo and published on itch.io for HTML5 and Android.",
  },
  link: "https://marcosmansilla.itch.io/family-bunny",
  tags: [Tag.VideGame, Tag.ThreeD],
  stacks: [Stack.unity, Stack.csharp],
  buttonLink: "playGame",
  logo: null,
};

export default [AgentesIA, OrionTour, Luriam, AresOne, Numaia, MercadoDeResiduos, FamilyBunny];
