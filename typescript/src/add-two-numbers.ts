import { Node } from "./node";
import { LinkedList } from "../src/linked-list";

export function addTwoNumbers(l1: LinkedList<number> | null, l2: LinkedList<number> | null ): LinkedList<number> | null {
  const l1Number = Number(l1.traverse().join(''))
  const l2Number = Number(l2.traverse().join(''))
  const sumArray = String(l1Number + l2Number).split('').map(Number)
  const linkedList = new LinkedList<number>()
  sumArray.forEach(function (value) {
    linkedList.insertAtEnd(value)
  })
  return linkedList
}
