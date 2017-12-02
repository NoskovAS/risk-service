import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { Router } from '@angular/router';
import { ChildParentService } from '../../../../service/child-parent/child-parent.service';

@Component({
  selector: 'app-dashboard-charts',
  templateUrl: './dashboard-charts.component.html',
  styleUrls: ['./dashboard-charts.component.css']
})
export class DashboardChartsComponent implements OnInit, AfterContentChecked {
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

  constructor(private router: Router,
    private childParentService: ChildParentService) { }

  ngOnInit() {
    if (this.router.url === '/admin/charts') {
      this.mainComponent = true;
      this.mainMarginTop = '56';
    }
  }

  ngAfterContentChecked() {
    this.sidebarToggled = this.childParentService.getVariable();
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

}
