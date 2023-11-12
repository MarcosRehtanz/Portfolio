import { Direction, Vector2D, VectorDir } from "./types"


class Utils {
    constructor() { }

    random = (max: number = 1, min: number = 0) => Math.floor((Math.random() * (max + 1 - min)) + min)
    dir: Direction = ['Up', 'Left', 'Down', 'Right']
    nDir: Direction = ['Down', 'Right', 'Up', 'Left']
    vectorDir: VectorDir = {
        Up: { x: 0, y: -1 },
        Down: { x: 0, y: 1 },
        Left: { x: -1, y: 0 },
        Right: { x: 1, y: 0 },
    }
    Matriz: Matriz
}
export class Matriz {
    constructor(x: number, y: number, initial?: any) {
        this.length = {x,y}
        while (y > 0) {
            y--
            this[y] = []
            let _temp = 0
            while (_temp < x) {
                this[y][_temp] = initial ? initial : 0
                _temp++
            }
        }
    }
    length: Vector2D
}

const utils = new Utils()

export const random = utils.random
export const dir = utils.dir
export const nDir = utils.nDir
export const vectorDir = utils.vectorDir
export const matriz = utils.Matriz

export default utils 