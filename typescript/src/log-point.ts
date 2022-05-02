export interface Point {
  x: number,
  y: number,
}

export function logPoint(p: Point) {
  return `${p.x}, ${p.y}`
}

