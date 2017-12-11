import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth/auth.service';
import { NavbarService } from '../service/navbar/navbar.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  public logo: string = ('./assets/logo.png');

  constructor(public authService: AuthService,
    private router: Router,
    public navbarService: NavbarService) { }

  onLogoutClick(): boolean {
    this.authService.logout();
    this.router.navigate(['/users/login']);
    return false;
  }

}
