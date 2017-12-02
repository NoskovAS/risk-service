import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { AdminService } from '../../../../service/admin/admin.service';
import { Reports } from './reports.class';
import { Router } from '@angular/router';
import { ChildParentService } from '../../../../service/child-parent/child-parent.service';

@Component({
  selector: 'app-dashboard-messages',
  templateUrl: './dashboard-messages.component.html',
  styleUrls: ['./dashboard-messages.component.css']
})
export class DashboardMessagesComponent implements OnInit, AfterContentChecked {
  reports: Reports[] = [];
  // The variable show that the current route is the main (Admin Dashboard)
  mainComponent: boolean = false;
  mainMarginTop: string = '5';

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

  constructor(private adminService: AdminService,
              private router: Router,
              private childParentService: ChildParentService
  ) { }

  ngOnInit() {
    if (this.router.url === '/admin/messages') {
      this.mainComponent = true;
      this.mainMarginTop = '56';
    }
    this.getReports();
  }

  ngAfterContentChecked() {
    this.sidebarToggled = this.childParentService.getVariable();
    if (this.sidebarToggled) {
      this.editPage(true);
    } else {
      this.editPage(false);
    }
  }

  getReports() {
    this.adminService.getReports().subscribe(data => {
      for (let i = 0; i !== data.length; i++) {
        this.reports.push(new Reports(data[i].username, data[i].message));
      }
    });
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
