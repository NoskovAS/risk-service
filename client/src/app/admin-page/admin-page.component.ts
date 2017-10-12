import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { RiskListModule } from '../risk-list/risk-list.module';
import { Users } from './users.class';
import { AdminService } from '../service/admin/admin.service';
import { SharedModule } from '../share/shared.module';
import { TableService } from '../service/table/table.service';
import { Data } from '../risk-list/data.class';
import { Risk } from '../risk-list/risk.class';
import { RiskListService } from '../service/risk-list/risk-list.service';
import { ChildParentService } from '../service/child-parent/child-parent.service';

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

  constructor(private adminService: AdminService,
              private tableService: TableService,
              private riskListService: RiskListService,
              private childParentService: ChildParentService) { }

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

    this.displayTable === true ? this.displayTable = false : this.displayTable = true;
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

}
