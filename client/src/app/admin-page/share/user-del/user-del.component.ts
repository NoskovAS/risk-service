import { Component, OnInit, Input } from '@angular/core';
import { AdminService } from '../../../service/admin/admin.service';

@Component({
  selector: 'app-user-del',
  templateUrl: './user-del.component.html',
  styleUrls: ['./user-del.component.css']
})
export class UserDelComponent implements OnInit {
  @Input() users;
  @Input() username;
  @Input() i;

  constructor(private adminService: AdminService) { }

  ngOnInit() {}

  userDelete(username: string = this.username, i: number = this.i) {
    const user = {
      username: username,
    };

    this.adminService.deleteUser(user).subscribe(data => {
      if (data.success) {
        this.users.splice(i, 1);
        console.log('Successfull user removal');
      } else {
        console.log('Wrong user removal');
      }
    });
  }

}
