import * as Tag from "./Tag";
import * as Stack from "./stack";
import { Project } from "../types";

const Numaia: Project = {
  title: "Numaia",
  img: "https://numaia.online/og-image.png",
  description: "App educativa gamificada con IA tutora para niños, enfoque en biodiversidad colombiana.",
  link: "https://numaia.online/",
  tags: [Tag.Mobile, Tag.AI, Tag.Education],
  stacks: [Stack.reactNative, Stack.typescript],
  buttonLink: "Ver proyecto",
  logo: null,
};

const SaaSEcommerce: Project = {
  title: "SaaS E-commerce",
  img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
  description: "Arquitectura SaaS multi-tenant escalable para 100+ tiendas con Redis, Cloudflare y rate limiting.",
  link: null,
  tags: [Tag.SaaS, Tag.MultiTenant, Tag.Ecommerce],
  stacks: [Stack.nestjs, Stack.postgresql, Stack.prisma, Stack.redis, Stack.docker, Stack.nginx, Stack.cloudflare],
  buttonLink: "",
  logo: null,
};

const ERPTurismo: Project = {
  title: "ERP Turismo",
  img: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=300&fit=crop",
  description: "App móvil empresarial para gestión turística con sincronización en tiempo real.",
  link: null,
  tags: [Tag.Mobile, Tag.ERP],
  stacks: [Stack.reactNative, Stack.apollo, Stack.graphql, Stack.firebase],
  buttonLink: "",
  logo: null,
};

const MercadoDeResiduos: Project = {
  title: "Mercado de Residuos",
  img: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=400&h=300&fit=crop",
  description: "Plataforma B2B conectando generadores de residuos con empresas de reciclaje. Lideré equipo de 8 devs.",
  link: "https://youtu.be/ZBi1--mW4GA",
  tags: [Tag.B2B, Tag.Ecommerce, Tag.Dashboard],
  stacks: [Stack.react, Stack.apollo, Stack.graphql, Stack.sequelize, Stack.postgresql],
  buttonLink: "Ver video",
  logo: null,
};

const ChatInLive: Project = {
  title: "Chat en vivo",
  img: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=400&h=300&fit=crop",
  description: "Sistema de chat en tiempo real con Socket.IO para comunicación instantánea.",
  link: "https://chat-angular-client.vercel.app/",
  tags: [Tag.Chat, Tag.SocketIo],
  stacks: [Stack.angular, Stack.express],
  buttonLink: "Ver Chat",
  logo: null,
};

const InsurancePlatform: Project = {
  title: "Covery Seguros",
  img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=300&fit=crop",
  description: "Plataforma insurtech para cotización y gestión de seguros. Mejoré escalabilidad en 40%.",
  link: null,
  tags: [Tag.Dashboard, Tag.RestAPI],
  stacks: [Stack.react, Stack.express, Stack.mysql],
  buttonLink: "",
  logo: null,
};

export default [Numaia, SaaSEcommerce, ERPTurismo, MercadoDeResiduos, ChatInLive, InsurancePlatform];
