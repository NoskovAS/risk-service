import { Component, OnInit, AfterContentChecked, OnChanges, OnDestroy } from '@angular/core';
import { AdminService } from '../../../../service/admin/admin.service';
import { TableService } from '../../../../service/table/table.service';
import { RiskListService } from '../../../../service/risk-list/risk-list.service';
import { ChildParentService } from '../../../../service/child-parent/child-parent.service';
import { AuthService } from '../../../../service/auth/auth.service';
import { Router } from '@angular/router';
import { Users } from '../../../users/users.class';
import { Data } from '../../../../risk-list/data.class';

@Component({
  selector: 'app-dashboard-tables',
  templateUrl: './dashboard-tables.component.html',
  styleUrls: ['./dashboard-tables.component.css']
})
export class DashboardTablesComponent implements OnInit, AfterContentChecked, OnChanges, OnDestroy {
  users: Users[] = [];
  adminItems: Data[] = [];
  // The variable show that the current route is the main (Admin Dashboard)
  mainComponent: boolean = false;

  // Sort
  isDesc: boolean = false;
  column: string;
  direction: number;

  displayTable: boolean = false;
  username: string;

  admUsername: string;
  admPass: string;
  sidebarToggled: boolean = false;

  /* Page styles */
  card = {
    marginTop: '20',
    marginLeft: '20',
    marginRight: '0',
    width: '95'
  };

  riskCard = {
    marginTop: '10',
    marginLeft: '20',
    width: '95'
  };

  constructor(
    private adminService: AdminService,
    private tableService: TableService,
    private riskListService: RiskListService,
    private childParentService: ChildParentService,
    private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
    if (this.router.url === '/admin/tables') {
      this.mainComponent = true;
    }
    // Get variable for editing page view after sidebar edit
    this.users = [];
    this.getUsers();
  }

  ngAfterContentChecked() {
    this.sidebarToggled = this.childParentService.getVariable();
    if (this.sidebarToggled) {
      this.editPage(true);
    } else {
      this.editPage(false);
    }
  }

  ngOnChanges() { }

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

  editPage(flag: boolean) {
    if (flag) {
      this.card.marginLeft = '-135';
      this.card.width = '108';
    } else {
      this.card.marginLeft = '20';
      this.card.width = '95';
    }
  }

}
