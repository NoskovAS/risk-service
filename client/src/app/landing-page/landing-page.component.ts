import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavbarService } from '../service/navbar/navbar.service';
import { FooterService } from '../service/footer/footer.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit, OnDestroy {
  public logo = ('./assets/logo.png');

  constructor(private navbarService: NavbarService,
              private footerService: FooterService) { }

  ngOnInit() {
    this.navbarService.hide();
    this.footerService.hide();
  }

  ngOnDestroy() {
    this.navbarService.show();
    this.footerService.show();
  }



}
