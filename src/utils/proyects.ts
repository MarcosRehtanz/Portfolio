import { Ecommerce, Tag, VideGame } from "./Tag"
import { Tool, apollo, csharp, graphql, postgresql, react, sequelize, tailwind, unity } from "./tools"

const useTag = (name: string, color: string) : Tag => {
    return {
        name,
        bg: ` bg-${color}-300`,
        text: ` text-${color}-900`,
    }
}
// console.log(useTag("sa","blue"));

export interface Proyect {
    title: string
    img: string
    link: string | undefined
    description: string
    tags: Tag[]
    stacks: Tool[]
    buttonLink: string
    logo: boolean
}


const FamilyBunny: Proyect = {
    title: 'Family Bunny',
    img: 'https://img.itch.zone/aW1nLzEyMjg1MjEzLnBuZw==/180x143%23c/4ZzYYD.png',
    link: 'https://marcosmansilla.itch.io/family-bunny',
    description: `Un simple juego sobre la familia conejo. \n Inpirado en el clasico juego de la vivorira.`,
    tags: [VideGame],
    stacks: [csharp, unity],
    buttonLink: 'Jugar en itch.io',
    logo: true,
}
const MercadoDeResiduos: Proyect = {
    title: 'Mercado de Residuos',
    img: 'hola',
    link: 'undefined',
    description: ``,
    tags: [Ecommerce],
    stacks: [react, tailwind, apollo, graphql, sequelize, postgresql],
    buttonLink: 'Ver video',
    logo: false,
}
/**
 * 
 */
export default [FamilyBunny]