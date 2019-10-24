import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StackComponent } from './stack/stack.component';
import { SinglyLinkedListComponent } from './singly-linked-list/singly-linked-list.component';
import { DoublyLinkedListComponent } from './doubly-linked-list/doubly-linked-list.component';
import { TowerHanoiComponent } from './tower-hanoi/tower-hanoi.component';
import { QueueComponent } from './queue/queue.component';


const components = [
  StackComponent,
  SinglyLinkedListComponent,
  DoublyLinkedListComponent,
  TowerHanoiComponent,
  QueueComponent
];
@NgModule({
  declarations: [components],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports : [components]
})
export class P1Module { }
