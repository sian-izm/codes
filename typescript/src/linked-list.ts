import { LinkedListInterface } from "./linked-list.interface";
import { Node } from "./node";

export class LinkedList<T> implements LinkedListInterface<T> {
  private head: Node<T> | null = null;

  public insertInBegin(data: T): Node<T> {
    const node = new Node(data);
    if (!this.head) {
      this.head = node;
    } else {
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    }
    return node;
  }

  public traverse(): T[] {
    const array: T[] = [];
    if (!this.head) {
      return array;
    }
    const addToArray = (node: Node<T>): T[] => {
      array.push(node.data);
      return node.next ? addToArray(node.next) : array;
    };
    return addToArray(this.head);
  }
}
