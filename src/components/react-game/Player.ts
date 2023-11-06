import React, { useState } from 'react'

interface Vector2D {
    x: number
    y: number
}
interface InputPlayer {
    color?: string
    position?: {
        height: number
        width: number
        x: number
        y: number
    }
}
interface Move {
    up: Function
    down: Function
    left: Function
    right: Function
    stop: Function
}

class Player {

    constructor({ color, position }: InputPlayer) {
        this.color = color || "rgb( 150, 125, 200)"
        this.size = {
            x: position?.width || 20,
            y: position?.height || 50,
        }
        this.position = {
            x: position?.x || 10,
            y: position?.y || 10,
        }
        document.addEventListener('keyup', ({ key }) => {
            switch (key) {
                case this.controllers.up:
                    this.actionMove.up()
                    break;
                case this.controllers.down:
                    this.actionMove.down()
                    break;
                case this.controllers.right:
                    this.actionMove.right()
                    break;
                case this.controllers.left:
                    this.actionMove.left()
                    break;
                default:
                    this.actionMove.stop()
                    break;
            }
        })
    }

    size: Vector2D
    position: Vector2D
    color: string
    moveDirection: Vector2D = { x: 0, y: 0 }
    controllers = { up: 'w', down: 's', left: 'a', right: 'd' }
    actionMove: Move = {
        up: () => { this.moveDirection.y = -1, this.moveDirection.x = 0 },
        down: () => { this.moveDirection.y = 1, this.moveDirection.x = 0 },
        left: () => { this.moveDirection.x = -1, this.moveDirection.y = 0 },
        right: () => { this.moveDirection.x = 1, this.moveDirection.y = 0 },
        stop: () => { this.moveDirection.y = 0, this.moveDirection.x = 0 },
    }
    draw = (ctx: any): void => {
        ctx.fillStyle = this.color
        ctx.fillRect(this.position.x, this.position.y, this.size.x, this.size.y)

        this.position.x += this.moveDirection.x * 2
        this.position.y += this.moveDirection.y * 2
    }

}

export default Player