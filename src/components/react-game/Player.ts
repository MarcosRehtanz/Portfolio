import React, { useState } from 'react'
import { Vector2D } from './types'

interface InputController {
    up?: string
    down?: string
    left?: string
    right?: string
    stop?: string
}
interface InputPlayer {
    size?: Vector2D
    position?: Vector2D
    controller?: InputController
    color?: string
    speed?: number
    action?: Function
}
interface ActionMove {
    up: Function
    down: Function
    left: Function
    right: Function
    stop: Function
}


class Player {

    constructor({ position, size, controller, speed, color }: InputPlayer) {
        this.color = color || "rgb( 150, 125, 200)"
        this.size = {
            x: size?.x || 10,
            y: size?.y || 10,
        }
        this.position = {
            x: position?.x || 10,
            y: position?.y || 10,
        }
        this.controllers = {
            [controller?.up || 'w']: 'up',
            [controller?.down || 's']: 'down',
            [controller?.left || 'a']: 'left',
            [controller?.right || 'd']: 'right',
            [controller?.stop || 'q']: 'stop',
        }
        this.speed = speed || 2
        document.addEventListener('keydown', ({ key }) => {
            // console.log(key);
            // console.log(this.controllers[key]);
            try {
                this.actionMove[this.controllers[key]]()
            } catch (error) { }
        })
    }

    size: Vector2D
    position: Vector2D
    speed: number
    color: string
    moveDirection: Vector2D = { x: 0, y: 0 }
    controllers: InputController
    actionMove: ActionMove = {
        up: () => { this.moveDirection = { y: -this.speed, x: 0 } },
        down: () => { this.moveDirection = { y: this.speed, x: 0 } },
        left: () => { this.moveDirection = { x: -this.speed, y: 0 } },
        right: () => { this.moveDirection = { x: this.speed, y: 0 } },
        stop: () => { this.moveDirection = { y: 0, x: 0 } },
    }

}

export default Player