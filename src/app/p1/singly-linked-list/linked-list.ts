import { Node } from './node';
export class LinkedList {
  head = null;
  tail = null;
  count = 0;
  constructor() {}
  addNodeBeginning(node: Node) {
    if(this.count === 0) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.count++;
  }

  addNodeEnd(node: Node) {
    if (this.count > 0) {
      this.tail.next = node;
      this.tail = node;
    } else {
      addFirstNode(node);
    }
    this.count++;
  }

}
