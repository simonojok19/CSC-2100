import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BubbleSortComponent } from './bubble-sort/bubble-sort.component';
import { InsertionSortComponent } from './insertion-sort/insertion-sort.component';
import { SelectionSortComponent } from './selection-sort/selection-sort.component';
import { MergeSortComponent } from './merge-sort/merge-sort.component';
import { QuickSortComponent } from './quick-sort/quick-sort.component';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
  	BubbleSortComponent,
  	InsertionSortComponent,
  	SelectionSortComponent,
  	MergeSortComponent,
  	QuickSortComponent,
  	],
  imports: [
    CommonModule,
    MatButtonModule,
    FormsModule
  ],
  exports: [
  	BubbleSortComponent,
  	InsertionSortComponent,
  	SelectionSortComponent,
  	MergeSortComponent,
  	QuickSortComponent
  	],

})
export class P2Module { }
