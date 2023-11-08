import { Vector2D } from "./types"
import utils, { Matriz, dir, nDir, random, vectorDir } from "./utils"

type List = Array<Map2>


interface Mapa {
    position: Vector2D
    pattern: Vector2D | null
    Up?: Vector2D | Wall | null
    Down?: Vector2D | Wall | null
    Left?: Vector2D | Wall | null
    Right?: Vector2D | Wall | null
}
type Wall = 'wall'

export class Map2 {
    constructor(length: number, size: Vector2D, map?: Vector2D, start?: Vector2D) {

        this.map = map ? new Matriz(map.x, map.y) : new Matriz(4, 4)

        this.size = size

        length = length <= 0
            ? map
                ? map.x * map.y
                : 16
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
                console.log();

                while (!freeDir) {
                    current = this.list[random(this.length - 1)]
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

                this.list.push({
                    position: start ? start : { x, y },
                    pattern: current.position,
                    [nDir[r]]: current.position,
                })

                this.map[y][x] = this.length + 1

            }

            this.length++
        }

    }
    list: Array<Mapa>
    length: number = 0
    map: Matriz
    size: Vector2D
    drawBox = async (context: any, { color, position, size }: {
        color: string,
        position: Vector2D,
        size: Vector2D,
    }): Promise<void> => {

        return new Promise((resolve, reject) => {
            try {

                context.fillStyle = 'rgb(200,50,50)'

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
                x: map.position.x * this.size.x + 2,
                y: map.position.y * this.size.y + 2,
            }
            const size: Vector2D = {
                x: this.size.x - 4,
                y: this.size.y - 4,
            }


            this.drawBox(ctx, { color: 'rgb(200,50,50)', position, size })
                .catch(error => {})

            if (map.pattern !== null) {

                this.drawBox(ctx, {
                    color: 'rgb(200,50,50)',
                    position: {
                        x: position.x + (map.position.x - map.pattern?.x) * this.size.x / -2,
                        y: position.y + (map.position.y - map.pattern?.y) * this.size.y / -2,
                    },
                    size
                }).catch(error => {})
            }
        })
    }
}

export default Map