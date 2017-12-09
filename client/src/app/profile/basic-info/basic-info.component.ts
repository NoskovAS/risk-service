import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { FormGroup, FormBuilder, ValidatorFn, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ValidateService } from '../../service/validator/validate.service';
import { ProfileService } from '../../service/profile/profile.service';
import { ValidatorService } from '../../service/validator/validator.service';

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.css']
})
export class BasicInfoComponent implements OnInit, AfterContentChecked {
  public editProfileForm: FormGroup = null;
  user = JSON.parse(localStorage.getItem('user'));
  public socialLogin = JSON.parse(localStorage.getItem('social') || 'null');
  update: boolean = false;


  constructor(private router: Router,
    private validateService: ValidateService,
    private profileService: ProfileService,
    private fb: FormBuilder,
    private validatorService: ValidatorService) {
    const pwdValidators: ValidatorFn[] = [Validators.required, Validators.minLength(6), Validators.maxLength(20)];
    const emailValidator: ValidatorFn[] = [Validators.email];

    this.editProfileForm = this.fb.group({
      firstname: [this.user.firstname, [Validators.required, this.validatorService.stringValidator()]],
      lastname: [this.user.lastname, [Validators.required, this.validatorService.stringValidator()]],
      username: [this.user.username, [Validators.required, this.validatorService.stringValidator()]],
      email: [this.user.email, emailValidator],
      oldUsername: []
    });
  }

  ngOnInit() { }

  ngAfterContentChecked() { }

  onProfileSubmit() {
    this.editProfileForm.patchValue({
      oldUsername: localStorage.getItem('username')
    });

    const user = this.editProfileForm.value;


    // Edit profile
    this.profileService.profileChanges(user).subscribe(data => {
      if (data.success) {
        this.update = true;
        console.log('Successfull change');
        this.router.navigate(['/profile']);
      } else {
        console.log('Wrong change');
        this.router.navigate(['/editProfile']);
      }
    });


    // Local Storage user update
    const updateUser = JSON.parse(localStorage.user);

    updateUser.firstname = user.firstname;
    updateUser.lastname = user.lastname;
    updateUser.username = user.username;
    updateUser.email = user.email;

    localStorage.setItem('username', updateUser.username);

    localStorage.setItem('user', JSON.stringify(updateUser));  // put the object back
  }


}
