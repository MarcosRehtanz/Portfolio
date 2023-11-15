import PlayerModel from "./PlayerModel";
import { Vector2D } from "./types";

const Action = (
    ctx: any,
    color: string,
    position: Vector2D,
    size: Vector2D,
    moveDirection: Vector2D,
) => {

    return new Promise((resolve, reject) => {
        ctx.fillStyle = color
        ctx.fillRect(position.x + 20 / 2 - size.x / 2, position.y + 20 / 2 - size.y / 2, size.x, size.y)
        position.x += moveDirection.x
        position.y += moveDirection.y
    })

}
class Player extends PlayerModel {
    action = (ctx: any,): void => {

        if (!this.gameOver) {

            Action(ctx,
                this.color,
                this.position,
                this.size,
                this.moveDirection,
            ).catch(() => { })
            this.moveDirection = this.validatePosition() ? { x: 0, y: 0, } : this.moveDirection

            Action(
                ctx,
                'rgb(250,190,25)',
                {
                    x: this.endpoint.x * 20,
                    y: this.endpoint.y * 20
                },
                this.size,
                this.moveDirection,
            ).catch(() => { })

            if (this.position.x / 20 === this.endpoint?.x && this.position.y / 20 === this.endpoint.y) {
                this.state = 'win'
                this.gameOver = true
            }
        } else {
            this.state = 'inGame'
            this.gameOver = false
        }
    }
}



export default Player