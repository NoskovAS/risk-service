import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ValidatorFn } from '@angular/forms';
import { ValidateService } from '../../service/validator/validate.service';
import { AuthService } from '../../service/auth/auth.service';
import { ValidatorService } from '../../service/validator/validator.service';
import { TableService } from '../../service/table/table.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements AfterViewInit {
  public registerForm: FormGroup = null;

  @ViewChild('inputFocus') vc: any;

  fieldError: boolean = false;
  validError: boolean = false;
  showPass: boolean = false;


  constructor(private validatorService: ValidatorService,
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder) {
    const pwdValidators: ValidatorFn[] = [Validators.required, Validators.minLength(6), Validators.maxLength(20)];
    const emailValidator: ValidatorFn[] = [Validators.email];

    this.registerForm = fb.group({
      firstname: ['', [Validators.required, validatorService.stringValidator()]],
      lastname: ['', [Validators.required, validatorService.stringValidator()]],
      username: ['', [Validators.required, validatorService.stringValidator()]],
      email: ['', emailValidator],
      date: new Date,
      password: fb.group({
        pwd: ['', pwdValidators],
        confirm: ['', pwdValidators]
      },
        {
          validator: validatorService.passwordsAreEqual()
        })
    });
  }

  ngAfterViewInit() {
    this.vc.nativeElement.focus();
  }

  toggleShowPassword(passInput: any) {
    passInput.type = passInput.type === 'password' ? 'text' : 'password';
  }

  onRegisterSubmit() {
    if ((this.registerForm.value.firstname === '') || (this.registerForm.value.lastname === '') ||
      (this.registerForm.value.username === '') || (this.registerForm.value.email === '') ||
      (this.registerForm.value.password === '')) {
      this.fieldError = true;
      return;
    }
    if (!this.registerForm.valid) {
      this.validError = true;
      return;
    }

    const user: object = this.registerForm.value;

    // Register user
    this.authService.registerUser(user).subscribe(data => {
      if (data.success) {
        this.router.navigate(['users/login']);
      } else {
        this.router.navigate(['users/register']);
      }
    });
  }
}
