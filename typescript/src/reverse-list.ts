import { ListNode } from './list-node'

export function reverseList(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return head
  const reversedVals: number[] = traverse(head).reverse()
  let newNode = null
  const lastNode = (node?: ListNode): ListNode | null => {
    return node.next ? lastNode(node.next) : node
  }

  reversedVals.forEach(async(element) => {
    if (!newNode) {
      newNode = new ListNode(element)
    } else {
      const node: ListNode = lastNode(newNode)
      node.next = new ListNode(element)
    }
  })
  lastNode(newNode).next = null
  return newNode
}

export function traverse(head: ListNode): number[] {
  const result = new Array<number>()
  const pushData = (node: ListNode): void => {
    result.push(node.val)
    node.next ? pushData(node.next) : null
  }
  pushData(head)
  return result
}
