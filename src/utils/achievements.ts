import { Tool } from "./stack"

export interface Achievement {
    title: string
    description: string
    image: string
    stacks: Tool[]
}

const WebSocket: Achievement = {
    title: 'Socket.io',
    description: 'Chat de comunicación abierta',
    image: 'https://socket.io/images/logo.svg',
    stacks: [],
}

export default [WebSocket]