import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth/auth.service';
import { environment } from '../../../environments/environment';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements AfterViewInit {
  public loginForm: FormGroup = null;
  public socialAuthLinks = {
    facebook: `${environment.host}users/auth/facebook/`,
    google: `${environment.host}users/auth/google/`,
    github: `${environment.host}users/auth/github/`
  };

  @ViewChild('inputFocus') vc: any;

  username: string;
  password: string;
  logSuccess: boolean = true;
  passSuccess: boolean = true;
  fieldError: boolean = false;

  constructor(private authService: AuthService,
    private router: Router,
    private fb: FormBuilder) {

    this.loginForm = fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngAfterViewInit() {
    this.vc.nativeElement.focus();
  }

  onLoginSubmit() {
    const user = this.loginForm.value;

    this.authService.authenticateUser(user).subscribe(data => {
      if (data.success) {
        this.logSuccess = true;
        this.authService.storeUserData(data.token, data.user);
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
