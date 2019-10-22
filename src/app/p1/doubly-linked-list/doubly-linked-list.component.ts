import { Component, OnInit } from '@angular/core';
import { Node } from './doubly-linked-node';
import { DoublyLinkedList } from './doubly-linked-list';

@Component({
  selector: 'app-doubly-linked-list',
  templateUrl: './doubly-linked-list.component.html',
  styleUrls: ['./doubly-linked-list.component.css']
})
export class DoublyLinkedListComponent implements OnInit {
  doublyList: DoublyLinkedList;
  arrayList: any = [];
  input = '';
  error = false;
  input_count = '';
  node_missing = false;

  constructor() {
    this.doublyList = new DoublyLinkedList();
  }

  ngOnInit() {
    let node1: Node = new Node('A');
    let node2: Node = new Node('B');
    let node3: Node = new Node('C');
    let node4: Node = new Node('D');
    let node5: Node = new Node('E');
    let node6: Node = new Node('F');
    this.doublyList.addNodeBeginning(node1);
    this.doublyList.addNodeBeginning(node2);
    this.doublyList.addNodeBeginning(node3);
    this.doublyList.addNodeBeginning(node4);
    this.doublyList.addNodeBeginning(node5);
    this.doublyList.addNodeBeginning(node6);

    // console.log(this.doublyList);
    this.displayList();
  }

  addElementBegginning(): void {
    this.error = false;
    if(this.input === '') {
      this.error = true;
    } else {
      let node = new Node(this.input);
      this.doublyList.addNodeBeginning(node);
    }
    this.displayList();
  }

  addElementBefore(): void {
    this.error = false;
    this.node_missing = false;
    if(this.input === '' || this.input_count === '') {
      this.error = true;
    } else {
      let oldNode = this.doublyList.getNodeByCount(parseInt(this.input_count, 10));
      let newNode = new Node(this.input);
      if(oldNode != null) {
        this.doublyList.addNodeBefore(oldNode, newNode);
      } else {
        this.node_missing = true;
      }
    }
    this.displayList();
  }

  displayList(): void {
    let current = this.doublyList.head;
    let counter: number = 0;
    while(current) {
      this.arrayList[counter] = current;
      console.log(current);
      current = current.getNext();
      counter++;
    }
  }

}
