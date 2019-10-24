export class Node {
  private value: any;
  private next: Node;
  constructor(node_value: any) {
    this.value = node_value;
    this.next = null;
  }

  getNext(): Node {
    return this.next;
  }

  setNext(node: Node): void {
    this.next = node;
  }

  getValue(): any {
    return this.value;
  }
}
