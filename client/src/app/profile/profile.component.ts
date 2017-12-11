import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent {
  user: object = JSON.parse(localStorage.getItem('user') || 'null');
  public socialLogin: boolean = JSON.parse(localStorage.getItem('social') || 'null');

  constructor() { }

}
