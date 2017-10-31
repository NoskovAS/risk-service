import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../service/profile/profile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-del',
  templateUrl: './account-del.component.html',
  styleUrls: ['./account-del.component.css']
})
export class AccountDelComponent implements OnInit {
  public dellError: boolean = false;
  constructor(private profileService: ProfileService,
              private router: Router) { }

  ngOnInit() {
  }

  accountDel() {
    const user = {
      username: localStorage.getItem('username')
    };

    this.profileService.deleteUser(user).subscribe(data => {
      if (data.success) {
        this.router.navigate(['login']);
        console.log('Successful account deletion');
      } else {
        this.dellError = true;
        console.log('Wrong account deletion');
      }
    });
  }
}
