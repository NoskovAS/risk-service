import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../../service/navbar/navbar.service';
import { FooterService } from '../../service/footer/footer.service';
import { ChildParentService } from '../../service/child-parent/child-parent.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor(private navbarService: NavbarService,
              private footerService: FooterService,
              private childParentService: ChildParentService) {}

  ngOnInit() {
    this.navbarService.hide();
    this.footerService.hide();
  }

  toggleSidebar(emit) {
    if (emit === true) {
      // Small sidebar
      this.childParentService.passSecondVariable(true);
    } else {
      // Big sidebar
      this.childParentService.passSecondVariable(false);
    }
  }

}
