import { Component, OnInit } from '@angular/core';
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
export class PassChangeComponent implements OnInit {
  public passwordForm: FormGroup = null;

  changed: boolean = false;

  constructor(private router: Router,
    private validateService: ValidateService,
    private profileService: ProfileService,
    private fb: FormBuilder,
    private validatorService: ValidatorService) {

    const pwdValidators: ValidatorFn[] = [Validators.required, Validators.minLength(6), Validators.maxLength(20)];
    const emailValidator: ValidatorFn[] = [Validators.email];

    this.passwordForm = this.fb.group({
      password: ['', [Validators.required, this.validatorService.stringValidator()]],
      confirm: ['', [Validators.required, this.validatorService.stringValidator()]],
      currentPass: ['', [Validators.required, this.validatorService.stringValidator()]]
    });
   }

  ngOnInit() {
  }

  onChangeSubmit() {
    console.log(this.passwordForm.value.password);
    console.log(this.passwordForm.value.confirm);
    console.log(this.passwordForm.value.currentPass);
  }

}
