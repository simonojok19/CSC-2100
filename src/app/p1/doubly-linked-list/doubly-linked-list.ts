import { Node } from './doubly-linked-node';
export class DoublyLinkedList {
  head: Node = null;
  tail: Node = null;
  count = 0;
  constructor() {}

  addNodeBeginning(node: Node) {
    if(this.count === 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.head.setPrevious(node);
      node.setNext(this.head);
      this.head = node;

    }
    this.count++;
  }

  getSize(): number {
    return this.count;
  }

  getNodeByCount(count: number) {
    let current = this.head;
    let counter = 1;
    let found = null;
    while( counter <= this.getSize()) {
      if( counter === count) {
        found = current;
      }

      if (current != null) {
        current = current.getNext()
      }
      counter++;
    }
    return found != null ? found : null;
  }

  addNodeBefore(oldNode: Node, newNode: Node) {
    if(oldNode === this.head) {
      this.addNodeBeginning(newNode);
    }
    else {
      console.log('adding node');
      this.count++;
    }
  }
}
