import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavbarService } from '../service/navbar/navbar.service';
import { FooterService } from '../service/footer/footer.service';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit, OnDestroy {
  public entered: string = JSON.parse(localStorage.getItem('user') || 'null');

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
