export interface Vector2D {
    x: number
    y: number
}

export type Direction = [string, string, string, string]
export interface VectorDir {
    Up: Vector2D
    Down: Vector2D
    Left: Vector2D
    Right: Vector2D
}