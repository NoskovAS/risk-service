import { TestBed, async, inject } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';

import { AuthService } from '../service/auth/auth.service';
import { HttpModule } from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';
import { Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

describe('AuthGuard', () => {

let store = {};

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule, RouterTestingModule],
      providers: [AuthGuard, AuthService]
    });
  });

  beforeEach(() => {
    store = {};
    spyOn(localStorage, 'getItem').and.callFake((key: string): string => {
      return JSON.stringify(store[key]);
    });
  });

  it('should ...', inject([AuthGuard], (guard: AuthGuard) => {
    expect(guard).toBeTruthy();
  }));

  it('not have User in LocalStorage', inject([AuthGuard, Router], (guard: AuthGuard, router: Router) => {
    spyOn(router, 'navigate');

    expect(guard.canActivate({} as ActivatedRouteSnapshot, {} as RouterStateSnapshot)).toBeFalsy();
  }));

  it('route to available page when localStorage contain user', inject([AuthGuard, Router], (guard: AuthGuard, router: Router) => {

    store['user'] = 'Test User';

    spyOn(router, 'navigate');

    expect(guard.canActivate({} as ActivatedRouteSnapshot, {} as RouterStateSnapshot)).toBeTruthy();
    expect(router.navigate).not.toHaveBeenCalled();
  }));

});
