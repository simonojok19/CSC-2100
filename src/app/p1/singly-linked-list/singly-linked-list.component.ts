import { Component, OnInit } from '@angular/core';
import { LinkedList } from './linked-list';
import { Node } from './node';

@Component({
  selector: 'app-singly-linked-list',
  templateUrl: './singly-linked-list.component.html',
  styleUrls: ['./singly-linked-list.component.css']
})
export class SinglyLinkedListComponent implements OnInit {
  list: LinkedList;
  arrayList: any = [];
  counter = 0;
  input= '';
  secondInput = '';
  error = false;
  node_missing = false;
  input_count = '';

  constructor() {
    this.list = new LinkedList();
  }

  ngOnInit() {
    this.list.addNodeEnd(new Node('A'));
    this.list.addNodeEnd(new Node('B'));
    this.list.addNodeEnd(new Node('C'));
    this.list.addNodeEnd(new Node('D'));
    this.list.addNodeEnd(new Node('E'));
    this.displayList();
  }

  addElementBegginning(): void {
    this.error = false;
    if(this.input === '') {
      this.error = true;
    } else {
      this.list.addNodeBeginning(new Node(this.input));
    }
    this.displayList();
  }

  addElementBefore(): void {
    this.error = false;
    this.node_missing = false;
    if(this.input === '' || this.input_count === '') {
      this.error = true;
    } else {
      let oldNode = this.list.getNodeByCount(parseInt(this.input_count, 10));
      let newNode = new Node(this.input);
      console.log(this.input_count);
      if(oldNode != null) {
        this.list.addNodeBefore(oldNode, newNode);
      } else {
        this.node_missing = true;
      }
    }
    this.displayList();
  }

  addElementAfter(): void {
    this.error = false;
    this.node_missing = false;
    if(this.input === '' || this.input_count === '') {
      this.error = true;
    } else {
      let oldNode = this.list.getNodeByCount(parseInt(this.input_count, 10));
      let newNode = new Node(this.input);
      console.log(this.input_count);
      if(oldNode != null) {
        this.list.addNodeAfter(oldNode, newNode);
      } else {
        this.node_missing = true;
      }
    }
    this.displayList();
  }

  addElementEnd(): void {
    this.error = false;
    if(this.input === '') {
      this.error = true;
    } else {
      this.list.addNodeEnd(new Node(this.input));
    }
    this.displayList();
  }

  removeElementEnd(): void {
    this.error = false;
    // if(this.input === '') {
    //   this.error = true;
    // } else {
      this.list.removeNodeEnd();
      console.log('removing end');
    //}
    this.displayList();
  }

  removeElementBeginning(): void {
    this.error = false;
    // if(this.input === '') {
    //   this.error = true;
    // } else {
      this.list.removeNodeBeginning();
    //}
    this.displayList();
  }

  removeElementBefore(): void {
    this.error = false;
    this.node_missing = false;
    if(this.input_count === '') {
      this.error = true;
    } else {
      let oldNode = this.list.getNodeByCount(parseInt(this.input_count, 10));
      console.log(this.input_count);
      if(oldNode != null) {
        this.list.removeNodeBefore(oldNode);
      } else {
        this.node_missing = true;
      }
    }
    this.displayList();
  }

  removeElementAfter(): void {
    this.error = false;
    this.node_missing = false;
    if(this.input_count === '') {
      this.error = true;
    } else {
      let oldNode = this.list.getNodeByCount(parseInt(this.input_count, 10));
      console.log(this.input_count);
      if(oldNode != null) {
        this.list.removeNodeAfter(oldNode);
      } else {
        this.node_missing = true;
      }
    }
    this.displayList();
  }

  displayList() {
    this.arrayList = [];
    let current = this.list.head;
    let i: number = 0;
    while(current) {
      this.arrayList[i] = current;
      current = current.getNext();
      i++;
    }
  }

}
