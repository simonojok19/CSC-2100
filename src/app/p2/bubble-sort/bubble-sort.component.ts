import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-bubble-sort',
  templateUrl: './bubble-sort.component.html',
  styleUrls: ['./bubble-sort.component.css']})
export class BubbleSortComponent implements OnInit {
	 public rowItems = "";
	 public items = [];
	  public sorted;
  	   ngOnInit(): void {
  	}

  	constructor() { }
    bubbleSort(itemsToBeSorted): void {
		    let length = itemsToBeSorted.length;
		    let now = performance.now();
		for(let i = 0; i < length; i++) {
			for(let j = 0; j < length; j++) {
				if(itemsToBeSorted[j] > itemsToBeSorted[j + 1]) {
					let temp = itemsToBeSorted[j];
					itemsToBeSorted[j] = itemsToBeSorted[j + 1]
					itemsToBeSorted[j + 1] = temp;
				}
			}
		}
		let then = performance.now();
		this.sorted = itemsToBeSorted;
		alert(then + " " + now);
	}

	handleClick(): void {
		let stringItem = this.rowItems.split(",");
		for(let i = 0; i < stringItem.length; i++) {
			this.items[i] = parseInt(stringItem[i], 10);
		}
		this.bubbleSort(this.items);
	}

}
