import { Component, OnInit } from '@angular/core';
import { Stack } from './stack-ds';
import { Node } from './stack-linked-node';

@Component({
  selector: 'app-stack',
  templateUrl: './stack.component.html',
  styleUrls: ['./stack.component.css']
})
export class StackComponent implements OnInit {
  stack: Stack;
  stackArray: any = [];
  stPeekArray: any = [];
  top = null;
  show = false;
  showSize = false;
  showAll = false;
  pop_off = null;
  push_element ='';

  constructor() {
    this.stack = new Stack();
  }

  ngOnInit() {
    let node1: Node = new Node('A');
    let node2: Node = new Node('B');
    let node3: Node = new Node('C');
    this.stack.push(node1);
    this.stack.push(node2);
    this.stack.push(node3);
    this.stack.push(new Node('D'));
    this.stack.push(new Node('E'));
    this.stack.push(new Node('F'));
    this.stack.push(new Node('G'));
    this.stack.push(new Node('H'));
    this.displayStackList();
  }

  popElement(): void {
    this.pop_off = this.stack.pop();
    this.displayStackList();
  }

  pushElement(): void {
    this.stack.push(new Node(this.push_element));
    this.push_element = '';
    this.displayStackList();
  }

  private displayStackList() {
    this.stackArray = [];
    let current = this.stack.head;
    let counter: number = 0;
    while(current) {
      this.stackArray[counter] = current;
      current = current.getNext();
      counter++;
    }
  }

  peekAll() {
    let current = this.stack.head;
    let counter: number = 0;
    while(current) {
      this.stPeekArray[this.stack.getSize() - (counter + 1)] = current;
      // console.log(this.stPeekArray[this.stack.getSize() - counter].getValue());
      counter++;
      current = current.getNext();
    }
  }


  peek(): void {
    if(this.show === true) {
      this.show = false;
    } else {
      this.show = true;
    }
  }

  displaySize(): void {
    if(this.showSize === true) {
      this.showSize = false;
    } else {
      this.showSize = true;
    }
  }
}
