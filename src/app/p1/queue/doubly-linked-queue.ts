import { Node } from './queue-node';
export class Queue {
  head: Node;
  tail: Node;
  count;
  constructor(private size: number) {
    this.head = null;
    this.tail = null;
    this.count = 0;
  }

  retrieveAllNode(){
    let outPut = [];
    let i = 0;
    let current = this.head;
    while(current) {
      outPut[i] = current;
      current = current.getNext();
      i++;
    }
    return outPut;
  }

  getSize(): number {
    return this.count;
  }

  getListSize(): number {
    return this.count;
  }

  enqueue(node: Node): void {
    if(this.count === 0 ) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.setNext(node);
      this.tail = node;
    }
    this.count++;
  }

  dequeue(): Node {
    let current = null;
    if(this.count === 0) {
      return null;
    } else if ( this.count === 1) {
      current = this.head;
      this.head = null;
      this.tail = null;
    } else {
      current = this.head;
      this.head = this.head.getNext();
    }
    this.count--;
    return current;
  }

  isEmpty(): boolean {
    return this.count === 0 ? true : false
  }

  isFull(): boolean {
    return this.count === this.size ? true : false;
  }

  getCount(): number{
    return this.count;
  }
}
