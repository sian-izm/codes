export function reverseList(head: Node | null): Node | null {
  if (!head.next) return head
  const array: number[] = traverse(head)
  const newNode = new Node(0);
  array.forEach(async(element) =>{
    newNode.val = element
  });

function traverse(head: Node): number[] {
  const result = new Array<number>()
  const pushData = (node: Node): void => {
    result.push(node.data)
    if (node.next) {
      pushData(node.next)
    }
  }
  pushData(head)
  return result
}

class Node {
  val: number
  next: Node | null
  constructor(val?: number, next?: Node | null) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
}
