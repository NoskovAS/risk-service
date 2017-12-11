import { Component } from '@angular/core';
import { ProfileService } from '../../service/profile/profile.service';
import { ValidatorService } from '../../service/validator/validator.service';
import { FormBuilder, ValidatorFn, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-pass-change',
  templateUrl: './pass-change.component.html',
  styleUrls: ['./pass-change.component.css']
})
export class PassChangeComponent {
  public passwordForm: FormGroup = null;

  public errors = {
    changed: false,
    changedError: false,
    noMatch: false,
    fieldError: false
  };

  constructor(private profileService: ProfileService,
    private validatorService: ValidatorService,
    private fb: FormBuilder) {

    const pwdValidators: ValidatorFn[] = [Validators.required, Validators.minLength(6), Validators.maxLength(20)];

    this.passwordForm = this.fb.group({
      password: fb.group({
        pwd: ['', pwdValidators],
        confirm: ['', pwdValidators]
      },
        {
          validator: validatorService.passwordsAreEqual()
        }),
      currentPass: ['', Validators.required],
      username: []
    });
  }

  onChangeSubmit() {
    this.errors.changed = false;
    this.errors.changedError = false;
    this.errors.fieldError = false;
    this.errors.noMatch = false;

    if ((this.passwordForm.value.password.pwd === '') ||
      (this.passwordForm.value.password.confirm === '') ||
      (this.passwordForm.value.currentPass === '')) {
      this.errors.fieldError = true;
      return;
    }

    if (this.passwordForm.value.password.pwd !== this.passwordForm.value.password.confirm) {
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
      } else {
        this.errors.changedError = true;
      }
    });
  }

}
