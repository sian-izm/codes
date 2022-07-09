import { Node } from './list-node'

export function reverseList(head: Node | null): Node | null {
  if (!head.next) return head
  const array: number[] = traverse(head)
  const newNode = new Node()
  const lastNode = (node: Node): Node | null => {
    return node.next ? lastNode(node.next) : node
  }

  array.forEach(async(element) =>{
    const node: Node = lastNode(newNode)
    node.val = element
    node.next = new Node()
  });
  lastNode(newNode).next = null
  return newNode
}

export function traverse(head: Node): number[] {
  const result = new Array<number>()
  const pushData = (node: Node): void => {
    result.push(node.val)
    node.next ? pushData(node.next) : null
  }
  pushData(head)
  return result
}
