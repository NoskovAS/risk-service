import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavbarService } from '../../../service/navbar/navbar.service';
import { FooterService } from '../../../service/footer/footer.service';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.css']
})
export class AdminNavbarComponent implements OnInit, OnDestroy {

  constructor(private navbarService: NavbarService,
              private footerService: FooterService) { }

  ngOnInit() {
  }

  ngOnDestroy() {
    console.log('ngOnDestroy navbar');
    this.navbarService.show();
    this.footerService.show();
  }

}
