import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-theory',
  templateUrl: './theory.component.html',
  styleUrls: ['./theory.component.css']
})
export class TheoryComponent implements OnInit {
  user: Object;

  constructor() { }

  ngOnInit() {
    this.user = JSON.parse(localStorage['user']);
  }

}
