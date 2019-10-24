import { Node } from './stack-linked-node';
export class Stack {
  head?: Node;
  tail?: Node;
  count: number;
  constructor() {
    this.head = null;
    this.tail = null;
    this.count = 0;
  }
  revieveAllNode() {
    let nodeArray = [];
    let sk_current: Node = this.head;
    let nodeCounter = 0;
    while(sk_current) {
      nodeArray[this.count - nodeCounter] = sk_current;
      sk_current = sk_current.getNext();
      nodeCounter++;
    }
    return nodeArray;
  }

  peek(): Node {
    return this.tail;
  }

  getSize(): number {
    return this.count;
  }

  push(node: Node): void {
    if(this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.setNext(node);
      this.tail = node;
    }
    this.count++;
  }

  pop(): Node {
    // A B C D E F G
    let tail_node = this.tail;
    this.tail = this.getPreviousNode(this.tail);
    this.tail.setNext(null);
    // A B C D E F->null
    this.count--;

    return tail_node;
  }

  getPreviousNode(node: Node): Node {
    let current = this.head;
    while(current) {
      if(current.getNext() === node) {
        return current;
      }
      current = current.getNext()
    }
  }
}
