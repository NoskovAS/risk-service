import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
  user: Object;
  constructor() { }

  ngOnInit() {
    this.user = JSON.parse(localStorage['user']);
  }

}
