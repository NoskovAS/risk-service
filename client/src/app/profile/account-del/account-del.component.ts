import { Component } from '@angular/core';
import { ProfileService } from '../../service/profile/profile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-del',
  templateUrl: './account-del.component.html',
  styleUrls: ['./account-del.component.css']
})
export class AccountDelComponent {
  public dellError: boolean = false;

  constructor(private profileService: ProfileService,
              private router: Router) { }

  accountDel() {
    const user = {
      username: localStorage.getItem('username')
    };

    this.profileService.deleteUser(user).subscribe(data => {
      if (data.success) {
        localStorage.clear();
        this.router.navigate(['users/login']);
      } else {
        this.dellError = true;
      }
    });
  }
}
