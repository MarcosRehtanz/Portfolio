import PlayerModel from "./PlayerModel";
import { Vector2D } from "./types";

const Action = (
    ctx: any,
    color: string,
    position: Vector2D,
    size: Vector2D,
    sizeMap: number,
    moveDirection: Vector2D,
) => {

    return new Promise((resolve, reject) => {
        ctx.fillStyle = color
        ctx.fillRect(position.x + sizeMap / 2 - size.x / 2, position.y + sizeMap / 2 - size.y / 2, size.x, size.y)
        position.x += moveDirection.x
        position.y += moveDirection.y
    })

}
class Player extends PlayerModel {
    action = (ctx: any, timer: { time: number, state: number }): void => {

        if (!this.gameOver) {

            Action(ctx,
                this.color,
                this.position,
                this.size,
                this.sizeMap,
                this.moveDirection,
            ).catch(() => { })
            this.moveDirection = this.validatePosition() ? { x: 0, y: 0, } : this.moveDirection

            Action(
                ctx,
                'rgb(250,190,25)',
                {
                    x: this.endpoint.x * this.sizeMap,
                    y: this.endpoint.y * this.sizeMap
                },
                this.size,
                this.sizeMap,
                this.moveDirection,
            ).catch(() => { })

            if (this.position.x / this.sizeMap === this.endpoint?.x && this.position.y / this.sizeMap === this.endpoint.y) {
                this.canMove = false
                this.gameOver = true
            }
        } else {
            this.canMove = true
            this.gameOver = false
        }
    }
}



export default Player