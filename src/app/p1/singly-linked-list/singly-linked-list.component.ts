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
    let node1 = new Node('First Node');
    let node2 = new Node('Second Node');
    let node3 = new Node('Third Node');
    let node4 = new Node('Fourth Node');
    let node5 = new Node('Fifth Node');

    list.addNodeEnd(node1);
    list.addNodeEnd(node2);
    list.addNodeEnd(node3);
    list.addNodeEnd(node4);
    list.addNodeEnd(node5);
    list.removeNodeAfter(node2);
    console.log(list);
  }
}
