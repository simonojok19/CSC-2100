import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TowerHanoiComponent } from './tower-hanoi.component';

const components = [
  TowerHanoiComponent
];

@NgModule({
  declarations: [components],
  imports: [
    CommonModule
  ],
  exports: [components]
})
export class ProjectDetailsModule { }
