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
      node.setNext(this.head);
      this.head = node;
    }
    this.count++;
  }

  addNodeEnd(node: Node) {
    if(this.count === 0) {
      this.addNodeBeginning(node);
    } else {
      this.tail.setNext(node);
      this.tail = node;
      this.count++;
    }
  }

  addNodeBefore(oldNode: Node, newNode: Node) {
    if(oldNode === this.head) {
      this.addNodeBeginning(newNode);
      console.log(oldNode, newNode);
    }
    else {
      console.log(newNode);
      this.getNodeBefore(oldNode).setNext(newNode);
      newNode.setNext(oldNode);
      this.count++;
    }
  }

  addNodeAfter(oldNode: Node, newNode: Node) {
    // if(oldNode === this.head) {
    //   this.addNodeEnd(newNode);
    //   console.log(oldNode, newNode);
    // }
    // else {
      console.log(newNode);
      newNode.setNext(this.getNodeAfter(oldNode));
      oldNode.setNext(newNode);
      this.count++;
    //}
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

  removeNodeBeginning() {
    if(this.count === 0) {
      console.log('List empty');
    } else {
      this.head = this.head.getNext();
      this.count--;
    }
  }

  removeNodeEnd() {
    if((this.count <= 1) && (this.count >= 1)) {
      this.head = null;
      this.tail = null;
      this.count--;
    } else {
      let last = this.getNodeBefore(this.tail);
      this.tail = last;
      last.setNext(null);
      this.count--;
    }
    console.log(this.count);
  }

  getNodeBefore(node: Node) {
    let current = this.head;
    while(current.getNext()) {
      if(current.getNext() === node) {
        return current;
      }
      current = current.getNext();
    }
  }

  getNodeAfter(node: Node) {
    let current = this.head;
    while(current.getNext()) {
      if(current === node) {
        return current.getNext();
      }
      current = current.getNext();
    }
  }

  removeNodeBefore(node: Node) {
    this.getNodeBefore(this.getNodeBefore(node)).setNext(node); // changing b
    this.count--;
  }

  removeNodeAfter(node: Node) {
    node.setNext(node.getNext().getNext());
    console.log(node.getNext());
    this.count--;
  }

  getSize(): number {
    return this.count;
  }
}
