import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements AfterViewInit {
  public loginForm: FormGroup = null;

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
