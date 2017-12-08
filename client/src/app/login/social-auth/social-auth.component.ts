import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../service/auth/auth.service';
import { error } from 'util';

@Component({
  selector: 'app-social-auth',
  templateUrl: './social-auth.component.html',
  styleUrls: ['./social-auth.component.css']
})
export class SocialAuthComponent implements OnInit {
  socialRoute: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private ar: ActivatedRoute
  ) {
    ar.params.subscribe((param) => {
      this.socialRoute = param['id'];
      console.log('param: ' + param['id']);
    });
  }

  ngOnInit() {
    switch (this.socialRoute) {
      case 'facebook': {
        this.facebookAuth();
        break;
      }
      case 'google': {
        /* this.facebookAuth(); */
        break;
      }
      default: {
        throw error;
      }
    }
    /* this.facebookAuth(); */
  }

  facebookAuth() {
    this.authService.facebookGetData().subscribe(data => {
      console.log('ROBOTAET: data: ' + data.email);
      if (data.success) {
        this.authService.storeUserData(null, data.facebookUser);
        localStorage.setItem('username', data.facebookUser.username);
        this.router.navigate(['risk-list/table']);
      }
    });
  }

  googleAuth() {
    this.authService.googleGetData().subscribe(data => {
      console.log('ROBOTAET: data: ' + data.email);
      if (data.success) {
        this.authService.storeUserData(null, data.googleUser);
        localStorage.setItem('username', data.googleUser.username);
        this.router.navigate(['risk-list/table']);
      }
    });
  }

}
