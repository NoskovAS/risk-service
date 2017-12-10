import { Component, OnInit, AfterContentChecked, AfterViewInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup, Validators, ValidatorFn } from '@angular/forms';
import { ValidateService } from '../../service/validator/validate.service';
import { AuthService } from '../../service/auth/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit, AfterContentChecked, AfterViewInit {
  public loginForm: FormGroup = null;

  @ViewChild('inputFocus') vc: any;


  username: string;
  password: string;
  logSuccess = true;
  passSuccess = true;
  fieldError = false;

  constructor(private authService: AuthService,
    private router: Router,
    private validateService: ValidateService,
    private fb: FormBuilder) {

    this.loginForm = fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() { }

  ngAfterContentChecked() { }

  ngAfterViewInit() {
    this.vc.nativeElement.focus();
  }

  onLoginSubmit() {
    const user = this.loginForm.value;

    this.authService.authenticateUser(user).subscribe(data => {
      if (data.success) {
        this.logSuccess = true;
        this.authService.storeUserData(data.token, data.user);
        localStorage.setItem('username', user.username);
        this.router.navigate(['risk-list/table']);
      } else if (data.msg === 'User not found') {
        this.logSuccess = false;
        this.router.navigate(['users/login']);
      } else if (data.msg === 'Wrong password') {
        this.passSuccess = false;
        this.router.navigate(['users/login']);
      }

    });
  }

}
