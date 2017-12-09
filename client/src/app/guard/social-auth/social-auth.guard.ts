import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../../service/auth/auth.service';

@Injectable()
export class SocialAuthGuard implements CanActivate {

  constructor(private authService: AuthService,
    private router: Router,
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if ((localStorage.getItem('social') === 'true')) {
      this.router.navigate(['/profile/account']);
      return false;
    } else {
      return true;
    }
  }
}
