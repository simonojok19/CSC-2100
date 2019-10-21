import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StackComponent } from './stack/stack.component';
import { SinglyLinkedListComponent } from './singly-linked-list/singly-linked-list.component';
import { DoublyLinkedListComponent } from './doubly-linked-list/doubly-linked-list.component';


const components = [
  StackComponent,
  SinglyLinkedListComponent,
  DoublyLinkedListComponent
];
@NgModule({
  declarations: [components],
  imports: [
    CommonModule
  ],
  exports : [components]
})
export class P1Module { }
