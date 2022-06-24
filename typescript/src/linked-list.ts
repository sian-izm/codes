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

  public insertAtEnd(data: T): Node<T> {
    const node = new Node(data);
    if (!this.head) {
      this.head = node;
    } else {
      const getLast = (node: Node<T>): Node<T> => {
        return node.next ? getLast(node.next) : node;
      }

      const lastNode = getLast(this.head);
      lastNode.next = node;
      node.prev = lastNode;
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

  public size(): number {
    return this.traverse().length;
  }

  public search(comparator: (data: T) => boolean): Node<T> | null {
    const checkNext = (node: Node<T>): Node<T> | null => {
      if (comparator(node.data)) {
        return node;
      }
      return node.next ? checkNext(node.next) : null;
    }
    return this.head ? checkNext(this.head) : null;
  }

  public deleteNode(node: Node<T>): void {
    if (!node.prev) {
      this.head = node.next
    } else {
      node.prev.next = node.next
    }
  }

  public deleteDuplicatedNodes(): void {
    const node = this.head
    if (!node) {
      return
    }
    const array: T[] = new Array<T>()
    const appendNode = (node: Node<T>): void => {
      if (array.includes(node.data)) {
        const nextNode = findNextNotDuplicatedNode(array, node)

        node.prev.next = nextNode
        appendNode(nextNode)
      } else {
        array.push(node.data)
        node.next ? appendNode(node.next) : null
      }
    }
    const findNextNotDuplicatedNode = (array: T[], node: Node<T>): Node<T> => {
      if (array.includes(node.next.data)) {
        return findNextNotDuplicatedNode(array, node.next)
      } else {
        return node.next
      }
    }

    array.push(node.data)
    node.next ? appendNode(node.next) : null
  }

  public findNextNotDuplicatedNode(array: T[], node: Node<T>): Node<T> {
    if (node.next !== null && array.includes(node.next.data)) {
      return this.findNextNotDuplicatedNode(array, node.next)
    } else {
      return node.next
    }
  }

  public deleteAllDuplicatedNodes(): void {
    let node = this.head
    if (!node) {
      return
    }

    const array = new Array<T>();
    const replaceNode = (node: Node<T>): void => {
      console.log(node)
      console.log(array)
      if (array.includes(node.data)) {
        // console.log(node.data)
        // console.log(node.prev.data)
        // console.log(node.next.data)
        const nextNode = this.findNextNotDuplicatedNode(array, node)
        node.prev.next = nextNode
        // console.log(this.head)
        // console.log(node.prev.data)
        // console.log('-----');
        if (nextNode && nextNode.next) {
          replaceNode(nextNode)
        }
      } else {
        array.push(node.data)
        node.next ? replacePrevNode(node.next) : null
      }
    }

    const replacePrevNode = (node: Node<T>): void => {
      console.log(node)
      console.log(array)
      if (array.includes(node.data)) {
        // console.log(node.data)
        // console.log(node.prev.data)
        // console.log(node.next.data)
        const nextNode = this.findNextNotDuplicatedNode(array, node)
        node.prev.prev.next = nextNode
        // console.log(this.head)
        // console.log(node.prev.data)
        // console.log('-----');
        if (nextNode && nextNode.next) {
          replaceNode(nextNode)
        }
      } else {
        array.push(node.data)
        node.next ? replacePrevNode(node.next) : null
      }
    }


    const replaceNodeOfHead = (node: Node<T>): void => {
      if (array.includes(node.data)) {
        const nextNode = this.findNextNotDuplicatedNode(array, node)
        this.head = nextNode
        node = this.head
        if (!node) return
        nextNode ? array.push(nextNode.data) : null
        node.next ? replaceNodeOfHead(node.next) : null
      }
    }
    array.push(node.data)
    if (!node.next) return
    replaceNodeOfHead(node.next)
    console.log('replace Node')
    replaceNode(node.next)
  }
}
