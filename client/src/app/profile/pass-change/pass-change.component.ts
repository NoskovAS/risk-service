import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { Router } from '@angular/router';
import { ValidateService } from '../../service/validator/validate.service';
import { ProfileService } from '../../service/profile/profile.service';
import { ValidatorService } from '../../service/validator/validator.service';
import { FormBuilder, ValidatorFn, Validators, AbstractControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-pass-change',
  templateUrl: './pass-change.component.html',
  styleUrls: ['./pass-change.component.css']
})
export class PassChangeComponent implements OnInit, AfterContentChecked {
  public passwordForm: FormGroup = null;

  public errors = {
    changed: false,
    changedError: false,
    noMatch: false,
    fieldError: false
  };

  constructor(private router: Router,
    private validateService: ValidateService,
    private profileService: ProfileService,
    private fb: FormBuilder,
    private validatorService: ValidatorService) {

    const pwdValidators: ValidatorFn[] = [Validators.required, Validators.minLength(6), Validators.maxLength(20)];

    this.passwordForm = this.fb.group({
      password: fb.group({
        pwd: ['', pwdValidators],
        confirm: ['', pwdValidators]
      }, {
          validator: validatorService.passwordsAreEqual()
        }),
      currentPass: ['', Validators.required],
      username: []
    });
  }

  ngOnInit() {
  }

  ngAfterContentChecked() {
  }

  onChangeSubmit() {
    this.errors.changed = false;
    this.errors.changedError = false;
    this.errors.fieldError = false;
    this.errors.noMatch = false;

    if ((this.passwordForm.value.password.pwd === '') ||
      (this.passwordForm.value.password.confirm === '') ||
      (this.passwordForm.value.currentPass === '')) {
        console.log('fieldError');
      this.errors.fieldError = true;
      return;
    }

    if (this.passwordForm.value.password.pwd !== this.passwordForm.value.password.confirm) {
      console.log('noMatch');
      this.errors.noMatch = true;
      return;
    }

    this.passwordForm.patchValue({
      username: localStorage.getItem('username')
    });

    const user = this.passwordForm.value;

    this.profileService.editPassword(user).subscribe(data => {
      if (data.success) {
        this.errors.changed = true;
        console.log('Successfull pass change');
      } else {
        this.errors.changedError = true;
        console.log('Wrong pass change');
      }
    });
  }

}
