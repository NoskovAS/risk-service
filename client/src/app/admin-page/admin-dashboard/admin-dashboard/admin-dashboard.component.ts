import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { AdminService } from '../../../service/admin/admin.service';
import { TableService } from '../../../service/table/table.service';
import { AuthService } from '../../../service/auth/auth.service';
import { Router } from '@angular/router';
import { ChildParentService } from '../../../service/child-parent/child-parent.service';
import { RiskListService } from '../../../service/risk-list/risk-list.service';
import { Data } from '../../../risk-list/data.class';
import { Users } from '../../users/users.class';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit, OnChanges, OnDestroy {
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
    this.users = [];
    this.getUsers();
  }

  ngOnChanges() {
  }

  ngOnDestroy() {
    this.adminItems = [];
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

