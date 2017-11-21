import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../../service/navbar/navbar.service';
import { FooterService } from '../../service/footer/footer.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor(private navbarService: NavbarService,
              private footerService: FooterService) {}

  ngOnInit() {
    this.navbarService.hide();
    this.footerService.hide();
  }

}
