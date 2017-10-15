import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../service/auth/auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public logo = ('./assets/logo.png');

  constructor(public authService: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  onLogoutClick() {
    this.authService.logout();
    this.router.navigate(['/login']);
    return false;
}

}
