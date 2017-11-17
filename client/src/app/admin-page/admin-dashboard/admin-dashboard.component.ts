import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarService } from '../../service/navbar/navbar.service';
import { FooterService } from '../../service/footer/footer.service';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { AdminSidebarComponent } from '../share/admin-sidebar/admin-sidebar.component';


@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit, OnDestroy {

  constructor(public navbarService: NavbarService,
              public footerService: FooterService,
              public adminNavbarComponent: AdminNavbarComponent,
              public adminSidebarComponent: AdminSidebarComponent) {}

  ngOnInit() {
    this.navbarService.hide();
    this.footerService.hide();
  }

  ngOnDestroy() {}

}
