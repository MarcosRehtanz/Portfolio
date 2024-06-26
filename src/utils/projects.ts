import {
  Cards,
  Chat,
  Dashboard,
  Ecommerce,
  Filter,
  JWT,
  MercadoPago,
  MicroServices,
  RestAPI,
  SocketIo,
  Tag,
  ThreeD,
  VideGame,
} from "./Tag";
import {
  Tool,
  angular,
  apollo,
  csharp,
  express,
  graphql,
  postgresql,
  react,
  redux,
  sequelize,
  tailwind,
  unity,
} from "./stack";
import { itchio } from "./Logos";
import React from "react";

export interface Project {
  title: string;
  img: string;
  link: string | null;
  description: string;
  tags: Tag[];
  stacks: Tool[];
  buttonLink: string;
  logo: React.JSX.Element | null;
}

const FamilyBunny: Project = {
  title: "Family Bunny",
  img: "https://img.itch.zone/aW1nLzEyMjg1MjEzLnBuZw==/180x143%23c/4ZzYYD.png",
  link: "https://marcosmansilla.itch.io/family-bunny",
  description: `Un simple juego sobre la familia conejo. \n Inpirado en el clasico juego de la vivorira.`,
  tags: [VideGame, ThreeD],
  stacks: [csharp, unity],
  buttonLink: "Jugar en itch.io",
  logo: itchio(),
};
const MercadoDeResiduos: Project = {
  title: "Mercado de Residuos",
  img: "../src/assets/fMdR.png",
  link: "https://youtu.be/ZBi1--mW4GA?si=uDz2uGtCFXr0Iwo0",
  description: `El proyecto de tienda B2B para MdR fue realizado como pasantía y proyecto final en Henry, una academia de programación online.`,
  tags: [Ecommerce, Dashboard, RestAPI, MercadoPago, JWT, MicroServices],
  stacks: [react, tailwind, apollo, graphql, sequelize, postgresql],
  buttonLink: "Ver video",
  logo: null,
};
const ChatInLive: Project = {
  title: "Chat en vivo",
  img: "../src/assets/chat-angular-socket.io.jpg",
  link: "https://chat-angular-client.vercel.app/",
  description:
    "Desarrollé un sistema de chat en tiempo real con Socket.IO para la comunicación instantánea, brindando una experiencia fluida e interactiva de mensajería.",
  tags: [Chat, SocketIo],
  stacks: [angular, express],
  buttonLink: "Ver Chat",
  logo: null,
};
const Drivers: Project = {
  title: "Formula 1",
  img: "../src/assets/drivers_post.jpg",
  link: "https://drivers-eight.vercel.app/",
  description:
    "Proyecto Individual en donde puse a prueba mis conocimiento con las tecnologías, tanto en back como en front, dictadas en Henry.",
  tags: [Cards, Filter, RestAPI],
  stacks: [react, redux, express, sequelize, postgresql],
  buttonLink: "Ver página",
  logo: null,
};
/**
 *
 */
export default [FamilyBunny, MercadoDeResiduos, ChatInLive, Drivers];
