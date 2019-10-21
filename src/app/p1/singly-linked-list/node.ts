export class Node {
  constructor(private value, private next: Node) {}

  getNext(): Node {
    return this.next;
  }

  getValue() {
    return this.value;
  }
}
