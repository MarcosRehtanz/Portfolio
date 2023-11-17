
interface InputTimer {
    start?: number
    inGame?: number
    finish?: number
    fps: number
}

// type TimerState = 'start' | 'inGame' | 'finish'
export enum TimerState {
    start = 0,
    inGame = 1,
    finish = 2,
    gameOver = -1,
}

export class Timer {
    constructor({ start, inGame, finish, fps }: InputTimer) {
        this.start = start || this.start
        this.inGame = inGame || this.inGame
        this.finish = finish || this.finish

        this.time = start || this.start
        this.fps = fps
    }
    fps: number
    start = 3
    inGame = 5
    finish = 3
    time: number
    state = 0

    go = () => {

        this.time = this.time - 1 / this.fps /2

        return Math.ceil(this.time)
    }
    next = () => {

        switch (this.state) {
            case TimerState.start: {
                this.state = TimerState.inGame
                this.time = this.inGame
                return { time: this.time, state: TimerState.inGame }
            }
            case TimerState.inGame: {
                this.state = TimerState.finish
                this.time = this.finish
                return { time: this.time, state: TimerState.finish }
            }
            case TimerState.finish: {
                this.state = TimerState.gameOver
                return { time: this.time, state: TimerState.gameOver }
            }
            default: {
                this.state = TimerState.gameOver
                return { time: this.time, state: TimerState.gameOver }
            }
        }

    }
}