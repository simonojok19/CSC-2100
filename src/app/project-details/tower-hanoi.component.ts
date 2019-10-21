import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-tower-hanoi',
  templateUrl: './tower-hanoi.component.html',
  styleUrls: ['./tower-hanoi.component.css']
})
export class TowerHanoiComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(() => {
      alert('Hello Jquery');
    });
  }

}
