export class Node {
  constructor(private value, private next: Node = null) {}

  getNext(): Node {
    return this.next;
  }

  getValue() {
    return this.value;
  }

  setNext(node: Node) {
    this.next = node;
  }
}
