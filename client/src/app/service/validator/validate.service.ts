import { Injectable } from '@angular/core';

@Injectable()
export class ValidateService {

  constructor() {}

  validateLogin(user): boolean {
    if (user.username === undefined || user.password === '') {
      return false;
    } else {
      return true;
    }
  }

  validateRegister(user): boolean {
    if (user.firstname === undefined || user.lastname === undefined ||
      user.email === undefined || user.username === undefined || user.password === undefined) {
      return false;
    } else {
      return true;
    }
  }

  validateProfile(user): boolean {
    if (user.firstname === undefined || user.lastname === undefined ||
      user.email === undefined || user.username === undefined) {
      return false;
    } else {
      return true;
    }
  }


  validateEmail(email: string): boolean {
    // tslint:disable-next-line:max-line-length
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
}
