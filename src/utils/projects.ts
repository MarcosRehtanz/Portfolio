import { Ecommerce, Tag, VideGame } from "./Tag"
import { Tool, apollo, csharp, graphql, postgresql, react, sequelize, tailwind, unity } from "./tools"

export interface Project {
    title: string
    img: string
    link: string | undefined
    description: string
    tags: Tag[]
    stacks: Tool[]
    buttonLink: string
    logo: boolean
}


const FamilyBunny: Project = {
    title: 'Family Bunny',
    img: 'https://img.itch.zone/aW1nLzEyMjg1MjEzLnBuZw==/180x143%23c/4ZzYYD.png',
    link: 'https://marcosmansilla.itch.io/family-bunny',
    description: `Un simple juego sobre la familia conejo. \n Inpirado en el clasico juego de la vivorira.`,
    tags: [VideGame],
    stacks: [csharp, unity],
    buttonLink: 'Jugar en itch.io',
    logo: true,
}
const MercadoDeResiduos: Project = {
    title: 'Mercado de Residuos',
    img: 'https://media.discordapp.net/attachments/1126624954201411637/1160926418759331964/fondoMeetMDR.png?ex=656dcefb&is=655b59fb&hm=2892af054a11af6e7214de4d9d59de647ccd77a01a6e1719902605035b3a27a7&=&format=webp&width=840&height=473',
    link: 'https://youtu.be/ZBi1--mW4GA?si=uDz2uGtCFXr0Iwo0',
    description: `El proyecto de tienda B2B para MdR fue realizado como pasantía y proyecto final en Henry, una academia de programación online.`,
    tags: [Ecommerce],
    stacks: [react, tailwind, apollo, graphql, sequelize, postgresql],
    buttonLink: 'Ver video',
    logo: false,
}
/**
 * 
 */
export default [FamilyBunny, MercadoDeResiduos]