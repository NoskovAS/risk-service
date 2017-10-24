import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  user: Object;

  constructor() { }

  ngOnInit() {
    this.user = JSON.parse(localStorage['user']);
  }

}
