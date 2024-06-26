import * as Tag from "./Tag";
import * as Stack from "./stack";
import { itchio } from "./Logos";
import { Project } from "../types";

const FamilyBunny: Project = {
  title: "Family Bunny",
  img: "https://img.itch.zone/aW1nLzEyMjg1MjEzLnBuZw==/180x143%23c/4ZzYYD.png",
  link: "https://marcosmansilla.itch.io/family-bunny",
  description: `Un simple juego sobre la familia conejo. \n Inpirado en el clasico juego de la vivorira.`,
  tags: [Tag.VideGame, Tag.ThreeD],
  stacks: [Stack.csharp, Stack.unity],
  buttonLink: "Jugar en itch.io",
  logo: itchio(),
};
const MercadoDeResiduos: Project = {
  title: "Mercado de Residuos",
  img: "../src/assets/fMdR.png",
  link: "https://youtu.be/ZBi1--mW4GA?si=uDz2uGtCFXr0Iwo0",
  description: `El proyecto de tienda B2B para MdR fue realizado como pasantía y proyecto final en Henry, una academia de programación online.`,
  tags: [
    Tag.Ecommerce,
    Tag.Dashboard,
    Tag.RestAPI,
    Tag.MercadoPago,
    Tag.JWT,
    Tag.MicroServices,
  ],
  stacks: [
    Stack.react,
    Stack.tailwind,
    Stack.apollo,
    Stack.graphql,
    Stack.sequelize,
    Stack.postgresql,
  ],
  buttonLink: "Ver video",
  logo: null,
};
const ChatInLive: Project = {
  title: "Chat en vivo",
  img: "../src/assets/chat-angular-socket.io.jpg",
  link: "https://chat-angular-client.vercel.app/",
  description:
    "Desarrollé un sistema de chat en tiempo real con Socket.IO para la comunicación instantánea, brindando una experiencia fluida e interactiva de mensajería.",
  tags: [Tag.Chat, Tag.SocketIo],
  stacks: [Stack.angular, Stack.express],
  buttonLink: "Ver Chat",
  logo: null,
};
const Drivers: Project = {
  title: "Formula 1",
  img: "../src/assets/drivers_post.jpg",
  link: "https://drivers-eight.vercel.app/",
  description:
    "Proyecto Individual en donde puse a prueba mis conocimiento con las tecnologías, tanto en back como en front, dictadas en Henry.",
  tags: [Tag.Cards, Tag.Filter, Tag.RestAPI],
  stacks: [
    Stack.react,
    Stack.redux,
    Stack.express,
    Stack.sequelize,
    Stack.postgresql,
  ],
  buttonLink: "Ver página",
  logo: null,
};
/**
 *
 */
export default [FamilyBunny, MercadoDeResiduos, ChatInLive, Drivers];
