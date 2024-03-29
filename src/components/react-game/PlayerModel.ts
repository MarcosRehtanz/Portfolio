import React, { useState } from 'react'
import { Vector2D } from './types'
import { Matriz } from './utils'

interface InputController {
    Up: string
    Down: string
    Left: string
    Right: string
    stop: string
}
interface InputPlayer {
    size?: Vector2D
    position?: Vector2D
    controllers: InputController[]
    color?: string
    speed?: number
    action?: Function
}
interface ActionMove {
    Up: Function
    Down: Function
    Left: Function
    Right: Function
    stop: Function
}

class PlayerModel {

    constructor({ position, size, controllers, speed, color }: InputPlayer) {
        this.color = color || "rgb( 150, 125, 200)"
        this.size = {
            x: size?.x ? size?.x / 2 : 10,
            y: size?.y ? size?.y / 2 : 10,
        }
        this.sizeMap = size?.x || 20
        this.position = {
            x: position?.x || 0,
            y: position?.y || 0,
        }
        controllers?.forEach(controller => {
            this.controllers = {
                ...this.controllers,
                [controller.Up]: 'Up',
                [controller.Down]: 'Down',
                [controller.Left]: 'Left',
                [controller.Right]: 'Right',
                [controller.stop]: 'stop',
            }
        });

        this.moveDirection = { x: 0, y: 0 }
        this.speed = speed || 4
        document.addEventListener('keydown', ({ key }) => {


            if (
                this.controllers.hasOwnProperty(key) &&
                this.canMove
            ) {

                let C: number = 0
                try {
                    C = this.map[Math.floor(this.position.y / this.sizeMap)][Math.floor(this.position.x / this.sizeMap)]
                } catch (error) {
                    console.log(error);
                    C = 0
                }

                if (this.list[C - 1].hasOwnProperty(this.controllers?.[key])) {

                    if (this.validatePosition())
                        this.moveDirection = this.actionMove[this.controllers[key]]()

                }
            }
            if (!this.canMove) this.moveDirection = { x: 0, y: 0 }
        })
        document.addEventListener('click', ({ target }) => {

            if (
                target?.id &&
                this.canMove
            ) {

                let C: number = 0
                try {
                    C = this.map[Math.floor(this.position.y / this.sizeMap)][Math.floor(this.position.x / this.sizeMap)]
                } catch (error) {
                    console.log(error);
                    C = 0
                }

                if (this.list[C - 1].hasOwnProperty(target.id)) {

                    if (this.validatePosition())
                        this.moveDirection = this.actionMove[target.id]()

                }
            }
            if (!this.canMove) this.moveDirection = { x: 0, y: 0 }
        })
        // document.addEventListener('keyup', ({ key }) => {
        //     if (this.controllers.hasOwnProperty(key))
        //         this.stopMove[this.controllers[key]]()
        // })
    }
    validatePosition() {
        let C1: number = 0
        let C2: number = 0
        try {
            C1 = this.map[Math.floor(this.position.y / this.sizeMap)][Math.floor(this.position.x / this.sizeMap)]
        } catch (error) {
            // console.log(error);
            C1 = 0
        }
        try {
            C2 = this.map[Math.floor((this.position.y + this.sizeMap - 1) / this.sizeMap)][Math.floor((this.position.x + this.sizeMap - 1) / this.sizeMap)]
        } catch (error) {
            C2 = 0
        }
        return C1 == C2
    }
    map = new Matriz(4, 4)
    list: any[]
    size: Vector2D
    sizeMap: number
    canMove = false
    gameOver = false
    position: Vector2D
    endpoint: Vector2D
    speed: number
    color: string
    moveDirection: Vector2D = { x: 0, y: 0 }
    controllers: any
    stopMove = {
        Up: () => this.moveDirection = { y: 0, x: this.moveDirection.x },
        Down: () => this.moveDirection = { y: 0, x: this.moveDirection.x },
        Left: () => this.moveDirection = { x: 0, y: this.moveDirection.y },
        Right: () => this.moveDirection = { x: 0, y: this.moveDirection.y },
    }
    actionMove: ActionMove = {
        Up: (): Vector2D => ({ y: -this.speed, x: 0 }),
        Down: (): Vector2D => ({ y: this.speed, x: 0 }),
        Left: (): Vector2D => ({ x: -this.speed, y: 0 }),
        Right: (): Vector2D => ({ x: this.speed, y: 0 }),
        stop: (): Vector2D => ({ y: 0, x: 0 }),
    }

}

const PM = (props: InputPlayer) => {
    const color = props.color || "rgb( 150, 125, this.sizeMap0)"
    const size = {
        x: props.size?.x || 10,
        y: props.size?.y || 10,
    }
    const [position, setPosition] = useState({
        x: props.position?.x || 0,
        y: props.position?.y || 0,
    })
    const [controllers, setControllers]: any = useState()
    let __controllers: any;
    controllers.forEach(controller => {
        __controllers = {
            ...__controllers,
            [controller.Up]: 'Up',
            [controller.Down]: 'Down',
            [controller.Left]: 'Left',
            [controller.Right]: 'Right',
            [controller.stop]: 'stop',
        }
    });
    const speed = props.speed || 2
    const [moveDirection, setMoveDirection] = useState({ x: 0, y: 0 })
    const stopMove = {
        Up: () => setMoveDirection({ y: 0, x: moveDirection.x }),
        Down: () => setMoveDirection({ y: 0, x: moveDirection.x }),
        Left: () => setMoveDirection({ x: 0, y: moveDirection.y }),
        Right: () => setMoveDirection({ x: 0, y: moveDirection.y }),
    }
    const actionMove = {
        Up: () => setMoveDirection({ y: -speed, x: 0 }),
        Down: () => setMoveDirection({ y: speed, x: 0 }),
        Left: () => setMoveDirection({ x: -speed, y: 0 }),
        Right: () => setMoveDirection({ x: speed, y: 0 }),
        stop: () => setMoveDirection({ y: 0, x: 0 }),
    }
    const [draw, setDraw] = useState()
    // document.addEventListener('keydown', ({ key }) => {
    //     if (controllers.hasOwnProperty(key)) {

    //         const C = map[Math.floor(position.y / 20)][Math.floor(position.x / 20)]
    //         // console.log(C-1);

    //         // console.log(this.list[C-1]);
    //         // console.log(this.controllers[key]);
    //         // console.log(this.list[C-1].hasOwnProperty(this.controllers[key]));
    //         if (list[C - 1].hasOwnProperty(controllers[key])) {
    //             actionMove[controllers[key]]()
    //         }
    //     }
    // })
    // document.addEventListener('keyup', ({ key }) => {
    //     if (controllers.hasOwnProperty(key))
    //         stopMove[controllers[key]]()
    // })
    return { color, position: [position, setPosition], size, moveDirection, }
}

export default PlayerModel