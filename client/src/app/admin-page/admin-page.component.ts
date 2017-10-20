import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { RiskListModule } from '../risk-list/risk-list.module';
import { Users } from './users/users.class';
import { AdminService } from '../service/admin/admin.service';
import { SharedModule } from '../share/shared.module';
import { TableService } from '../service/table/table.service';
import { Data } from '../risk-list/data.class';
import { Risk } from '../risk-list/risk.class';
import { RiskListService } from '../service/risk-list/risk-list.service';
import { ChildParentService } from '../service/child-parent/child-parent.service';
import { AuthService } from '../service/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit, OnChanges, OnDestroy {
  users: Users[] = [];
  adminItems: Data[] = [];

  // Sort
  isDesc: boolean = false;
  column: string;
  direction: number;

  displayTable: boolean = false;
  username: string;

  admUsername: string;
  admPass: string;

  constructor(
    private adminService: AdminService,
    private tableService: TableService,
    private riskListService: RiskListService,
    private childParentService: ChildParentService,
    private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
    /* this.admUsername = prompt('Login: ', '');
    this.admPass = prompt('Password ', '');
    this.verifyAdmin(); */
    this.users = [];
    this.getUsers();
  }

  ngOnChanges() {
  }

  ngOnDestroy() {
    this.adminItems = [];
  }

  verifyAdmin() {
    const admin = {
      username: this.admUsername,
      password: this.admPass
    };

    this.authService.authenticateUser(admin).subscribe(data => {
      console.log(data);
      if (data.success) {
        return true;
      } else {
        this.router.navigate(['login']);
        return false;
      }

    });
  }

  getUsers() {
    // get users
    this.adminService.getUsers().subscribe(data => {
      for (let i = 0; i !== data.length; i++) {
        this.users.push(new Users(data[i].firstname, data[i].lastname, data[i].username,
          data[i].email, data[i].date));
      }
    });
  }

  // Recovery risks in table
  public riskRecovery(username = 'Semon') {
    this.adminItems = [];
    const user = {
      username
    };

    // get risks
    this.riskListService.getRisks(user).subscribe(data => {
      for (let i = 0; i !== data.length; i++) {
        this.adminItems.push(new Data(data[i].riskname, data[i].priority, data[i].hoursinfluence,
          data[i].costinfluence, data[i].commonChance, data[i].date, data[i].suggestions, data[i].index));
      }
    });

  }

  tableClear() {
    const user = {
      username: localStorage.getItem('username'),
    };

    // clear table
    this.riskListService.clearTable(user).subscribe(data => {
      this.adminItems = [];
      /* this.tableCleared.emit(); */
      console.log('Successful clear');
    });
  }

  sort(property: string) {
    this.isDesc = !this.isDesc; // change the direction
    this.column = property;
    this.direction = this.isDesc ? 1 : -1;
  }

  toggleTable(username, i) {
    this.username = username;
    this.riskRecovery(username);
    this.displayTable = true;
  }

}
