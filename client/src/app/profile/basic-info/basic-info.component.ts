import { Component, HostListener } from '@angular/core';
import { FormGroup, FormBuilder, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfileService } from '../../service/profile/profile.service';
import { ValidatorService } from '../../service/validator/validator.service';

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.css']
})
export class BasicInfoComponent {
  public editProfileForm: FormGroup = null;
  public user;
  public socialLogin;
  alerts = {
    fieldError: false,
    successfulUpdate: false,
    badUsername: false,
    changeDetected: false,
    validError: false
  };

  @HostListener('document:click', ['$event'])
  clickout(event) {
    this.alerts.badUsername = false;
    this.alerts.successfulUpdate = false;
    this.alerts.changeDetected = false;
    this.alerts.fieldError = false;
    this.alerts.validError = false;
  }

  constructor(private router: Router,
    private profileService: ProfileService,
    private fb: FormBuilder,
    private validatorService: ValidatorService) {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.socialLogin = JSON.parse(localStorage.getItem('social') || 'null');
    const emailValidator: ValidatorFn[] = [Validators.email];

    this.editProfileForm = this.fb.group({
      firstname: [this.user.firstname, [Validators.required, this.validatorService.stringValidator()]],
      lastname: [this.user.lastname, [Validators.required, this.validatorService.stringValidator()]],
      username: [this.user.username, [Validators.required, this.validatorService.stringValidator()]],
      email: [this.user.email, emailValidator],
      oldUsername: []
    });
  }

  onProfileSubmit() {
    if ((this.editProfileForm.value.firstname === '') || (this.editProfileForm.value.lastname === '') ||
      (this.editProfileForm.value.username === '') || (this.editProfileForm.value.email === '')) {
      window.scrollTo(0, 0);
      this.alerts.fieldError = true;
      return;
    }

    if (!this.editProfileForm.valid) {
      window.scrollTo(0, 0);
      this.alerts.validError = true;
      return;
    }

    this.editProfileForm.patchValue({
      oldUsername: localStorage.getItem('username')
    });

    const user: any = this.editProfileForm.value;

    // Edit profile
    this.profileService.profileChanges(user).subscribe(data => {
      if (!data.success) {
        window.scrollTo(0, 0);
        this.alerts.badUsername = true;
        // If username is exist
        this.editProfileForm.patchValue({ username: this.editProfileForm.value.oldUsername });
      } else {
        this.alerts.successfulUpdate = true;
        // Local Storage user update
        const updateUser = JSON.parse(localStorage.user);
        updateUser.firstname = user.firstname;
        updateUser.lastname = user.lastname;
        updateUser.username = user.username;
        updateUser.email = user.email;

        localStorage.setItem('username', updateUser.username);
        localStorage.setItem('user', JSON.stringify(updateUser));  // put the object back
      }
    });
  }
}
