import { Component, OnInit, HostListener } from '@angular/core';
import { ValidatorFn, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ValidatorService } from '../../service/validator/validator.service';
import { ProfileService } from '../../service/profile/profile.service';

@Component({
  selector: 'app-add-password',
  templateUrl: './add-password.component.html',
  styleUrls: ['./add-password.component.css']
})
export class AddPasswordComponent implements OnInit {
  public addPasswordForm: FormGroup = null;
  public errors = {
    added: false,
    addedError: false,
    noMatch: false,
    fieldError: false
  };

  @HostListener('document:click', ['$event'])
  clickout(event) {
    this.errors.added = false;
    this.errors.addedError = false;
    this.errors.noMatch = false;
    this.errors.fieldError = false;
  }

  constructor(private profileService: ProfileService,
    private fb: FormBuilder,
    private validatorService: ValidatorService) {
    const pwdValidators: ValidatorFn[] = [Validators.required, Validators.minLength(6), Validators.maxLength(20)];

    this.addPasswordForm = this.fb.group({
      password: fb.group({
        pwd: ['', pwdValidators],
        confirm: ['', pwdValidators]
      },
        {
          validator: validatorService.passwordsAreEqual()
        }),
      username: []
    });
  }

  ngOnInit() {
  }


  onAddSubmit() {
    if ((this.addPasswordForm.value.password.pwd === '') || (this.addPasswordForm.value.password.confirm === '')) {
      this.errors.fieldError = true;
      return;
    }

    if (this.addPasswordForm.value.password.pwd !== this.addPasswordForm.value.password.confirm) {
      this.errors.noMatch = true;
      return;
    }

    this.addPasswordForm.patchValue({
      username: localStorage.getItem('username')
    });

    const user = this.addPasswordForm.value;

    this.profileService.addPassword(user).subscribe(data => {
      if (data.success) {
        this.errors.added = true;
      } else {
        this.errors.addedError = true;
      }
    });
  }


}
