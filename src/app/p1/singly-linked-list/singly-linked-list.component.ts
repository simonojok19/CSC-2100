import { Component, OnInit } from '@angular/core';
import { LinkedList } from './linked-list';
import { Node } from './node';

@Component({
  selector: 'app-singly-linked-list',
  templateUrl: './singly-linked-list.component.html',
  styleUrls: ['./singly-linked-list.component.css']
})
export class SinglyLinkedListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let list = new LinkedList();
    list.addNodeBeginning(new Node(45, null));
    list.addNodeBeginning(new Node(-45, null));
    list.addNodeBeginning(new Node(5, null));
    console.log(list);
  }
}
