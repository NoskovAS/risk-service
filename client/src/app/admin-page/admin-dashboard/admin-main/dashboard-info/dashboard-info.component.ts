import { Component, AfterContentChecked, OnInit, Input } from '@angular/core';
import { AdminService } from '../../../../service/admin/admin.service';
import { ChildParentService } from '../../../../service/child-parent/child-parent.service';

@Component({
  selector: 'app-dashboard-info',
  templateUrl: './dashboard-info.component.html',
  styleUrls: ['./dashboard-info.component.css']
})
export class DashboardInfoComponent implements OnInit, AfterContentChecked {
  @Input() reportsCount: number;
  risksCount: number;
  usersCount: number;

  sidebarToggled: boolean = false;

  /* Page styles */
  card = {
    marginTop: '20',
    marginLeft: '20',
    marginRight: '0',
    width: '95'
  };

  constructor(private adminService: AdminService,
    private childParentService: ChildParentService) { }

  ngOnInit() {
    this.getUsersCount();
  }

  ngAfterContentChecked() {
    this.sidebarToggled = this.childParentService.getSecondVariable();
    if (this.sidebarToggled) {
      this.editPage(true);
    } else {
      this.editPage(false);
    }
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

  getUsersCount() {
    this.adminService.getInfo().subscribe((data) => {
      this.usersCount = data.usersCount;
      this.risksCount = data.risksCount;
    });
  }

}
