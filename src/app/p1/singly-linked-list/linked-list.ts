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
    if(true===true) {
      newNode.setNext(oldNode);
      oldNode = newNode;
      this.count++;
    }
  }

  addNodeAfter(oldNode: Node, newNode: Node) {
    if(true === true) {
      newNode.setNext(oldNode.getNext());
      oldNode.setNext(newNode);
    }
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
    if(this.count === 0) {
      console.log('List empty');
    } else {
      this.tail = null;
      this.count--;
    }
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
    let n = null;
    while( current.getNext()) {
      if(current.getNext() === node) {
        n = current.getNext();
      }
      current = current.getNext();
    }
    return n;
  }

  removeNodeBefore(node: Node) {
    this.getNodeBefore(this.getNodeBefore(node)).setNext(node);
    this.count--;
  }

  removeNodeAfter(node: Node) {
    node.setNext(node.getNext().getNext());
    console.log(node.getNext());
    this.count--;
  }
}
