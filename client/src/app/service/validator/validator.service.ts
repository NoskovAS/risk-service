import { Injectable } from '@angular/core';
import { AbstractControl, FormGroup, Validators, ValidatorFn } from '@angular/forms';

@Injectable()
export class ValidatorService {

  constructor() {}

  passwordsAreEqual(): ValidatorFn {
    return (group: FormGroup): {
      [key: string]: any
    } => {
      if (!(group.dirty || group.touched) || group.get('pwd').value === group.get('confirm').value) {
        return null;
      }
      return {
        custom: 'Passwords are not equal'
      };
    };
  }

  stringValidator(): ValidatorFn {
    const pattern: RegExp = /^[\w\.\$@\*\!]{5,30}$/;
    return (control: AbstractControl): { [key: string]: any } => {
      if (!(control.dirty || control.touched)) {
        return null;
      } else {
        return pattern.test(control.value) ? null : {custom: `Min length:5, max length: 30. Can't contain whitespaces & special symbols.`};
      }
    };
  }
}
