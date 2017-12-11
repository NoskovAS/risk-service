import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable()
export class SocialAuthGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if ((localStorage.getItem('social') === 'true')) {
      this.router.navigate(['/profile/account']);
      return false;
    } else {
      return true;
    }
  }
}
