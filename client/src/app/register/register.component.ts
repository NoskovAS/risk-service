import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup, Validators, ValidatorFn } from '@angular/forms';
import { ValidateService } from '../service/validator/validate.service';
import { AuthService } from '../service/auth/auth.service';
import { ValidatorService } from '../service/validator/validator.service';
import { TableService } from '../service/table/table.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit, AfterContentChecked {
  public registerForm: FormGroup = null;

  constructor(private validateService: ValidateService,
              private validatorService: ValidatorService,
              private authService: AuthService,
              private tableService: TableService,
              private router: Router,
              private fb: FormBuilder
  ) {
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
      }, {
        validator: validatorService.passwordsAreEqual()
      })
    });
  }

  ngOnInit() {}

  ngAfterContentChecked() { }

  onRegisterSubmit() {
    const user = this.registerForm.value;
    console.log(user.date);

    // Register user
    this.authService.registerUser(user).subscribe(data => {
      if (data.success) {
        console.log('Successfull registred');
        this.router.navigate(['/login']);
      } else {
        console.log('Wrong registred');
        this.router.navigate(['/register']);
      }
    });

  }
}
