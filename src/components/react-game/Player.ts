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

        Action(ctx,
            this.color,
            this.position,
            this.size,
            this.moveDirection,
        ).catch(error => { })
        this.moveDirection = this.validatePosition() ? { x: 0, y: 0, } : this.moveDirection
    }
}



export default Player