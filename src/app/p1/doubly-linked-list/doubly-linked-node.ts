export class Node {
  private previous: Node;
  private value;
  private next: Node;
  constructor(value) {
    this.previous = null;
    this.value = value;
    this.next = null
  }

  getNext(): Node {
    return this.next;
  }

  getValue() {
    return this.value;
  }

  setNext(node: Node) {
    this.next = node;
  }

  getPrevious(): Node {
    return this.previous;
  }

  setPrevious(node: Node) {
    this.previous = node;
  }
}
