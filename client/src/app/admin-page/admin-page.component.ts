import { Component, OnInit, OnChanges } from '@angular/core';
import { RiskListModule } from '../risk-list/risk-list.module';
import { Users } from './users.class';
import { AdminService } from '../service/admin/admin.service';
import { SharedModule } from '../share/shared.module';
import { TableService } from '../service/table/table.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit, OnChanges {
  users: Users[] = [];

  // Sort
  isDesc: boolean = false;
  column: string;
  direction: number;

  constructor(private adminService: AdminService,
              private tableService: TableService) { }

  ngOnInit() {
    this.users = [];
    this.getUsers();
  }

  ngOnChanges() {
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

  sort(property: string) {
    this.isDesc = !this.isDesc; // change the direction
    this.column = property;
    this.direction = this.isDesc ? 1 : -1;
  }

}
