export class Node {
  constructor(public value: any, private next: Node = null) {

  }
  getNext(): Node {
    return this.next;
  }
  setNext(node: Node): void {
    this.next = node;
  }
  getValue(): void {
    return this.value;
  }
  setValue(value: any): void {
    this.value = value;
  }
  toString(): string {
    return "Node Value: " + this.value + " Node's Next: " + this.next;
  }
}
