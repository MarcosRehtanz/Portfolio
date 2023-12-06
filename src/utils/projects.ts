import { Cards, Chat, Dashboard, Ecommerce, Filter, JWT, MercadoPago, MicroServices, RestAPI, SocketIo, Tag, ThreeD, VideGame } from "./Tag"
import { Tool, angular, apollo, csharp, express, graphql, postgresql, react, redux, sequelize, tailwind, unity } from "./stack";
import { itchio } from "./Logos";
import React from "react";

export interface Project {
    title: string
    img: string
    link: string | null
    description: string
    tags: Tag[]
    stacks: Tool[]
    buttonLink: string
    logo: React.JSX.Element | null
}


const FamilyBunny: Project = {
    title: 'Family Bunny',
    img: 'https://img.itch.zone/aW1nLzEyMjg1MjEzLnBuZw==/180x143%23c/4ZzYYD.png',
    link: 'https://marcosmansilla.itch.io/family-bunny',
    description: `Un simple juego sobre la familia conejo. \n Inpirado en el clasico juego de la vivorira.`,
    tags: [VideGame, ThreeD],
    stacks: [csharp, unity],
    buttonLink: 'Jugar en itch.io',
    logo: itchio(),
}
const MercadoDeResiduos: Project = {
    title: 'Mercado de Residuos',
    img: 'https://media.discordapp.net/attachments/1126624954201411637/1160926418759331964/fondoMeetMDR.png?ex=656dcefb&is=655b59fb&hm=2892af054a11af6e7214de4d9d59de647ccd77a01a6e1719902605035b3a27a7&=&format=webp&width=840&height=473',
    link: 'https://youtu.be/ZBi1--mW4GA?si=uDz2uGtCFXr0Iwo0',
    description: `El proyecto de tienda B2B para MdR fue realizado como pasantía y proyecto final en Henry, una academia de programación online.`,
    tags: [Ecommerce, Dashboard, RestAPI, MercadoPago, JWT, MicroServices],
    stacks: [react, tailwind, apollo, graphql, sequelize, postgresql],
    buttonLink: 'Ver video',
    logo: null,
}
const ChatInLive: Project = {
    title: 'Chat en vivo',
    img: 'https://media.discordapp.net/attachments/1002306498053013565/1181094511154303026/image.png?ex=657fcefb&is=656d59fb&hm=e3860767a55e61bf3f1036371f3633a31c1f7ea5d0f2aef4098b685ef507bf3a&=&format=webp&quality=lossless',
    link: 'https://chat-angular-client.vercel.app/', 
    description: 'Desarrollé un sistema de chat en tiempo real con Socket.IO para la comunicación instantánea, brindando una experiencia fluida e interactiva de mensajería.',
    tags: [Chat, SocketIo],
    stacks: [angular, express],
    buttonLink: 'Ver Chat',
    logo: null,
}
const Drivers: Project = {
    title: 'Formula 1',
    img: 'https://cdn.discordapp.com/attachments/1002306498053013565/1178446797442646037/drivers_post.jpg?ex=65762d1a&is=6563b81a&hm=2276f8a9c8f9b0de0a6f80b0e1130bac369411dc3dc4c53016e1c8fb64336f22&',
    link: 'https://drivers-eight.vercel.app/',
    description: 'Proyecto Individual en donde puse a prueba mis conocimiento con las tecnologías, tanto en back como en front, dictadas en Henry.',
    tags: [Cards, Filter, RestAPI],
    stacks: [react, redux, express, sequelize, postgresql],
    buttonLink: 'Ver página',
    logo: null,
}
/**
 * 
 */
export default [FamilyBunny, MercadoDeResiduos, ChatInLive, Drivers]