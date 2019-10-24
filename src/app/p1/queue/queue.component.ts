import { Component, OnInit } from '@angular/core';
import { Queue } from './doubly-linked-queue';
import { Node } from './queue-node';

@Component({
  selector: 'app-queue',
  templateUrl: './queue.component.html',
  styleUrls: ['./queue.component.css']
})
export class QueueComponent implements OnInit {
  queue: Queue;
  queueArray = [];
  retrive_all_array: [];

  constructor() {
    this.queue = new Queue(10);
  }

  ngOnInit() {
    let node1: Node = new Node('A');
    let node2: Node = new Node('B');
    let node3: Node = new Node('C');
    let node4: Node = new Node('D');
    this.queue.enqueue(node1);
    this.queue.enqueue(node2);
    this.queue.enqueue(node3);
    this.queue.enqueue(node4);
    this.queue.enqueue(new Node('E'));
    this.queue.enqueue(new Node('F'));
    this.queue.enqueue(new Node('G'));
    this.queue.enqueue(new Node('H'));
    console.log(this.queue);
    console.log(this.queue.dequeue());
    console.log(this.queue.retrieveAllNode());
    this.displayQueue();
  }

  retrieveAllElements(): void {
    this.retrive_all_array = [];
    let current = this.queue.head;
    let i = 0;
    while(current) {
      this.retrive_all_array[this.queue.getCount() - i - 1] = current;
      current = current.getNext();
      i++;
    }
  }

  getSize(): number {
    return 11;
  }

  displayQueue() {
    this.queueArray = [];
    let current = this.queue.head;
    let i = 0;
    while(current) {
      this.queueArray[i] = current;
      // console.log(current.getValue());
      current = current.getNext();
      i++;
    }
  }

}
