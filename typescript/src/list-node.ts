export class Node {
  val: number
  next: Node | null
  constructor(val?: number, next?: Node | null) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
}
