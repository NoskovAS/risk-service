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
        this.getSocialData('getFacebookData');
        break;
      }
      case 'google': {
        this.getSocialData('getGoogleData');
        break;
      }
      case 'github': {
        this.getSocialData('getGithubData');
        break;
      }
      default: {
        throw error;
      }
    }
  }

  getSocialData(social: string) {
    this.authService.getSocialData(social).subscribe(data => {
      if (data.success) {
        if (data.facebookUser) {
          this.authService.storeUserData(null, data.facebookUser);
          localStorage.setItem('username', data.facebookUser.username);
          localStorage.setItem('social', 'true');
          this.router.navigate(['risk-list/table']);
        }
        if (data.googleUser) {
          this.authService.storeUserData(null, data.googleUser);
          localStorage.setItem('username', data.googleUser.username);
          localStorage.setItem('social', 'true');
          this.router.navigate(['risk-list/table']);
        }
        if (data.githubUser) {
          this.authService.storeUserData(null, data.githubUser);
          localStorage.setItem('username', data.githubUser.username);
          localStorage.setItem('social', 'true');
          this.router.navigate(['risk-list/table']);
        }
      }
    });
  }

}
