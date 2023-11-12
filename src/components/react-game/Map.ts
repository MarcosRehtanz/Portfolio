import Player from "./Player"
import { Vector2D } from "./types"
import utils, { Matriz, dir, nDir, random, vectorDir } from "./utils"

type List = Array<Map2>

interface Vector3D extends Vector2D {
    z: number
}

interface Mapa {
    position: Vector2D
    pattern: Vector2D | null
    Up?: Vector2D | Wall | number | null
    Down?: Vector2D | Wall | number | null
    Left?: Vector2D | Wall | number | null
    Right?: Vector2D | Wall | number | null
}
type Wall = 'wall'
interface InputMap {
    length: number,
    size: Vector2D,
    map?: Vector2D,
    start?: Vector2D
    players?: Player[]
}
export class Map2 {
    constructor({ length, size, map, start, players }: InputMap) {

        this.map = map ? new Matriz(map.x, map.y) : new Matriz(240 / size?.x, 240 / size?.y)
        this.size = size

        // this.player = new Player({
        //     color: 'rgb(50,200,100)',
        // })

        length = length <= 0
            ? map
                ? map.x * map.y
                : 240 / size.x * 240 / size.y
            : length

        while (length !== this.length) {

            if (this.length === 0) {
                this.list = [{
                    position: start ? start : { x: 0, y: 0 },
                    pattern: null,
                }]
                this.map[this.length][0] = this.length + 1
            } else {

                let current = this.list[0]
                let freeDir = false
                let R = 0

                while (!freeDir) {
                    R = random(this.length - 1)
                    current = this.list[R]
                    const { y, x } = current.position

                    let a = x === 0 ? false : this.map[y][x - 1] === 0
                    let b = x === this.map.length.x - 1 ? false : this.map[y][x + 1] === 0
                    let c = y === 0 ? false : this.map[y - 1][x] === 0
                    let d = y === this.map.length.y - 1 ? false : this.map[y + 1][x] === 0
                    freeDir = (a || b || c || d)
                }

                // console.log(vectorDir[dir[r]]);
                // console.log(dir[r]);

                let x = 0, y = 0, r = 0
                let free = false
                while (!free) {
                    r = random(3)
                    x = current.position.x + vectorDir[dir[r]].x
                    y = current.position.y + vectorDir[dir[r]].y

                    let intro = (
                        x < this.map.length.x &&
                        y < this.map.length.y &&
                        x >= 0 &&
                        y >= 0
                    )
                    free = intro
                        ? this.map[y][x] === 0
                        : false
                }

                this.list[R][dir[r]] = this.length
                this.list.push({
                    position: start ? start : { x, y },
                    pattern: current.position,
                    [nDir[r]]: R,
                })

                this.map[y][x] = this.length + 1

            }

            this.length++
        }
        
        // this.player.map = this.map
        // this.player.list = this.list

    }
    player: Player
    list: Array<Mapa>
    length = 0
    map: Matriz
    size: Vector2D
    sizeWall = 2
    private drawBox = async (context: any, { color, position, size }: {
        color: string,
        position: Vector2D,
        size: Vector2D,
    }): Promise<void> => {

        return new Promise((resolve, reject) => {
            try {

                context.fillStyle = color

                context.fillRect(
                    position.x,
                    position.y,
                    size.x,
                    size.y
                )
            } catch (error) {
                reject(error)
            }
        })

    }
    draw = (ctx: any) => {

        this.list.forEach(map => {

            const position: Vector2D = {
                x: map.position.x * this.size.x + this.sizeWall,
                y: map.position.y * this.size.y + this.sizeWall,
            }
            const size: Vector2D = {
                x: this.size.x - this.sizeWall * 2,
                y: this.size.y - this.sizeWall * 2,
            }


            this.drawBox(ctx, { color: 'rgb(37,84,84)', position, size })
                .catch(error => { })

            if (map.pattern !== null) {

                this.drawBox(ctx, {
                    color: 'rgb(37,84,84)',
                    position: {
                        x: position.x + (map.position.x - map.pattern?.x) * this.size.x / -this.sizeWall,
                        y: position.y + (map.position.y - map.pattern?.y) * this.size.y / -this.sizeWall,
                    },
                    size
                }).catch(error => { })
            }
        })
    }
}

export default Map